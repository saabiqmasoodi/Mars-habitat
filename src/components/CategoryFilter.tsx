"use client";

import { useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ARTICLE_CATEGORIES, parseCategory } from "@/lib/utils";
import type { ArticleCategory } from "@/lib/utils";

/**
 * Renders the category filter chips and the server-rendered article grid.
 *
 * The cards themselves are passed in as `children` from a Server Component, so
 * the full list is present in the initial HTML (good for crawlers and for
 * users without JavaScript, who simply see every article). Selecting a
 * category only toggles a `data-active-filter` attribute; the actual show/hide
 * is handled by CSS, so no article markup is duplicated in the payload.
 */
export default function CategoryFilter({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlCategory = parseCategory(searchParams.get("category"));
  const [pending, setPending] = useState<ArticleCategory | null>(null);
  const active = pending ?? urlCategory;

  const handleSelect = (category: ArticleCategory) => {
    setPending(category);

    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.delete("q");

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
            ARTICLE CATEGORIES
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore focused topics about life on Mars.
          </p>
        </div>
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter articles by category"
        >
          {ARTICLE_CATEGORIES.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleSelect(category)}
                aria-pressed={isActive}
                className={[
                  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs",
                  "font-medium uppercase tracking-wider transition-colors sm:text-sm",
                  isActive
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-white/10 bg-background/60 text-muted-foreground hover:border-accent/40 hover:text-foreground",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div
        data-active-filter={active}
        className="article-filter-grid mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {children}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing articles{active === "All" ? "" : ` in ${active}`}
      </p>
    </div>
  );
}