'use client';

import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/project";

export default function ProjectsPage() {
  const projects = PROJECTS;

  return (
    <div className="relative min-h-screen px-4 md:px-8 lg:px-16 py-6 w-full max-w-[1440px] mx-auto overflow-hidden">
      <h1 className="text-[rgb(var(--color-primary))] mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold">
        Наши Проекты
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <article 
            key={p.id} 
            className="group flex flex-col bg-white shadow-sm border border-gray-100 rounded-[32px] overflow-hidden transition-all 
                        duration-300 hover:border-[rgb(var(--color-primary))] hover:shadow-md">

            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image 
                src={p.image} 
                alt={p.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            <div className="flex flex-col flex-grow p-5">
              <h2 className="text-xl font-bold text-[rgb(var(--color-primary))] mb-2 line-clamp-2 min-h-[3.5rem]">
                {p.title}
              </h2>

              <p className="text-gray-600 text-sm max-h-[20px] overflow-hidden line-clamp-1 mb-6">
                {p.description}
              </p>

              <div className="mt-auto flex justify-center w-full">
                <Link
                  href={`/projects/${p.id}`}
                  className="flex items-center justify-center min-w-[160px] px-6 py-3 rounded-full border border-[rgb(var(--color-primary))] 
                    text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white transition-colors duration-300 gap-2">
                  <span className="font-medium">Подробнее</span>
                  <Image 
                    src="/angle-right.svg" 
                    alt="arrow" 
                    width={20} 
                    height={20} 
                    className="brightness-0 group-hover:brightness-100 transition-all "
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 