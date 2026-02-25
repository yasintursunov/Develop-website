'use client'
import React from 'react';
import Image from 'next/image';
import  { useRouter } from 'next/navigation';
import CardTranslate from '../animations/CardTranslate';
import TextTranslate from '../animations/TextTranslate';

export default function BottomNav() {
  const router = useRouter();
  return (
    <footer id="contacts" className="relative w-full bg-[rgb(var(--color-primary))] text-white overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Image
          src="/navbar-bg.svg"
          alt=""
          width={750}
          height={750}
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'left ',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <TextTranslate y="100%" durationIn="1" delay="0.2">
            <div>
              <h2 className="text-[36px] font-bold mb-3">
                Sales departments
              </h2>

              <div className="flex items-center gap-2">
                <Image
                  src="/location.svg"
                  alt="location icon"
                  width={18}
                  height={18}
                  className="block"
                />
                <p className="text-[15px] m-0">
                  14 Tottenham Road, London, England.
                </p>
                
              </div>

              

            </div>
          </TextTranslate>

          <div className="flex flex-col gap-6">
            <div className="w-full h-55 bg-white overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              />
            </div>

            <TextTranslate y="100%" durationIn="1" delay="0.2">
              <div className="grid grid-cols-3 md:grid-cols-4  gap-2 text-[14px]">
                <div>
                  <p className="font-semibold mb-2">Work schedule</p>
                  <p>Mon - Sat: 09:00–18:00</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Contact Us</p>
                  <p>+1 234 567 890</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Email</p>
                  <button className="">
                     asd@info.com
                  </button>
                  
                </div>

                <div className="">
                  <p className="font-semibold mb-2">Social networks</p>
                  <div className="flex gap-3">
                    <button onClick={() => router.push('https://www.telegram.com')}
                    className="hover:scale-110  duration-300">
                      <Image 
                        src="/telegram.svg"
                        alt="Telegram"
                        width={24}
                        height={24}
                      />
                    </button>

                    <button onClick={() => router.push('https://www.instagram.com')}
                    className="hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/instagram.svg"
                        alt="Instagram"
                        width={24}
                        height={24}
                      />
                    </button>

                    <button onClick={() => router.push('https://www.youtube.com')}
                    className="hover:scale-110  duration-300">
                      <Image
                        src="/youtube.svg"
                        alt="YouTube"
                        width={24}
                        height={24}
                      />
                    </button>

                    <button onClick={() => router.push('https://www.facebook.com')}
                    className="hover:scale-110  duration-300">
                      <Image
                        src="/facebook.svg"
                        alt="Facebook" 
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>

                </div>
              </div>
            </TextTranslate>
          </div>
        </div>

        {/* <div className="relative z-10 max-w-content mx-auto mt-2">
        <div className="flex items-center justify-between text-[8px] lg:text-[12px] text-[rgb(var(--color-gray))] opacity-60">
            <span>© 2025 Yasin Tursunov. Design From 0 to Website.</span>
            <span>Design and Creator Yasin Tursunov</span>
        </div>
        </div> */}

      </div>
    </footer>
  );
}
