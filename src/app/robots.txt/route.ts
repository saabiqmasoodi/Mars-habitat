export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Sitemap: https://mars-habitat.example/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}