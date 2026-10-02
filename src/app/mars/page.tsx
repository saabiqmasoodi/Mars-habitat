import ImagePlaceholder from "@/components/ImagePlaceholder";
import MarsFact from "@/components/MarsFact";
import { marsStats } from "@/data/marsFacts";

export default function MarsPage() {
  return (
    <div>
      <section className="relative border-b border-white/10">
        <ImagePlaceholder
          src="/images/mars-page.jpg"
          alt="The planet Mars seen from space"
          priority
          className="absolute inset-0 -z-10 h-[60vh]"
        />
        <div className="absolute inset-0 -z-10 h-[60vh] bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
              The Red Planet
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Mars is Earth&rsquo;s closest planetary neighbor and one of the most
              studied worlds in the Solar System. Its unique environment presents
              both extraordinary scientific opportunities and formidable
              engineering challenges for future human exploration.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
                Mars by the Numbers
              </h2>
              <p className="mt-4 text-muted-foreground">
                These are established planetary measurements that help frame the
                challenges of human habitation.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {marsStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-card/60 p-5"
                  >
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-heading text-xl font-semibold">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <MarsFact />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
            A World Worth Studying
          </h2>
          <div className="mt-6 space-y-6 text-lg text-muted-foreground">
            <p>
              Scientific evidence suggests that Mars once had liquid water on its
              surface and environments that could have been more hospitable to
              microbial life than they are today. Studying Mars could help us
              understand planetary evolution, climate change, and the potential
              for life beyond Earth.
            </p>
            <p>
              At the same time, the Martian environment is extremely harsh. Its
              thin atmosphere, low gravity, extreme temperatures, and increased
              radiation exposure create significant obstacles. Any discussion of
              long-term human presence must acknowledge these challenges while
              exploring potential solutions.
            </p>
            <p>
              The information on this page reflects current scientific
              understanding. Future discoveries may refine our knowledge of the
              Red Planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}