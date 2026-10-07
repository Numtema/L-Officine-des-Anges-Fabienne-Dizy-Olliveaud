import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#063840",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "L’Officine des Anges — Fabienne Dizy Olliveaud | Soin, Geste & Fragrance",
    template: "%s | L’Officine des Anges",
  },
  description:
    "Maison éditoriale méditerranéenne : soins énergétiques, massage Lemniscate, aromathérapie et créations botaniques sur-mesure par Fabienne Dizy Olliveaud.",
  applicationName: siteConfig.brand,
  authors: [{ name: siteConfig.practitioner, url: siteConfig.url }],
  creator: siteConfig.practitioner,
  publisher: siteConfig.brand,
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: "L’Officine des Anges — Fabienne Dizy Olliveaud",
    description:
      "Maison éditoriale méditerranéenne : soins énergétiques, massage Lemniscate, aromathérapie et créations botaniques.",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L’Officine des Anges — Fabienne Dizy Olliveaud",
    description:
      "Maison éditoriale méditerranéenne : soins énergétiques, massage Lemniscate, aromathérapie.",
  },
  icons: {
    icon: "/assets/favicon-mark.svg",
    apple: "/assets/favicon-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[var(--petrol-deep)] text-[var(--ink)] antialiased font-sans selection:bg-[#C7A363]/30 selection:text-[#063840]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
