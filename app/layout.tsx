import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "./components/toaster";
import RootScreenLoader from "./RootScreenLoader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Root } from "vaul";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "XLine Design | Arhitectură modernă și design interior în Moldova",
  description:
    "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#000000",
  openGraph: {
    title: "XLine Design | Arhitectură modernă și design interior în Moldova",
    description:
      "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
    url: "/",
    siteName: "XLine Design",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  keywords: [
    "arhitectură modernă",
    "design interior",
    "design interior în Moldova",
    "design interior în Chișinău",
    "design interior în Republica Moldova",
    "arhitectură Moldova",
    "design interior Chișinău",
    "arhitect Chișinău",
    "design peisagistic Moldova",
    "casă modernă Moldova",
    "vile de lux",
    "amenajare apartament Chișinău",
    "arhitectură sustenabilă",
    "modern architecture",
    "interior design",
    "interior design in Moldova",
    "interior design in Chișinău",
    "interior design in the Republic of Moldova",
    "architecture Moldova",
    "interior design Chișinău",
    "architect Chișinău",
    "landscape design Moldova",
    "modern house Moldova",
    "luxury villas",
    "apartment decoration Chișinău",
    "sustainable architecture",
    "современная архитектура",
    "дизайн интерьера",
    "дизайн интерьера в Молдове",
    "дизайн интерьера в Кишиневе",
    "дизайн интерьера в Республике Молдова",
    "архитектура Молдова",
    "дизайн интерьера Кишинев",
    "архитектор Кишинев",
    "ландшафтный дизайн Молдова",
    "современный дом Молдова",
    "роскошные виллы",
    "оформление квартиры Кишинев",
    "устойчивая архитектура",
  ],
  twitter: {
    card: "summary_large_image",
    title: "XLine Design | Arhitectură modernă și design interior în Moldova",
    description:
      "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}
      </head>
      <body className={inter.className}>
        <RootScreenLoader>
          <Providers>
            <header>
              <Header />
            </header>
            {children}
            <Toaster />
          </Providers>
        </RootScreenLoader>
      </body>
    </html>
  );
}
