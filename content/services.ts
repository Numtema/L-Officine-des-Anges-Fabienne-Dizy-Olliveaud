export interface ServiceDetail {
  id: string;
  index: string;
  pillar: string;
  title: string;
  slug: string;
  subtitle: string;
  tagline: string;
  excerpt: string;
  description: string[];
  gestures: string[];
  benefits: string[];
  duration: string;
  location: string;
  image: string;
  imageAlt: string;
  quote: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "soins-energetiques",
    index: "01",
    pillar: "RECEVOIR",
    title: "Soins Énergétiques",
    slug: "soins-energetiques",
    subtitle: "Retrouver un temps pour soi",
    tagline: "L'écoute subtile, le calme retrouvé et l'harmonisation du champ sensoriel.",
    excerpt: "Une parenthèse immersive où le corps et l'esprit déposent le trop-plein pour renouer avec la sérénité originelle.",
    description: [
      "Dans le tumulte des rythmes contemporains, notre sensibilité absorbe une charge permanente. Le soin énergétique proposé par Fabienne Dizy Olliveaud offre un sanctuaire de silence et d'écoute bienveillante.",
      "Sans manipulation brusque ni promesse artificielle, cette séance repose sur la présence attentive, l'harmonisation douce des centres de vitalité et la pacification émotionnelle. Vous êtes allongé(e), habillé(e) confortablement, dans une atmosphère feutrée baignée d'effluves botaniques légères.",
      "Un temps d'accueil initial permet de nommer vos besoins, vos fatigues ou vos intentions, suivi du soin lui-même et d'un atterrissage tout en douceur pour intégrer les bienfaits."
    ],
    gestures: [
      "Temps de parole préliminaire et clarification de l'état intérieur",
      "Imposition subtile des mains et canalisation d'apaisement",
      "Harmonisation des polarités corporelles et du souffle",
      "Éveil olfactif avec une brume d'ancrage personnalisée",
      "Intégration et conseil d'attention pour les jours suivants"
    ],
    benefits: [
      "Sensation profonde de relâchement des tensions nerveuses",
      "Clarté d'esprit et recul face aux tourbillons du quotidien",
      "Amélioration de la qualité de présence à soi-même",
      "Reconnexion intime avec ses ressentis corporels"
    ],
    duration: "1h15 à 1h30",
    location: "Au cabinet (Provence) ou à distance",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Atmosphère paisible de relaxation et lumière méditerranéenne tamisée",
    quote: "« Recevoir n'est pas un acte passif : c'est autoriser le corps à se souvenir de sa propre quiétude. »"
  },
  {
    id: "massage-lemniscate",
    index: "02",
    pillar: "RALENTIR",
    title: "Massage Lemniscate",
    slug: "massage-lemniscate",
    subtitle: "Le mouvement sans rupture",
    tagline: "La chorégraphie du huit infini (∞) pour relier la périphérie au centre.",
    excerpt: "Un toucher rythmique et continu, inspiré de la forme du lemniscate, qui berce les flux vitaux et rétablit l'unité corporelle.",
    description: [
      "Le massage en Lemniscate est un art du geste continu. Fondé sur le tracé infini du huit (∞), il ne connaît ni début brusque, ni arrêt saccadé. Les mains de Fabienne épousent les courbes du corps en une ondulation fluide et harmonieuse.",
      "Ce toucher spécifique, d'une grande douceur et d'une remarquable profondeur, s'adresse à la mémoire fluide de l'organisme. Il rétablit la communication entre les pôles supérieur et inférieur, entre la droite et la gauche, entre l'intérieur et l'extérieur.",
      "Pratiqué avec des huiles végétales biologiques tiédies infusées aux extraits de plantes méditerranéennes, il invite à un lâcher-prise total où la notion de temps s'estompe."
    ],
    gestures: [
      "Onction délicate aux huiles solarisées de lavande fine et d'hélichryse",
      "Tracé en lemniscates continues sur le dos, les membres et le buste",
      "Rythme synchronisé sur la respiration naturelle du receveur",
      "Maintien de la chaleur et enveloppement progressif",
      "Pause silencieuse d'harmonisation finale"
    ],
    benefits: [
      "Rétablissement du sentiment d'unité corporelle",
      "Dissolution des raideurs diffuses et des sensations de fragmentation",
      "Apaisement du système nerveux par le rythme ondulatoire",
      "Profonde sensation d'enveloppement sécurisant et réconfortant"
    ],
    duration: "1h30",
    location: "Au cabinet exclusivement",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Gestuelle de massage délicat et textures d'huiles naturelles",
    quote: "« Dans la courbe du huit infini, le geste ne frappe jamais : il invite, il relie, il réconcilie. »"
  },
  {
    id: "aromatherapie",
    index: "03",
    pillar: "COMPOSER",
    title: "Aromathérapie & Parfums d'Âme",
    slug: "aromatherapie",
    subtitle: "La matière, la plante, le parfum",
    tagline: "L'intelligence olfactive des végétaux au service de votre sensibilité intime.",
    excerpt: "Une exploration olfactive sur-mesure pour créer votre accord botanique personnalisé : brume, roll-on ou synergie d'onction.",
    description: [
      "Les molécules aromatiques touchent directement le système limbique, siège des émotions et de la mémoire la plus intime. Dans L'Officine des Anges, l'aromathérapie n'est pas une simple prescription : c'est un dialogue sensible entre l'humain et le règne végétal.",
      "Au milieu des flacons d'ambre et des essences précieuses de Provence (myrte, ciste ladanifère, fleur d'oranger, cyprès, immortelle), Fabienne vous guide dans l'écoute aveugle des senteurs pour identifier celles qui vous ouvrent, vous calment ou vous inspirent.",
      "À l'issue de cet atelier individuel, vous repartez avec votre création unique, formulée selon les règles de l'artisanat parfumé, prête à accompagner vos rituels quotidiens."
    ],
    gestures: [
      "Test olfactif à l'aveugle pour court-circuiter le mental",
      "Identification des affinités végétales du moment",
      "Formulation minutieuse goutte à goutte devant vous",
      "Mise en flaconnage d'apothicaire en verre ambré de haute qualité",
      "Conseils personnalisés d'usage rituel (respiration, vaporisation, onction)"
    ],
    benefits: [
      "Ancrage émotionnel immédiat par la signature olfactive",
      "Soutien doux dans les phases de transition ou de fatigue",
      "Création d'un rituel quotidien de retour au calme en un souffle",
      "Objet noble, artisanal et unique à conserver chez soi"
    ],
    duration: "1h00 à 1h15",
    location: "À L'Officine ou expédition de création après entretien",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Flacons d'apothicaire en verre ambré, essences botaniques et fleurs blanches",
    quote: "« Le parfum est la voix invisible de la plante : il parle directement à ce que les mots peinent à dire. »"
  },
  {
    id: "ateliers-formations",
    index: "04",
    pillar: "TRANSMETTRE",
    title: "Ateliers & Cercles Botaniques",
    slug: "ateliers-formations",
    subtitle: "Partager le geste et l'écoute",
    tagline: "Des moments de transmission intimistes pour apprendre à ralentir et créer.",
    excerpt: "Rencontres en petit comité pour découvrir l'art des brumes d'ambiance, l'automassage doux et l'harmonisation personnelle.",
    description: [
      "Fabienne Dizy Olliveaud ouvre ponctuellement L'Officine pour des demi-journées d'initiation et de partage bienveillant.",
      "Chaque atelier est conçu pour un groupe restreint (4 à 6 personnes maximum) afin de préserver une intimité rare, la qualité de l'attention et un accompagnement véritablement individuel.",
      "Vous y apprenez la noblesse des matières premières simples, les gestes d'auto-préservation et la confection de vos propres préparations d'apaisement."
    ],
    gestures: [
      "Accueil autour d'une infusion botanique méditerranéenne",
      "Découverte guidée de 10 essences majeures et de leur tempérament",
      "Pratique du geste juste pour les rituels du soir et du matin",
      "Atelier pratique de confection de votre brume d'oreiller ou spray d'aura",
      "Livret manuscrit et flacon artisanal offerts"
    ],
    benefits: [
      "Autonomie dans vos rituels de bien-être quotidiens",
      "Partage d'expériences dans un cadre chaleureux et sécurisant",
      "Sensibilisation au respect des cycles naturels du corps",
      "Un moment précieux de respiration hors du temps"
    ],
    duration: "Demi-journée (3h)",
    location: "À L'Officine (Provence)",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Atelier botanique avec mortier, plantes séchées et flacons d'essences",
    quote: "« Transmettre, c'est semer une graine de calme dans le quotidien de chacun. »"
  }
];

export interface OfficineCreation {
  id: string;
  number: string;
  type: string;
  name: string;
  subtitle: string;
  volume: string;
  notes: string[];
  description: string;
  ritual: string;
  image: string;
}

export const officineCreations: OfficineCreation[] = [
  {
    id: "brume-ange-gardien",
    number: "FORMULE 01",
    type: "BRUME D’AURÉOLE",
    name: "L’Écrin Vivant",
    subtitle: "Brume d'atmosphère & d'apaisement",
    volume: "50 ml — Verre ambré sérigraphié",
    notes: ["Fleur d'Oranger (Néroli)", "Bois de Cèdre de l'Atlas", "Lavande fine de Haute-Provence"],
    description: "Une brume légère comme une brise méditerranéenne matinale. Formulée pour purifier l'atmosphère d'une pièce, préparer le sommeil ou envelopper le corps avant un moment de méditation.",
    ritual: "Vaporiser 3 à 4 pressions au-dessus de la tête ou dans l'espace de repos, fermer les yeux et respirer profondément.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "elixir-lemniscate",
    number: "FORMULE 02",
    type: "HUILE SACRÉE D’ONCTION",
    name: "Le Fil d’Or",
    subtitle: "Synergie corporelle nourrissante",
    volume: "100 ml — Flacon d'apothicaire avec compte-goutte",
    notes: ["Hélichryse Italienne (Immortelle)", "Jojoba vierge pressé à froid", "Encens Oliban"],
    description: "Inspirée de la gestuelle continue du huit infini. Une texture soyeuse qui ne colle pas, délivrant des notes chaudes, herbacées et solaires pour nourrir la peau et dénouer les tensions.",
    ritual: "Chauffer quelques gouttes au creux des paumes, appliquer en mouvements lents circulaires sur les tempes, le plexus solaire ou la nuque.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "rollon-presence",
    number: "FORMULE 03",
    type: "ROLL-ON D’ANCRAGE",
    name: "Présence Pure",
    subtitle: "Concentré olfactif de poche",
    volume: "10 ml — Bille en verre d'ambre",
    notes: ["Santal blanc", "Petitgrain Bigaradier", "Bergamote sans bergaptène"],
    description: "Le compagnon secret des journées intenses. Un geste nomade pour se recentrer en quelques secondes dans le métro, au bureau ou avant une conversation importante.",
    ritual: "Faire rouler sur l'intérieur des poignets, frotter délicatement, approcher les mains du nez et inspirer en trois temps lents.",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=80"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Se rencontrer & Écouter",
    subtitle: "L'accueil sans jugement",
    description: "Chaque échange débute par une prise de contact humaine et bienveillante. Nous prenons le temps d'entendre ce qui vous amène : une transition de vie, un besoin d'apaisement, une fatigue diffuse ou le désir d'une parenthèse ressourçante."
  },
  {
    number: "02",
    title: "Accorder le rythme",
    subtitle: "Le choix de l'approche juste",
    description: "Selon vos ressentis du jour, nous convenons ensemble de la direction : soin énergétique enveloppant, massage en lemniscate ou découverte olfactive sur-mesure. Rien n'est préformaté."
  },
  {
    number: "03",
    title: "Le temps de la pratique",
    subtitle: "L'immersion dans l'écrin",
    description: "Vous vous installez dans un cadre chaleureux et sécurisant, pensé pour vous inviter au lâcher-prise. Le geste est précis, respectueux, guidé par une écoute attentive de vos réactions subtiles."
  },
  {
    number: "04",
    title: "L'atterrissage & l'intégration",
    subtitle: "Le retour au monde en douceur",
    description: "Après la séance, un temps silencieux vous permet de revenir à votre rythme naturel. Une boisson tiède aux plantes vous est offerte pour sceller le moment sans précipitation."
  },
  {
    number: "05",
    title: "Prolonger le rituel",
    subtitle: "Des repères pour votre quotidien",
    description: "Vous repartez avec des suggestions simples et adaptées : une respiration d'ancrage, une fragrance repère ou un geste d'attention à cultiver chez vous en toute autonomie."
  }
];
