import { useTrueFalse } from "@/hooks/useTrueFalse";

/**
 * Contoh komponen konsumen `useTrueFalse` (tidak digunakan di routing).
 */
export default function ExampleTrueFalseUsage() {
  const tf = useTrueFalse();

  return (
    <div className="rounded-lg border bg-card p-4 text-xs text-muted-foreground">
      <div className="font-semibold text-foreground">
        Snapshot truefalse.json (developer reference)
      </div>
      <ul className="mt-2 list-disc pl-5">
        <li>disableUbiquitiAccessories: {String(tf.disableUbiquitiAccessories)}</li>
        <li>disableMikrotikRoutes: {String(tf.disableMikrotikRoutes)}</li>
        <li>showAddons: {String(tf.showAddons)}</li>
      </ul>
      {tf.isFetching ? <p className="mt-2">Memuat ulang config…</p> : null}
    </div>
  );
}
