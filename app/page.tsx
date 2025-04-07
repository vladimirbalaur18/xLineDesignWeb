import ClientOnly from "./components/ClientOnly";
import dynamic from "next/dynamic";

// Dynamically import components to avoid server-side rendering of client components
const Header = dynamic(() => import("./components/Header"));
const Hero = dynamic(() => import("./components/Hero"));
const Projects = dynamic(() => import("./components/Projects"));
const ProjectGallery = dynamic(() => import("./components/ProjectGallery"));
const PropertyForSale = dynamic(() => import("./components/PropertyForSale"));
const About = dynamic(() => import("./components/About"));
const Services = dynamic(() => import("./components/Services"));
const Team = dynamic(() => import("./components/Team"));
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));
const CustomCursor = dynamic(() => import("./components/CustomCursor"));

export default function HomePage() {
  return (
    <ClientOnly>
      <div className="min-h-screen font-sans">
        {/* <CustomCursor /> */}
        <Header />
        <main>
          <Hero />
          <Projects />
          <ProjectGallery />
          <PropertyForSale />
          <About />
          <Services />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </ClientOnly>
  );
}
