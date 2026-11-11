"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { id: string; title: string };

/** "On this page" list. Sticky sidebar on desktop, a collapsible box on phones. */
export default function TableOfContents({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  // Highlight the section currently near the top of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const list = (onNavigate?: () => void) => (
    <ol className="space-y-1 text-sm">
      {items.map((item, i) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={`flex gap-3 rounded-xl px-3 py-2 transition ${
                isActive ? "bg-lime-soft font-medium text-pine-900" : "text-ink-soft hover:bg-mist hover:text-ink"
              }`}
            >
              <span className="w-5 shrink-0 text-ink-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {item.title}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Phones and tablets */}
      <details className="group rounded-card border border-line bg-white p-2 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2 font-display font-medium [&::-webkit-details-marker]:hidden">
          On this page
          <ChevronDown className="size-4 transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <nav aria-label="On this page" className="mt-2">
          {list()}
        </nav>
      </details>

      {/* Desktop */}
      <nav aria-label="On this page" className="sticky top-28 hidden max-h-[calc(100vh-9rem)] overflow-y-auto lg:block">
        <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-ink-muted uppercase">On this page</p>
        {list()}
      </nav>
    </>
  );
}
