export interface SiteConfig {
  name: string;
  brand: string;
  practitioner: string;
  tagline: string;
  description: string;
  url: string;
  phone: string | null;
  phoneDisplay: string | null;
  email: string | null;
  address: {
    city: string;
    region: string;
    country: string;
    note: string;
  };
  consultations: {
    cabinet: boolean;
    distance: boolean;
    hours: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
  };
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: "L’Officine des Anges",
  brand: "L’Officine des Anges",
  practitioner: "Fabienne Dizy Olliveaud",
  tagline: "Soin · Geste · Fragrance · Présence",
  description:
    "Maison éditoriale méditerranéenne dédiée aux soins énergétiques, au massage en Lemniscate, à l'aromathérapie et aux créations sensorielles sur-mesure par Fabienne Dizy Olliveaud.",
  url: process.env.APP_URL || "https://officinedesanges.fr",
  phone: null, // À confirmer avec Fabienne Dizy Olliveaud
  phoneDisplay: "06 •• •• •• •• (Sur demande)",
  email: "contact@officinedesanges.fr",
  address: {
    city: "Région Sud (Provence-Alpes-Côte d’Azur)",
    region: "Provence",
    country: "France",
    note: "Cabinet privé et séances à distance",
  },
  consultations: {
    cabinet: true,
    distance: true,
    hours: "Du lundi au vendredi, sur rendez-vous individuel",
  },
  socials: {
    instagram: "https://instagram.com/officinedesanges",
  },
  disclaimer:
    "Les pratiques proposées s’inscrivent dans une démarche de relaxation, d'écoute et d'harmonisation de bien-être. Elles ne constituent en aucun cas un acte médical ou paramédical et ne se substituent jamais à un avis, un diagnostic ou un traitement médical.",
};

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  category?: string;
}

export const mainNavigation: NavigationItem[] = [
  { name: "Accueil", href: "/" },
  { name: "Prestations", href: "/prestations", description: "Soins énergétiques, Massage Lemniscate, Aromathérapie" },
  { name: "L’Officine", href: "/creations", description: "Brumes, synergies & atelier olfactif" },
  { name: "Fabienne", href: "/fabienne", description: "L'approche, le parcours et la présence" },
  { name: "Témoignages", href: "/temoignages" },
  { name: "Contact", href: "/contact" },
];

export const prestationsSubmenu: {
  pillar: string;
  category: string;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    pillar: "RECEVOIR",
    category: "Écoute & Réalignement",
    title: "Soins énergétiques",
    description: "Un espace de calme profond pour apaiser les tensions et retrouver la clarté intérieure.",
    href: "/soins-energetiques",
  },
  {
    pillar: "RALENTIR",
    category: "Corps & Respiration",
    title: "Massage Lemniscate",
    description: "Le mouvement perpétuel en huit (∞) : un toucher continu qui rétablit la fluidité du rythme vital.",
    href: "/massage-lemniscate",
  },
  {
    pillar: "COMPOSER",
    category: "Matière & Botanique",
    title: "Aromathérapie & Parfums d'Âme",
    description: "Élaboration d'élixirs, brumes et compositions botaniques vivantes guidées par le ressenti.",
    href: "/aromatherapie",
  },
  {
    pillar: "TRANSMETTRE",
    category: "Partage & Pratique",
    title: "Ateliers & Formations",
    description: "Initiations sensorielles, gestes rituels et cercles intimistes en petit groupe.",
    href: "/ateliers-formations",
  },
];
