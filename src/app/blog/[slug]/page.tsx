import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { articles } from "@/data/articles";
import { formatDate, estimateReadingTime } from "@/lib/utils";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import MarsFact from "@/components/MarsFact";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

function generateToc(content: string) {
  const headings = content.match(/^##\s+(.+)$/gm);
  if (!headings) return [];
  return headings.map((h, i) => {
    const title = h.replace(/^##\s+/, "");
    const id = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    return { id: id || `section-${i}`, title, level: 2 };
  });
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.heroImage],
    },
    twitter: {
      title: article.title,
      description: article.excerpt,
      card: "summary_large_image",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  const toc = generateToc(article.content);
  const related = articles.filter((a) => article.related?.includes(a.slug));
  const index = articles.findIndex((a) => a.slug === article.slug);
  const prev = index > 0 ? articles[index - 1] : null;
  const next = index < articles.length - 1 ? articles[index + 1] : null;

  const html = article.content.replace(
    /^##\s+(.+)$/gm,
    (match, title) => {
      const id = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      return `<h2 id="${id}" class="mt-10 text-balance text-2xl font-heading font-semibold tracking-tight sm:text-3xl">${title}</h2>`;
    }
  );

  return (
    <article>
      <ReadingProgress />
      <header className="relative border-b border-white/10">
        <ImagePlaceholder
          src={article.heroImage}
          alt={article.title}
          priority
          className="absolute inset-0 -z-10 h-[60vh]"
        />
        <div className="absolute inset-0 -z-10 h-[60vh] bg-gradient-to-b from-background/30 via-background/80 to-background" />
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent">
              {article.category}
            </span>
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>{estimateReadingTime(article.content)}</span>
            <span>•</span>
            <span>By {article.author}</span>
          </div>
          <h1 className="mt-4 text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {article.excerpt}
          </p>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <div>
          <div
            className="prose prose-invert prose-lg max-w-prose prose-p:leading-relaxed prose-headings:font-heading prose-headings:tracking-tight prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: html.replace(/\n\n/g, "<p></p>").replace(/^(.+)$/gm, (m) => (m.startsWith("<h2") || m.startsWith("<p") ? m : `<p>${m}</p>`)) }}
          />
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-card/60 p-6 text-sm text-muted-foreground">
              <p>
                Note: The concepts discussed in this article are based on
                established scientific knowledge, current research, and plausible
                approaches. They should be understood as potential pathways
                rather than guaranteed outcomes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card/60 p-6">
              <h3 className="font-heading text-lg font-semibold">
                Sources & Further Reading
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Links can be added here with verified sources such as NASA,
                ESA, and peer-reviewed research publications.
              </p>
            </div>
          </div>
          <nav className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-card/60 p-4 transition-colors hover:border-accent/40"
              >
                <ArrowLeft className="h-4 w-4" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Previous
                  </p>
                  <p className="text-sm font-medium">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="flex items-center justify-end gap-2 rounded-2xl border border-white/10 bg-card/60 p-4 text-right transition-colors hover:border-accent/40"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Next
                  </p>
                  <p className="text-sm font-medium">{next.title}</p>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </nav>
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-balance text-2xl font-heading font-semibold tracking-tight">
                Related Articles
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="rounded-2xl border border-white/10 bg-card/60 p-5 transition-colors hover:border-accent/40"
                  >
                    <p className="text-xs uppercase tracking-wider text-accent">
                      {r.category}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-semibold">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {r.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
        <aside className="hidden space-y-6 lg:block">
          <TableOfContents items={toc} />
          <MarsFact />
          <div className="rounded-2xl border border-white/10 bg-card/60 p-5 text-sm text-muted-foreground">
            <p>
              Reading length optimized for readability: ~65–75 characters per
              line in comfortable viewports.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}