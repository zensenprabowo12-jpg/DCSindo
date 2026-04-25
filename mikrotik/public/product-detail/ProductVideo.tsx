function getYoutubeId(urlOrId: string) {
  const raw = urlOrId.trim();
  if (!raw) return "";
  if (/^[\w-]{6,}$/.test(raw) && !raw.includes("http")) return raw;
  try {
    const u = new URL(raw);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.replace("/", "");
    }
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v") ?? "";
    }
  } catch {
    // ignore
  }
  return "";
}

export function ProductVideo({
  videoUrlOrId,
  title,
  description,
}: {
  videoUrlOrId: string;
  title?: string;
  description?: string;
}) {
  const id = getYoutubeId(videoUrlOrId);
  if (!id) return null;

  return (
    <section className="mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-border bg-secondary/20">
          <div className="relative w-full aspect-video bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${id}?rel=0`}
              title={title || "Product Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {(title || description) && (
          <div className="mt-6 text-center">
            {title && (
              <h2 className="text-lg md:text-xl font-black tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="mt-3 text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

