import ClientOnly from "./components/ClientOnly";
import dynamic from "next/dynamic";
import Services from "./components/Services";
import PropertyForSale from "./components/PropertyForSale";
import RootScreenLoader from "./RootScreenLoader";

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

//TODO: out of scope for now
// const Services = dynamic(() => import("./components/Services"));
// const Team = dynamic(() => import("./components/Team"));
// const PropertyForSale = dynamic(() => import("./components/PropertyForSale"));

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans ">
      {/* <CustomCursor /> */}
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Projects />
        {/* <ProjectGallery /> */}
        {/* <PropertyForSale /> */}
        {/* <Team /> */}
        <Contact />
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
}
