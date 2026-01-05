'use client'

import React from 'react'
import Image from 'next/image'

function Parallax() {
  return (

    <div className='relative w-full h-[850px]  overflow-hidden'>
      
      <div className='absolute inset-0 z-0'>
        <Image 
          src='/sabum-logo.png'
          alt='background'
          fill 
          priority
          className="object-cover opacity-60 blur-md" 
        />
      </div>

      

      <div className='relative top-119 z-10 text-center'>
        <h1 className='text-5xl md:text-[156px] font-bold text-[rgb(var(--color-primary))] drop-shadow-lg'>
          SABUM
        </h1>
        <p className='text-lg mt-2 font-medium opacity-90'>
          Ваш надежный партнер в недвижимости
        </p>
      </div>
      
    </div>
  )
}

export default Parallax