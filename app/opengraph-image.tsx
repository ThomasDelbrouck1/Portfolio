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
          background: "#030307",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background glows */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 90% at 20% 55%, rgba(139,92,246,0.18) 0%, transparent 60%), radial-gradient(ellipse 55% 65% at 85% 25%, rgba(34,211,238,0.10) 0%, transparent 55%)",
        }} />

        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        {/* Left panel — logo mark */}
        <div style={{
          width: "380px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          borderRight: "1px solid rgba(139,92,246,0.14)",
          position: "relative",
        }}>
          {/* TD box */}
          <div style={{
            width: "196px",
            height: "196px",
            borderRadius: "36px",
            border: "1.5px solid rgba(139,92,246,0.40)",
            background: "rgba(139,92,246,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 80px rgba(139,92,246,0.18), 0 0 30px rgba(139,92,246,0.10)",
          }}>
            <span style={{
              fontSize: "94px",
              fontWeight: 900,
              background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #22d3ee 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}>
              TD
            </span>
          </div>

          <span style={{
            fontFamily: "monospace",
            fontSize: "12px",
            color: "rgba(148,163,184,0.30)",
            letterSpacing: "0.14em",
          }}>
            thomasdelbrouck.dev
          </span>
        </div>

        {/* Right panel — info */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
        }}>
          {/* Label */}
          <span style={{
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#a78bfa",
            letterSpacing: "0.22em",
            fontWeight: 700,
            marginBottom: "22px",
          }}>
            td/
          </span>

          {/* Name */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "22px",
          }}>
            {["Thomas", "Delbrouck"].map((word) => (
              <span key={word} style={{
                fontSize: "70px",
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 42%, #22d3ee 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}>
                {word}
              </span>
            ))}
          </div>

          {/* Status */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "36px",
          }}>
            <span style={{
              width: "8px", height: "8px",
              borderRadius: "50%",
              background: "#34d399",
              flexShrink: 0,
              display: "block",
              boxShadow: "0 0 8px rgba(52,211,153,0.6)",
            }} />
            <span style={{ fontSize: "22px", color: "#94a3b8" }}>
              Developer · Belgium · Open to opportunities
            </span>
          </div>

          {/* Tech chips */}
          <div style={{ display: "flex", gap: "8px" }}>
            {["TypeScript", "Python", "Next.js", "Docker"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(139,92,246,0.10)",
                  border: "1px solid rgba(139,92,246,0.24)",
                  color: "#a78bfa",
                  padding: "5px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
