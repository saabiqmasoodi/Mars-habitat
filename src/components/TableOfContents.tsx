type TocItem = {
  id: string;
  title: string;
  level: number;
};

export default function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;
  return (
    <nav className="rounded-2xl border border-white/10 bg-card/60 p-5">
      <h2 className="font-heading text-sm font-semibold uppercase tracking-wider">
        Table of Contents
      </h2>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a href={`#${item.id}`} className="hover:text-accent">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}