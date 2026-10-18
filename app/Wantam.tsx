"use client";
import { useEffect, useState } from "react";

export default function Wantam() {
  const [pos, setPos] = useState<{ top: number; left: number; rot: number } | null>(null);
  useEffect(() => {
    let done = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      if (done) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.5) {
        done = true;
        setPos({ top: 15 + Math.random() * 55, left: 4 + Math.random() * 35, rot: -8 + Math.random() * 16 });
        timer = setTimeout(() => setPos(null), 1000);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (timer) clearTimeout(timer); };
  }, []);
  if (!pos) return null;
  return (
    <div className="wantam" aria-hidden="true" style={{ top: `${pos.top}vh`, left: `${pos.left}vw`, transform: `rotate(${pos.rot}deg)` }}>
      WANTAM ☝
    </div>
  );
}
