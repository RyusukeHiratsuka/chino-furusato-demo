import { ExternalLink } from "lucide-react";
import { portals } from "@/data/rewards";

export function PortalLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "space-y-2" : "grid gap-3 sm:grid-cols-2 lg:grid-cols-4"}>
      {portals.map((portal) => (
        <a
          key={portal.name}
          href={portal.url}
          className="flex items-center justify-between rounded-md border border-forest-900/12 bg-white px-4 py-3 text-sm font-bold shadow-sm transition hover:border-gold hover:bg-kinari"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[10px] font-black"
              style={{ borderColor: portal.color, color: portal.color }}
            >
              {portal.shortName.slice(0, 2)}
            </span>
            <span className="truncate">{portal.name}</span>
          </span>
          <span className="ml-3 inline-flex items-center gap-1 rounded border border-gold/45 px-2 py-1 text-xs text-gold">
            詳しく見る
            <ExternalLink className="h-3 w-3" />
          </span>
        </a>
      ))}
    </div>
  );
}
