import Team from "@/components/Team";

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
          Why Study Mars?
        </h1>
        <div className="mt-8 space-y-6 text-lg text-muted-foreground">
          <p>
            MARS//HABITAT is an educational space blog exploring one of
            humanity&rsquo;s biggest scientific questions: what would it actually
            take to live on another planet?
          </p>
          <p>
            This website explores Mars through science, engineering, technology,
            history, and human factors. It focuses on established facts while
            clearly distinguishing them from proposed technologies and long-term
            concepts. The goal is to foster informed discussion about the
            possibilities and challenges of human exploration beyond Earth.
          </p>
          <p>
            Future Mars settlement concepts are not guarantees or predictions.
            Many of the enabling technologies discussed here are still in research
            and development. Progress will depend on scientific breakthroughs,
            engineering feasibility, international cooperation, resource
            availability, and careful consideration of safety and ethics.
          </p>
          <p>
            We aim to present complex topics with clarity and nuance, emphasizing
            scientific integrity, transparency about uncertainty, and respect for
            the immense challenges involved in becoming a multi-planetary species.
          </p>
        </div>
      </div>
      <Team />
    </div>
  );
}