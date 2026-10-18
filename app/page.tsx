import Search from "./Search";
import { guides, resources, searchIndex, STATUS_LABEL } from "../lib/content";

const tone = ["sos", "green", "orange", "ink", "line"];
const extra = [
  { title: "Hii Ni Scam?", hint: "Deals, M-Pesa, kazi na nyumba: angalia kabla ya kutuma", href: "/guides/mpesa-wrong-send" },
  { title: "Nimeibiwa", hint: "Block SIM, secure accounts, report", href: "/guides/phone-stolen" },
];

export default function Home() {
  const board = [resources[0], resources[1], resources[2], ...extra.map((e) => ({ ...e, external: false }))];
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="wordmark"><img src="/icon.png" alt="" width="44" height="44" />Nairobbery</p>
          <h1>KAA RADA USIOSHWE.</h1>
          <p className="lede">Nairobi haina manual. From traffic na fare hadi scams, emergencies na maisha ya tao, pata info unahitaji kufanya move smart.</p>
          <div className="actions">
            <a className="btn primary" href="#rada">PATA RADA</a>
            <a className="btn ghost" href="#leo">IKO NA NINI LEO?</a>
          </div>
          <Search items={searchIndex} />
        </div>
      </section>

      <section className="wrap block" aria-labelledby="h-help">
        <h2 id="h-help">Unahitaji nini sasa hivi?</h2>
        <ul className="board">
          {board.map((b, i) => (
            <li key={b.title} className={tone[i]}>
              <a href={b.href} {...(b.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <strong>{b.title}</strong><span>{b.hint}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap block" id="leo" aria-labelledby="h-leo">
        <h2 id="h-leo">Iko na nini leo?</h2>
        <div className="empty-state">
          <p>Hakuna alert iliyothibitishwa kwenye Nairobbery kwa sasa. Hatuweki habari za kubuni ili ukurasa uonekane busy.</p>
          <p>Kwa updates za sasa hivi, angalia <a href="https://www.sasake.co.ke/feed" target="_blank" rel="noopener noreferrer">Sasake</a> au <a href="https://nishukishe.com" target="_blank" rel="noopener noreferrer">Nishukishe</a>. Kila alert tutakayochapisha itakuwa na location, chanzo, na saa ya verification.</p>
        </div>
      </section>

      <section className="wrap block" aria-labelledby="h-guides">
        <h2 id="h-guides">Guides za kusolve shida</h2>
        <ol className="guides">
          {guides.map((g) => (
            <li key={g.slug}>
              <a href={`/guides/${g.slug}`}><h3>{g.title}</h3><p>{g.summary}</p></a>
              <small>{STATUS_LABEL[g.status]}</small>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
