import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "L’Officine des Anges — Fabienne Dizy Olliveaud";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FCF8F0",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(199, 163, 99, 0.15), transparent 70%)",
          padding: "60px",
          border: "16px solid #063840",
          fontFamily: "serif",
        }}
      >
        {/* Decorative Golden Outline Ring */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "2px solid #C7A363",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            color: "#C7A363",
            fontSize: "36px",
          }}
        >
          ∞
        </div>

        {/* Brand Name */}
        <div
          style={{
            fontSize: "64px",
            color: "#063840",
            letterSpacing: "-0.02em",
            fontWeight: "normal",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          L’OFFICINE DES ANGES
        </div>

        {/* Subtitle / Practitioner */}
        <div
          style={{
            fontSize: "22px",
            color: "#7C8061",
            letterSpacing: "0.28em",
            marginTop: "16px",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          FABIENNE DIZY OLLIVEAUD
        </div>

        {/* Separator */}
        <div
          style={{
            width: "80px",
            height: "1.5px",
            backgroundColor: "#C7A363",
            marginTop: "32px",
            marginBottom: "24px",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#064D58",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Soin · Geste · Fragrance · Présence en Provence
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
