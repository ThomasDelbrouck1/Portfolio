import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Thomas Delbrouck — Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#030307",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 10% 60%, rgba(139,92,246,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 90% 40%, rgba(34,211,238,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
          {/* Monogram */}
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "18px",
              letterSpacing: "0.25em",
              color: "#a78bfa",
              fontWeight: 700,
            }}
          >
            td/
          </span>

          {/* Name */}
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 45%, #22d3ee 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Thomas Delbrouck
          </div>

          {/* Subtitle */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#34d399",
                display: "block",
              }}
            />
            <span style={{ fontSize: "24px", color: "#94a3b8", letterSpacing: "0.02em" }}>
              Student Developer · Belgium
            </span>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            {["Next.js", "TypeScript", "Docker", "Supabase", "Python"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  color: "#a78bfa",
                  padding: "5px 14px",
                  borderRadius: "6px",
                  fontSize: "15px",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom-right URL hint */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "rgba(148,163,184,0.4)",
            letterSpacing: "0.1em",
          }}
        >
          thomasdelbrouck.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
