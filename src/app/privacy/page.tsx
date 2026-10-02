export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-6 text-lg text-muted-foreground">
        <p>
          MARS//HABITAT is an educational website. We prioritize user privacy
          and do not collect personal information by default.
        </p>
        <p>
          The newsletter form on this site is a placeholder designed for secure
          future integration with a legitimate email provider. No email
          addresses are stored in this application unless explicitly configured
          by the operator with proper consent and security controls.
        </p>
        <p>
          This site does not use invasive tracking. Any analytics or telemetry
          added in production should be privacy-respecting, transparent, and
          opt-in where appropriate.
        </p>
      </div>
    </div>
  );
}