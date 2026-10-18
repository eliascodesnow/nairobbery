import { notFound } from "next/navigation";
import { guides, STATUS_LABEL } from "../../../lib/content";

export function generateStaticParams() { return guides.map((g) => ({ slug: g.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  return g ? { title: `${g.title} | Nairobbery`, description: g.summary } : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  if (!g) notFound();
  return (
    <article className="wrap guide">
      <p className="kicker">{g.kicker}</p>
      <h1>{g.title}</h1>
      <p className="lede dark">{g.summary}</p>
      <p className={`status s-${g.status}`}>{STATUS_LABEL[g.status]} · Last verified: {g.lastVerified ?? "bado"} · Review by {g.reviewBy}</p>
      {g.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.body?.map((p) => <p key={p}>{p}</p>)}
          {s.steps && <ol>{s.steps.map((t) => <li key={t}>{t}</li>)}</ol>}
        </section>
      ))}
      <section>
        <h2>Confirm hapa</h2>
        <ul>{g.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>
      </section>
      <p><a href="/emergency">Uko kwa hatari sasa hivi? Nenda Emergency.</a></p>
    </article>
  );
}
