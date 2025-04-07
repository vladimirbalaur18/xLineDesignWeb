import ClientOnly from './components/ClientOnly';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid server-side rendering of client components
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const Projects = dynamic(() => import('./components/Projects'), { ssr: false });
const ProjectGallery = dynamic(() => import('./components/ProjectGallery'), { ssr: false });
const PropertyForSale = dynamic(() => import('./components/PropertyForSale'), { ssr: false });
const About = dynamic(() => import('./components/About'), { ssr: false });
const Services = dynamic(() => import('./components/Services'), { ssr: false });
const Team = dynamic(() => import('./components/Team'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });
const CustomCursor = dynamic(() => import('./components/CustomCursor'), { ssr: false });

export default function HomePage() {
  return (
    <ClientOnly>
      <div className="min-h-screen font-sans">
        <CustomCursor />
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