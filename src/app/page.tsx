import { Suspense } from "react";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedArticle from "@/components/FeaturedArticle";
import Hero from "@/components/Hero";
import MarsStats from "@/components/MarsStats";
import Newsletter from "@/components/Newsletter";
import Timeline from "@/components/Timeline";
import { articles } from "@/data/articles";
import { roadmap, technologies } from "@/data/marsFacts";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarsStats />
      <FeaturedArticle />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Suspense fallback={<CategoryFilterFallback />}>
            <CategoryFilter>
              {articles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </CategoryFilter>
          </Suspense>
        </div>
      </section>
      <Timeline />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
              BUILDING A MARS CITY
            </h2>
            <p className="mt-4 text-muted-foreground">
              A conceptual pathway. These steps are plausible approaches, not a
              guaranteed timeline.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((item) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6"
              >
                <span className="font-heading text-4xl font-semibold text-accent/80">
                  {String(item.step).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
              THE TECHNOLOGY THAT COULD MAKE MARS HOME
            </h2>
            <p className="mt-4 text-muted-foreground">
              Key enabling technologies under research and development.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="rounded-2xl border border-white/10 bg-card/60 p-6"
              >
                <h3 className="font-heading text-lg font-semibold tracking-tight">
                  {tech.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}

function CategoryFilterFallback() {
  return (
    <div>
      <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
        ARTICLE CATEGORIES
      </h2>
      <p className="mt-2 text-muted-foreground">
        Explore focused topics about life on Mars.
      </p>
    </div>
  );
}