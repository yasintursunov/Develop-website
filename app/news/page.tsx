import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllNews } from "@/lib/data";
import TextTranslate from "@/components/animations/TextTranslate"; 
import CardTranslate from "@/components/animations/CardTranslate"; 

export default function NewsPage() {
  const news = getAllNews();

  return (
    <div className="relative min-h-screen px-4 md:px-8 lg:px-16 py-6 w-full max-w-[1440px] mx-auto overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        <h1 className="text-[rgb(var(--color-primary))] mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold">
          <TextTranslate y="100%" durationIn="1.5" delay="0.4">
            News
          </TextTranslate>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <CardTranslate key={item.id} y="50px" delay={0.2 + i * 0.4} durationIn="1.5">
              <Link
                href={`/news/${item.id}`}
                className="group flex flex-col rounded-[32px] overflow-hidden shadow-sm transition-all duration-300
                           bg-white border border-gray-100 hover:border-[rgb(var(--color-primary))] hover:shadow-md h-full"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-col flex-grow px-6 py-6 transition-colors duration-300 group-hover:bg-[rgb(var(--color-primary))]">
                  <h2 className="text-lg md:text-xl font-bold mb-3 text-black group-hover:text-white line-clamp-2 min-h-[3.5rem]">
                    {item.title}
                  </h2>

                  <p className="text-sm text-[rgb(var(--color-gray))] group-hover:text-white/90 leading-relaxed overflow-hidden line-clamp-2 max-h-[45px]">
                    {item.excerpt || item.description}
                  </p>

                  <div className="mt-6 flex items-center text-[rgb(var(--color-primary))] group-hover:text-white font-medium text-sm">
                    Read more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </CardTranslate>
          ))}
        </div>
      </div>
    </div>
  );
}