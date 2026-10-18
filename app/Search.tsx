"use client";
import { useMemo, useState } from "react";
import type { IndexItem } from "../lib/content";

const SYN: Record<string, string[]> = {
  simu: ["phone"], imeenda: ["stolen", "lost"], imeibiwa: ["stolen"], nimeibiwa: ["stolen", "phone"], imepotea: ["lost"],
  nauli: ["fare"], ajali: ["accident", "emergency"], moto: ["fire"], dharura: ["emergency"], chakula: ["food"],
  maandamano: ["protest", "road closures"], pesa: ["money", "budget"], kazi: ["job"], nyumba: ["house", "rental"],
  mwizi: ["thief", "robbery"], tapeli: ["scam"], utapeli: ["scam"], fake: ["scam"], stolen: ["phone"], snatched: ["stolen"],
};
const STOP = new Set(["ya", "na", "ni", "how", "much", "the", "a", "wapi", "gani", "nini", "nifanye", "hadi", "kwa", "ikiibiwa", "is", "my", "i", "to"]);

export default function Search({ items }: { items: IndexItem[] }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const tokens = q.toLowerCase().replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter((t) => t.length > 1 && !STOP.has(t));
    if (!tokens.length) return [];
    return items
      .map((it) => {
        let score = 0;
        for (const t of tokens) for (const v of [t, ...(SYN[t] ?? [])]) if (it.hay.includes(v)) score += v === t ? 2 : 1;
        return { it, score };
      })
      .filter((r) => r.score > 0).sort((a, b) => b.score - a.score).slice(0, 6).map((r) => r.it);
  }, [q, items]);

  return (
    <div className="search" id="rada">
      <label htmlFor="q">Unatafuta rada gani leo?</label>
      <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off"
        placeholder="Simu imeenda, fare ya Rongai, deposit ya nyumba…" aria-controls="results" />
      <div id="results" aria-live="polite">
        {q.trim() && results.length === 0 && (
          <p className="empty">Hakuna rada imepatikana kwa &ldquo;{q}&rdquo;. Jaribu neno lingine, au angalia <a href="/emergency">dharura</a>.</p>
        )}
        {results.length > 0 && (
          <ul>{results.map((r) => (
            <li key={r.href}><a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}><strong>{r.title}</strong><span>{r.hint}</span></a></li>
          ))}</ul>
        )}
      </div>
    </div>
  );
}
