import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/atoms/navbar/Navbar";

export const metadata: Metadata = {
  title: "Brilliahib",
  description:
    "Software Engineer. I like learning new things even though my hobby is just playing Tiktok.",
};

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakartasans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} antialiased scroll-smooth`}
    >
      <body>
        <main className="min-h-screen font-jakartasans max-w-2xl mx-auto py-12 md:py-24 md:px-0 px-6">
          {children}
          <Navbar />
        </main>
      </body>
    </html>
  );
}
