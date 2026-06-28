import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ちのしのふるさと納税 体験型返礼品ハブサイト",
  description:
    "茅野市ふるさと納税の体験型返礼品を紹介し、各ポータルサイトへ送客するプレゼン用プロトタイプです。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
