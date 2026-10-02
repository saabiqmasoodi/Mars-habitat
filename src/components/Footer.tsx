import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/95">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <span className="text-xl font-heading font-semibold tracking-tight">
            MARS//HABITAT
          </span>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Exploring the science and engineering behind humanity&rsquo;s future
            beyond Earth. Designing the future of life beyond Earth.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            The concepts presented here are based on established scientific
            knowledge, current research, and plausible future approaches. They
            are not guarantees or predictions of future outcomes.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/90">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-accent">
                Explore Mars
              </Link>
            </li>
            <li>
              <Link href="/mars" className="hover:text-accent">
                The Red Planet
              </Link>
            </li>
            <li>
              <Link href="/?category=Habitation" className="hover:text-accent">
                Habitation
              </Link>
            </li>
            <li>
              <Link href="/?category=Science" className="hover:text-accent">
                Science
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/90">
            Content
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/?category=Technology" className="hover:text-accent">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/?category=Missions" className="hover:text-accent">
                Missions
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-accent">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground/90">
            Legal & Safety
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/security" className="hover:text-accent">
                Security
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-accent">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-accent">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm text-muted-foreground">
            © 2026 MARS//HABITAT
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision for scientific exploration and education.
          </p>
        </div>
      </div>
    </footer>
  );
}