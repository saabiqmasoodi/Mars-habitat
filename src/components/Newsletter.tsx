"use client";

import { useState } from "react";
import { isValidEmail } from "@/lib/utils";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("success");
    setMessage("Thanks for subscribing. This is a placeholder integration.");
    setEmail("");
  };

  return (
    <section className="border-t border-b border-white/10 bg-card/40">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-heading font-semibold tracking-tight sm:text-4xl">
          Follow Humanity&rsquo;s Journey to Mars
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Get new articles about Mars science, exploration, engineering, and
          future habitation.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          noValidate
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Enter your email"
            className="w-full rounded-full border border-white/20 bg-background/80 px-5 py-3 text-center text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/60 sm:w-80 sm:text-left"
            required
            autoComplete="email"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01]"
          >
            Subscribe
          </button>
        </form>
        {status !== "idle" && (
          <p
            role={status === "error" ? "alert" : "status"}
            className={`mt-3 text-sm ${
              status === "error" ? "text-red-400" : "text-emerald-400"
            }`}
          >
            {message}
          </p>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          No emails are stored by default. This form is structured for secure
          future backend integration.
        </p>
      </div>
    </section>
  );
}