'use client';

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getAllProjects } from "@/lib/data";

function Projects() {
  const project = getAllProjects();
  const router = useRouter();

  return (
    <>
    <div className="">
      <div className="text-[rgb(var(--color-primary))] mb-4 md:mb-8 mt-8 md:mt-16 px-4 text-2xl md:text-3xl lg:text-4xl font-semibold md:px-8 lg:px-16">
        НАШИ ПРОЕКТЫ
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 mb-8 max-w-[1490px]">
        {project.map((item) => (
          <div 
            key={item.id}
            className="group flex flex-col bg-white shadow-sm border border-gray-100 rounded-3xl transition-all duration-300 
                      hover:border-[rgb(var(--color-primary))] hover:shadow-md overflow-hidden">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-grow p-4">
              <h2 className="text-xl font-bold text-[rgb(var(--color-primary))] line-clamp-2 min-h-[2.5rem] ">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm max-h-[20px] overflow-hidden line-clamp-1 mb-4">
                {item.description}
              </p>

              <div className="mt-4 flex justify-center  ">
                <button 
                  onClick={() => router.push(`/projects/${item.id}`)}
                  className="flex items-center justify-center min-w-[160px] px-6 py-3 rounded-full border border-[rgb(var(--color-primary))] 
                    text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white transition-colors duration-300 gap-3">
                  <span className="font-medium text-sm">Подробнее</span>
                  <Image
                    src="/angle-right.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="brightness-0 group-hover:brightness-100 transition-all"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </>
  );
}

export default Projects;