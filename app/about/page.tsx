import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className="relative min-h-screen px-4 md:px-8 lg:px-16 py-6 w-full max-w-[1440px] mx-auto overflow-hidden">
      <h1 className="text-[rgb(var(--color-primary))] mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold">
        О Компании
      </h1>


      <div className="w-full flex flex-col md:flex-row items-start gap-8 mb-8">

        <div className="w-full md:w-1/3">
          <div className="relative w-full h-[220px] md:h-[300px] rounded-[20px] overflow-hidden shadow-sm">
            <Image
              src="/logo.jpg"
              alt="building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-[20px] md:text-[26px] font-semibold text-[rgb(var(--color-primary))] mb-4">
            We Always Make The Best
          </h2>

          <p className="text-[16px] md:text-[18px] text-black leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quis adipisci quisquam aliquid quas perferendis fuga repellat! Dolorem,
            reiciendis itaque numquam exercitationem repudiandae velit rem tenetur
            dicta repellendus aliquid maiores!
          </p>

          <div className="">

            <div className="flex flex-wrap gap-8 py-4 text-center  ">
              <div className="">
                <h3 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">21</h3>
                <p className="text-[rgb(var(--color-gray))]">Год на рынке</p>
              </div>

              <div className="">
                <h3 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">123</h3>
                <p className="text-[rgb(var(--color-gray))]">Успешных проектов</p>
              </div>

              <div className="">
                <h3 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">123</h3>
                <p className="text-[rgb(var(--color-gray))] ">Блоков</p>
              </div>

              <div className="">
                <h3 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">3123+</h3>
                <p className="text-[rgb(var(--color-gray))]">Счастливых семей</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-8 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3 pr-0 md:pr-4">
          <h2 className="text-[20px] md:text-[26px] font-semibold text-[rgb(var(--color-primary))] mb-4">
            Why Choose Us ?
          </h2>
          <p className="text-[16px] md:text-[18px] text-black max-w-full md:max-w-[400px] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis
            adipisci quisquam aliquid quas perferendis fuga repellat! Dolorem,
            reiciendis itaque numquam exercitationem repudiandae velit rem tenetur dicta
            repellendus aliquid maiores!
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card shadow-sm w-full h-auto py-4 px-4 rounded-[12px] bg-white overflow-hidden">
              <h4 className="text-[18px] md:text-[20px] text-[rgb(var(--color-primary))] font-medium mb-2">Fast Building</h4>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-[rgb(var(--color-gray))]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea dolorum blanditiis et.
              </p>
            </div>

            <div className="card shadow-sm w-full h-auto py-4 px-4 rounded-[12px] bg-white overflow-hidden">
              <h4 className="text-[18px] md:text-[20px] text-[rgb(var(--color-primary))] font-medium mb-2">Carefully Planned</h4>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-[rgb(var(--color-gray))]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea dolorum blanditiis et.
              </p>
            </div>

            <div className="card shadow-sm w-full h-auto py-4 px-4 rounded-[12px] bg-white overflow-hidden">
              <h4 className="text-[18px] md:text-[20px] text-[rgb(var(--color-primary))] font-medium mb-2">Perfect Design</h4>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-[rgb(var(--color-gray))]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea dolorum blanditiis et.
              </p>
            </div>

            <div className="card shadow-sm w-full h-auto py-4 px-4 rounded-[12px] bg-white overflow-hidden">
              <h4 className="text-[18px] md:text-[20px] text-[rgb(var(--color-primary))] font-medium mb-2">Smartly Execute</h4>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-[rgb(var(--color-gray))]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea dolorum blanditiis et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
