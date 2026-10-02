export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
        Terms of Use
      </h1>
      <div className="mt-8 space-y-6 text-lg text-muted-foreground">
        <p>
          This website is provided for educational and informational purposes
          only. The content reflects current scientific understanding and
          plausible concepts; it does not constitute professional advice.
        </p>
        <p>
          We make reasonable efforts to ensure accuracy, but information may
          evolve over time. Users should verify critical information from
          reputable scientific sources.
        </p>
        <p>
          By using this site, you agree to use it responsibly and acknowledge
          that future predictions and timelines are speculative in nature.
        </p>
      </div>
    </div>
  );
}