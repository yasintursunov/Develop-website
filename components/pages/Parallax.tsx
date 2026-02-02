'use client'

import React from 'react'
import Image from 'next/image'

function Parallax() {
  return (

    <div className='relative h-screen w-full h-212.5  overflow-hidden'>
      
      <div className='absolute inset-0 z-0'>
        <Image 
          src='/qwert.jpg'
          alt='background'
          fill 
          priority
          className="object-cover opacity-100 blur-sm" 
        />
      </div>

      

      <div className='relative top-119 z-10 text-center'>
        <h1 className='text-5xl md:text-[156px] font-bold text-[rgb(var(--color-primary))] drop-shadow-lg'>
          My Home
        </h1>
        <p className='text-lg mt-8 font-medium '>
          Ваш надежный партнер в недвижимости
        </p>
      </div>
      
    </div>
  )
}

export default Parallax