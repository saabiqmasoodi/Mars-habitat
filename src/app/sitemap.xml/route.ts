import { articles } from "@/data/articles";

const baseUrl = "https://mars-habitat.example";

export function GET() {
  const routes = [
    "",
    "/mars",
    "/about",
    "/mission",
    "/search",
    "/privacy",
    "/terms",
    "/accessibility",
    "/security",
  ];

  const urls = [
    ...routes.map((r) => `${baseUrl}${r}`),
    ...articles.map((a) => `${baseUrl}/blog/${a.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}