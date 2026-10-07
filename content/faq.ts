export interface FAQItem {
  question: string;
  answer: string;
  category: "général" | "pratiques" | "officine" | "cadre";
}

export const faqData: FAQItem[] = [
  {
    category: "général",
    question: "Comment se déroule un premier échange ou une première séance ?",
    answer:
      "Toute première séance commence par un temps d'accueil bienveillant d'une quinzaine de minutes. Nous échangeons sur votre état présent, vos sensations, vos éventuelles fatigues ou vos attentes. Ce dialogue permet d'adapter la gestuelle ou la composition olfactive exactement à votre besoin de l'instant."
  },
  {
    category: "pratiques",
    question: "Qu'est-ce qui caractérise le massage en Lemniscate ?",
    answer:
      "Le massage en Lemniscate est un toucher continu et rythmique en forme de huit infini (∞). Contrairement aux massages traditionnels qui procèdent par frictions ou pressions segmentées, la Lemniscate relie constamment les différentes parties du corps. Ce mouvement d'ondulation douce stimule les fluides internes et offre une détente profonde en berçant le système nerveux."
  },
  {
    category: "pratiques",
    question: "Les soins énergétiques peuvent-ils se faire à distance ?",
    answer:
      "Oui, pour les personnes ne pouvant pas se déplacer en Provence ou résidant dans d'autres régions, les séances de soin énergétique peuvent se réaliser à distance. Nous convenons d'un créneau dédié, précédé et suivi d'un échange téléphonique pour recueillir vos ressentis."
  },
  {
    category: "officine",
    question: "Qu'est-ce que L'Officine des Anges ?",
    answer:
      "L'Officine des Anges est à la fois le nom de la maison et l'atelier artisanal où Fabienne Dizy Olliveaud compose ses brumes botaniques, huiles solarisées et synergies aromatiques. C'est un espace inspiré des herboristeries traditionnelles et de la parfumerie méditerranéenne, conçu pour matérialiser le geste sous forme d'objets bienveillants à ramener chez soi."
  },
  {
    category: "général",
    question: "Comment choisir entre soin énergétique, massage et aromathérapie ?",
    answer:
      "Si vous ressentez une grande dispersion mentale ou une fatigue émotionnelle, le soin énergétique est tout indiqué. Si votre corps réclame d'être touché, bercé et dénoué en profondeur, le massage Lemniscate est idéal. Si vous souhaitez ancrer un rituel sensoriel quotidien avec des essences végétales, l'aromathérapie sera votre porte d'entrée. Lors de la prise de contact, nous vous orientons volontiers."
  },
  {
    category: "cadre",
    question: "Ces pratiques remplacent-elles un suivi médical ?",
    answer:
      "Non, absolument pas. Les accompagnements proposés par Fabienne Dizy Olliveaud s'inscrivent exclusivement dans le domaine du bien-être, de la relaxation, de la relation d'aide et de l'hygiène de vie. Ils ne posent aucun diagnostic médical, ne modifient aucun traitement prescrit et ne dispensent jamais de consulter votre médecin traitant ou un spécialiste de santé."
  },
  {
    category: "cadre",
    question: "Comment se préparer à une séance au cabinet ?",
    answer:
      "Prévoyez des vêtements confortables et souples. Il est conseillé de ne pas prévoir de rendez-vous contraignant immédiatement après votre séance afin de savourer l'état de calme et de permettre aux bienfaits de s'intégrer paisiblement."
  }
];
