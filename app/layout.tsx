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
  openGraph: {
    title: "Sokorro",
    description: "Your Data Center Advisory and IT Infrastructure Partner",
    url: "https://sokorro.com", // Replace with your actual domain
    siteName: "Sokorro",
    images: [
      {
        url: "/sk-logo.png", // Using your existing logo
        width: 1200,
        height: 630,
        alt: "Sokorro Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sokorro",
    description: "Your Data Center Advisory and IT Infrastructure Partner",
    images: ["/sk-logo.png"],
    creator: "@sokorro", // Replace with your Twitter handle
  },
  icons: {
    // Favicon
    icon: '/favicon.ico',
    // Apple Touch Icon
    apple: '/apple-touch-icon.png',
    // Other icons
    shortcut: ['/favicon-16x16.png', '/favicon-32x32.png'],
    // For Android/PWA
    other: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
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
