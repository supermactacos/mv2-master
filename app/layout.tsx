import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";

const avantGardeBk = localFont({
  src: "../public/ITCAvantGardePro-Bk.otf",
  variable: "--font-avantgarde-bk",
});

const avantGardeBold = localFont({
  src: "../public/ITCAvantGardePro-Bold.otf",
  variable: "--font-avantgarde-bold",
});

export const metadata: Metadata = {
  title: "Sokorro",
  description: "Your Data Center Advisory and IT Infrastructure Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${avantGardeBk.variable} ${avantGardeBold.variable} flex flex-col min-h-screen bg-[#ebfc72] h-full`}>
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
