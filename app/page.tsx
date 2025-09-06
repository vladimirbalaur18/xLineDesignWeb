import type { Metadata } from "next";
import Script from "next/script";
import ClientOnly from "./components/ClientOnly";
import dynamic from "next/dynamic";
import Services from "./components/Services";
import PropertyForSale from "./components/PropertyForSale";
import RootScreenLoader from "./components/RootScreenLoader";

// Dynamically import components to avoid server-side rendering of client components
const Hero = dynamic(() => import("./components/Hero"));
const Projects = dynamic(() => import("./components/Projects"));
const WhyUs = dynamic(() => import("./components/WhyUs"));
const ProjectGallery = dynamic(() => import("./components/ProjectGallery"));
const About = dynamic(() => import("./components/About"));

const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));
const CustomCursor = dynamic(() => import("./components/CustomCursor"));
const LanguageSwitcher = dynamic(() => import("./components/LanguageSwitcher"));

export const metadata: Metadata = {
  title: "XLine Design | Arhitectură modernă și design interior în Moldova",
  description:
    "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "XLine Design | Arhitectură modernă și design interior în Moldova",
    description:
      "Servicii de design interior personalizate pentru proiecte particulare și comerciale",
    url: "/",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

//TODO: out of scope for now
// const Services = dynamic(() => import("./components/Services"));
// const Team = dynamic(() => import("./components/Team"));
// const PropertyForSale = dynamic(() => import("./components/PropertyForSale"));

export default function HomePage() {
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
    <div className="min-h-screen font-sans ">
      {/* <CustomCursor /> */}
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(webSiteJsonLd)}
      </Script>
      <Script
        id="ld-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessJsonLd)}
      </Script>
      <main id="main-content" role="main">
        <section aria-label="Hero">
          <Hero />
        </section>
        <section aria-label="Proiecte">
          <Projects />
        </section>
        <section aria-label="De ce noi">
          <WhyUs />
        </section>
        <section aria-label="Servicii">
          <Services />
        </section>
        <section aria-label="Despre noi">
          <About />
        </section>

        {/* <section aria-label="Galerie proiecte">
          <ProjectGallery />
        </section> */}
        {/* <section aria-label="Proprietăți de vânzare">
          <PropertyForSale />
        </section> */}
        {/* <section aria-label="Echipă">
          <Team />
        </section> */}
        <section aria-label="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
      {/* <LanguageSwitcher /> */}
    </div>
  );
}
