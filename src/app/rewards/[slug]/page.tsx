import { notFound } from "next/navigation";
import { RewardDetail } from "@/components/RewardDetail";
import { rewards } from "@/data/rewards";

export function generateStaticParams() {
  return rewards.map((reward) => ({ slug: reward.slug }));
}

export default async function RewardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reward = rewards.find((item) => item.slug === slug);
  if (!reward) notFound();
  return <RewardDetail reward={reward} />;
}
