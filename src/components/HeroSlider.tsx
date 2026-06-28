"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { image: "/images/hero-yatsugatake-lake.jpg", label: "八ヶ岳・蓼科の自然", title: "湖と山に包まれる旅" },
  { image: "/images/rewards/role-01-main-ryokan-pair.png", label: "温泉・旅館", title: "旅館で過ごす返礼品体験" },
  { image: "/images/rewards/resort-hotel-guests.png", label: "ホテルステイ", title: "高原リゾートで寛ぐ宿泊券" },
  { image: "/images/rewards/role-02-experience-dining.png", label: "お食事・グルメ", title: "ペアで味わう地元食材の会席料理" },
  { image: "/images/rewards/shirakaba-kayak-pair.png", label: "自然体験", title: "白樺湖で楽しむアクティビティ" }
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] min-h-[560px] md:h-[680px]">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${index === active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== active}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="image-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/78 via-forest-900/32 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/22 via-transparent to-transparent" />
        <div className="container-shell absolute inset-x-0 top-20 text-white md:top-28">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex rounded-full border border-white/50 bg-white/12 px-4 py-1 text-xs font-bold tracking-[0.12em] backdrop-blur">
              {slides[active].label}
            </p>
            <h1 className="jp-serif max-w-[760px] text-[24px] leading-[1.75] sm:text-4xl md:text-6xl">
              <span className="block whitespace-nowrap">ちのしの自然に包まれる、</span>
              <span className="block">特別なひととき</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-9 md:text-lg">
              <span className="block">ふるさと納税で、ちのしの旅を贈りませんか。</span>
              <span className="block">心に残る体験と、</span>
              <span className="block">おもてなしをお届けします。</span>
            </p>
            <Link
              href="/rewards"
              className="animate-soft-pulse mt-8 inline-flex items-center gap-5 rounded-full bg-kinari px-9 py-4 font-bold text-gold shadow-soft"
            >
              返礼品を探す
              <span className="text-xl">›</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 right-[10%] hidden h-36 w-36 place-items-center rounded-full border border-gold/40 bg-kinari/90 text-center text-sm font-bold leading-7 text-forest-900 shadow-soft lg:grid">
          ちのしの
          <br />
          厳選された
          <br />
          体験型返礼品
        </div>
        <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${index === active ? "w-10 bg-white" : "w-4 bg-white/45"}`}
              aria-label={`${slide.label}へ切り替え`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
