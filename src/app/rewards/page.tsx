import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { Footer } from "@/components/Footer";
import { RewardCard } from "@/components/RewardCard";
import { SiteHeader } from "@/components/SiteHeader";
import { rewards } from "@/data/rewards";

const categories = ["すべて", "宿泊・温泉", "ホテルステイ", "自然体験", "文化体験", "食事券"];
const amounts = ["〜30,000円", "30,000〜50,000円", "50,000〜100,000円", "100,000円〜"];

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-[#fbf8f1]">
      <SiteHeader />
      <main className="container-shell py-10">
        <div className="mb-8">
          <p className="text-sm font-bold text-gold">Reward List</p>
          <h1 className="jp-serif mt-2 text-4xl text-forest-900">返礼品を探す</h1>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-ink/70">
            宿泊・温泉・自然体験・食事券を中心に、茅野市で過ごす時間の魅力が伝わる返礼品を一覧で確認できます。
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-md border border-forest-900/10 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-2 font-bold text-forest-900">
              <SlidersHorizontal className="h-5 w-5" />
              絞り込み
            </div>
            <div>
              <p className="mb-3 text-sm font-bold">カテゴリ</p>
              <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">
                {categories.map((category) => (
                  <button key={category} className="rounded-full border border-forest-900/10 px-4 py-2 text-sm hover:border-gold hover:text-gold lg:w-full lg:rounded-md lg:text-left">
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm font-bold">寄付金額帯</p>
              <div className="space-y-2">
                {amounts.map((amount) => (
                  <label key={amount} className="flex items-center gap-2 text-sm text-ink/75">
                    <input type="checkbox" className="accent-forest-800" />
                    {amount}
                  </label>
                ))}
              </div>
            </div>
          </aside>
          <section>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-bold">{rewards.length}件の返礼品</p>
              <Link href="/demo-admin" className="rounded border border-gold px-4 py-2 text-sm font-bold text-gold">
                管理画面デモへ
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {rewards.map((reward) => (
                <RewardCard key={reward.slug} reward={reward} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
