import { cn } from "@/lib/utils";

export function ProductSpecification({
  id,
  title,
  specifications,
}: {
  id: string;
  title?: string;
  specifications: Record<string, string>;
}) {
  const entries = Object.entries(specifications).filter(([k, v]) => k && v);
  if (entries.length === 0) return null;

  return (
    <section id={id} className="mt-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-lg md:text-xl font-black tracking-tight">
            {title || "Specification"}
          </h2>
        </div>

        <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card">
          <table className="w-full text-sm">
            <tbody>
              {entries.map(([k, v], idx) => (
                <tr
                  key={k}
                  className={cn(idx % 2 === 0 ? "bg-background" : "bg-secondary/10")}
                >
                  <td className="w-1/3 px-4 py-3 font-medium">{k}</td>
                  <td className="px-4 py-3 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

