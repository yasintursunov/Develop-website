"use client";
import React from "react";

export default function GlobalLoader({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[rgb(var(--color-background))] bg-opacity-95 backdrop-blur-md">
      {/* İsteğe bağlı: CSS Keyframes'i doğrudan buraya koyuyoruz ki çalışmama şansı kalmasın */}
      <style jsx>{`
        @keyframes fillAnimation {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .custom-progress-bar {
          animation: fillAnimation 0.5s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-[300px] md:max-w-[400px] px-6">
        {/* Arka plan çizgisi */}
        <div className="relative w-full h-[3px] bg-gray-200/20 overflow-hidden rounded-full">
          {/* Dolan çizgi */}
          <div className="custom-progress-bar absolute top-0 left-0 h-full bg-[rgb(var(--color-primary))] shadow-[0_0_15px_rgb(var(--color-primary))]" />
        </div>

        {/* Yazı */}
        <div className="mt-6 text-center">
          <p className="text-[rgb(var(--color-primary))] text-md font-bold tracking-[0.4em] uppercase animate-pulse">
            Loading
          </p>
        </div>
      </div>
    </div>
  );
}