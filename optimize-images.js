/**
 * Post-build image optimization script.
 * Processes all images in dist/images/ using sharp:
 *   - .webp files → resized to max 1200px wide, quality 75
 *   - .png files  → compressed, max 800px wide, quality 80
 *   - .jpg/.jpeg  → compressed, max 1200px wide, quality 78
 *
 * Run automatically via the "build" npm script.
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const DIST_IMAGES_DIR = './dist/images';

// Max widths per image role (hero = 1200, everything else = 800)
// Any file starting with "hero" gets the wider budget.
const HERO_MAX_WIDTH   = 1200;
const DEFAULT_MAX_WIDTH = 800;
const ICON_MAX_WIDTH    = 128; // small icon PNGs — don't upscale, just compress

function isIconFile(filename) {
  return filename.startsWith('icon-') || filename === 'favicon.png' || filename === 'logo.png';
}

function isHeroFile(filename) {
  return filename.startsWith('hero-');
}

function maxWidthFor(filename) {
  if (isIconFile(filename)) return ICON_MAX_WIDTH;
  if (isHeroFile(filename)) return HERO_MAX_WIDTH;
  return DEFAULT_MAX_WIDTH;
}

async function optimizeImage(filePath) {
  const filename = basename(filePath);
  const ext      = extname(filename).toLowerCase();
  const maxWidth = maxWidthFor(filename);

  try {
    const image    = sharp(filePath);
    const metadata = await image.metadata();

    // Never upscale — only downscale if wider than maxWidth
    const targetWidth =
      metadata.width && metadata.width > maxWidth ? maxWidth : undefined;

    let pipeline = sharp(filePath);

    if (targetWidth) {
      pipeline = pipeline.resize({ width: targetWidth, withoutEnlargement: true });
    }

    let outputBuffer;

    if (ext === '.webp') {
      outputBuffer = await pipeline
        .webp({ quality: 75, effort: 5 })
        .toBuffer();
    } else if (ext === '.png') {
      outputBuffer = await pipeline
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await pipeline
        .jpeg({ quality: 78, progressive: true, mozjpeg: true })
        .toBuffer();
    } else {
      // Unsupported format — skip
      return;
    }

    const originalSize = metadata.size ?? (await stat(filePath)).size;
    const savedBytes   = originalSize - outputBuffer.length;
    const savedPct     = ((savedBytes / originalSize) * 100).toFixed(1);

    // Write the optimised buffer back over the original file
    await sharp(outputBuffer).toFile(filePath);

    console.log(
      `✅  ${filename.padEnd(45)} ` +
      `${(originalSize / 1024 / 1024).toFixed(2)} MB → ` +
      `${(outputBuffer.length / 1024).toFixed(0)} KB  ` +
      `(saved ${savedPct}%${targetWidth ? `, resized to ${targetWidth}px` : ''})`
    );
  } catch (err) {
    console.error(`❌  Failed to process ${filename}:`, err.message);
  }
}

async function main() {
  console.log('\n🔧  Starting image optimisation…\n');

  let files;
  try {
    files = await readdir(DIST_IMAGES_DIR);
  } catch {
    console.warn(`⚠️   ${DIST_IMAGES_DIR} not found — skipping image optimisation.`);
    process.exit(0);
  }

  const imageFiles = files.filter(f =>
    ['.webp', '.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log('No images found to optimise.');
    process.exit(0);
  }

  console.log(`Found ${imageFiles.length} image(s) to process.\n`);

  // Process sequentially to avoid RAM spikes with large source files
  for (const file of imageFiles) {
    await optimizeImage(join(DIST_IMAGES_DIR, file));
  }

  console.log('\n✨  Image optimisation complete.\n');
}

main();
