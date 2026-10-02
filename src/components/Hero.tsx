import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-white/10">
      <ImagePlaceholder
        src="/images/hero-mars.jpg"
        alt="Martian surface with rocky terrain and a hazy orange sky"
        priority
        className="absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background/95" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Could Humanity Build a Home on Mars?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-muted-foreground sm:text-xl">
          An exploration of the science, engineering, biology, technology, and
          enormous challenges behind creating a permanent human presence on the
          Red Planet.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/mars"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/30 transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-8 sm:py-3.5"
          >
            Explore Mars
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-accent/60 hover:text-accent sm:px-8 sm:py-3.5"
          >
            Read the Latest
          </Link>
        </div>
      </div>
    </section>
  );
}