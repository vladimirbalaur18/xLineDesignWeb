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
  title: "XLine Design",
  description:
    "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
  openGraph: {
    title: "XLine Design",
    description:
      "Servicii de design interior personalizate pentru proiecte particulare și comerciale",

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
        <RootScreenLoader>
          <Providers>
            <Header />
            {children}
            <Toaster />
          </Providers>
        </RootScreenLoader>
      </body>
    </html>
  );
}
