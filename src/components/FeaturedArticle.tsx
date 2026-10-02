import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRight } from "lucide-react";

export default function FeaturedArticle() {
  return (
    <section className="relative border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Featured
          </span>
          <h2 className="mt-4 text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Before We Build a City, We Have to Survive the Planet
          </h2>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Living on Mars would not simply mean transporting people to another
            world. It would mean creating an environment in which human beings
            could breathe, eat, drink, sleep, work, repair machines, grow food,
            and survive for years while separated from Earth by millions of
            kilometres.
          </p>
          <Link
            href="/blog/how-first-humans-live-on-mars"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            Read Article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-sm">
            <ImagePlaceholder
              src="/images/featured-habitat.jpeg"
              alt="Pressurized habitat concept on the Martian surface"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}