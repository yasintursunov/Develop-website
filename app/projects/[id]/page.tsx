import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/project";
import { Project } from "@/types/project";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const projectId = Number(id);

  const project: Project | undefined = PROJECTS.find((p) => p.id === projectId);

  if (!project) return notFound();

  return (

    <div className="relative min-h-screen px-4 md:px-8 lg:px-16 py-6 w-full max-w-[1440px] mx-auto overflow-hidden">
      
      <div className="relative z-10">
        <h1 className="text-[rgb(var(--color-primary))] mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold">
          Наши Проекты
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={80}
            height={80}
            className="rounded-md w-12 h-12 md:w-20 md:h-20 object-cover"
          />
          <div>
            <p className="text-md">Название</p>
            <h2 className="text-[20px] md:text-[26px] text-[rgb(var(--color-primary))] font-semibold">
              {project.title}
            </h2>
          </div>
          
          <div className="hidden md:block w-px h-14 bg-[rgb(var(--color-gray))] mx-2 rounded" />
          
          <div>
            <p className="text-md">Цена</p>
            <h2 className="text-[20px] md:text-[26px] text-[rgb(var(--color-primary))] font-semibold">
              {project.price}
            </h2>
          </div>


          
          <div className="ml-auto md:ml-auto w-full md:w-auto flex flex-col-center items-center md:items-center 
                          justify-center gap-2 mt-4 md:mt-0 ">
            <h2 className="text-[18px] md:text-[20px] text-[rgb(var(--color-primary))] font-medium px-0 md:px-4">
              Свяжитесь с нами
            </h2>
            <div className="flex gap-2 items-center flex-wrap">
              <a href="https://t.me/sabum_realty" target="_blank" rel="noopener noreferrer">
                <Image src="/telegram-act.svg" alt="telegram" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
              </a>
              <a href="https://instagram.com/sabum_realty" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram-act.svg" alt="instagram" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
              </a>
              <a href="https://facebook.com/sabum_realty" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook-act.svg" alt="facebook" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
              </a>
              <a href="https://mail.ru/sabum_realty" target="_blank" rel="noopener noreferrer">
                <Image src="/mail-act.svg" alt="mail" width={20} height={20} className="w-4 h-4 md:w-6 md:h-6" />
              </a>
              <div className="border border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] rounded-[30px] py-2 
                              px-4 md:px-6 font-semibold ml-0 md:ml-4 ">
                +998 90 123 45 67
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[16px] md:text-[18px] text-black w-full leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-6 md:gap-12 py-6 text-center">
            <div>
              <h2 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">{project.floor}</h2>
              <p className="text-[rgb(var(--color-gray))]">Этажей</p>
            </div>
            <div>
              <h2 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">{project.balcony}</h2>
              <p className="text-[rgb(var(--color-gray))]">Балконов</p>
            </div>
            <div>
              <h2 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">{project.rooms}</h2>
              <p className="text-[rgb(var(--color-gray))]">Комнат</p>
            </div>
            <div>
              <h2 className="text-[24px] md:text-[32px] text-[rgb(var(--color-primary))] font-semibold">{project.square}</h2>
              <p className="text-[rgb(var(--color-gray))]">м², площадь проекта</p>
            </div>
          </div>
          <div className="border-b border-[rgb(var(--color-gray))] w-full mb-8" />
        </div>


        <div className="relative w-full h-[300px] md:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-[rgb(var(--color-primary))] mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold">
            О ПРОЕКТЕ
          </h2>
          <p className="text-[16px] md:text-[18px] text-black w-full leading-relaxed mb-8">
            {project.description2}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ">
          
          <div className="relative card shadow-sm h-auto overflow-hidden md:overflow-visible">
            <div className="relative h-[220px] md:h-[280px] lg:h-[320px] overflow-visible">
              <div className="absolute inset-0 -left-[0%] bottom-8 w-[150%] rounded-[30px] overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="px-4">
              <h2 className="text-[20px] md:text-[24px] text-[rgb(var(--color-primary))] font-semibold pb-4">
                Maqtov
              </h2>
              <p className="text-black">{project.description}</p>
            </div>
          </div>

         <div className="relative card bg-[rgb(var(--color-primary))] shadow-sm overflow-hidden md:overflow-visible mt-16 h-auto">
          <div className="px-4 ">
              <h2 className="text-[20px] md:text-[24px] text-[rgb(var(--color-surface))] font-semibold py-4">
                Maqtov
              </h2>
              <p className="text-black">{project.description}</p>
            </div>   
          <div className="relative h-[250px] md:h-[280px] lg:h-[320px]">    
          </div>
          <div className="absolute bottom-0 -left-[48%] w-[150%] h-[270px] rounded-[30px] overflow-hidden  z-10">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover object-bottom"
            />
          </div>
          
        </div>


        </div>
        

        <div className="text-sm text-[rgb(var(--color-gray))]  mx-auto text-end">
          {new Date(project.createdAt).toLocaleString()}
        </div>
      </div>

      <div className="absolute right-0 top-[950px] z-0 pointer-events-none w-full max-w-[1000px] select-none hidden md:block">
        <Image
          src="/project-bg.svg"
          alt="background design"
          width={1000}
          height={800}
          priority
          className="w-full h-auto object-contain object-bottom-right opacity-40"
        />
      </div>
    </div>
  );
}
