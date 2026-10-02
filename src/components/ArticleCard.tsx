import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { formatDate } from "@/lib/utils";

type Props = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  excerpt: string;
  heroImage: string;
};

export default function ArticleCard({
  slug,
  title,
  category,
  date,
  readingTime,
  excerpt,
  heroImage,
}: Props) {
  return (
    <article
      data-category={category}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 shadow-sm transition-colors hover:border-accent/40"
    >
      <Link href={`/blog/${slug}`} className="relative block aspect-[16/9]">
        <ImagePlaceholder src={heroImage} alt={title} className="h-full w-full" />
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent">
            {category}
          </span>
          <span>{formatDate(date)}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="text-balance text-xl font-heading font-semibold tracking-tight transition-colors group-hover:text-accent">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="text-sm font-medium text-accent hover:text-accent/80"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}