'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardProps {
  children: React.ReactNode;
  durationIn?: string | number;
  delay?: string | number;
  y?: string;
  start?: string;
  end?: string;
  watch?: boolean;
}

export default function CardTranslate({
  children,
  durationIn = "1.5",
  delay = "0.4",
  y = "100%",
  start = "-100% bottom",
  end = "top top",
  watch = true
}: CardProps) {
  const cardRef = useRef(null);

  useGSAP(() => {
    if (!watch) return;

    gsap.from(cardRef.current, {
      y: y,
      opacity: 0, 
      duration: Number(durationIn),
      delay: Number(delay),
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: start,
        end: end,
        toggleActions: "play none none none",
      }
    });
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="w-full h-full">
      {children}
    </div>
  );
}