export async function GET() {
  const pages = [
    '',
    '/about',
    '/attorneys',
    '/services',
    '/fathers-rights',
    '/mothers-rights',
    '/custody-modifications',
    '/emergency-custody',
    '/visitation-rights',
    '/blog',
    '/contact',
    '/free-consultation',
  ];

  const baseUrl = 'https://childcustodywithaplan.com';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/free-consultation' || page === '/contact' ? '0.9' : '0.8'}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
