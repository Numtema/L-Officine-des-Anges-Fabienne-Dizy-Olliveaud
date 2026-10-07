export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  detail: string;
  practice: string;
  date: string;
  highlight?: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    quote:
      "Ce qui frappe dès l'entrée dans l'univers de Fabienne, c'est la qualité immédiate de son attention. Le massage Lemniscate a été une expérience d'unification rare : je suis arrivée morcelée par des semaines de surcharge mentale, je suis repartie avec la sensation physique d'avoir retrouvé mon centre et un souffle paisible.",
    author: "Clara M.",
    detail: "Séance au cabinet · Massage Lemniscate",
    practice: "Massage Lemniscate",
    date: "Printemps 2024",
    highlight: true,
  },
  {
    id: "review-2",
    quote:
      "Le soin énergétique avec Fabienne ne ressemble à rien de ce que j'avais connu. Pas de discours ésotérique : une justesse, une douceur infinie et un apaisement qui a duré plusieurs semaines. Sa brume personnalisée est devenue mon rituel de chaque soir.",
    author: "Stéphane V.",
    detail: "Accompagnement individuel · Soin & Création",
    practice: "Soin Énergétique & Olfactif",
    date: "Automne 2024",
    highlight: false,
  },
  {
    id: "review-3",
    quote:
      "Fabienne sait entendre ce qui ne se dit pas avec les mots ordinaires. La précision de ses gestes, le choix des matières et la générosité de sa présence font de chaque rencontre un sanctuaire.",
    author: "Hélène B.",
    detail: "Séance régulière · Provence",
    practice: "Harmonisation globale",
    date: "Hiver 2024",
    highlight: false,
  },
  {
    id: "review-4",
    quote:
      "L'atelier olfactif m'a permis de comprendre l'impact des senteurs sur mes émotions. Fabienne transmet avec simplicité, sans prétention, avec une grande noblesse de cœur.",
    author: "Marc D.",
    detail: "Atelier botanique",
    practice: "Aromathérapie & Sensibilité",
    date: "Septembre 2024",
    highlight: false,
  }
];
