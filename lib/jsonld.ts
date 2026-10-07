import { siteConfig } from "@/config/site";
import { faqData } from "@/content/faq";

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.practitioner,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.practitioner,
    jobTitle: "Praticienne en soins de bien-être, massage Lemniscate et aromathérapie",
    url: siteConfig.url,
    knowsAbout: [
      "Massage Lemniscate",
      "Soins énergétiques de relaxation",
      "Aromathérapie sensorielle",
      "Brumes et créations botaniques",
    ],
  };
}

export function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
