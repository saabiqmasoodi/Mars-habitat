"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-2 shadow-sm backdrop-blur focus-within:border-accent/60"
    >
      <Search className="h-5 w-5 text-muted-foreground" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search article titles and content..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        aria-label="Search articles"
      />
    </form>
  );
}