export function cn(...inputs: (string | boolean | null | undefined)[]) {
  return inputs
    .filter((input): input is string => typeof input === "string" && input.length > 0)
    .join(" ");
}

export function formatDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 225));
  return `${minutes} min read`;
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const ARTICLE_CATEGORIES = [
  "All",
  "Habitation",
  "Science",
  "Technology",
  "Human Life",
  "Missions",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

/**
 * Narrows an arbitrary URL query value to a known category.
 * Anything unrecognised falls back to "All" so that a hand-crafted or
 * malicious `?category=` value can never reach rendering logic.
 */
export function parseCategory(
  value: string | string[] | null | undefined
): ArticleCategory {
  if (typeof value !== "string") return "All";
  return (ARTICLE_CATEGORIES as readonly string[]).includes(value)
    ? (value as ArticleCategory)
    : "All";
}