'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Communication() {
  const [chatOpen, setChatOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="fixed right-4 bottom-6 z-100 transition delay-150 duration-300 ease-in-out">
      <div className="flex flex-col gap-3 items-end">
      
        <div className="">
          {chatOpen ? (
            <div className="flex items-center space-x-2 ">
                <button
                  onClick={() => setChatOpen(false)}
                  className="p-1 rounded-full transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 bg-white/30 backdrop-blur-sm "
                  aria-label="close chat"
                >
                    <Image
                      src="/close.svg"
                      alt="Close"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                </button>

                <button
                  onClick={() => router.push('https://www.instagram.com')}
                  className="p-1 rounded-full transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 bg-white/30 backdrop-blur-sm"
                >
                    <Image
                      src="/instagram-act.svg"
                      alt="Instagram"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                </button>

                <button
                  onClick={() => router.push('https://www.telegram.com')}
                  className="p-1 rounded-full transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 bg-white/30 backdrop-blur-sm"
                >
                    <Image
                      src="/telegram-act.svg"
                      alt="Telegram"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                </button>

                <button
                  onClick={() => router.push('https://www.facebook.com')}
                  className="p-1 rounded-full transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 bg-white/30 backdrop-blur-sm"
                >
                    <Image
                      src="/facebook-act.svg"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                </button>

                <button
                  onClick={() => router.push('https://www.youtube.com/')}
                  className="p-1 rounded-full transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1 bg-white/30 backdrop-blur-sm"
                >
                    <Image
                      src="/youtube-act.svg"
                      alt="YouTube"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                </button>
            </div>

          ) : (
            <button
              onClick={() => setChatOpen(!chatOpen)}
              aria-label="open chat"
              className="p-0 rounded-full focus:outline-none transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1"
            >
              <Image
                src="/com-chat-2.svg"
                alt="Chat"
                width={64}
                height={64}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
            </button>
          )}
        </div>

        {/* PHONE */}
        <div className="relative">
          <button
            onClick={() => setPhoneOpen(!phoneOpen)}
            aria-label="toggle phone"
            className="p-0 rounded-full focus:outline-none transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1"
          >
            <Image
              src="/com-phone-2.svg"
              alt="Phone"
              width={64}
              height={64}
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </button>

          {phoneOpen && (
            <div className="absolute right-full mr-3 bottom-1/2 translate-y-1/2 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-primary))]
                rounded-2xl px-4 py-2 text-sm text-[rgb(var(--color-primary))] shadow-xl whitespace-nowrap">
              +1 234 567 890
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Communication;
