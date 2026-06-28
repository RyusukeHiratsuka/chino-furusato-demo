import Link from "next/link";
import { Heart, Menu, Mountain, UserRound } from "lucide-react";

export function SiteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/45 bg-white text-gold">
        <Mountain className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold tracking-[0.04em] text-forest-900 sm:text-lg">
          ちのしのふるさと納税
        </span>
        {!compact && <span className="block text-[11px] font-semibold text-ink/70">体験型返礼品ハブサイト</span>}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-white/92 backdrop-blur-xl">
      <div className="container-shell flex h-[74px] items-center justify-between gap-5">
        <SiteLogo />
        <nav className="hidden items-center gap-9 text-sm font-semibold text-ink/80 lg:flex">
          <Link href="/rewards">返礼品を探す</Link>
          <Link href="/#about">ちのしについて</Link>
          <Link href="/#guide">ふるさと納税とは</Link>
          <Link href="/#footer">ご利用ガイド</Link>
        </nav>
        <div className="hidden items-center gap-5 border-l border-ink/10 pl-6 lg:flex">
          <Link href="/demo-admin" className="text-sm font-semibold text-forest-800">
            管理画面デモ
          </Link>
          <span className="grid place-items-center text-ink">
            <UserRound className="h-6 w-6" strokeWidth={1.7} />
            <span className="mt-1 text-[10px]">ログイン</span>
          </span>
          <span className="grid place-items-center text-ink">
            <Heart className="h-6 w-6" strokeWidth={1.7} />
            <span className="mt-1 text-[10px]">お気に入り</span>
          </span>
        </div>
        <button className="grid h-11 w-11 place-items-center lg:hidden" aria-label="メニュー">
          <Menu className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
}
