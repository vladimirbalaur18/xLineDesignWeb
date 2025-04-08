import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "./components/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XLine Design",
  description:
    "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <meta property="og:image" content="public/logo.jpg" />
      <meta property="og:title" content="XLine Design" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Servicii de design interior personalizate pentru proiecte particulare și comerciale"
      />
      <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head>

      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
