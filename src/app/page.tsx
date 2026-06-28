import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Gift,
  Landmark,
  Mountain,
  Search,
  ShieldCheck,
  Soup,
  Sprout,
  Trees,
  Waves
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { RewardCard } from "@/components/RewardCard";
import { SiteHeader } from "@/components/SiteHeader";
import { portals, rewards, seasons } from "@/data/rewards";

const keywordItems = [
  { label: "温泉・旅館", icon: Waves },
  { label: "ホテルステイ", icon: Building2 },
  { label: "自然体験", icon: Sprout },
  { label: "文化体験", icon: Landmark },
  { label: "お食事・グルメ", icon: Soup }
];

const categoryFeatures = [
  {
    title: "宿泊・温泉",
    text: "蓼科の湯と、四季の眺めに包まれる滞在。",
    image: "/images/rewards/role-01-main-ryokan-pair.png",
    href: "/rewards/tateshina-onsen"
  },
  {
    title: "ホテルステイ",
    text: "高原リゾートで過ごす、静かな朝の時間。",
    image: "/images/rewards/resort-hotel-guests.png",
    href: "/rewards/resort-hotel"
  },
  {
    title: "自然体験",
    text: "白樺湖や八ヶ岳を、体験として楽しむ。",
    image: "/images/rewards/shirakaba-kayak-pair.png",
    href: "/rewards/shirakaba-activity"
  },
  {
    title: "食事券",
    text: "地元食材の香りを、旅の記憶として味わう。",
    image: "/images/rewards/role-02-experience-dining.png",
    href: "/rewards/kaiseki-meal"
  }
];

const flowItems = [
  {
    title: "返礼品を探す",
    text: "温泉、宿泊、自然体験、食事など、旅の目的から選べます。",
    icon: Search
  },
  {
    title: "詳細ページで確認",
    text: "写真、利用条件、有効期限、予約方法まで一画面で確認できます。",
    icon: CheckCircle2
  },
  {
    title: "ポータルで申し込む",
    text: "使い慣れたふるさと納税ポータルへ進んで寄附できます。",
    icon: Gift
  }
];

const usageItems = [
  {
    title: "自然環境の保全",
    text: "八ヶ岳・蓼科の景観や、散策路の維持に役立てます。",
    icon: Trees
  },
  {
    title: "観光資源の磨き上げ",
    text: "地域の体験価値を高め、訪れる理由を育てます。",
    icon: Mountain
  },
  {
    title: "安心して訪れられるまちへ",
    text: "案内や受け入れ体制を整え、旅の満足度を高めます。",
    icon: ShieldCheck
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ececea] py-1">
      <div className="mx-auto max-w-[1420px] overflow-hidden bg-[#fbf8f1] shadow-soft">
        <SiteHeader />
        <main>
          <div>
            <HeroSlider />
            <div className="container-shell relative -mt-16 z-10">
              <div className="glass-panel grid gap-0 rounded-md md:grid-cols-[1fr_300px]">
                <div className="grid divide-y divide-forest-900/10 md:grid-cols-5 md:divide-x md:divide-y-0">
                  {keywordItems.map((item) => (
                    <Link key={item.label} href="/rewards" className="motion-card grid place-items-center gap-3 px-4 py-7 text-center transition hover:bg-kinari">
                      <item.icon className="h-9 w-9 text-ink" strokeWidth={1.25} />
                      <span className="text-sm font-bold">{item.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-forest-900/10 p-7 md:border-l md:border-t-0">
                  <p className="mb-3 text-sm font-bold">返礼品をキーワードで探す</p>
                  <div className="flex overflow-hidden rounded border border-forest-900/12 bg-white">
                    <input className="min-w-0 flex-1 px-4 text-sm outline-none" placeholder="キーワードを入力" />
                    <Link href="/rewards" className="grid h-12 w-14 place-items-center bg-gold text-white">
                      <Search className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="container-shell animate-section py-16">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold tracking-[0.12em] text-gold">Pick up Items</p>
                <h2 className="jp-serif mt-2 text-3xl leading-relaxed text-forest-900">ちのしのおすすめ返礼品</h2>
              </div>
              <p className="max-w-xl text-sm leading-8 text-ink/68">
                ポータル上の一覧だけでは伝わりにくい、滞在の過ごし方や利用条件まで整理して紹介します。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {rewards.slice(0, 4).map((reward) => (
                <RewardCard key={reward.slug} reward={reward} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/rewards" className="inline-flex min-w-72 items-center justify-center gap-5 rounded border border-gold px-8 py-3 text-sm font-bold text-gold">
                すべての返礼品を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className="container-shell">
              <div className="mb-8 text-center">
                <p className="text-sm font-bold tracking-[0.12em] text-gold">Category</p>
                <h2 className="jp-serif mt-2 text-3xl leading-relaxed text-forest-900">体験の種類から探す</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {categoryFeatures.map((feature) => (
                  <Link key={feature.title} href={feature.href} className="motion-card group overflow-hidden rounded-md border border-forest-900/10 bg-[#fbf8f1] shadow-sm">
                    <div className="relative h-56">
                      <Image src={feature.image} alt={feature.title} fill className="image-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="jp-serif text-2xl">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/88">{feature.text}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="container-shell grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.9fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-md bg-forest-900 shadow-soft">
              <Image src="/images/home-donation-flow.png" alt="ふるさと納税の流れ" fill className="image-cover opacity-92" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.12em] text-gold">How to Use</p>
              <h2 className="jp-serif mt-2 text-3xl leading-relaxed text-forest-900">ふるさと納税の流れ</h2>
              <p className="mt-5 text-[15px] leading-8 text-ink/72">
                気になる返礼品を見つけたら、詳細ページで体験内容と利用条件を確認。
                そのまま各ポータルサイトへ進み、寄附と申込みを行えます。
              </p>
              <div className="mt-7 space-y-4">
                {flowItems.map((item, index) => (
                  <div key={item.title} className="flex gap-4 rounded-md border border-forest-900/10 bg-white p-4 shadow-sm">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-800 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 font-bold text-forest-900">
                        <item.icon className="h-4 w-4 text-gold" />
                        {item.title}
                      </div>
                      <p className="mt-1 text-sm leading-7 text-ink/68">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-kinari py-16">
            <div className="container-shell">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-bold tracking-[0.12em] text-gold">Portal Sites</p>
                  <h2 className="jp-serif mt-2 text-3xl leading-relaxed text-forest-900">各ポータルサイトから申し込む</h2>
                </div>
                <p className="max-w-xl text-sm leading-8 text-ink/68">
                  詳細ページで魅力を確認したあと、使い慣れたポータルサイトへ自然に送客できます。
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {portals.map((portal) => (
                  <a key={portal.name} href={portal.url} className="flex items-center justify-between rounded-md border border-forest-900/10 bg-white px-4 py-4 text-sm font-bold shadow-sm transition hover:border-gold hover:bg-[#fffdf8]">
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border text-[11px] font-black" style={{ borderColor: portal.color, color: portal.color }}>
                        {portal.shortName.slice(0, 2)}
                      </span>
                      <span className="truncate">{portal.name}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="container-shell grid items-center gap-10 py-16 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <p className="text-sm font-bold tracking-[0.12em] text-gold">Partners</p>
              <h2 className="jp-serif mt-2 text-3xl leading-relaxed text-forest-900">返礼品を支える地域の事業者</h2>
              <p className="mt-5 text-[15px] leading-8 text-ink/72">
                旅館、ホテル、飲食店、アクティビティ事業者。
                体験型返礼品は、地域で迎える人の想いや技術によって価値が深まります。
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ["宿泊事業者", "滞在の時間を丁寧に設計"],
                  ["体験事業者", "自然や文化に触れる入口を用意"],
                  ["飲食事業者", "地元食材の魅力を一皿に"],
                  ["自治体・委託先", "情報更新と送客導線を管理"]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-md border border-forest-900/10 bg-white p-4 shadow-sm">
                    <p className="font-bold text-forest-900">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-ink/68">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[430px] overflow-hidden rounded-md bg-forest-900 shadow-soft">
              <Image src="/images/home-business-operators.png" alt="地域の事業者紹介" fill className="image-cover" />
            </div>
          </section>

          <section id="about" className="bg-white py-16">
            <div className="container-shell grid items-center gap-10 lg:grid-cols-[320px_1fr]">
              <div>
                <p className="text-sm font-bold tracking-[0.12em] text-gold">About Chino</p>
                <h2 className="jp-serif mt-2 text-3xl leading-relaxed text-forest-900">ちのしについて</h2>
                <p className="mt-5 text-[15px] leading-8 text-ink/72">
                  長野県の中央に位置するちのし。八ヶ岳、蓼科、白樺湖に囲まれた自然と、
                  受け継がれる文化、あたたかいおもてなしの心が息づくまちです。
                </p>
                <Link href="/rewards" className="mt-6 inline-flex items-center gap-4 rounded border border-gold px-8 py-3 text-sm font-bold text-gold">
                  返礼品を見る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {seasons.map((season) => (
                  <div key={season.label} className="motion-card group relative h-60 overflow-hidden rounded-md bg-forest-900 shadow-sm">
                    <Image src={season.image} alt={`茅野市の${season.label}`} fill className="image-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="jp-serif block text-4xl drop-shadow">{season.label}</span>
                      <span className="mt-2 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-forest-900">
                        {season.activity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="guide" className="container-shell grid gap-8 py-16 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[410px] overflow-hidden rounded-md bg-forest-900 shadow-soft">
              <Image src="/images/home-donation-use-nature.png" alt="寄附金の使い道" fill className="image-cover" />
            </div>
            <div>
              <p className="text-sm font-bold tracking-[0.12em] text-gold">Use of Donations</p>
              <h2 className="jp-serif mt-2 text-3xl leading-relaxed text-forest-900">寄附金の使い道</h2>
              <p className="mt-5 text-[15px] leading-8 text-ink/72">
                ふるさと納税は、返礼品を通じて地域の魅力を知る入口です。
                いただいた寄附は、自然環境や観光資源、安心して訪れられるまちづくりへつながります。
              </p>
              <div className="mt-7 grid gap-4">
                {usageItems.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-md border border-forest-900/10 bg-white p-5 shadow-sm">
                    <item.icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.6} />
                    <div>
                      <p className="font-bold text-forest-900">{item.title}</p>
                      <p className="mt-1 text-sm leading-7 text-ink/68">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}
