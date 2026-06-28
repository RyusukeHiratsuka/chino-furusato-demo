"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import type { Reward } from "@/data/rewards";

export function RewardGallery({ reward }: { reward: Reward }) {
  const initialIndex = Math.max(0, reward.gallery.indexOf(reward.heroImage));
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeImage = reward.gallery[activeIndex] ?? reward.heroImage;

  return (
    <>
      <div className="relative overflow-hidden rounded-md bg-forest-900">
        <div className="relative h-[520px] md:h-[560px]">
          <Image
            key={activeImage}
            src={activeImage}
            alt={`${reward.title} メイン画像 ${activeIndex + 1}`}
            fill
            priority={activeIndex === initialIndex}
            className="image-cover opacity-75 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/34 to-transparent" />
          <div className="absolute left-6 top-8 max-w-xl text-white md:left-10 md:top-16">
            <div className="mb-5 flex flex-wrap gap-2">
              {reward.tags.map((tag) => (
                <span key={tag} className="rounded bg-forest-800/90 px-3 py-1 text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="jp-serif text-3xl leading-[1.55] md:text-5xl">{reward.title}</h1>
            <p className="mt-5 text-lg font-bold">寄付金額　{reward.amount}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border border-white/70 px-4 py-1">1泊2食付</span>
              <span className="rounded-full border border-white/70 px-4 py-1">ペア宿泊券</span>
              <span className="rounded-full border border-white/70 px-4 py-1">温泉</span>
              <span className="rounded-full border border-white/70 px-4 py-1">絶景</span>
            </div>
            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-forest-900 shadow-soft">
              <Heart className="h-5 w-5 text-gold" />
              お気に入りに追加
            </button>
          </div>
          <div className="absolute right-5 top-5 rounded-full bg-black/70 px-3 py-1 text-sm font-bold text-white">
            {activeIndex + 1} / {reward.gallery.length}
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
        {reward.gallery.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image + index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`motion-card relative h-20 overflow-hidden rounded-md border-2 shadow-sm transition md:h-24 ${
                isActive ? "border-gold ring-2 ring-gold/30" : "border-white hover:border-gold/70"
              }`}
              aria-label={`${reward.title} ギャラリー ${index + 1}をメイン画像に表示`}
              aria-current={isActive ? "true" : undefined}
            >
              <Image src={image} alt={`${reward.title} ギャラリー ${index + 1}`} fill className="image-cover" />
              <span className={`absolute left-2 top-2 rounded px-2 py-0.5 text-[11px] font-bold ${isActive ? "bg-gold text-white" : "bg-black/55 text-white"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
