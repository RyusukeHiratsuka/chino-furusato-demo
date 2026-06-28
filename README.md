# 茅野市ふるさと納税 体験型返礼品ハブサイト プロトタイプ

20分間の提案プレゼンで「情報ハブサイト」「返礼品詳細ページ」「次年度以降も更新できる管理画面」の完成イメージを見せるための Next.js プロトタイプです。

本番サイトではありません。実データ保存、認証、WordPress連携、DBは実装していません。見た目とクリック導線だけを本物らしく再現しています。

## 技術構成

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- 静的ダミーデータ
- Vercel デプロイ対応

## 起動方法

```bash
cd /Users/hiratsukaryuusuke/Desktop/WebDesign/chino-furusato-demo
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## ページ構成

- `/`：トップページ
- `/rewards`：返礼品一覧ページ
- `/rewards/tateshina-onsen`：返礼品詳細ページ
- `/demo-admin`：WordPress管理画面風モック
- `/demo-admin/preview`：管理画面から生成される商品ページプレビュー

## Vercelデプロイ方法

1. このフォルダをGitHubリポジトリにpushします。
2. Vercelで「Add New Project」から対象リポジトリを選択します。
3. Framework Preset は `Next.js` のままで進めます。
4. Build Command は `npm run build`、Output Directory は未指定でOKです。
5. Deploy を押すと公開できます。

## ダミーデータの編集方法

返礼品、ポータルサイト、管理画面の入力済み内容は以下で編集できます。

```text
src/data/rewards.ts
```

主な編集箇所:

- `rewards`：返礼品一覧
- `mainReward`：詳細ページと管理画面プレビューのメイン返礼品
- `portals`：各ふるさと納税ポータルサイトの導線
- `appealBlocks`：詳細ページの6枚構成の魅力紹介
- `adminValues`：管理画面モックの入力済みフォーム内容

画像は `public/images/` に配置し、`/images/ファイル名.jpg` または `/images/rewards/ファイル名.png` の形式で参照します。

商品詳細ページの6枚構成は、パワポ資料の役割に合わせて `public/images/rewards/role-01-...` から `role-06-...` までに整理しています。

- `role-01`：メイン画像
- `role-02`：利用・体験シーン
- `role-03`：内容・条件整理
- `role-04`：比較・選び方
- `role-05`：予約・利用フロー
- `role-06`：地域ストーリー

## 注意事項

- 実在の自治体ロゴ・企業ロゴ・ポータル公式ロゴは使用せず、仮ロゴ表現にしています。
- 掲載している返礼品名、金額、事業者名、住所、URLは提案用の仮データです。
- 管理画面の「公開」は保存せず、トースト表示のみ行います。
- 「プレビュー」は `/demo-admin/preview` に遷移します。
