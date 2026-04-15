import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# robots.txt — Child Custody with a Plan
# https://childcustodywithaplan.com

User-agent: *
Allow: /

# Block access to admin/private paths if any exist
Disallow: /api/
Disallow: /_astro/

# Sitemap location
Sitemap: https://childcustodywithaplan.com/sitemap.xml

# Crawl-delay for polite crawlers
Crawl-delay: 1
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
