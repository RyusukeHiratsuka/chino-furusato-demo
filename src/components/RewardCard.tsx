import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Reward } from "@/data/rewards";

export function RewardCard({ reward, compact = false }: { reward: Reward; compact?: boolean }) {
  return (
    <Link
      href={`/rewards/${reward.slug}`}
      className="motion-card group overflow-hidden rounded-md border border-forest-900/10 bg-white shadow-sm transition"
    >
      <div className={compact ? "relative h-28" : "relative h-48"}>
        <Image src={reward.heroImage} alt={reward.title} fill className="image-cover transition duration-500 group-hover:scale-105" />
        {reward.tags.includes("人気") && (
          <span className="absolute left-0 top-0 bg-forest-800 px-3 py-1 text-xs font-bold text-white">人気</span>
        )}
      </div>
      <div className={compact ? "p-3" : "p-5"}>
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className={compact ? "text-sm font-bold leading-6" : "font-bold leading-7"}>{reward.shortTitle}</h3>
          {!compact && <Heart className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />}
        </div>
        <p className="text-xs font-semibold text-ink/60">寄付金額 {reward.amount}</p>
        {!compact && <p className="mt-3 line-clamp-2 text-sm leading-7 text-ink/70">{reward.summary}</p>}
      </div>
    </Link>
  );
}
