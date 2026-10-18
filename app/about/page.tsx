export const metadata = { title: "About | Nairobbery" };
export default function About() {
  return (
    <div className="wrap guide">
      <h1>About Nairobbery</h1>
      <p className="lede dark">Practical guides za kuishi Nairobi, bila story mingi. Mradi huru, unaokua pole pole.</p>
      <section id="verification"><h2>How information is verified</h2>
        <p>Kila ukurasa una label: Verified, Estimated, Community report, Outdated au Draft. Guides za sasa ni drafts: bado hazijakaguliwa dhidi ya vyanzo rasmi, na zinasema hivyo wazi. Time-sensitive info ikipita review date, inaondolewa kama current.</p></section>
      <section id="privacy"><h2>Privacy</h2>
        <p>Tovuti hii haitumii accounts, haikusanyi location, wala haihifadhi data yako binafsi. Submissions za watumiaji bado hazijajengwa; zikianza zitakuwa private hadi zikaguliwe.</p></section>
      <section id="disclaimer"><h2>Emergency disclaimer</h2>
        <p>Nairobbery haitumi msaada wala haifuatilii location. Kwa hatari ya moja kwa moja, piga 999 au 112.</p></section>
    </div>
  );
}
