'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const SCROLL_THRESHOLD_PERCENT = 5;

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const denom = docHeight > 0 ? docHeight : 1;
      const scrollPercent = (scrollTop / denom) * 100;
      setScrolled(scrollPercent >= SCROLL_THRESHOLD_PERCENT);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  const handleContactsClick = (e: React.MouseEvent) => {
    if (pathname === '/' || pathname === '') {
      e.preventDefault();
      setOpen(false);
      const el = document.getElementById('contacts');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // навигация на корень с хэшем
        router.push('/#contacts');
      }
    } else {
      e.preventDefault();
      setOpen(false);
      router.push('/#contacts');
    }
  };

  return (
    <>

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in
          ${scrolled ? 'top-3 px-4' : 'top-0'}
        `}
      >
        <div
          className={`pointer-events-auto mx-auto transition-all duration-300 ease-in
            ${scrolled
              ? `max-w-content px-2 rounded-[35px] bg-white/30 backdrop-blur-sm shadow-md border border-[rgb(var(--color-border))]`
              : `max-w-full bg-[rgb(var(--color-surface))]`}
            `}
        >
          <div className="flex items-center h-[var(--nav-height-desktop)] px-4">
            <Link href="/" className="text-[20px] font-semibold text-black">
              Logo
            </Link>

            <nav className="ml-auto hidden lg:flex items-center gap-6 text-[rgb(var(--color-primary))]">
              <Link href="/about">О Компании</Link>
              <Link href="/projects">Проекты</Link>
              <Link href="/news">Новости</Link>
              <span className="h-5 w-px bg-[rgb(var(--color-border))]" />
              {/* Контакты — ведут в bottom nav */}
              <Link href="/#contacts" onClick={handleContactsClick}>Контакты</Link>
            </nav>

            <button
              aria-label="menu"
              onClick={() => setOpen(true)}
              className="ml-auto p-2 rounded-md lg:hidden">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <div className="relative h-full w-full bg-white text-[rgb(var(--color-primary))]">
              <div className="flex justify-end p-4">
                <button
                  aria-label="close menu"
                  onClick={() => setOpen(false)}
                  className="text-xl pointer-events-auto">
                  ✕
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center gap-8 text-xl font-medium">
                <Link onClick={() => setOpen(false)} href="/about">О Компании</Link>
                <Link onClick={() => setOpen(false)} href="/projects">Проекты</Link>
                <Link onClick={() => setOpen(false)} href="/news">Новости</Link>

                <Link
                  href="/#contacts"
                  onClick={(e) => {
                    setOpen(false);
                    handleContactsClick(e);
                  }}
                >
                  Контакты
                </Link>

                <div className="flex items-center mt-10 gap-4">
                  <p className="text-[16px] text-black">+998 99 888 77 66</p>
                  <Image src="/Phone.svg" alt="phone icon" width={30} height={30} />
                </div>

                <div className="flex items-center space-x-2 fixed bottom-0 mb-8">
                  <button onClick={() => router.push('https://www.instagram.com')}>
                    <Image
                      src="/instagram-act.svg"
                      alt="Instagram"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                  </button>
                  <button onClick={() => router.push('https://www.telegram.com')}>
                    <Image
                      src="/telegram-act.svg"
                      alt="Telegram"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                  </button>
                  <button onClick={() => router.push('https://www.facebook.com')}>
                    <Image
                      src="/facebook-act.svg"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                  </button>

                  <button onClick={() => router.push('https://www.youtube.com/')}>
                    <Image
                      src="/youtube-act.svg"
                      alt="YouTube"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                    />
                  </button>
                </div>
              </nav>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 object-cover opacity-100 w-125 h-125 pointer-events-none select-none">
              <Image
                src="/MobileBg.svg"
                alt="mobile bg"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        )}
      </header>

      <div className="h-[var(--nav-height-desktop)]" />
    </>
  );
}
