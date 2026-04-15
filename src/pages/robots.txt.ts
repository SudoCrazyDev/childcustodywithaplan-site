import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://divorcewithaplan.com/sitemap.xml

# Disallow admin or sensitive paths (none currently, but good practice)
Disallow: /api/

# Crawl-delay for well-behaved bots
Crawl-delay: 10
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
