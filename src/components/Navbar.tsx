"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "The Red Planet", href: "/mars" },
  { name: "Habitation", href: "/?category=Habitation" },
  { name: "Science", href: "/?category=Science" },
  { name: "Missions", href: "/?category=Missions" },
  { name: "Technology", href: "/?category=Technology" },
  { name: "Articles", href: "/search" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-heading font-semibold tracking-tight sm:text-xl">
            MARS//HABITAT
          </span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  (item.href.startsWith("/?category=") && pathname === "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/search"
            className="flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
            aria-label="Search articles"
          >
            <Search className="h-4 w-4" />
            Search
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setShowSearch((prev) => !prev)}
            aria-expanded={showSearch}
            aria-controls="mobile-search"
            aria-label={showSearch ? "Close search" : "Open search"}
            className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {showSearch && (
        <div
          id="mobile-search"
          className="border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <SearchBar />
        </div>
      )}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setShowSearch(false);
                }}
                className={cn(
                  "rounded-lg px-2 py-2 text-base font-medium transition-colors hover:bg-white/5",
                  pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}