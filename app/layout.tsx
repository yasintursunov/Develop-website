import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/nav/TopNav";
import BottomNav from "@/components/nav/BottomNav";
import Communication from "@/components/com/Communication";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabum",
  description: "Sabum development.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={poppins.variable}>
      <body className="bg-[rgb(var(--color-background))] font-poppins">
        <a href="#content" className="skip-link ">Перейти к содержимому</a>
        <TopNav />
        <Communication/>
        <main id="content" className="min-h-screen max-w-content mx-auto">
          {children}
        </main>
        <BottomNav/>
      </body>
    </html>
  );
}
