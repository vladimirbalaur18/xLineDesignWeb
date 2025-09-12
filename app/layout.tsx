import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "./components/toaster";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Root } from "vaul";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "XLine Design | Arhitectură modernă și design interior în Moldova",
  description:
    "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const mapsPlaceUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_URL;
  const officeLatitude = Number(process.env.NEXT_PUBLIC_OFFICE_LAT);
  const officeLongitude = Number(process.env.NEXT_PUBLIC_OFFICE_LNG);
  const officeElevation = Number(process.env.NEXT_PUBLIC_OFFICE_ELEVATION);
  const fallbackMapUrl = `https://www.google.com/maps?q=${officeLatitude},${officeLongitude}`;
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const email = process.env.NEXT_PUBLIC_BUSINESS_EMAIL;
  const priceRange = process.env.NEXT_PUBLIC_PRICE_RANGE; // e.g., $, $$, $$$
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE;
  const addressLine1 = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LINE1;
  const addressLocality = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_LOCALITY;
  const addressRegion = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_REGION;
  const addressCountry = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS_COUNTRY;

  const socialProfiles = [
    mapsPlaceUrl ?? fallbackMapUrl,
    facebookUrl,
    instagramUrl,
    linkedinUrl,
  ].filter(Boolean);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "XLine Design",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
    ...(email ? { email } : {}),
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "XLine Design",
    url: siteUrl,
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": [
      "LocalBusiness",
      "ProfessionalService",
      "HomeAndConstructionBusiness",
    ],
    name: "XLine Design",
    url: siteUrl,
    description:
      "Servicii de arhitectură și design interior în Republica Moldova, pentru proiecte rezidențiale și comerciale.",
    image: [`${siteUrl}/logo.jpg`],
    logo: `${siteUrl}/logo.png`,
    inLanguage: ["ro", "ru", "en"],
    telephone: businessPhone,
    ...(email ? { email } : {}),
    ...(priceRange ? { priceRange } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: addressLine1,
      addressLocality,
      addressRegion,
      addressCountry,
    },
    areaServed: [
      { "@type": "Country", name: "Republic of Moldova" },
      { "@type": "Country", name: "Romania" },
      { "@type": "City", name: "Chișinău" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
    hasMap: mapsPlaceUrl ?? fallbackMapUrl,
    "@id": `${siteUrl}#localbusiness`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: officeLatitude,
      longitude: officeLongitude,
      elevation: officeElevation,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessPhone,
        ...(email ? { email } : {}),
        contactType: "customer support",
        availableLanguage: ["ro", "ru", "en"],
        areaServed: ["MD", "RO"],
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Design interior",
          alternateName: ["Interior Design", "Дизайн интерьера"],
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Arhitectură",
          alternateName: ["Architecture", "Архитектура"],
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Design peisagistic",
          alternateName: ["Landscape Design", "Ландшафтный дизайн"],
        },
      },
    ],
    knowsAbout: [
      "arhitectură modernă",
      "design interior",
      "design peisagistic",
      "proiecte rezidențiale",
      "proiecte comerciale",
      "Chișinău",
      "Republica Moldova",
    ],
  };
  return (
    <html lang="en" className="dark">
      <head>
        {/* <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}

        <script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          id="ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <header>
            <Header />
          </header>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
