import type { APIRoute } from 'astro';

const baseUrl = 'https://childcustodywithaplan.com';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/divorce/', priority: '0.9', changefreq: 'monthly' },
  { url: '/asset-division/', priority: '0.9', changefreq: 'monthly' },
  { url: '/divorces-involving-businesses/', priority: '0.9', changefreq: 'monthly' },
  { url: '/divorce-lawyer-for-professionals/', priority: '0.9', changefreq: 'monthly' },
  { url: '/high-net-worth-divorce/', priority: '0.9', changefreq: 'monthly' },
  { url: '/spousal-support/', priority: '0.9', changefreq: 'monthly' },
  { url: '/child-custody/', priority: '0.9', changefreq: 'monthly' },
  { url: '/child-custody-modification/', priority: '0.8', changefreq: 'monthly' },
  { url: '/our-attorneys/', priority: '0.8', changefreq: 'monthly' },
  { url: '/about/', priority: '0.7', changefreq: 'monthly' },
  { url: '/services/', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/', priority: '0.7', changefreq: 'weekly' },
  { url: '/free-consultation/', priority: '1.0', changefreq: 'monthly' },
  { url: '/contact/', priority: '0.8', changefreq: 'monthly' },
];

const lastmod = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
