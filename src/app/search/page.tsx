"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Search } from "lucide-react";
import { cn, ARTICLE_CATEGORIES, parseCategory } from "@/lib/utils";
import type { ArticleCategory } from "@/lib/utils";

function SearchPageInner() {
  const searchParams = useSearchParams();
  const initialQuery = (searchParams.get("q") ?? "").slice(0, 100);
  const initialCategory = parseCategory(searchParams.get("category"));
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<ArticleCategory>(initialCategory);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
          Article Search
        </h1>
        <p className="mt-2 text-muted-foreground">
          Search article titles, content, and tags.
        </p>
      </div>
      <div className="mt-8 mx-auto max-w-2xl">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-2 shadow-sm backdrop-blur focus-within:border-accent/60">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            aria-label="Search articles"
          />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {ARTICLE_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors",
                category === c
                  ? "border-accent/60 bg-accent/10 text-accent"
                  : "border-white/10 bg-background/60 text-muted-foreground hover:border-accent/40 hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </div>
      {results.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">
          No articles found. Try adjusting your search terms.
        </p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <SearchPageInner />
    </Suspense>
  );
}