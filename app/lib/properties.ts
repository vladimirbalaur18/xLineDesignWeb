export interface PropertyImage {
  url: string;
  description?: string;
  focusPoint?: { x: number; y: number };
}

export interface PropertyStoryChapter {
  title: string;
  narrative: string;
  image: string;
  focusPoint?: { x: number; y: number };
  duration: number;
  voiceOver?: string;
}

export interface PropertySection {
  name: string;
  title: string;
  content: string;
  isVisible: boolean;
  order: number;
  type: "property-detail";
  images: string[]; // 1 or 2 Unsplash or other image URLs
}

export interface Property {
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  address?: string;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  yearBuilt?: number;
  features?: string[];
  category: "interiorDesign" | "architecture" | "landscapeDesign";
  location?: string;
  year: string;
  image: string;
  tags?: string[];
  heroImages: PropertyImage[];
  galleryImages: PropertyImage[];
  storyChapters: PropertyStoryChapter[];
  sections: PropertySection[];
}

export const properties: Property[] = [
  {
    slug: "apartament-exfactor",
    title: "Apartament Exfactor",
    description: "",
    fullDescription: "",
    address: "Chișinău",
    price: "",
    area: 85,
    yearBuilt: 2025,
    features: [],
    category: "interiorDesign",
    location: "Chisinau",
    year: "2025",
    image:
      "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/1.jpg",
    tags: [],
    heroImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/2.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/3.jpg",
        focusPoint: { x: 60, y: 40 },
      },
    ],
    galleryImages: [
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/1.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/2.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/3.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/4.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/5.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/6.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/7.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/8.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/9.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/10.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/11.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/12.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/13.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/14.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/15.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/16.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/17.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/18.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/19.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/20.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/21.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/22.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/23.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/24.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/25.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/26.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/27.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/28.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/29.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/30.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/31.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/32.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/33.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/34.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/35.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/36.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/37.jpg",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/38.jpg",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/39.jpg",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/40.jpg",
        focusPoint: { x: 50, y: 70 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/41.jpg",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://p6a7dqe3nols6dlo.public.blob.vercel-storage.com/projects/102/42.jpg",
        focusPoint: { x: 40, y: 60 },
      },
    ],
    storyChapters: [],
    sections: [],
  },
  {
    slug: "the-vertex",
    title: "The Vertex",
    description:
      "Un complex de birouri premiat, cu un design inovator și spații de lucru colaborative.",
    fullDescription:
      "The Vertex redefinește spațiul de lucru modern, oferind birouri deschise, zone de relaxare și facilități de ultimă generație pentru profesioniști. Designul său inovator încurajează colaborarea și creativitatea.",
    address: "456 Avenue Centrală, Toronto",
    price: "$4,100,000",
    bedrooms: 0,
    bathrooms: 8,
    area: 8500,
    yearBuilt: 2022,
    features: [
      "Săli de conferință inteligente",
      "Cafenea internă",
      "Parcare pentru biciclete",
      "Spații verzi pe acoperiș",
      "Sistem de ventilație avansat",
    ],
    category: "interiorDesign",
    location: "Toronto",
    year: "2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    tags: ["Birou", "Minimalist", "Colaborativ"],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Fațada principală a complexului The Vertex.",
        focusPoint: { x: 55, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        description: "Spațiu de lucru deschis cu lumină naturală.",
        focusPoint: { x: 60, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        description: "Zonă de relaxare cu mobilier modern.",
        focusPoint: { x: 45, y: 60 },
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Fațada principală a complexului The Vertex.",
        focusPoint: { x: 55, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        description: "Spațiu de lucru deschis cu lumină naturală.",
        focusPoint: { x: 60, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        description: "Zonă de relaxare cu mobilier modern.",
        focusPoint: { x: 45, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Terasa verde de pe acoperiș.",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        description: "Săli de conferință cu tehnologie avansată.",
        focusPoint: { x: 40, y: 70 },
      },
    ],
    storyChapters: [
      {
        title: "Arrival at The Vertex",
        narrative:
          "Descoperă un spațiu de lucru unde inovația și colaborarea sunt la ele acasă. Fațada impresionantă a The Vertex reflectă filosofia modernă de lucru, cu linii curbe și materiale sustenabile care se integrează perfect în peisajul urban al Torontoului.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 55, y: 40 },
        duration: 7000,
      },
      {
        title: "Collaborative Workspaces",
        narrative:
          "Spațiile de lucru deschise sunt proiectate pentru a încuraja colaborarea și creativitatea. Lumină naturală abundentă, mobilier ergonomic și tehnologie de ultimă generație creează un mediu ideal pentru inovație și productivitate.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        focusPoint: { x: 60, y: 50 },
        duration: 6000,
      },
      {
        title: "Wellness Zones",
        narrative:
          "Zonele de relaxare și wellness sunt integrate strategic în întregul complex. De la spații de meditație până la sali de fitness, The Vertex înțelege importanța echilibrului între muncă și sănătate.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        focusPoint: { x: 45, y: 60 },
        duration: 5000,
      },
      {
        title: "Green Innovation",
        narrative:
          "Terasă verde de pe acoperiș nu este doar un spațiu de relaxare, ci și un simbol al angajamentului față de sustenabilitate. Grădinile verticale și sistemele de reciclare a apei demonstrează că inovația și responsabilitatea ambientală pot merge mână în mână.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 50, y: 30 },
        duration: 4000,
      },
    ],
    sections: [
      {
        name: "Innovative Design",
        title: "TEST2 DESIGN",
        content:
          "The Vertex is a masterpiece of modern architecture, featuring a unique design that promotes collaboration and creativity. Its fluid forms and sustainable materials make it a landmark of innovative design in Toronto.",
        isVisible: true,
        order: 1,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c",
          "https://images.unsplash.com/photo-1497366216548-37526070297c",
        ],
      },
      {
        name: "Smart Workspaces",
        title: "SMART2 WORKSPACES",
        content:
          "Equipped with the latest technology, the workspaces at The Vertex are designed to enhance productivity and comfort. From adjustable standing desks to advanced conferencing systems, every detail is tailored for the modern professional.",
        isVisible: true,
        order: 2,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        ],
      },
      {
        name: "Sustainable Features",
        title: "2 FEATURES",
        content:
          "The Vertex is committed to sustainability, featuring green roofs, energy-efficient systems, and a design that minimizes environmental impact. It's a building that cares for the planet as much as its occupants.",
        isVisible: true,
        order: 3,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        ],
      },
    ],
  },
  {
    slug: "casa-prism",
    title: "Casa Prism",
    description:
      "O clădire rezidențială angulară care joacă cu lumina și umbrele pe parcursul zilei.",
    fullDescription:
      "Casa Prism este o locuință modernă, cu linii geometrice îndrăznețe și feronerie ample care permit luminii să danseze în interior. Fiecare cameră oferă o perspectivă unică asupra grădinii și a peisajului urban.",
    address: "789 Strada Luminii, Berlin",
    price: "$1,800,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    yearBuilt: 2021,
    features: [
      "Feronerie panoramice",
      "Grădină privată",
      "Garaj dublu",
      "Sistem de iluminat inteligent",
      "Terasă acoperită",
    ],
    category: "architecture",
    location: "Berlin",
    year: "2021",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: ["Modern", "Geometric", "Concentrat pe lumină"],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Exteriorul geometric al Casei Prism.",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        description: "Living luminos cu vedere spre grădină.",
        focusPoint: { x: 50, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Dormitor principal cu feronerie mari.",
        focusPoint: { x: 40, y: 60 },
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Exteriorul geometric al Casei Prism.",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        description: "Living luminos cu vedere spre grădină.",
        focusPoint: { x: 50, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Dormitor principal cu feronerie mari.",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Baie modernă cu finisaje premium.",
        focusPoint: { x: 30, y: 70 },
      },
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        description: "Terasă acoperită pentru relaxare.",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [
      {
        title: "Geometry in Light",
        narrative:
          "Casa Prism te întâmpină cu forme îndrăznețe și lumini jucăușe. Fiecare unghi și fiecare suprafață a fost calculată pentru a maximiza interacțiunea cu lumina naturală, creând un spectacol vizual care se schimbă pe parcursul zilei.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 60, y: 40 },
        duration: 9000,
      },
      {
        title: "Living with Nature",
        narrative:
          "Spațiul de living se deschide către grădina privată, creând o conexiune perfectă între interior și exterior. Feronerie panoramice permit luminii să inunde spațiul, în timp ce materialele naturale creează o atmosferă caldă și primitoare.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 50, y: 50 },
        duration: 7000,
      },
      {
        title: "Private Retreats",
        narrative:
          "Dormitoarele sunt proiectate ca retrageri private, cu feronerie strategice care oferă intimitate și lumină în același timp. Fiecare cameră are propria sa personalitate, reflectată în detaliile arhitecturale și în modul în care interacționează cu lumina.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 40, y: 60 },
        duration: 6000,
      },
      {
        title: "Outdoor Sanctuary",
        narrative:
          "Terasă acoperită extinde spațiul de viață în aer liber, oferind un refugiu perfect pentru relaxare și divertisment. Designul integrează perfect elementele naturale cu confortul modern, creând o experiență de viață unică.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 50, y: 30 },
        duration: 5000,
      },
    ],
    sections: [
      {
        name: "Architectural Brilliance",
        title: "ARCHITECTURAL BRILLIANCE",
        content:
          "Casa Prism este o capodoperă a arhitecturii moderne, cu linii geometrice îndrăznețe și o interacțiune unică cu lumina. Fiecare cameră este proiectată pentru a oferi o experiență vizuală și spațială deosebită.",
        isVisible: true,
        order: 1,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        ],
      },
      {
        name: "Nature Integration",
        title: "NATURE INTEGRATION",
        content:
          "Grădina privată și terasele acoperite sunt integrate perfect în designul casei, oferind nu doar frumusețe estetică, ci și o conexiune profundă cu natura. Este un spațiu unde poți trăi în armonie cu mediul înconjurător.",
        isVisible: true,
        order: 2,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        ],
      },
      {
        name: "Luxury Finishes",
        title: "LUXURY FINISHES",
        content:
          "Fiecare detaliu al Casei Prism, de la feronerie la finisaje, este ales pentru a reflecta un standard înalt de lux și confort. Materialele premium și atenția la detalii sunt evidente în fiecare colț al casei.",
        isVisible: true,
        order: 3,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        ],
      },
    ],
  },
  {
    slug: "villa-serenity",
    title: "Villa Serenity",
    description:
      "O vilă de lux integrată perfect în peisajul natural, cu design biofilic și spații de relaxare.",
    fullDescription:
      "Villa Serenity reprezintă armonia perfectă între lux și natură. Proiectată cu principii biofilice, vila integrează elemente naturale în fiecare aspect al designului, creând o experiență de viață care sănătoșește și inspiră.",
    address: "321 Drumul Pădurii, Vancouver",
    price: "$3,200,000",
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    yearBuilt: 2024,
    features: [
      "Piscină naturală",
      "Spa și saună",
      "Cinema privat",
      "Bucătărie gourmet",
      "Grădină organică",
      "Sistem de energie solară",
    ],
    category: "landscapeDesign",
    location: "Vancouver",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    tags: ["Biofilic", "Lux", "Sustenabil"],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        description: "Exteriorul elegant al Villa Serenity integrat în natură.",
        focusPoint: { x: 50, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Living spațios cu elemente naturale integrate.",
        focusPoint: { x: 60, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Bucătărie gourmet cu insulă centrală.",
        focusPoint: { x: 45, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        description: "Piscină naturală cu design organic.",
        focusPoint: { x: 40, y: 70 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Spa și saună pentru relaxare completă.",
        focusPoint: { x: 30, y: 80 },
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        description: "Exteriorul elegant al Villa Serenity integrat în natură.",
        focusPoint: { x: 50, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Living spațios cu elemente naturale integrate.",
        focusPoint: { x: 60, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Bucătărie gourmet cu insulă centrală.",
        focusPoint: { x: 45, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        description: "Piscină naturală cu design organic.",
        focusPoint: { x: 40, y: 70 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Spa și saună pentru relaxare completă.",
        focusPoint: { x: 30, y: 80 },
      },
    ],
    storyChapters: [
      {
        title: "Nature's Embrace",
        narrative:
          "Villa Serenity te întâmpină cu o armonie perfectă între arhitectură și natură. Fiecare element al designului a fost ales pentru a crea o conexiune profundă cu mediul natural, de la materialele organice până la orientarea strategică a ferestrelor.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        focusPoint: { x: 50, y: 40 },
        duration: 8000,
      },
      {
        title: "Living in Harmony",
        narrative:
          "Spațiul de living este centrul spiritual al casei, unde elementele naturale se împletesc cu confortul modern. Pădurea devine o extensie a spațiului interior, iar lumina naturală dansează prin cameră pe parcursul zilei.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 60, y: 50 },
        duration: 7000,
      },
      {
        title: "Culinary Excellence",
        narrative:
          "Bucătăria gourmet este proiectată pentru pasionații de gastronomie, cu echipamente de ultimă generație și o insulă centrală care devine punctul focal al întâlnirilor sociale. Vederea spre grădina organică inspiră creativitatea culinară.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 45, y: 60 },
        duration: 6000,
      },
      {
        title: "Wellness Sanctuary",
        narrative:
          "Spa-ul și sauna oferă o experiență de relaxare completă, în timp ce piscina naturală permite o conexiune directă cu elementele naturale. Fiecare detaliu este proiectat pentru a promova sănătatea și echilibrul interior.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 40, y: 70 },
        duration: 5000,
      },
    ],
    sections: [
      {
        name: "Biofilic Design",
        title: "BIOFILIC DESIGN",
        content:
          "Villa Serenity este un exemplu strălucit de design biofilic, integrând natura în fiecare aspect al arhitecturii. De la grădinile organice la feronerie mari, fiecare detaliu este ales pentru a crea o conexiune profundă cu mediul înconjurător.",
        isVisible: true,
        order: 1,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        ],
      },
      {
        name: "Luxury Features",
        title: "LUXURY FEATURES",
        content:
          "Vila oferă un standard de lux de neegalat, cu facilități precum piscină naturală, spa și cinema privat. Fiecare zonă a fost proiectată pentru a oferi confort și eleganță, creând un refugiu perfect pentru relaxare.",
        isVisible: true,
        order: 2,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        ],
      },
      {
        name: "Sustainable Living",
        title: "SUSTAINABLE LIVING",
        content:
          "Cu un sistem de energie solară și materiale organice, Villa Serenity este dedicată unui stil de viață sustenabil. Este un loc unde poți trăi în armonie cu natura, fără a compromite confortul sau luxul.",
        isVisible: true,
        order: 3,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        ],
      },
    ],
  },
  {
    slug: "the-glass-house",
    title: "The Glass House",
    description:
      "O casă modernă cu pereți de sticlă care elimină barierele între interior și exterior.",
    fullDescription:
      "The Glass House reprezintă vârful inovației în designul rezidențial, cu pereți de sticlă care creează o experiență de viață transparentă și conectată cu natura. Fiecare cameră oferă priveliști panoramice asupra peisajului înconjurător.",
    address: "654 Strada Transparenței, Los Angeles",
    price: "$2,800,000",
    bedrooms: 4,
    bathrooms: 3,
    area: 3800,
    yearBuilt: 2023,
    features: [
      "Pereți de sticlă retractabili",
      "Sistem de climatizare inteligent",
      "Iluminat LED integrat",
      "Terasă flotantă",
      "Garaj automat",
      "Sistem de securitate avansat",
    ],
    category: "architecture",
    location: "Los Angeles",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    tags: ["Transparent", "Modern", "Conectat cu natura"],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Exteriorul transparent al The Glass House.",
        focusPoint: { x: 55, y: 45 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        description: "Living cu pereți de sticlă retractabili.",
        focusPoint: { x: 65, y: 55 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Dormitor cu vedere panoramică.",
        focusPoint: { x: 50, y: 65 },
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Exteriorul transparent al The Glass House.",
        focusPoint: { x: 55, y: 45 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        description: "Living cu pereți de sticlă retractabili.",
        focusPoint: { x: 65, y: 55 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Dormitor cu vedere panoramică.",
        focusPoint: { x: 50, y: 65 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Bucătărie deschisă cu insulă centrală.",
        focusPoint: { x: 40, y: 75 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        description: "Terasă flotantă cu vedere asupra orașului.",
        focusPoint: { x: 60, y: 35 },
      },
    ],
    storyChapters: [
      {
        title: "Transparency Redefined",
        narrative:
          "The Glass House elimină complet barierele între interior și exterior, creând o experiență de viață unică. Pereții de sticlă retractabili permit transformarea completă a spațiului, făcând ca natura să devină o parte integrantă a vieții de zi cu zi.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 55, y: 45 },
        duration: 9000,
      },
      {
        title: "Living Without Boundaries",
        narrative:
          "Spațiul de living se extinde natural către exterior, cu pereții de sticlă care dispar complet pentru a crea o experiență de viață în aer liber. Mobila modernă și tehnologia inteligentă se integrează perfect în acest concept transparent.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 65, y: 55 },
        duration: 8000,
      },
      {
        title: "Sleeping Under the Stars",
        narrative:
          "Dormitoarele oferă o experiență de somn unică, cu tavanul de sticlă care permite privirea spre cerul înstelat. Sistemul de iluminat inteligent creează atmosfera perfectă pentru relaxare, în timp ce pereții de sticlă oferă intimitate când este necesar.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 50, y: 65 },
        duration: 7000,
      },
      {
        title: "Floating in Space",
        narrative:
          "Terasă flotantă pare să plutească deasupra peisajului, oferind priveliști spectaculoase asupra Los Angeles-ului. Designul minimalist și materialele premium creează o experiență de viață care transcende limitele tradiționale ale arhitecturii rezidențiale.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 60, y: 35 },
        duration: 6000,
      },
    ],
    sections: [
      {
        name: "Seamless Indoor-Outdoor",
        title: "SEAMLESS INDOOR-OUTDOOR",
        content:
          "The Glass House este proiectată pentru a elimina barierele dintre interior și exterior, oferind o experiență de viață fluidă și conectată cu natura. Pereții de sticlă retractabili și terasele flotante creează o continuitate perfectă între spațiile interioare și cele exterioare.",
        isVisible: true,
        order: 1,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        ],
      },
      {
        name: "Modern Luxury",
        title: "MODERN LUXURY",
        content:
          "Fiecare detaliu al The Glass House reflectă un standard înalt de lux modern, cu materiale premium, tehnologie de vârf și un design care pune accent pe confort și estetică. Este un spațiu unde poți experimenta cu adevărat luxul contemporan.",
        isVisible: true,
        order: 2,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        ],
      },
      {
        name: "Panoramic Living",
        title: "PANORAMIC LIVING",
        content:
          "Cu feronerie mari și un design deschis, fiecare cameră din The Glass House oferă priveliști spectaculoase asupra peisajului înconjurător. Este un loc unde poți trăi în mijlocul frumuseții naturale, fără a compromite confortul modern.",
        isVisible: true,
        order: 3,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        ],
      },
    ],
  },
  {
    slug: "urban-oasis",
    title: "Urban Oasis",
    description:
      "Un complex rezidențial cu grădini suspendate și spații verzi integrate în designul urban.",
    fullDescription:
      "Urban Oasis redefinește conceptul de viață urbană prin integrarea grădinilor suspendate și a spațiilor verzi în fiecare aspect al designului. Acest complex oferă locuitorilor săi o experiență de viață care combină confortul urban cu frumusețea naturii.",
    address: "987 Avenue Verdelui, Melbourne",
    price: "$1,900,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 2400,
    yearBuilt: 2022,
    features: [
      "Grădini suspendate",
      "Parcare pentru biciclete",
      "Spații comune verzi",
      "Sistem de reciclare",
      "Iluminat solar",
      "Comunitate sustenabilă",
    ],
    category: "landscapeDesign",
    location: "Melbourne",
    year: "2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    tags: ["Urban", "Verde", "Comunitate"],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Exteriorul verde al Urban Oasis cu grădini suspendate.",
        focusPoint: { x: 50, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        description: "Living cu acces direct la grădina privată.",
        focusPoint: { x: 55, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        description: "Dormitor cu vedere spre grădina suspendată.",
        focusPoint: { x: 45, y: 60 },
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Exteriorul verde al Urban Oasis cu grădini suspendate.",
        focusPoint: { x: 50, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        description: "Living cu acces direct la grădina privată.",
        focusPoint: { x: 55, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        description: "Dormitor cu vedere spre grădina suspendată.",
        focusPoint: { x: 45, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Spațiile comune verzi ale complexului.",
        focusPoint: { x: 60, y: 30 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        description: "Terasă privată cu grădină verticală.",
        focusPoint: { x: 40, y: 70 },
      },
    ],
    storyChapters: [
      {
        title: "Green Living in the City",
        narrative:
          "Urban Oasis demonstrează că viața urbană poate fi în armonie perfectă cu natura. Grădinile suspendate și spațiile verzi integrate în design creează o experiență de viață unică, unde locuitorii pot sănătoșească în mijlocul orașului.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 50, y: 40 },
        duration: 8000,
      },
      {
        title: "Private Garden Retreat",
        narrative:
          "Fiecare apartament are acces la propria grădină privată, unde locuitorii pot cultiva plante, relaxa sau organiza întâlniri cu prietenii. Designul integrează perfect spațiile interioare cu zonele exterioare, creând o continuitate naturală.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        focusPoint: { x: 55, y: 50 },
        duration: 7000,
      },
      {
        title: "Community Spaces",
        narrative:
          "Spațiile comune verzi sunt proiectate pentru a încuraja interacțiunea socială și sănătoșirea comunității. De la grădini comunitare până la zone de relaxare, fiecare element promovează un stil de viață sustenabil și conectat.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 60, y: 30 },
        duration: 6000,
      },
      {
        title: "Sustainable Innovation",
        narrative:
          "Sistemul de reciclare și iluminatul solar demonstrează angajamentul față de sustenabilitate. Fiecare detaliu al designului a fost ales pentru a minimiza impactul asupra mediului, creând un model pentru viața urbană de viitor.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        focusPoint: { x: 40, y: 70 },
        duration: 5000,
      },
    ],
    sections: [
      {
        name: "Urban Gardens",
        title: "URBAN GARDENS",
        content:
          "Grădinile suspendate sunt inima Urban Oasis, oferind nu doar frumusețe estetică, ci și un spațiu pentru cultivarea plantelor și relaxare. Aceste grădini sunt un exemplu de integrare a naturii în viața urbană.",
        isVisible: true,
        order: 1,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c",
        ],
      },
      {
        name: "Sustainable Communities",
        title: "SUSTAINABLE COMMUNITIES",
        content:
          "Urban Oasis este mai mult decât un complex rezidențial; este o comunitate sustenabilă dedicată unui stil de viață sănătos și responsabil. Spațiile comune verzi și sistemele de reciclare sunt doar câteva dintre caracteristicile care promovează sustenabilitatea.",
        isVisible: true,
        order: 2,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        ],
      },
      {
        name: "Green Innovation",
        title: "GREEN INNOVATION",
        content:
          "Designul inovator al Urban Oasis integrează cele mai recente progrese în materie de sustenabilitate, de la grădini verticale la iluminat solar. Este un loc unde inovația și responsabilitatea ambientală merg mână în mână.",
        isVisible: true,
        order: 3,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c",
        ],
      },
    ],
  },
  {
    slug: "minimalist-haven",
    title: "Minimalist Haven",
    description:
      "O casă cu design minimalist care pune accentul pe funcționalitate și estetică simplă.",
    fullDescription:
      "Minimalist Haven reprezintă esența designului modern, cu spații curate, linii simple și o paletă de culori neutre care creează o atmosferă calmă și primitoare. Fiecare element a fost ales cu grijă pentru a servi atât funcționalității, cât și esteticii.",
    address: "147 Strada Simplității, Stockholm",
    price: "$1,600,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    yearBuilt: 2023,
    features: [
      "Design minimalist",
      "Mobilă integrată",
      "Sistem de stocare inteligent",
      "Iluminat indirect",
      "Materiale naturale",
      "Spații multifuncționale",
    ],
    category: "interiorDesign",
    location: "Stockholm",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    tags: ["Minimalist", "Funcțional", "Calm"],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        description: "Exteriorul minimalist al Minimalist Haven.",
        focusPoint: { x: 50, y: 45 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Living cu design curat și spațios.",
        focusPoint: { x: 60, y: 55 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Bucătărie integrată cu mobilă minimalistă.",
        focusPoint: { x: 45, y: 65 },
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        description: "Exteriorul minimalist al Minimalist Haven.",
        focusPoint: { x: 50, y: 45 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Living cu design curat și spațios.",
        focusPoint: { x: 60, y: 55 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Bucătărie integrată cu mobilă minimalistă.",
        focusPoint: { x: 45, y: 65 },
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        description: "Dormitor cu design simplu și elegant.",
        focusPoint: { x: 40, y: 75 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Spațiu de lucru integrat în living.",
        focusPoint: { x: 55, y: 35 },
      },
    ],
    storyChapters: [
      {
        title: "Less is More",
        narrative:
          "Minimalist Haven demonstrează că frumusețea adevărată se află în simplitate. Fiecare element al designului a fost ales cu grijă pentru a servi unui scop specific, eliminând orice exces și creând un spațiu care promovează claritatea mentală.",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        focusPoint: { x: 50, y: 45 },
        duration: 8000,
      },
      {
        title: "Functional Beauty",
        narrative:
          "Spațiul de living combină funcționalitatea cu estetica, cu mobilă integrată care maximizează spațiul disponibil. Paleta de culori neutre creează o atmosferă calmă, în timp ce materialele naturale aduc caldura în spațiu.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 60, y: 55 },
        duration: 7000,
      },
      {
        title: "Smart Storage",
        narrative:
          "Sistemul de stocare inteligent este integrat discret în design, oferind soluții creative pentru organizarea spațiului. Fiecare cameră are propriile soluții de stocare, menținând curățenia și ordinea în întregul spațiu.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 45, y: 65 },
        duration: 6000,
      },
      {
        title: "Multifunctional Living",
        narrative:
          "Spațiile sunt proiectate pentru a fi multifuncționale, adaptându-se nevoilor diverse ale locuitorilor. De la spațiu de lucru integrat până la zone de relaxare, fiecare zonă servește mai multor scopuri, maximizând eficiența spațiului.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 55, y: 35 },
        duration: 5000,
      },
    ],
    sections: [
      {
        name: "Minimalist Design",
        title: "MINIMALIST DESIGN",
        content:
          "Minimalist Haven este o celebrare a designului minimalist, cu linii curate, o paletă de culori neutre și o atenție deosebită la detalii. Fiecare cameră este proiectată pentru a oferi un spațiu deschis și aerisit, unde funcționalitatea se îmbină perfect cu estetica.",
        isVisible: true,
        order: 1,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        ],
      },
      {
        name: "Functional Spaces",
        title: "FUNCTIONAL SPACES",
        content:
          "Spațiile din Minimalist Haven sunt gândite pentru a fi extrem de funcționale, cu soluții inteligente de stocare și mobilă integrată. Fiecare zonă a fost optimizată pentru a oferi confort și utilitate, fără a compromite stilul.",
        isVisible: true,
        order: 2,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        ],
      },
      {
        name: "Natural Materials",
        title: "NATURAL MATERIALS",
        content:
          "Utilizarea materialelor naturale, cum ar fi lemnul și piatra, adaugă o notă de căldură și autenticitate în fiecare cameră. Aceste materiale nu doar că îmbunătățesc estetica, dar contribuie și la un mediu interior sănătos.",
        isVisible: true,
        order: 3,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        ],
      },
    ],
  },
  {
    slug: "coastal-retreat",
    title: "Coastal Retreat",
    description:
      "O vilă de lux pe coastă care combină eleganța modernă cu frumusețea naturală a mării.",
    fullDescription:
      "Coastal Retreat oferă o experiență de viață de lux pe coastă, cu design modern care se integrează perfect în peisajul marin. Fiecare cameră oferă priveliști spectaculoase asupra oceanului, creând o atmosferă de relaxare și inspirație.",
    address: "258 Drumul Mării, Malibu",
    price: "$4,500,000",
    bedrooms: 6,
    bathrooms: 5,
    area: 5200,
    yearBuilt: 2024,
    features: [
      "Piscină infinită",
      "Acces privat la plajă",
      "Terasă panoramică",
      "Cinema privat",
      "Spa și saună",
      "Heliport privat",
    ],
    category: "landscapeDesign",
    location: "Malibu",
    year: "2024",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", // replaced main image
    tags: ["Lux", "Coastal", "Panoramic"],
    heroImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        description: "Exteriorul elegant al Coastal Retreat pe coastă.",
        focusPoint: { x: 55, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Living cu vedere panoramică asupra oceanului.",
        focusPoint: { x: 65, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Master suite cu acces direct la terasă.",
        focusPoint: { x: 50, y: 60 },
      },
    ],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        description: "Exteriorul elegant al Coastal Retreat pe coastă.",
        focusPoint: { x: 55, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Living cu vedere panoramică asupra oceanului.",
        focusPoint: { x: 65, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Master suite cu acces direct la terasă.",
        focusPoint: { x: 50, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "Piscină infinită cu vedere asupra mării.",
        focusPoint: { x: 45, y: 70 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Terasă panoramică pentru divertisment.",
        focusPoint: { x: 60, y: 30 },
      },
    ],
    storyChapters: [
      {
        title: "Ocean's Embrace",
        narrative:
          "Coastal Retreat te întâmpină cu priveliști spectaculoase asupra oceanului, unde fiecare zi începe cu răsăritul soarelui și se termină cu apusul pe orizont. Designul modern se integrează perfect în peisajul marin, creând o experiență de viață de neegalat.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 55, y: 40 },
        duration: 9000,
      },
      {
        title: "Living with the Sea",
        narrative:
          "Spațiul de living se deschide complet către ocean, cu pereți de sticlă care permit luminii să inunde spațiul. Sunetul valurilor devine parte integrantă din experiența de viață, creând o atmosferă de relaxare constantă.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 65, y: 50 },
        duration: 8000,
      },
      {
        title: "Master Sanctuary",
        narrative:
          "Master suite-ul oferă o experiență de lux de neegalat, cu acces direct la terasă privată și priveliști panoramice asupra oceanului. Designul elegant și materialele premium creează un refugiu perfect pentru relaxare și intimitate.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 60 },
        duration: 7000,
      },
      {
        title: "Infinity Pool Experience",
        narrative:
          "Piscina infinită pare să se împletescă cu oceanul, creând o experiență vizuală spectaculoasă. Terasa panoramică oferă spațiul perfect pentru divertisment și relaxare, cu priveliști care se extind până la orizont.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 45, y: 70 },
        duration: 6000,
      },
    ],
    sections: [
      {
        name: "Coastal Elegance",
        title: "COASTAL ELEGANCE",
        content:
          "Coastal Retreat este un exemplu strălucit de eleganță costieră, cu un design care se integrează perfect în peisajul marin. Fiecare cameră oferă priveliști spectaculoase asupra oceanului, iar terasele panoramice sunt ideale pentru a savura apusurile de soare.",
        isVisible: true,
        order: 1,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        ],
      },
      {
        name: "Luxury Coastal Living",
        title: "LUXURY COASTAL LIVING",
        content:
          "Vila oferă un stil de viață de lux pe coastă, cu facilități precum piscină infinită, spa și cinema privat. Este un loc unde poți experimenta cu adevărat eleganța și confortul vieții la malul mării.",
        isVisible: true,
        order: 2,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        ],
      },
      {
        name: "Sustainable Coastal Design",
        title: "SUSTAINABLE COASTAL DESIGN",
        content:
          "Designul sustenabil al Coastal Retreat integrează cele mai  recente progrese în materie de eficiență energetică și utilizare a resurselor naturale. Este un loc unde poți trăi în armonie cu natura, bucurându-te în același timp de confortul modern.",
        isVisible: true,
        order: 3,
        type: "property-detail",
        images: [
          "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        ],
      },
    ],
  },
];
