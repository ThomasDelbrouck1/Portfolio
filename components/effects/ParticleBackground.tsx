"use client";

import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rx: number;
  ry: number;
  rgb: string;
  alpha: number;
  alphaTarget: number;
}

// Violet / indigo / blue / cyan palette
const PALETTE = [
  "124,58,237",  // violet-600
  "79,70,229",   // indigo-600
  "37,99,235",   // blue-600
  "6,182,212",   // cyan-500
  "139,92,246",  // violet-500
  "99,102,241",  // indigo-400
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const blobs: Blob[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 6; i++) {
      // Spread initial positions evenly so no empty corners
      const angle = (i / 6) * Math.PI * 2 + Math.random() * 1.0;
      const dist = 0.25 + Math.random() * 0.35;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const spread = Math.min(cx, cy) * 1.2;
      const driftAngle = Math.random() * Math.PI * 2;
      const speed = 0.08 + Math.random() * 0.14;
      const alpha = 0.07 + Math.random() * 0.07;

      blobs.push({
        x: cx + Math.cos(angle) * spread * dist,
        y: cy + Math.sin(angle) * spread * dist,
        vx: Math.cos(driftAngle) * speed,
        vy: Math.sin(driftAngle) * speed,
        rx: 260 + Math.random() * 260,
        ry: 180 + Math.random() * 200,
        rgb: PALETTE[i % PALETTE.length],
        alpha,
        alphaTarget: alpha + (Math.random() - 0.5) * 0.06,
      });
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const b of blobs) {
        // Drift
        b.x += b.vx;
        b.y += b.vy;

        // Soft wrap with padding so blobs stay clear of canvas edges
        const pad = Math.max(b.rx, b.ry) + 100;
        if (b.x < -pad) b.x = canvas.width + pad;
        if (b.x > canvas.width + pad) b.x = -pad;
        if (b.y < -pad) b.y = canvas.height + pad;
        if (b.y > canvas.height + pad) b.y = -pad;

        // Slowly ease alpha toward a random target, then pick a new one
        b.alpha += (b.alphaTarget - b.alpha) * 0.004;
        if (Math.abs(b.alpha - b.alphaTarget) < 0.002) {
          b.alphaTarget = 0.04 + Math.random() * 0.1;
        }

        // Draw an elliptical soft blob via radial gradient + scale transform
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.scale(1, b.ry / b.rx);
        const g = ctx.createRadialGradient(0, 0, 0, 0, 0, b.rx);
        g.addColorStop(0,   `rgba(${b.rgb},${b.alpha})`);
        g.addColorStop(0.45, `rgba(${b.rgb},${b.alpha * 0.55})`);
        g.addColorStop(1,   `rgba(${b.rgb},0)`);
        ctx.beginPath();
        ctx.arc(0, 0, b.rx, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, filter: "blur(72px)" }}
    />
  );
}
