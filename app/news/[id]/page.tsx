import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/data";
import { News } from "@/types/news";
import TextTranslate from "@/components/animations/TextTranslate";
import CardTranslate from "@/components/animations/CardTranslate";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { id } = await params; 
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
      <TextTranslate y="100%" durationIn="1.5" delay="0.4">
        <h1 className="text-[rgb(var(--color-primary))] mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold">
          {news.title}
        </h1>
      </TextTranslate>

      <CardTranslate y="50%" durationIn="1.5" delay="0.4">
        <div className="relative w-full h-[420px] mb-6">
          <Image
            src={news.images[0]}
            alt={news.title}
            fill
            className="object-cover rounded-[16px]"
            priority
          />
        </div>
      </CardTranslate>

      <TextTranslate y="100%" durationIn="1.5" delay="0.4">
        <p className="text-black">
          {news.excerpt}
        </p>
      </TextTranslate>
      {/* <p className="text-gray-700">{news.content}</p> */}
      
      <CardTranslate y="100%" durationIn="1.5" delay="0.4">
        <div className="relative max-w-[1000px] h-[420px] mb-6 mt-6">
          <Image
            src={news.images[1]}
            alt={news.title}
            fill
            className="object-cover rounded-[16px]"
            priority
          />
        </div>
      </CardTranslate>
      <TextTranslate y="100%" durationIn="1.5" delay="0.2">
        <p className="text-black">
          {news.excerpt}
        </p>
      </TextTranslate>
      <div className="text-sm text-[rgb(var(--color-gray))] mt-8 mx-auto text-end">
          {new Date(news.createdAt ?? Date.now()).toLocaleString()}
        </div>

    </div>
  );
}
