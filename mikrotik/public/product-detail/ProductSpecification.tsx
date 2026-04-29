import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function ProductSpecification({
  id,
  title,
  specifications,
}: {
  id: string;
  title?: string;
  specifications: { title: string; items: { label: string; value: string }[] }[];
}) {
  const sections = (specifications ?? [])
    .map((section) => ({
      title: String(section.title ?? "").trim(),
      items: (section.items ?? [])
        .map((item) => ({
          label: String(item.label ?? "").trim(),
          value: String(item.value ?? "").trim(),
        }))
        .filter((item) => item.label && item.value),
    }))
    .filter((section) => section.title && section.items.length > 0);
  if (sections.length === 0) return null;

  return (
    <section id={id} className="mt-16 scroll-mt-24 w-full">
      <div className="w-full max-w-4xl text-left">
        <Collapsible defaultOpen>
          <CollapsibleTrigger
            type="button"
            className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left shadow-sm transition-colors hover:bg-muted/40 [&[data-state=open]>svg]:rotate-180"
          >
            <h2 className="text-lg md:text-xl font-black tracking-tight">
              {title || "Specification"}
            </h2>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200"
              aria-hidden
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden">
            <div className="mt-3 rounded-2xl border border-border overflow-hidden bg-card">
              <table className="w-full text-sm text-left">
                <tbody>
                  {sections.map((section) =>
                    section.items.map((item, itemIdx) => (
                      <tr
                        key={`${section.title}-${item.label}-${itemIdx}`}
                        className="border-b border-border last:border-0"
                      >
                        {itemIdx === 0 && (
                          <td
                            rowSpan={section.items.length}
                            className="w-[28%] px-4 py-3 align-top text-[11px] uppercase tracking-wider text-muted-foreground font-semibold"
                          >
                            {section.title}
                          </td>
                        )}
                        <td className="w-[36%] px-4 py-3 font-medium">{item.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{item.value}</td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
