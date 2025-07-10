export interface PropertyImage {
  url: string;
  description?: string;
  focusPoint?: { x: number; y: number };
}

export interface PropertyStoryChapter {
  id: number;
  title: string;
  narrative: string;
  image: string;
  focusPoint?: { x: number; y: number };
  duration: number;
  voiceOver?: string;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  features: string[];
  category: "interiorDesign" | "architecture" | "landscapeDesign";
  location: string;
  year: string;
  image: string;
  tags: string[];
  images: PropertyImage[];
  storyChapters: PropertyStoryChapter[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Turnul Azure Sky",
    description:
      "Un zgârie-nori modern cu caracteristici sustenabile și priveliști panoramice ale orizontului orașului.",
    fullDescription:
      "Turnul Azure Sky este un simbol al inovației și sustenabilității, oferind locuitorilor săi o experiență de viață de neegalat. Fiecare detaliu a fost proiectat pentru a maximiza confortul și eficiența energetică, cu spații luminoase și priveliști spectaculoase asupra orașului.",
    address: "123 Strada Principală, Singapore",
    price: "$2,500,000",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    yearBuilt: 2023,
    features: [
      "Piscină Infinity",
      "Sală de fitness",
      "Parcare subterană",
      "Sistem smart home",
      "Terasă panoramică",
      "Securitate 24/7",
    ],
    category: "interiorDesign",
    location: "Singapore",
    year: "2023",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    tags: ["Sustenabil", "Înalt", "Urban"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        description: "Fațada modernă a Turnului Azure Sky la apus.",
        focusPoint: { x: 50, y: 30 },
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        description: "Holul de intrare cu tavan înalt și iluminat ambiental.",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        description: "Zona de living spațioasă cu vedere panoramică.",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        description: "Dormitor principal cu design minimalist.",
        focusPoint: { x: 30, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        description: "Terasă panoramică cu vedere asupra orașului.",
        focusPoint: { x: 50, y: 70 },
      },
    ],
    storyChapters: [
      {
        id: 1,
        title: "First Impressions",
        narrative:
          "Welcome to Turnul Azure Sky, where architectural brilliance meets modern living. As you step into the grand lobby, the soaring ceilings and ambient lighting create an immediate sense of luxury and sophistication. The building's sustainable design philosophy is evident in every detail, from the energy-efficient lighting to the natural ventilation systems.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
        focusPoint: { x: 50, y: 30 },
        duration: 8000,
      },
      {
        id: 2,
        title: "Living Spaces",
        narrative:
          "The spacious living areas are designed to maximize natural light and city views. Floor-to-ceiling windows frame the stunning Singapore skyline, while the open-concept layout encourages social interaction and family bonding. Premium materials and finishes create an atmosphere of refined elegance.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        focusPoint: { x: 60, y: 40 },
        duration: 7000,
      },
      {
        id: 3,
        title: "Master Suite",
        narrative:
          "The master suite is a private sanctuary offering unparalleled comfort and luxury. The minimalist design philosophy creates a calming atmosphere, while the panoramic views provide a constant connection to the vibrant city below. The en-suite bathroom features premium fixtures and spa-like amenities.",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        focusPoint: { x: 30, y: 50 },
        duration: 6000,
      },
      {
        id: 4,
        title: "Outdoor Living",
        narrative:
          "The private terrace offers an outdoor living experience like no other. Whether enjoying morning coffee or evening cocktails, residents can soak in the breathtaking views of Singapore's iconic skyline. The infinity pool creates a seamless connection between indoor and outdoor living.",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
        focusPoint: { x: 50, y: 70 },
        duration: 5000,
      },
    ],
  },
  {
    id: 2,
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
    images: [
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
        id: 1,
        title: "Arrival at The Vertex",
        narrative:
          "Descoperă un spațiu de lucru unde inovația și colaborarea sunt la ele acasă. Fațada impresionantă a The Vertex reflectă filosofia modernă de lucru, cu linii curbe și materiale sustenabile care se integrează perfect în peisajul urban al Torontoului.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 55, y: 40 },
        duration: 7000,
      },
      {
        id: 2,
        title: "Collaborative Workspaces",
        narrative:
          "Spațiile de lucru deschise sunt proiectate pentru a încuraja colaborarea și creativitatea. Lumină naturală abundentă, mobilier ergonomic și tehnologie de ultimă generație creează un mediu ideal pentru inovație și productivitate.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        focusPoint: { x: 60, y: 50 },
        duration: 6000,
      },
      {
        id: 3,
        title: "Wellness Zones",
        narrative:
          "Zonele de relaxare și wellness sunt integrate strategic în întregul complex. De la spații de meditație până la sali de fitness, The Vertex înțelege importanța echilibrului între muncă și sănătate.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        focusPoint: { x: 45, y: 60 },
        duration: 5000,
      },
      {
        id: 4,
        title: "Green Innovation",
        narrative:
          "Terasă verde de pe acoperiș nu este doar un spațiu de relaxare, ci și un simbol al angajamentului față de sustenabilitate. Grădinile verticale și sistemele de reciclare a apei demonstrează că inovația și responsabilitatea ambientală pot merge mână în mână.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 50, y: 30 },
        duration: 4000,
      },
    ],
  },
  {
    id: 3,
    title: "Casa Prism",
    description:
      "O clădire rezidențială angulară care joacă cu lumina și umbrele pe parcursul zilei.",
    fullDescription:
      "Casa Prism este o locuință modernă, cu linii geometrice îndrăznețe și ferestre ample care permit luminii să danseze în interior. Fiecare cameră oferă o perspectivă unică asupra grădinii și a peisajului urban.",
    address: "789 Strada Luminii, Berlin",
    price: "$1,800,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    yearBuilt: 2021,
    features: [
      "Ferestre panoramice",
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
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Exteriorul geometric al Casei Prism.",
        focusPoint: { x: 60, y: 40 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        description: "Living luminos cu vedere spre grădină.",
        focusPoint: { x: 50, y: 50 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        description: "Dormitor principal cu ferestre mari.",
        focusPoint: { x: 40, y: 60 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        description: "Baie modernă cu finisaje premium.",
        focusPoint: { x: 30, y: 70 },
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        description: "Terasă acoperită pentru relaxare.",
        focusPoint: { x: 50, y: 30 },
      },
    ],
    storyChapters: [
      {
        id: 1,
        title: "Geometry in Light",
        narrative:
          "Casa Prism te întâmpină cu forme îndrăznețe și lumini jucăușe. Fiecare unghi și fiecare suprafață a fost calculată pentru a maximiza interacțiunea cu lumina naturală, creând un spectacol vizual care se schimbă pe parcursul zilei.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 60, y: 40 },
        duration: 9000,
      },
      {
        id: 2,
        title: "Living with Nature",
        narrative:
          "Spațiul de living se deschide către grădina privată, creând o conexiune perfectă între interior și exterior. Ferestrele panoramice permit luminii să inunde spațiul, în timp ce materialele naturale creează o atmosferă caldă și primitoare.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 50, y: 50 },
        duration: 7000,
      },
      {
        id: 3,
        title: "Private Retreats",
        narrative:
          "Dormitoarele sunt proiectate ca retrageri private, cu ferestre strategice care oferă intimitate și lumină în același timp. Fiecare cameră are propria sa personalitate, reflectată în detaliile arhitecturale și în modul în care interacționează cu lumina.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 40, y: 60 },
        duration: 6000,
      },
      {
        id: 4,
        title: "Outdoor Sanctuary",
        narrative:
          "Terasă acoperită extinde spațiul de viață în aer liber, oferind un refugiu perfect pentru relaxare și divertisment. Designul integrează perfect elementele naturale cu confortul modern, creând o experiență de viață unică.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 50, y: 30 },
        duration: 5000,
      },
    ],
  },
  {
    id: 4,
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
    images: [
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
        id: 1,
        title: "Nature's Embrace",
        narrative:
          "Villa Serenity te întâmpină cu o armonie perfectă între arhitectură și natură. Fiecare element al designului a fost ales pentru a crea o conexiune profundă cu mediul natural, de la materialele organice până la orientarea strategică a ferestrelor.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        focusPoint: { x: 50, y: 40 },
        duration: 8000,
      },
      {
        id: 2,
        title: "Living in Harmony",
        narrative:
          "Spațiul de living este centrul spiritual al casei, unde elementele naturale se împletesc cu confortul modern. Pădurea devine o extensie a spațiului interior, iar lumina naturală dansează prin cameră pe parcursul zilei.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 60, y: 50 },
        duration: 7000,
      },
      {
        id: 3,
        title: "Culinary Excellence",
        narrative:
          "Bucătăria gourmet este proiectată pentru pasionații de gastronomie, cu echipamente de ultimă generație și o insulă centrală care devine punctul focal al întâlnirilor sociale. Vederea spre grădina organică inspiră creativitatea culinară.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 45, y: 60 },
        duration: 6000,
      },
      {
        id: 4,
        title: "Wellness Sanctuary",
        narrative:
          "Spa-ul și sauna oferă o experiență de relaxare completă, în timp ce piscina naturală permite o conexiune directă cu elementele naturale. Fiecare detaliu este proiectat pentru a promova sănătatea și echilibrul interior.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 40, y: 70 },
        duration: 5000,
      },
    ],
  },
  {
    id: 5,
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
    images: [
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
        id: 1,
        title: "Transparency Redefined",
        narrative:
          "The Glass House elimină complet barierele între interior și exterior, creând o experiență de viață unică. Pereții de sticlă retractabili permit transformarea completă a spațiului, făcând ca natura să devină o parte integrantă a vieții de zi cu zi.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 55, y: 45 },
        duration: 9000,
      },
      {
        id: 2,
        title: "Living Without Boundaries",
        narrative:
          "Spațiul de living se extinde natural către exterior, cu pereții de sticlă care dispar complet pentru a crea o experiență de viață în aer liber. Mobila modernă și tehnologia inteligentă se integrează perfect în acest concept transparent.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 65, y: 55 },
        duration: 8000,
      },
      {
        id: 3,
        title: "Sleeping Under the Stars",
        narrative:
          "Dormitoarele oferă o experiență de somn unică, cu tavanul de sticlă care permite privirea spre cerul înstelat. Sistemul de iluminat inteligent creează atmosfera perfectă pentru relaxare, în timp ce pereții de sticlă oferă intimitate când este necesar.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 50, y: 65 },
        duration: 7000,
      },
      {
        id: 4,
        title: "Floating in Space",
        narrative:
          "Terasă flotantă pare să plutească deasupra peisajului, oferind priveliști spectaculoase asupra Los Angeles-ului. Designul minimalist și materialele premium creează o experiență de viață care transcende limitele tradiționale ale arhitecturii rezidențiale.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 60, y: 35 },
        duration: 6000,
      },
    ],
  },
  {
    id: 6,
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
    images: [
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
        id: 1,
        title: "Green Living in the City",
        narrative:
          "Urban Oasis demonstrează că viața urbană poate fi în armonie perfectă cu natura. Grădinile suspendate și spațiile verzi integrate în design creează o experiență de viață unică, unde locuitorii pot sănătoșească în mijlocul orașului.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 50, y: 40 },
        duration: 8000,
      },
      {
        id: 2,
        title: "Private Garden Retreat",
        narrative:
          "Fiecare apartament are acces la propria grădină privată, unde locuitorii pot cultiva plante, relaxa sau organiza întâlniri cu prietenii. Designul integrează perfect spațiile interioare cu zonele exterioare, creând o continuitate naturală.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        focusPoint: { x: 55, y: 50 },
        duration: 7000,
      },
      {
        id: 3,
        title: "Community Spaces",
        narrative:
          "Spațiile comune verzi sunt proiectate pentru a încuraja interacțiunea socială și sănătoșirea comunității. De la grădini comunitare până la zone de relaxare, fiecare element promovează un stil de viață sustenabil și conectat.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        focusPoint: { x: 60, y: 30 },
        duration: 6000,
      },
      {
        id: 4,
        title: "Sustainable Innovation",
        narrative:
          "Sistemul de reciclare și iluminatul solar demonstrează angajamentul față de sustenabilitate. Fiecare detaliu al designului a fost ales pentru a minimiza impactul asupra mediului, creând un model pentru viața urbană de viitor.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        focusPoint: { x: 40, y: 70 },
        duration: 5000,
      },
    ],
  },
  {
    id: 7,
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
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
    tags: ["Minimalist", "Funcțional", "Calm"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
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
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
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
        id: 1,
        title: "Less is More",
        narrative:
          "Minimalist Haven demonstrează că frumusețea adevărată se află în simplitate. Fiecare element al designului a fost ales cu grijă pentru a servi unui scop specific, eliminând orice exces și creând un spațiu care promovează claritatea mentală.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 50, y: 45 },
        duration: 8000,
      },
      {
        id: 2,
        title: "Functional Beauty",
        narrative:
          "Spațiul de living combină funcționalitatea cu estetica, cu mobilă integrată care maximizează spațiul disponibil. Paleta de culori neutre creează o atmosferă calmă, în timp ce materialele naturale aduc caldura în spațiu.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 60, y: 55 },
        duration: 7000,
      },
      {
        id: 3,
        title: "Smart Storage",
        narrative:
          "Sistemul de stocare inteligent este integrat discret în design, oferind soluții creative pentru organizarea spațiului. Fiecare cameră are propriile soluții de stocare, menținând curățenia și ordinea în întregul spațiu.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 45, y: 65 },
        duration: 6000,
      },
      {
        id: 4,
        title: "Multifunctional Living",
        narrative:
          "Spațiile sunt proiectate pentru a fi multifuncționale, adaptându-se nevoilor diverse ale locuitorilor. De la spațiu de lucru integrat până la zone de relaxare, fiecare zonă servește mai multor scopuri, maximizând eficiența spațiului.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 55, y: 35 },
        duration: 5000,
      },
    ],
  },
  {
    id: 8,
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
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
    tags: ["Lux", "Coastal", "Panoramic"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
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
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
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
        id: 1,
        title: "Ocean's Embrace",
        narrative:
          "Coastal Retreat te întâmpină cu priveliști spectaculoase asupra oceanului, unde fiecare zi începe cu răsăritul soarelui și se termină cu apusul pe orizont. Designul modern se integrează perfect în peisajul marin, creând o experiență de viață de neegalat.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 55, y: 40 },
        duration: 9000,
      },
      {
        id: 2,
        title: "Living with the Sea",
        narrative:
          "Spațiul de living se deschide complet către ocean, cu pereți de sticlă care permit luminii să inunde spațiul. Sunetul valurilor devine parte integrantă din experiența de viață, creând o atmosferă de relaxare constantă.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        focusPoint: { x: 65, y: 50 },
        duration: 8000,
      },
      {
        id: 3,
        title: "Master Sanctuary",
        narrative:
          "Master suite-ul oferă o experiență de lux de neegalat, cu acces direct la terasă privată și priveliști panoramice asupra oceanului. Designul elegant și materialele premium creează un refugiu perfect pentru relaxare și intimitate.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        focusPoint: { x: 50, y: 60 },
        duration: 7000,
      },
      {
        id: 4,
        title: "Infinity Pool Experience",
        narrative:
          "Piscina infinită pare să se împletescă cu oceanul, creând o experiență vizuală spectaculoasă. Terasa panoramică oferă spațiul perfect pentru divertisment și relaxare, cu priveliști care se extind până la orizont.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b",
        focusPoint: { x: 45, y: 70 },
        duration: 6000,
      },
    ],
  },
];
