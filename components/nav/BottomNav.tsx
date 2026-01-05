import React from 'react';
import Image from 'next/image';

export default function BottomNav() {
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
          <div>
            <h2 className="text-[36px] font-bold mb-6">
              Отделы продаж
            </h2>

            <p className="text-[15px] ">
              Какой нибуд улица, Город Коканд,<br />
              Фергана, Узбекистан
            </p>

          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full h-55 bg-white overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=70.940103%2C40.519284&z=17&l=map&pt=70.938619,40.519259,pm2rdm"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4  gap-2 text-[14px]">
              <div>
                <p className="font-semibold mb-2">График работы</p>
                <p>Пн–пт: 09:00–19:00</p>
                <p>Вс: 10:00–19:00</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Телефон</p>
                <p>+998 99 777 66 55</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Почта</p>
                <p className="mt-2">asd@info.com</p>
              </div>

              <div className="">
                <p className="font-semibold mb-2">Мы в соц. сетях</p>
                <div className="flex gap-3">
                    <Image 
                        src="/telegram.svg"
                        alt="Telegram"
                        width={24}
                        height={24}/>
                    <Image
                        src="/instagram.svg"
                        alt="Instagram"
                        width={24}
                        height={24}/>
                    <Image
                        src="/youtube.svg"
                        alt="YouTube"
                        width={24}
                        height={24}/>
                    
                    <Image
                        src="/facebook.svg"
                        alt="Facebook" 
                        width={24}
                        height={24}/>
                    
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-content mx-auto mt-2">
        <div className="flex items-center justify-between text-[8px] lg:text-[12px] text-[rgb(var(--color-gray))] opacity-60">
            <span>© 2025 Sabum. Все права защищены.</span>
            <span>Design and Creator Yasin Tursunov</span>
        </div>
        </div>

      </div>
    </footer>
  );
}
