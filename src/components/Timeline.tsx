"use client";

import { useState } from "react";
import { marsTimeline } from "@/data/marsFacts";
import { cn } from "@/lib/utils";

export default function Timeline() {
  const [active, setActive] = useState(0);
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
            MARS TIMELINE
          </h2>
          <p className="mt-4 text-muted-foreground">
            A conceptual overview of exploration milestones and potential future
            developments.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {marsTimeline.map((item, index) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "inline-flex items-center justify-between rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === index
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-white/10 bg-background/60 text-muted-foreground hover:border-accent/40 hover:text-foreground"
                )}
              >
                {item.year}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {marsTimeline.map((item, index) => (
              <div
                key={item.year}
                className={cn(
                  "rounded-2xl border border-white/10 bg-card/60 p-6 transition-opacity",
                  active === index ? "opacity-100" : "hidden opacity-0 lg:block"
                )}
              >
                <h3 className="font-heading text-2xl font-semibold tracking-tight">
                  {item.year}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}