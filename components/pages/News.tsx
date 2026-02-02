"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/types/news";

interface Props {
  items?: News[];
  autoplay?: boolean;
  interval?: number;
}

export default function NewsSlider({ items = [], autoplay = true, interval = 4000 }: Props) {

  const slides = useMemo(
    () =>
      items.flatMap((item) =>
        item.images.map((img) => ({
          newsId: item.id,
          image: img,
          title: item.title,
          excerpt: item.excerpt,
        }))
      ),
    [items]
  );

  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);
  const len = slides.length;

  useEffect(() => {
    if (!autoplay) return;
    if (len <= 1) return;
    timerRef.current = window.setInterval(() => {
      setActive((s) => (s + 1) % len);
    }, interval);
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [len, interval, autoplay]);

  useEffect(() => {
    if (active >= len) setActive(0);
  }, [len, active]);

  if (len === 0) {
    return null;
  }

  const prev = () => {
    setActive((s) => (s - 1 + len) % len);
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const next = () => {
    setActive((s) => (s + 1) % len);
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="w-full text-[rgb(var(--color-primary))] mb-4 md:mb-8 mt-8 md:mt-16 px-4 text-2xl md:text-3xl lg:text-4xl font-semibold md:px-8 lg:px-16 text-left">
        Новости
      </div>

      <div className="relative w-full max-w-[1600px] h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, i) => {
            let offset = i - active;
            if (offset > len / 2) offset -= len;
            if (offset < -len / 2) offset += len;
            const abs = Math.abs(offset);
            const scale = offset === 0 ? 1 : Math.max(0.1, 1 - 0.12 * abs);
            const translateX = offset * 40;
            const zIndex = 50 - abs;

            return (
              <div
                key={`${slide.newsId}-${i}`}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 rounded-[24px] overflow-hidden transition-all duration-300"
                style={{
                  transform: `translateX(${translateX}%) translateX(-50%) translateY(${abs * 6}px) scale(${scale})`,
                  zIndex,
                  width: "70%",
                  maxWidth: 780,
                  height: "85%"
                  
                }}
              >
                <Link href={`/news/${slide.newsId}`} className="relative block w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={i === active}
                    sizes="(max-width: 768px) 90vw, 700px"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-[900px] px-4 text-center">
        <h3 className="text-[16px] md:text-[18px] text-[rgb(var(--color-primary))] mb-2">
          {slides[active]?.title}
        </h3>
        <p className="text-sm md:text-base text-gray-700 max-h-[30px] overflow-hidden line-clamp-1">{slides[active]?.excerpt}</p>

        <div className="mt-4 flex items-center justify-center gap-4 mb-8">
          <Link href={`/news/${slides[active].newsId}`} className="inline-flex items-center gap-2 ">
            Читать полностью
            <Image src="/go.svg" alt="" width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
