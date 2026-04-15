import type { APIRoute } from "astro";

const SITE_URL = "https://divorcewithaplan.com";

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/attorneys", priority: "0.9", changefreq: "monthly" },
  { url: "/services", priority: "0.9", changefreq: "monthly" },
  { url: "/divorce", priority: "0.9", changefreq: "monthly" },
  { url: "/asset-division", priority: "0.8", changefreq: "monthly" },
  { url: "/divorces-involving-businesses", priority: "0.8", changefreq: "monthly" },
  { url: "/divorce-lawyer-for-professionals", priority: "0.8", changefreq: "monthly" },
  { url: "/high-net-worth-divorce", priority: "0.8", changefreq: "monthly" },
  { url: "/spousal-support", priority: "0.8", changefreq: "monthly" },
  { url: "/child-custody", priority: "0.9", changefreq: "monthly" },
  { url: "/child-custody-modification", priority: "0.8", changefreq: "monthly" },
  { url: "/blog", priority: "0.7", changefreq: "weekly" },
  { url: "/free-consultation", priority: "1.0", changefreq: "monthly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
];

const today = new Date().toISOString().split("T")[0];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
