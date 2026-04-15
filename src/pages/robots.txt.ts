import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /

Sitemap: https://childcustodywithaplan.com/sitemap.xml

# Child Custody with a Plan — Maryland Family Law Attorneys
# Rockville & Baltimore, MD | (301) 289-8917
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
