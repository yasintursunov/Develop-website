import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/data";
import { News } from "@/types/news";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { id } = await params; // ← ВАЖНО
  const newsId = Number(id);

  if (Number.isNaN(newsId)) {
    notFound();
  }

  const news: News | undefined = getNewsById(newsId);

  if (!news) {
    notFound();
  }

  return (
    <div className="relative min-h-screen px-4 md:px-8 lg:px-16 py-6 w-full max-w-[1440px] mx-auto overflow-hidden">
      <h1 className="text-[rgb(var(--color-primary))] mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold">{news.title}</h1>

      <div className="relative w-full h-[420px] mb-6">
        <Image
          src={news.images[0]}
          alt={news.title}
          fill
          className="object-cover rounded-[16px]"
          priority
        />
      </div>
      <p className="text-black">
        {news.excerpt}
      </p>

      <p className="text-gray-700">{news.content}</p>

      <div className="relative max-w-[1000px] h-[420px] mb-6 mt-6">
        <Image
          src={news.images[1]}
          alt={news.title}
          fill
          className="object-cover rounded-[16px]"
          priority
        />
      </div>
      
      <p className="text-black">
        {news.excerpt}
      </p>

      <div className="text-sm text-[rgb(var(--color-gray))] mt-8 mx-auto text-end">
          {new Date(news.createdAt ?? Date.now()).toLocaleString()}
        </div>

    </div>
  );
}
