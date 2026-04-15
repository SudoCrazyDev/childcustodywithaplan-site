export async function GET() {
  const site = 'https://childcustodywithaplan.com';
  const today = new Date().toISOString().split('T')[0];

  const pages = [
    // Core pages — highest priority
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/attorneys', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'monthly', priority: '0.9' },

    // Service pages — high priority
    { url: '/divorce', changefreq: 'monthly', priority: '0.9' },
    { url: '/asset-division', changefreq: 'monthly', priority: '0.8' },
    { url: '/divorces-involving-businesses', changefreq: 'monthly', priority: '0.8' },
    { url: '/divorce-lawyer-for-professionals', changefreq: 'monthly', priority: '0.8' },
    { url: '/high-net-worth-divorce', changefreq: 'monthly', priority: '0.8' },
    { url: '/spousal-support', changefreq: 'monthly', priority: '0.8' },
    { url: '/child-custody', changefreq: 'monthly', priority: '0.9' },
    { url: '/child-custody-modification', changefreq: 'monthly', priority: '0.9' },

    // Supporting pages
    { url: '/blog', changefreq: 'weekly', priority: '0.7' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
    { url: '/free-consultation', changefreq: 'monthly', priority: '0.9' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
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
}
