import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://childcustodywithaplan.com',

  // Built-in Astro image optimisation (used for <Image /> / <Picture /> components)
  image: {
    // Use the built-in sharp service
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    // Default quality for all optimised images
    defaultQuality: 75,
  },

  // Compress build output
  compressHTML: true,

  build: {
    // Inline small assets (< 4 KB) directly into HTML/CSS to save requests
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  vite: {
    build: {
      // Raise the chunk-size warning threshold (avoids false alarms from Tailwind)
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          // Split vendor chunks for better long-term caching
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    // Vite-level asset compression
    assetsInlineLimit: 4096,
  },
});
