export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-balance text-4xl font-heading font-semibold tracking-tight sm:text-5xl">
        Security
      </h1>
      <div className="mt-8 space-y-6 text-lg text-muted-foreground">
        <p>
          Security is a core requirement for MARS//HABITAT. This application
          follows secure development practices including TypeScript, strict
          validation, server-side handling where applicable, and safe
          rendering.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>No secrets or API keys in client-side code or NEXT_PUBLIC variables.</li>
          <li>Environment variables are used for sensitive configuration.</li>
          <li>Input validation and safe search handling are implemented.</li>
          <li>No dangerouslySetInnerHTML is used unnecessarily.</li>
          <li>Error handling avoids leaking stack traces to end users.</li>
          <li>Security headers (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS on HTTPS) should be configured at the deployment layer.</li>
          <li>Rate limiting and CSRF protections are architectural considerations for future state-changing endpoints.</li>
        </ul>
        <p>
          See SECURITY.md for more details about the security architecture and
          deployment recommendations.
        </p>
      </div>
    </div>
  );
}