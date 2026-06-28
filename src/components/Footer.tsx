import { Gift, Headphones, HeartHandshake } from "lucide-react";
import { SiteLogo } from "./SiteHeader";

const points = [
  { icon: Gift, title: "ちのしの厳選体験をお届け", text: "宿泊や体験など、ちのしならではの返礼品を厳選してご紹介します。" },
  { icon: HeartHandshake, title: "地域の魅力を未来へ", text: "ふるさと納税を通じて、地域の発展と自然保護に貢献します。" },
  { icon: Headphones, title: "安心のサポート体制", text: "ご不明点はサポート窓口まで。丁寧にサポートいたします。" }
];

export function Footer() {
  return (
    <footer id="footer" className="mt-16 bg-forest-900 text-white">
      <div className="container-shell grid gap-8 py-8 md:grid-cols-3">
        {points.map((point) => (
          <div key={point.title} className="flex gap-4">
            <point.icon className="h-9 w-9 shrink-0 text-gold" strokeWidth={1.4} />
            <div>
              <p className="font-bold">{point.title}</p>
              <p className="mt-1 text-sm leading-7 text-white/76">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 bg-white py-8 text-ink">
        <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <SiteLogo compact />
          <p className="text-xs leading-6 text-ink/60">
            プレゼン用プロトタイプです。掲載している返礼品、寄付金額、事業者情報は仮データです。
          </p>
        </div>
      </div>
    </footer>
  );
}
