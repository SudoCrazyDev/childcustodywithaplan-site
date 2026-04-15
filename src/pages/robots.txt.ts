export async function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://childcustodywithaplan.com/sitemap.xml

# Child Custody with a Plan — Maryland Family Law
# childcustodywithaplan.com
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
