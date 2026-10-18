"use client";
import { useMemo, useState } from "react";
import type { IndexItem } from "../lib/content";

const SYN: Record<string, string[]> = {
  simu: ["phone"], imeenda: ["stolen"], imeibiwa: ["stolen"], nimeibiwa: ["stolen", "phone"], imepotea: ["lost"],
  nauli: ["fare"], ajali: ["emergency"], dharura: ["emergency"], chakula: ["food"], maandamano: ["protest"],
  pesa: ["mpesa", "budget"], kazi: ["job"], nyumba: ["house", "rental"], keja: ["rental"], mwizi: ["robbery"],
  tapeli: ["scam"], utapeli: ["scam"], fake: ["scam"], stolen: ["phone"], snatched: ["phone"], wizi: ["robbery"],
  chai: ["bribe"], askari: ["police"], polisi: ["police"],
};
const STOP = new Set(["ya", "na", "ni", "how", "much", "the", "wapi", "gani", "nini", "nifanye", "hadi", "kwa", "is", "my", "to", "ikiibiwa", "leo"]);

export default function Search({ items }: { items: IndexItem[] }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const t = q.toLowerCase().replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter((x) => x.length > 1 && !STOP.has(x));
    if (!t.length) return [];
    return items.map((it) => {
      let s = 0;
      for (const w of t) for (const v of [w, ...(SYN[w] ?? [])]) if (it.hay.includes(v)) s += v === w ? 2 : 1;
      return { it, s };
    }).filter((r) => r.s > 0).sort((a, b) => b.s - a.s).slice(0, 5).map((r) => r.it);
  }, [q, items]);

  const go = (e: React.MouseEvent, blockId: string, id: string) => {
    e.preventDefault();
    (document.getElementById(`b-${blockId}`) as HTMLDetailsElement | null)?.setAttribute("open", "");
    const el = (document.getElementById(`i-${id}`) ?? document.getElementById(id)) as HTMLElement | null;
    el?.setAttribute("open", "");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="search" id="rada">
      <label htmlFor="q">Unatafuta rada gani leo?</label>
      <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off"
        placeholder="Simu imeenda, fake police, deposit ya keja…" />
      <div aria-live="polite">
        {q.trim() && !results.length && <p className="empty">Hakuna rada kwa &ldquo;{q}&rdquo;. Jaribu neno lingine, au piga 999 ikiwa ni emergency.</p>}
        {results.length > 0 && (
          <ul>{results.map((r) => (
            <li key={r.id}><a href={`#${r.id}`} onClick={(e) => go(e, r.blockId, r.id)}><strong>{r.title}</strong><span>{r.hint}</span></a></li>
          ))}</ul>
        )}
      </div>
    </div>
  );
}
