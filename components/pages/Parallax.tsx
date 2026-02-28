'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextTranslate from '../animations/TextTranslate'
import CardTranslate from '../animations/CardTranslate'
import { useRouter } from "next/navigation";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Parallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null) 
  const layer2Ref = useRef<HTMLDivElement>(null) 
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const ctx = gsap.context(() => {
      // Ana Arka Plan
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      //  Yardımcı Görseller
      gsap.to(layer1Ref.current, {
        y: -150,
        x: -50,
        rotation: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
        },
      })

      gsap.to(layer2Ref.current, {
        y: -250,
        x: 50,
        rotation: -10,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1.5,
        },
      })

      ScrollTrigger.refresh();
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      
      className={`relative min-h-[120vh] w-full overflow-hidden flex items-center justify-center transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

      <div ref={bgRef} className='absolute inset-0 z-0 h-[120%] top-[-20%]'>
        <Image 
          src='/123.jpg'
          alt='background'
          fill 
          priority
          onLoadingComplete={() => ScrollTrigger.refresh()}
          className="object-cover opacity-60" />

        <div className='absolute inset-0 bg-gradient-to-b from-[rgb(var(--color-primary))] via-transparent to-[rgb(var(--color-primary))]' />
      </div>

      <div 
        ref={layer1Ref}
        className='absolute left-[10%] top-[20%] z-10 hidden lg:block w-80 h-60 rounded-2xl overflow-hidden border border-white/10 shadow-xl'>
        <Image src='/1.png' alt='detail1' fill className='object-cover' onLoadingComplete={() => ScrollTrigger.refresh()} />
      </div>

      <div 
        ref={layer2Ref}
        className='absolute right-[10%] bottom-[15%] z-10 hidden lg:block w-120 h-80 rounded-2xl overflow-hidden shadow-2xl'>
        <Image src='/qwert.jpg' alt='detail2' fill className='object-cover opacity-80' onLoadingComplete={() => ScrollTrigger.refresh()} />
      </div>

      <div className='relative z-20 text-center px-4 max-w-[90vw] mx-auto'>
        <CardTranslate durationIn="1.5" delay="0.2" y="100%" start="top 80%" watch>
          <h1 className="text-6xl md:text-[clamp(60px,12vw,180px)] font-bold tracking-tighter leading-[0.85]">
          <span className="block overflow-visible">
              <span className="inline-block text-white whitespace-normal wrap-break-word ">Develop</span>
          </span>

          <span className="block overflow-visible mt-3 md:mt-8">  
              <span className="inline-block text-[rgb(var(--color-primary))] whitespace-normal break-words">Digital Agency</span>
          </span>
        </h1>
        </CardTranslate>

        <div className='mt-12 flex flex-col items-center gap-6'>
          <div className='w-24 h-[1px] bg-[rgb(var(--color-primary))] scale-x-0 animate-expand' />
          <p className='text-lg md:text-3xl font-light text-white/90 max-w-2xl'>
            <TextTranslate y="100%" durationIn="2" delay="0.6">
              Your reliable partner in real estate
            </TextTranslate>
          </p>
          
          <button onClick={() => router.push(`/about`)} 
          className='mt-10 px-8 py-3 border text-white border-white/20 rounded-full backdrop-blur-md hover:bg-white/20 hover:text-[rgb(var(--color-primary))] transition-all cursor-pointer'>
              Explore More
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 1.5s forwards 0.8s;
        }
      `}</style>
    </section>
  )
}

export default Parallax