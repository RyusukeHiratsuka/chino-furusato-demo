import Image from "next/image";
import { CalendarDays, Gift, MapPin, UsersRound, WalletCards } from "lucide-react";
import { appealBlocks, mainReward, type Reward } from "@/data/rewards";
import { PortalLinks } from "./PortalLinks";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { RewardGallery } from "./RewardGallery";

const specs = [
  { icon: UsersRound, label: "ご利用人数", value: mainReward.people },
  { icon: Gift, label: "ご利用方法", value: mainReward.method },
  { icon: CalendarDays, label: "有効期限", value: mainReward.expiration },
  { icon: WalletCards, label: "発送目安", value: mainReward.shipping }
];

export function RewardDetail({ reward = mainReward, preview = false }: { reward?: Reward; preview?: boolean }) {
  return (
    <div className="min-h-screen bg-[#ececea] py-1">
      {preview && (
        <div className="bg-forest-800 px-4 py-3 text-center text-sm font-bold text-white">
          管理画面に入力した内容が、このように商品ページとして自動反映されます
        </div>
      )}
      <div className="mx-auto max-w-[1420px] overflow-hidden bg-[#fbf8f1] shadow-soft">
        <SiteHeader />
        <main>
        <section className="container-shell pt-4">
          <div className="mb-4 hidden text-xs text-ink/55 md:block">ホーム　&gt;　返礼品一覧　&gt;　宿泊・温泉・旅館　&gt;　{reward.title}</div>
          <RewardGallery reward={reward} />
        </section>

        <section className="container-shell grid gap-8 py-12 lg:grid-cols-[1fr_440px]">
          <div>
            <h2 className="jp-serif text-3xl leading-relaxed text-forest-900">{reward.catchcopy}</h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-9 text-ink/78">{reward.description}</p>
          </div>
          <div className="grid gap-4 rounded-md bg-white p-6 shadow-sm sm:grid-cols-2">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-start gap-3">
                <spec.icon className="mt-1 h-5 w-5 shrink-0 text-forest-800" strokeWidth={1.6} />
                <div>
                  <p className="text-xs font-bold text-ink/55">{spec.label}</p>
                  <p className="mt-1 text-sm font-semibold">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-shell rounded-md bg-white p-5 shadow-sm md:p-8">
          <h2 className="mb-5 flex items-center gap-3 text-xl font-bold text-forest-900">
            申し込む前の不安をなくす6枚構成
            <span className="h-px flex-1 bg-gold/30" />
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {appealBlocks.map((block) => (
              <article key={block.no}>
                <div className="relative h-44 overflow-hidden rounded-md">
                  <Image src={block.image} alt={block.title} fill className="image-cover" />
                </div>
                <div className="mt-3 flex gap-3">
                  <span className="jp-serif text-3xl text-gold">{block.no}</span>
                  <div>
                    <h3 className="font-bold">{block.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-ink/68">{block.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container-shell mt-8 rounded-md border border-forest-900/10 bg-white p-5 shadow-sm md:p-8">
          <h2 className="mb-5 text-xl font-bold text-forest-900">この返礼品は各ふるさと納税ポータルサイトからお申し込みいただけます</h2>
          <PortalLinks />
          <p className="mt-4 text-center text-xs text-ink/55">掲載のポータルサイトは一例です。その他サイトでも取り扱いがある場合がございます。</p>
          <div className="mt-6 text-center">
            <a href="#" className="inline-flex w-full max-w-md items-center justify-center rounded-md bg-gold px-8 py-4 font-bold text-white shadow-soft">
              寄付して返礼品を申し込む
            </a>
          </div>
        </section>

        <section className="container-shell mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-forest-900/10 bg-white p-6">
            <h2 className="mb-3 text-lg font-bold">ご利用について</h2>
            <ul className="space-y-2 text-sm leading-7 text-ink/75">
              {reward.notes.map((note) => (
                <li key={note}>・{note}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-forest-900/10 bg-white p-6">
            <h2 className="mb-3 text-lg font-bold">アクセス</h2>
            <p className="text-sm leading-7 text-ink/75">長野県茅野市北山○○○○（JR茅野駅から車で約30分）</p>
            <div className="mt-4 grid h-36 place-items-center rounded-md bg-[#dfe8d9] text-forest-800">
              <MapPin className="h-10 w-10 text-red-600" />
              <span className="text-sm font-bold">Googleマップで見る</span>
            </div>
          </div>
        </section>

        <section className="container-shell mt-8 grid gap-8 rounded-md bg-white p-6 shadow-soft md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="mb-4 text-xl font-bold">ポイント</h2>
            <ul className="space-y-2 text-sm leading-7">
              <li>✓ 役割別画像で、寄附者の検討行動を支える構成</li>
              <li>✓ 信頼感のある情報設計（利用条件・有効期限など）</li>
              <li>✓ 寄付導線を目立たせ、迷わず申し込める設計</li>
              <li>✓ レスポンシブでスマホでも見やすいレイアウト</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold">6枚構成の意図</h2>
            <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
              {["メイン画像", "利用・体験シーン", "内容・条件整理", "比較・選び方", "予約・利用フロー", "地域ストーリー"].map((text, index) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest-800 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-forest-900/10 bg-white py-2 text-center text-xs font-bold text-ink/70 md:hidden">
        <span>返礼品を探す</span>
        <span>お気に入り</span>
        <span>ログイン</span>
      </div>
    </div>
  );
}
