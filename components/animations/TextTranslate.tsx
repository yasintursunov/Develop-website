'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextProps {
  children: React.ReactNode;
  durationIn?: string | number;
  delay?: string | number;
  y?: string;
  start?: string;
}

export default function TextTranslate({
  children,
  durationIn = "1.2",
  delay = "0",
  y = "100%",
  start = "top 95%"
}: TextProps) {
  const container = useRef(null);
  const textBody = useRef(null);

  useGSAP(() => {
    gsap.from(textBody.current, {
      y: y,
      duration: Number(durationIn),
      delay: Number(delay),
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: start,
        toggleActions: "play none none none",
      }
    });
  }, { scope: container });

  return (
    <span ref={container} className="relative inline-block">
      <span ref={textBody} className="inline-block w-full">
        {children}
      </span>
    </span>
  );
}