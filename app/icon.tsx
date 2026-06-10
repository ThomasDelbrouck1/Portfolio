import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0c0a1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.18)",
            top: 2,
            left: 2,
          }}
        />
        {/* Geometric T mark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Crossbar — gradient */}
          <div
            style={{
              width: 22,
              height: 5,
              borderRadius: 2,
              background: "linear-gradient(90deg, #7c3aed 0%, #818cf8 60%, #22d3ee 100%)",
            }}
          />
          {/* Stem — white */}
          <div
            style={{
              width: 6,
              height: 12,
              borderRadius: "0 0 2px 2px",
              background: "rgba(255,255,255,0.92)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
