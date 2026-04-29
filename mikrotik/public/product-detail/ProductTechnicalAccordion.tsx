import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ProductTechnicalAccordion({
  items,
}: {
  items: { id: number; title: string; content: string; sort_order: number }[];
}) {
  const rows = (items ?? [])
    .map((x) => ({
      id: x.id,
      title: String(x.title ?? "").trim(),
      content: String(x.content ?? "").trim(),
      sort_order: x.sort_order ?? 0,
    }))
    .filter((x) => x.title && x.content)
    .sort((a, b) => a.sort_order - b.sort_order || a.id - b.id);
  const [openId, setOpenId] = useState<number | null>(rows[0]?.id ?? null);

  if (!rows.length) return null;

  return (
    <section className="mt-14">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl font-black tracking-tight text-center">Technical</h2>
        <div className="mt-5 space-y-3">
          {rows.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left px-4 py-3"
                  onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-sm md:text-base">{item.title}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 py-3 border-t border-border text-sm text-muted-foreground whitespace-pre-line">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
