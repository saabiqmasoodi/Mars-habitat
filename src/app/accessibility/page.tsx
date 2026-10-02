export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
        Accessibility Statement
      </h1>
      <div className="mt-8 space-y-6 text-lg text-muted-foreground">
        <p>
          MARS//HABITAT is committed to providing an accessible experience for
          all users. The site is built with semantic HTML, keyboard navigation
          support, visible focus states, proper color contrast, and reduced
          motion support.
        </p>
        <p>
          We aim to follow WCAG 2.2 Level AA where feasible. If you encounter
          any accessibility barriers, please let us know so we can address them.
        </p>
      </div>
    </div>
  );
}