import type { Metadata } from "next";
import "@fontsource-variable/archivo";
import "@fontsource-variable/inter";
import "./globals.css";
import Wantam from "./Wantam";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Nairobbery: Kaa rada usioshwe.",
  description: "Practical Nairobi survival guides: traffic, fare, money, scams, emergencies na maisha ya tao.",
  icons: {
    icon: [
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    disclaimer: "Maandishi haya si mageni jijini, labda kwa mgeni jijini. Ila kwa wenyeji wa jiji, ni maandishi tuliyoyazoea",
  },
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
      <Analytics />
      </body>
    </html>
  );
}
