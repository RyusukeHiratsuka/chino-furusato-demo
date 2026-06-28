"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  ExternalLink,
  FileText,
  Gauge,
  ImageIcon,
  LayoutDashboard,
  Link as LinkIcon,
  Mail,
  Megaphone,
  Monitor,
  Pencil,
  Pin,
  Plug,
  Settings,
  UserRound
} from "lucide-react";
import { adminValues, mainReward, portals } from "@/data/rewards";

const menu = [
  { label: "ダッシュボード", icon: LayoutDashboard },
  { label: "投稿", icon: FileText },
  { label: "返礼品 (reward)", icon: Pin, active: true },
  { label: "メディア", icon: ImageIcon },
  { label: "固定ページ", icon: FileText },
  { label: "お知らせ", icon: Bell },
  { label: "お問い合わせ", icon: Mail },
  { label: "外観", icon: Pencil },
  { label: "プラグイン", icon: Plug, badge: "2" },
  { label: "ユーザー", icon: UserRound },
  { label: "設定", icon: Settings }
];

export function AdminEditor() {
  const [toast, setToast] = useState(false);

  const publish = () => {
    setToast(true);
    window.setTimeout(() => setToast(false), 2200);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 text-[#1d2327] md:px-8">
      {toast && (
        <div className="fixed right-6 top-6 z-50 rounded-md bg-forest-800 px-5 py-3 text-sm font-bold text-white shadow-soft">
          公開しました
        </div>
      )}
      <header className="mx-auto mb-5 flex max-w-[1480px] flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex items-end gap-6">
          <h1 className="text-2xl font-black tracking-[0.08em] text-forest-900 md:text-3xl">
            返礼品の登録画面（WordPress管理画面）
          </h1>
          <p className="hidden pb-1 text-sm font-semibold text-ink/70 md:block">直感的な入力で、簡単に返礼品を登録・管理できます</p>
        </div>
        <div className="relative rounded-xl bg-white px-6 py-4 text-center text-sm font-black leading-7 text-forest-900 shadow-soft">
          6枚の画像をアップロードするだけで
          <br />
          魅力的な商品ページが完成！
          <span className="absolute -bottom-3 left-8 h-5 w-5 rotate-45 bg-white shadow-sm" />
        </div>
      </header>
      <div className="mx-auto flex max-w-[1480px] overflow-hidden rounded-md bg-[#f0f0f1] shadow-soft">
        <aside className="hidden w-[176px] shrink-0 bg-[#1d2327] text-white md:block">
          <div className="flex h-9 items-center gap-2 bg-[#0f1519] px-3 text-xs">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 font-black">W</span>
            ちのしのふるさと納税
          </div>
          <nav className="py-2">
            {menu.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 text-sm ${item.active ? "bg-[#2271b1]" : "text-white/86"}`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
                {item.badge && <span className="ml-auto rounded-full bg-red-500 px-1.5 text-[10px]">{item.badge}</span>}
              </div>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">
          <div className="flex h-9 items-center justify-between bg-[#1d2327] px-4 text-xs text-white">
            <div className="flex items-center gap-4">
              <span>ちのしのふるさと納税 体験型返礼品ハブサイト</span>
              <span>＋ 新規</span>
            </div>
            <span>こんにちは、admin さん</span>
          </div>
          <main className="grid gap-6 p-4 xl:grid-cols-[minmax(0,1fr)_280px_320px]">
            <section className="min-w-0">
              <h1 className="mb-4 text-2xl font-normal">新規返礼品を追加</h1>
              <input className="admin-field mb-3 text-xl" value={adminValues.title} readOnly />
              <div className="mb-4 text-sm text-[#50575e]">
                パーマリンク: <span className="text-[#2271b1]">https://chino-furusato.jp/reward/tateshina-001</span>
                <button className="ml-3 rounded border border-[#8c8f94] bg-white px-3 py-1 text-xs">編集</button>
              </div>

              <AdminBox title="返礼品の基本情報">
                <div className="grid gap-4">
                  <Field label="キャッチコピー" value={adminValues.catchcopy} />
                  <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
                    <Field label="寄付金額" value={adminValues.amount} suffix="円" />
                    <Field label="定員/利用人数" value={adminValues.people} />
                  </div>
                  <div>
                    <p className="admin-label mb-2">カテゴリ</p>
                    <div className="flex flex-wrap gap-5 text-sm">
                      {["温泉・旅館", "ホテルステイ", "自然体験", "文化体験", "お食事・グルメ"].map((category) => (
                        <label key={category} className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked={category === "温泉・旅館"} />
                          {category}
                        </label>
                      ))}
                    </div>
                  </div>
                  <Field label="提供事業者名" value={adminValues.provider} />
                  <TextArea label="返礼品の概要" value={adminValues.summary} rows={4} />
                  <Field label="有効期限" value={adminValues.expiration} />
                  <TextArea label="除外日・注意事項" value={adminValues.notes} rows={4} />
                </div>
              </AdminBox>

              <AdminBox title="返礼品画像（6枚）" note="推奨サイズ：横幅1200px以上 / JPG・PNG推奨">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  {mainReward.gallery.map((image, index) => (
                    <div key={image + index}>
                      <div className="relative h-24 overflow-hidden rounded border border-[#c3c4c7] bg-white">
                        <Image src={image} alt={`アップロード済み画像 ${index + 1}`} fill className="image-cover" />
                        <span className="absolute left-1 top-1 rounded bg-forest-800 px-1.5 text-xs text-white">{index + 1}</span>
                      </div>
                      <button className="mt-2 w-full rounded border border-[#c3c4c7] bg-white px-2 py-1 text-xs">画像を変更</button>
                    </div>
                  ))}
                </div>
                <button className="mt-4 rounded border border-[#c3c4c7] bg-white px-4 py-2 text-sm">画像を追加</button>
              </AdminBox>
            </section>

            <aside className="space-y-4">
              <AdminBox title="公開" tight>
                <div className="flex gap-2">
                  <button className="rounded border border-[#c3c4c7] bg-white px-3 py-2 text-sm">下書き保存</button>
                  <button onClick={() => window.location.assign("/demo-admin/preview")} className="rounded border border-[#c3c4c7] bg-white px-3 py-2 text-sm">
                    プレビュー
                  </button>
                </div>
                <div className="mt-4 space-y-2 text-xs text-[#50575e]">
                  <p>ステータス: 下書き <span className="text-[#2271b1]">編集</span></p>
                  <p>公開状態: 公開 <span className="text-[#2271b1]">編集</span></p>
                  <p>すぐに公開する <span className="text-[#2271b1]">編集</span></p>
                </div>
                <button onClick={publish} className="mt-5 w-full rounded bg-gold px-4 py-3 font-bold text-white">
                  公開
                </button>
              </AdminBox>

              <AdminBox title="ポータルサイトリンク" tight>
                <div className="space-y-3">
                  {portals.map((portal) => (
                    <label key={portal.name} className="block">
                      <span className="mb-1 flex items-center gap-2 text-xs font-bold">
                        <LinkIcon className="h-3.5 w-3.5 text-gold" />
                        {portal.name}URL
                      </span>
                      <input className="admin-field text-xs" value={`https://example.jp/${portal.shortName.toLowerCase()}`} readOnly />
                    </label>
                  ))}
                </div>
              </AdminBox>

              <AdminBox title="アイキャッチ画像" tight>
                <div className="relative h-36 overflow-hidden rounded border border-[#c3c4c7]">
                  <Image src={mainReward.heroImage} alt="アイキャッチ画像" fill className="image-cover" />
                </div>
                <button className="mt-3 rounded border border-[#c3c4c7] bg-white px-3 py-2 text-sm">画像を変更</button>
              </AdminBox>
            </aside>

            <aside className="hidden xl:block">
              <div className="sticky top-4 space-y-7 bg-white p-6 shadow-admin">
                {[
                  ["基本情報を入力", "返礼品名・寄付金額・概要・利用条件などを入力するだけ。"],
                  ["魅力を伝える6枚の画像", "おすすめの6つのシーンを登録。登録した順番でサイトに表示されます。"],
                  ["ポータルサイトへ誘導", "各ふるさと納税ポータルサイトのURLを登録しておくと、商品ページに自動で表示されます。"],
                  ["すぐに公開・反映", "「公開」ボタンを押すだけで、サイトに反映されます。"]
                ].map((item) => (
                  <div key={item[0]} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-white">
                      <Pencil className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-bold text-forest-900">{item[0]}</p>
                      <p className="mt-2 text-sm leading-7 text-ink/70">{item[1]}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded bg-kinari p-5">
                  <p className="font-bold text-gold">登録のポイント</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7">
                    <li>・専門知識は不要</li>
                    <li>・画像を用意するだけでOK</li>
                    <li>・いつでも編集・更新可能</li>
                  </ul>
                </div>
              </div>
            </aside>
          </main>
          <div className="border-t border-[#dcdcde] bg-white px-5 py-5">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-5 text-sm">
              <span className="rounded bg-forest-800 px-5 py-3 font-bold text-white">サイトでの表示イメージ</span>
              <span className="rounded bg-kinari px-5 py-3 font-bold">
                <Gauge className="mr-2 inline h-5 w-5 text-forest-800" />
                管理画面で登録
              </span>
              <span>→</span>
              <span className="rounded border px-5 py-3">
                <Monitor className="mr-2 inline h-5 w-5" />
                サイトに自動反映
              </span>
              <span>→</span>
              <span className="rounded border px-5 py-3">
                <Megaphone className="mr-2 inline h-5 w-5" />
                寄付申し込みへ
              </span>
              <div className="ml-auto hidden items-end gap-3 lg:flex">
                <div className="relative h-24 w-40 overflow-hidden rounded-t-lg border-[6px] border-[#222] bg-white">
                  <Image src={mainReward.heroImage} alt="PCプレビュー" fill className="image-cover" />
                </div>
                <div className="relative h-28 w-14 overflow-hidden rounded-xl border-[5px] border-[#222] bg-white">
                  <Image src={mainReward.heroImage} alt="スマホプレビュー" fill className="image-cover" />
                </div>
              </div>
              <button onClick={() => window.location.assign("/demo-admin/preview")} className="ml-auto inline-flex items-center gap-2 rounded border border-gold px-4 py-2 font-bold text-gold">
                商品ページプレビュー
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminBox({ title, note, tight = false, children }: { title: string; note?: string; tight?: boolean; children: React.ReactNode }) {
  return (
    <section className="mb-4 rounded-sm border border-[#c3c4c7] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#c3c4c7] px-4 py-3">
        <h2 className="font-bold">{title}</h2>
        <ChevronDown className="h-4 w-4 text-[#646970]" />
      </div>
      <div className={tight ? "p-4" : "p-4 md:p-5"}>
        {note && <p className="mb-3 text-xs text-[#646970]">{note}</p>}
        {children}
      </div>
    </section>
  );
}

function Field({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <label className="block">
      <span className="admin-label mb-2 block">{label}</span>
      <span className="flex items-center gap-2">
        <input className="admin-field" value={value} readOnly />
        {suffix && <span className="text-sm font-bold">{suffix}</span>}
      </span>
    </label>
  );
}

function TextArea({ label, value, rows }: { label: string; value: string; rows: number }) {
  return (
    <label className="block">
      <span className="admin-label mb-2 block">{label}</span>
      <textarea className="admin-field resize-none leading-7" value={value} rows={rows} readOnly />
    </label>
  );
}
