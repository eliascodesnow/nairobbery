import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource-variable/inter";
import "./globals.css";
import Wantam from "./Wantam";

export const metadata: Metadata = {
  title: "Nairobbery: Kaa rada usioshwe.",
  description: "Practical Nairobi survival guides: traffic, fare, money, scams, emergencies na maisha ya tao.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg" aria-hidden="true" />
        <Wantam />
        <a className="skip" href="#main">Skip to content</a>
        <header className="top">
          <a className="brand" href="#"><img src="/icon.png" alt="" width="32" height="32" />NAIROBBERY</a>
          <nav aria-label="Main">
            <a href="#rada">Rada</a><a href="#pesa">Pesa</a><a href="#streets">Matatu</a><a href="#phone">Safety</a>
            <a className="sos" href="#emergency">Emergency</a>
          </nav>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
