'use client'

import React from 'react'
import Image from 'next/image'
import TextTranslate from '../animations/TextTranslate'

function Parallax() {
  return (
    <div className='relative h-screen w-full h-212.5 overflow-hidden'>
      
      <div className='absolute inset-0 z-0'>
        <Image 
          src='/qwert.jpg'
          alt='background'
          fill 
          priority
          className="object-cover opacity-100 blur-sm" 
        />
      </div>

      <div className='relative top-100 z-10 text-center'>
        
        <h1 className='text-5xl md:text-[156px] font-bold text-[rgb(var(--color-primary))] drop-shadow-lg'>
          <TextTranslate y="100%" durationIn="1" delay="0.2">
            Develop Digital Agency 
          </TextTranslate>
        </h1>
        
        <p className='text-xl mt-16 font-medium '>
          <TextTranslate y="100%" durationIn="2" delay="0.4">
            Your reliable partner in real estate
          </TextTranslate>
        </p>
      </div>
      
    </div>
  )
}

export default Parallax