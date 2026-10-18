import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nairobbery: Kaa rada usioshwe.",
  description: "Practical Nairobi survival guides: traffic, fare, money, scams, emergencies na maisha ya tao.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="top">
          <a className="brand" href="/"><img src="/icon.png" alt="" width="32" height="32" />Nairobbery</a>
          <nav aria-label="Main">
            <a href="/#rada">Rada</a>
            <a href="https://pesacalc.co.ke/calculators/smart-budget" target="_blank" rel="noopener noreferrer">Pesa</a>
            <a href="https://nishukishe.com" target="_blank" rel="noopener noreferrer">Matatu</a>
            <a href="/guides/phone-stolen">Safety</a>
            <a className="sos" href="/emergency">Emergency</a>
            <a className="find" href="/#rada">Tafuta</a>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer className="foot">
          <p className="foot-big">Nairobi haina manual. Tunaiandika pole pole.</p>
          <ul>
            <li><a href="/about">About Nairobbery</a></li>
            <li><a href="/about#verification">How information is verified</a></li>
            <li><a href="/about#privacy">Privacy</a></li>
            <li><a href="/about#disclaimer">Emergency disclaimer</a></li>
            <li><a href="https://github.com/eliascodesnow/nairobbery/issues/new" target="_blank" rel="noopener noreferrer">Report incorrect information</a></li>
            <li><a href="https://github.com/eliascodesnow/nairobbery/issues/new" target="_blank" rel="noopener noreferrer">Suggest a guide</a></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
