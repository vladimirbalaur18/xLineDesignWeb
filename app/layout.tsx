import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "./components/toaster";
import RootScreenLoader from "./RootScreenLoader";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XLine Design",
  description:
    "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
  openGraph: {
    title: "XLine Design",
    description:
      "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
    url: "https://xlinedesign.md",
    siteName: "XLine Design",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
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
        <Providers>
          <RootScreenLoader>{children}</RootScreenLoader>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
