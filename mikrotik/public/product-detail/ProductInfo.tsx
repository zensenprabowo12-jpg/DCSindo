import { Button } from "@/components/ui/button";

export function ProductInfo({
  name,
  sku,
  description,
  bullets,
  onScrollToSpecs,
}: {
  name: string;
  sku: string;
  description: string;
  bullets: string[];
  onScrollToSpecs: () => void;
}) {
  return (
    <div>
      <p className="text-xs text-muted-foreground font-mono mb-1">SKU: {sku || "-"}</p>
      <h1 className="text-2xl md:text-3xl font-black tracking-tight">{name}</h1>

      <p className="mt-5 text-muted-foreground leading-relaxed whitespace-pre-wrap">
        {description}
      </p>

      {bullets.length > 0 && (
        <div className="mt-6">
          <h2 className="text-sm font-bold mb-3">Highlights</h2>
          <ul className="space-y-2 text-sm">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="rounded-full px-8">
          <a href="/support/mikrotik">Contact Us</a>
        </Button>
        <Button
          type="button"
          variant="outline"
          className="rounded-full px-8"
          onClick={onScrollToSpecs}
        >
          Specification
        </Button>
      </div>
    </div>
  );
}

