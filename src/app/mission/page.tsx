import Link from "next/link";
import { missions } from "@/data/missions";
import { marsTimeline } from "@/data/marsFacts";

export default function MissionPage() {
  return (
    <div>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-wider text-accent">
            Missions
          </p>
          <h1 className="mt-3 text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
            Missions to Mars
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Robotic exploration has done the groundwork for human presence. Each
            mission below has expanded our scientific understanding of the Red
            Planet and shaped the engineering questions that any future crew
            would have to answer.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            The descriptions here are general summaries of well-documented
            missions. Specific instruments, results, and mission status change
            over time — consult the official agency sources linked on each
            article before citing specifics.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold tracking-tight">
            Landmark robotic missions
          </h2>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {missions.map((mission, index) => (
              <div
                key={mission.name}
                className="grid gap-2 py-6 sm:grid-cols-[auto_180px_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="font-heading text-sm text-accent/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  {mission.era}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {mission.name}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold tracking-tight">
            How exploration leads to habitation
          </h2>
          <div className="mt-6 space-y-5 text-lg text-muted-foreground">
            <p>
              Robotic missions reduce the risk of human exploration. A rover
              that has already tested soil chemistry, drilled into regolith, or
              survived a winter on Mars tells us far more than a laboratory
              simulation alone.
            </p>
            <p>
              They also return data that engineers need before committing to
              large designs: how dust affects solar panels, how much power
              hardware actually consumes, and which geological formations make
              promising landing sites.
            </p>
            <p>
              Researchers are still studying what human missions could
              realistically achieve, and in what order. Plans for crewed
              exploration remain under development rather than being settled
              commitments.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold tracking-tight">
            Exploration eras
          </h2>
          <ol className="mt-8 space-y-4">
            {marsTimeline.map((entry) => (
              <li
                key={entry.year}
                className="flex flex-col gap-1 border-l-2 border-accent/40 pl-5 sm:flex-row sm:gap-6"
              >
                <span className="font-heading text-sm font-semibold tracking-wide text-accent sm:w-24 sm:shrink-0">
                  {entry.year}
                </span>
                <span className="text-muted-foreground">{entry.description}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-2xl border border-white/10 bg-card/60 p-6 text-sm text-muted-foreground">
            <p>
              Entries after the present day are conceptual. They describe
              plausible directions of development, not scheduled or guaranteed
              programmes.
            </p>
          </div>
          <Link
            href="/search"
            className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            Browse related articles
          </Link>
        </div>
      </section>
    </div>
  );
}