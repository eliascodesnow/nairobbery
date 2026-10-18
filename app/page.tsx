import Search from "./Search";
import { blocks, emergency, searchIndex } from "../lib/content";

const List = ({ title, items }: { title: string; items?: string[] }) =>
  items?.length ? (<><h4>{title}</h4><ul>{items.map((t) => <li key={t}>{t}</li>)}</ul></>) : null;

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="wordmark"><img src="/icon.png" alt="" width="56" height="56" />NAIROBBERY</p>
          <h1>KAA RADA USIOSHWE.</h1>
          <p className="lede">Tao kuna jam? Fare imepanda? Umeona deal inakaa too good kuwa true? Hapa ndio unapata info. Practical guides za kusurvive Nairobi, bila story mingi.</p>
          <a className="btn" href="#rada">PATA RADA</a>
          <Search items={searchIndex} />
        </div>
      </section>

      <div className="wrap stack">
        <section className="panel sos" id="emergency" aria-labelledby="h-sos">
          <h2 id="h-sos">Ni emergency? Achana na story mingi.</h2>
          <p>Pata place iko, alafu piga. Tap a number to call.</p>
          <ul className="lines">
            {emergency.map((e) => (
              <li key={e.num}><a href={`tel:${e.num}`}><strong>{e.num}</strong><span>{e.label}</span><em>{e.note}</em></a></li>
            ))}
          </ul>
        </section>

        {blocks.map((b) => (
          <details className="panel" id={`b-${b.id}`} key={b.id}>
            <summary><span id={b.id}><h2>{b.title}</h2><small>{b.line}</small></span></summary>
            {b.note && <p className="note">{b.note}</p>}
            {b.places?.map((g) => (
              <div key={g.group} className="group">
                <h4>{g.group}</h4>
                {g.note && <p className="gnote">{g.note}</p>}
                <ul className="places">{g.list.map((p) => (
                  <li key={p.slug} id={`p-${p.slug}`}><strong>{p.name}</strong><span>{p.risk}</span></li>
                ))}</ul>
              </div>
            ))}
            {b.items.map((i) => (
              <details className="item" id={`i-${i.id}`} key={i.id}>
                <summary><h3>{i.title}</h3></summary>
                <p className="hook">{i.hook}</p>
                <List title="How it works" items={i.how} />
                <List title="Do" items={i.do} />
                <List title="Avoid" items={i.dont} />
              </details>
            ))}
            {b.links && (
              <ul className="tools">{b.links.map((l) => (
                <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer"><strong>{l.label}<i aria-hidden="true"> ↗</i></strong><span>{l.note}</span><code>{l.host}</code></a></li>
              ))}</ul>
            )}
          </details>
        ))}
      </div>

      <footer className="foot wrap">
        <p>Nairobbery does not dispatch help or track your location. In danger, call 999 or 112. Numbers and steps are general guidance and can change, so confirm on official sites. Found something wrong? <a href="https://github.com/eliascodesnow/nairobbery/issues/new" target="_blank" rel="noopener noreferrer">Tell us</a>.</p>
      </footer>
    </>
  );
}
