import Image from "next/image";

export default function Team() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-muted-foreground">
            The people who helped bring this project to life.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative aspect-square w-48 overflow-hidden rounded-full border border-white/10 shadow-sm sm:w-56">
              <Image
                src="/images/saabiq-masoodi.jpg"
                alt="Saabiq Masoodi"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight">
              Saabiq Masoodi
            </h3>
            <p className="mt-1 text-sm uppercase tracking-wider text-accent">
              Head of Writings
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="relative aspect-square w-48 overflow-hidden rounded-full border border-white/10 shadow-sm sm:w-56">
              <Image
                src="/images/aaqid-masoodi.png"
                alt="Aaqid Masoodi"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight">
              Aaqid Masoodi
            </h3>
            <p className="mt-1 text-sm uppercase tracking-wider text-accent">
              Head of Technologies
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative flex aspect-square w-48 items-center justify-center rounded-full border border-dashed border-white/20 bg-card/40 sm:w-56">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                Coming Soon
              </p>
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight text-muted-foreground">
              More Team Members
            </h3>
            <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}