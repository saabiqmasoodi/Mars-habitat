"use client";

import { useState } from "react";
import { marsFacts } from "@/data/marsFacts";
import { RefreshCw } from "lucide-react";

export default function MarsFact() {
  const [index, setIndex] = useState(0);
  const fact = marsFacts[index];

  const nextFact = () => {
    setIndex((prev) => (prev + 1) % marsFacts.length);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-card/60 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Mars Fact
          </p>
          <p className="mt-2 text-lg">{fact}</p>
        </div>
        <button
          type="button"
          onClick={nextFact}
          className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
          aria-label="Next Mars fact"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Next
        </button>
      </div>
    </div>
  );
}