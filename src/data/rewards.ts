export type Portal = {
  name: string;
  shortName: string;
  url: string;
  color: string;
};

export type Reward = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tags: string[];
  amount: string;
  people: string;
  method: string;
  expiration: string;
  shipping: string;
  provider: string;
  catchcopy: string;
  description: string;
  summary: string;
  notes: string[];
  heroImage: string;
  gallery: string[];
};

export const portals: Portal[] = [
  { name: "ふるさとチョイス", shortName: "チョイス", url: "#", color: "#cf2828" },
  { name: "楽天ふるさと納税", shortName: "楽天", url: "#", color: "#d91920" },
  { name: "さとふる", shortName: "さとふる", url: "#", color: "#b98742" },
  { name: "ふるなび", shortName: "ふるなび", url: "#", color: "#1b1b1b" },
  { name: "ANAのふるさと納税", shortName: "ANA", url: "#", color: "#1d5fbf" },
  { name: "au PAYふるさと納税", shortName: "au PAY", url: "#", color: "#f05a22" },
  { name: "JRE MALLふるさと納税", shortName: "JRE MALL", url: "#", color: "#0e8b45" }
];

export const mainReward: Reward = {
  slug: "tateshina-onsen",
  title: "蓼科温泉 ○○旅館 1泊2食付ペア宿泊券",
  shortTitle: "蓼科温泉 ○○旅館 ペア宿泊券",
  category: "温泉・旅館",
  tags: ["人気", "温泉・旅館", "長野県茅野市"],
  amount: "100,000円〜",
  people: "2名様（ペア）",
  method: "宿泊券をお届けします",
  expiration: "発行日より1年間",
  shipping: "ご入金確認後、2週間以内に発送",
  provider: "株式会社○○旅館",
  catchcopy: "蓼科の自然に包まれ、心ほどける贅沢なひとときを。",
  description:
    "四季折々の美しい景色と、源泉かけ流しの温泉。地元の食材を活かしたお料理と、心温まるおもてなしで、特別なひとときをお過ごしください。",
  summary:
    "蓼科の豊かな自然に包まれた温泉旅館で、心安らぐひとときを。1泊2食付のペア宿泊券です。",
  notes: [
    "本券1枚につき、2名様1泊2食付でご利用いただけます。",
    "休前日・繁忙期は追加料金が発生する場合があります。",
    "ご予約は、お電話または宿公式サイトよりお願いいたします。",
    "除外日：年末年始、GW、お盆期間など。詳細は旅館へご確認ください。"
  ],
  heroImage: "/images/rewards/role-01-main-ryokan-pair.png",
  gallery: [
    "/images/rewards/role-01-main-ryokan-pair.png",
    "/images/rewards/role-02-experience-dining.png",
    "/images/rewards/role-03-conditions.svg",
    "/images/rewards/role-04-comparison.svg",
    "/images/rewards/role-05-flow.svg",
    "/images/rewards/role-06-regional-story.png"
  ]
};

export const rewards: Reward[] = [
  mainReward,
  {
    ...mainReward,
    slug: "resort-hotel",
    title: "蓼科高原リゾートホテル 1泊朝食付ペア宿泊券",
    shortTitle: "蓼科高原リゾートホテル 宿泊券",
    category: "ホテルステイ",
    tags: ["ホテルステイ", "高原リゾート"],
    amount: "80,000円〜",
    heroImage: "/images/rewards/resort-hotel-guests.png",
    catchcopy: "高原の静けさと眺望を楽しむ、上質なホテルステイ。",
    summary: "蓼科高原の眺望を楽しめるホテルで、ゆったりとした朝を迎えるペア宿泊券です。"
  },
  {
    ...mainReward,
    slug: "shirakaba-activity",
    title: "白樺湖アクティビティ体験 カヤック体験（ペア）",
    shortTitle: "白樺湖カヤック体験",
    category: "自然体験",
    tags: ["自然体験", "白樺湖", "ペア"],
    amount: "30,000円〜",
    heroImage: "/images/rewards/shirakaba-kayak-pair.png",
    catchcopy: "湖上から眺める八ヶ岳。自然に近づく体験時間。",
    summary: "白樺湖を舞台に、初心者でも楽しめるカヤック体験をペアで利用できます。"
  },
  {
    ...mainReward,
    slug: "kaiseki-meal",
    title: "日本料理 ○○ 特別会席ペアお食事券",
    shortTitle: "日本料理 特別会席ペアお食事券",
    category: "お食事・グルメ",
    tags: ["お食事・グルメ", "会席料理"],
    amount: "50,000円〜",
    heroImage: "/images/rewards/role-02-experience-dining.png",
    catchcopy: "地元食材の香りと季節を味わう、茅野の食体験。",
    summary: "信州の食材を使った特別会席を、落ち着いた空間で楽しめるペアお食事券です。"
  },
  {
    ...mainReward,
    slug: "culture-craft",
    title: "八ヶ岳の森 木工クラフト体験チケット",
    shortTitle: "木工クラフト体験",
    category: "文化体験",
    tags: ["文化体験", "木工", "親子"],
    amount: "20,000円〜",
    heroImage: "/images/rewards/yatsugatake-woodcraft-family.png",
    catchcopy: "木の香りに触れながら、旅の記憶をかたちに残す。",
    summary: "木工房で職人に教わりながら小物づくりを楽しめる、親子にもおすすめの体験です。"
  },
  {
    ...mainReward,
    slug: "private-onsen",
    title: "蓼科温泉 日帰り貸切風呂と昼食ペア券",
    shortTitle: "日帰り貸切風呂と昼食券",
    category: "温泉・旅館",
    tags: ["温泉・旅館", "日帰り"],
    amount: "40,000円〜",
    heroImage: "/images/rewards/private-onsen-lunch-pair.png",
    catchcopy: "短い滞在でも深く癒される、日帰り温泉のご褒美。",
    summary: "貸切風呂と昼食を組み合わせた、日帰りで楽しめる温泉体験型返礼品です。"
  }
];

export const appealBlocks = [
  {
    no: "01",
    title: "メイン画像",
    image: "/images/rewards/role-01-main-ryokan-pair.png",
    text: "施設と宿泊体験が一目で分かる、第一印象の画像。"
  },
  {
    no: "02",
    title: "利用・体験シーン",
    image: "/images/rewards/role-02-experience-dining.png",
    text: "ペアで過ごす食事や滞在時間を具体的に見せます。"
  },
  {
    no: "03",
    title: "内容・条件整理",
    image: "/images/rewards/role-03-conditions.svg",
    text: "利用人数・有効期限・発送目安などを整理します。"
  },
  {
    no: "04",
    title: "比較・選び方",
    image: "/images/rewards/role-04-comparison.svg",
    text: "他の宿泊券との違いや、向いている利用シーンを示します。"
  },
  {
    no: "05",
    title: "予約・利用フロー",
    image: "/images/rewards/role-05-flow.svg",
    text: "寄附後の予約方法と当日の流れをステップで表示します。"
  },
  {
    no: "06",
    title: "地域ストーリー",
    image: "/images/rewards/role-06-regional-story.png",
    text: "蓼科・八ヶ岳で過ごす意味と、旅館のおもてなしを伝えます。"
  }
];

export const seasons = [
  { label: "春", activity: "桜と湖畔さんぽ", image: "/images/seasonal/spring-lakeside-walk.png" },
  { label: "夏", activity: "白樺湖カヤック", image: "/images/seasonal/summer-lake-kayak.png" },
  { label: "秋", activity: "紅葉ハイキング", image: "/images/seasonal/autumn-highland-hike.png" },
  { label: "冬", activity: "雪見温泉ステイ", image: "/images/seasonal/winter-snow-onsen.png" }
];

export const adminValues = {
  title: mainReward.title,
  catchcopy: mainReward.catchcopy,
  amount: "100,000",
  people: mainReward.people,
  category: mainReward.category,
  provider: mainReward.provider,
  summary: mainReward.summary,
  expiration: mainReward.expiration,
  notes: "年末年始・ゴールデンウィーク・お盆などは除外日です。入湯税は別途現地でお支払いください。写真はイメージです。"
};
