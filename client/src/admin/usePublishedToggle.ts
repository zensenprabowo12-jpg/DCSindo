import { useState, type Dispatch, type SetStateAction } from "react";
import { useToast } from "@/hooks/use-toast";

type Toggleable = { id: number; is_published: boolean };
type ToggleResult = { ok: true } | { ok: false; message: string };

/**
 * Saklar Published di daftar admin: optimistic (UI berubah dulu), dikembalikan
 * bila server menolak, toast sukses/gagal. Dipakai MikroTik, Ubiquiti, V-SOL
 * (FiberHome punya versi inline yang sama perilakunya).
 */
export function usePublishedToggle<T extends Toggleable>(
  setList: Dispatch<SetStateAction<T[]>>,
  api: (id: number, next: boolean) => Promise<ToggleResult>,
  nameOf: (p: T) => string,
) {
  const [pending, setPending] = useState<Set<number>>(() => new Set());
  const { toast } = useToast();

  const setFlag = (id: number, value: boolean) =>
    setList((prev) => prev.map((x) => (x.id === id ? { ...x, is_published: value } : x)));

  async function toggle(p: T, next: boolean) {
    if (pending.has(p.id)) return;
    setPending((prev) => new Set(prev).add(p.id));
    setFlag(p.id, next);

    const r = await api(p.id, next);

    setPending((prev) => {
      const s = new Set(prev);
      s.delete(p.id);
      return s;
    });
    const name = nameOf(p);
    if (r.ok) {
      toast({
        title: next ? "Product published" : "Product hidden",
        description: next
          ? `"${name}" is now visible on the public site.`
          : `"${name}" is hidden from the public site. It is not deleted.`,
      });
    } else {
      setFlag(p.id, !next);
      toast({ variant: "destructive", title: "Could not update visibility", description: r.message });
    }
  }

  return { toggle, isPending: (id: number) => pending.has(id) };
}
