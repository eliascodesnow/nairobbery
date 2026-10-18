export const metadata = { title: "Emergency | Nairobbery" };
const cases = [
  { t: "Wizi au robbery", s: ["Toa unachoombwa. Mali si uhai.", "Usimfuate wala kumkabili mtu.", "Ukiwa mahali salama, piga 999 au 112.", "Report police upate OB number. Kwa simu iliyoibiwa, fungua guide ya Nimeibiwa."] },
  { t: "Ajali ya barabarani", s: ["Ondoka njiani na uwe mahali salama.", "Piga 999 au 112, useme location na idadi ya waliojeruhiwa.", "Usisogeze mtu aliyejeruhiwa vibaya isipokuwa kuna hatari ya moto au gari kuwaka."] },
  { t: "Moto", s: ["Toka nje kwanza, usirudi kuchukua vitu.", "Piga 999 au 112 ukiwa nje.", "Usitumie lift."] },
  { t: "Medical emergency", s: ["Piga 999 au 112 mara moja.", "Mweke mgonjwa mahali salama na uwe naye hadi msaada ufike.", "Fuata maelekezo ya anayepokea simu."] },
  { t: "Kundi hatari au maandamano", s: ["Ondoka taratibu kuelekea upande wenye watu wachache, usikimbie bila sababu.", "Usisogelee kukusanya info au kupiga picha.", "Ukiwa salama, piga 999 au 112 ikiwa kuna hatari kwa mtu."] },
];
export default function Emergency() {
  return (
    <div className="wrap guide">
      <h1>Ni emergency? Achana na story mingi.</h1>
      <p className="lede dark">Pata safe location kwanza, alafu piga.</p>
      <p className="calls"><a href="tel:999">Piga 999</a><a href="tel:112">Piga 112</a></p>
      {cases.map((c) => (<section key={c.t}><h2>{c.t}</h2><ol>{c.s.map((x) => <li key={x}>{x}</li>)}</ol></section>))}
      <p className="status s-needs-review">Namba nyingine (hospitali, utility, county) hazijaorodheshwa hadi zithibitishwe kwa chanzo rasmi. Hatuonyeshi namba ambazo hatuna uhakika nazo.</p>
    </div>
  );
}
