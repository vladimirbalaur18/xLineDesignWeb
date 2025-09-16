import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Services from "./components/Services";

// Dynamically import components to avoid server-side rendering of client components
const Hero = dynamic(() => import("./components/Hero"));
const Projects = dynamic(() => import("./components/Projects"));
const WhyUsInteractive = dynamic(() => import("./components/WhyUsInteractive"));
const About = dynamic(() => import("./components/About"));

const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));

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
  return (
    <div className="min-h-screen font-sans ">
      <main id="main-content" role="main">
        <section aria-label="Hero">
          <Hero />
        </section>
        <section aria-label="Despre noi">
          <About />
        </section>
        <section aria-label="Proiecte">
          <Projects />
        </section>
        <section aria-label="De ce noi">
          <WhyUsInteractive />
        </section>
        <section aria-label="Servicii">
          <Services />
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
