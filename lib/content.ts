export type Status = "verified" | "estimated" | "community" | "outdated" | "needs-review";
export const STATUS_LABEL: Record<Status, string> = {
  verified: "Verified", estimated: "Estimated", community: "Community report",
  outdated: "Outdated", "needs-review": "Draft: needs source check",
};
export type Source = { label: string; url: string };
export type Section = { heading: string; body?: string[]; steps?: string[] };
export type Guide = {
  slug: string; title: string; kicker: string; summary: string; category: "safety" | "scams" | "money";
  aliases: string[]; sections: Section[]; sources: Source[];
  status: Status; lastVerified: string | null; reviewBy: string; related: string[];
};

export const guides: Guide[] = [
  {
    slug: "phone-stolen", title: "Simu imeibiwa: do this, in this order", kicker: "Nimeibiwa",
    summary: "Pole. Phone ni vitu, wewe ni muhimu zaidi. Ukiwa safe, block SIM, funga accounts, alafu report.",
    category: "safety", status: "needs-review", lastVerified: null, reviewBy: "2026-12-01",
    aliases: ["simu imeenda", "nimeibiwa simu", "phone stolen", "phone snatched", "simu imepotea", "lost phone", "block sim", "mpesa stolen phone", "imei"],
    related: ["mpesa-wrong-send", "fake-job-offer"],
    sections: [
      { heading: "Kwanza: usalama", body: ["Usimfuate mwizi, usimkabili. Simu inanunuliwa tena; wewe hauwezi. Nenda mahali kuna watu na mwanga."] },
      { heading: "Hatua", steps: [
        "Piga customer care wa network yako kutoka simu ya rafiki au duka, uombe SIM i-blockiwe. Confirm namba sahihi kwenye tovuti ya network yako.",
        "Replace SIM kwa shop ya network ukiwa na ID. Namba na M-Pesa zinarudi, SIM ya zamani inakufa.",
        "Kutoka kifaa kingine, ingia Google au Apple account yako: lock au erase simu, na u-sign out sessions zote.",
        "Badilisha passwords, ukianza na email yako. Email ndio ufunguo wa accounts zingine zote.",
        "Angalia M-Pesa statement na bank app kwa transactions ambazo si zako. Wajulishe bank ikiwa cards ziko linked.",
        "Report kwa police station upate OB number. Leta IMEI ikiwa unayo (iko kwenye box, receipt au Google/Apple account yako).",
      ] },
      { heading: "Epuka", body: ["Usitume pesa au code kwa mtu anayesema amepata simu yako. Hiyo ni mbinu ya kawaida ya kukuiba mara ya pili."] },
    ],
    sources: [{ label: "Safaricom", url: "https://www.safaricom.co.ke" }, { label: "National Police Service", url: "https://www.nationalpolice.go.ke" }],
  },
  {
    slug: "rental-deposit-scam", title: "Rental deposit scam: how it runs", kicker: "Hii ni scam?",
    summary: "House nzuri, rent ya chini, na agent yuko 'out of town'. Pause kwanza kabla ya kutuma deposit.",
    category: "scams", status: "needs-review", lastVerified: null, reviewBy: "2026-12-01",
    aliases: ["rental scam", "house deposit", "agent deposit", "viewing fee", "booking fee", "nyumba scam", "deposit ya nyumba", "house hunting"],
    related: ["mpesa-wrong-send", "fake-job-offer"],
    sections: [
      { heading: "Inavyoonekana", body: ["Picha za nyumba zinazovutia, rent chini ya soko, na mtu anayekuomba 'viewing fee' au 'booking fee' kabla ya kuona unit."] },
      { heading: "Warning signs", steps: [
        "Anakuomba pesa kabla ya kuona nyumba ana kwa ana.",
        "Yuko nje ya mji na 'caretaker' atakupa keys baada ya kulipa.",
        "Rent iko chini sana kuliko nyumba zinazofanana mtaani.",
        "Pressure: 'kuna mtu mwingine anataka leo'.",
        "Namba ya malipo ni ya mtu binafsi, hakuna agreement iliyoandikwa.",
      ] },
      { heading: "Safe next steps", steps: [
        "Tembelea nyumba mwenyewe, na mtu mmoja akujue unaenda wapi.",
        "Ongea na majirani au caretaker wa sasa kuthibitisha anayejitambulisha kama landlord.",
        "Omba tenancy agreement iliyoandikwa kabla ya kulipa chochote.",
        "Kama umeshalipa, hifadhi messages na M-Pesa receipt, alafu report police na Safaricom.",
      ] },
    ],
    sources: [{ label: "Safaricom", url: "https://www.safaricom.co.ke" }, { label: "National Police Service", url: "https://www.nationalpolice.go.ke" }],
  },
  {
    slug: "mpesa-wrong-send", title: "'Nimetuma pesa kimakosa': rudisha kwa nani?", kicker: "Hii ni scam?",
    summary: "Mtu anakupigia akisema ametuma pesa kwa makosa na anakuomba umtumie. Angalia balance yako kwanza.",
    category: "scams", status: "needs-review", lastVerified: null, reviewBy: "2026-12-01",
    aliases: ["mpesa scam", "wrong number mpesa", "nimetuma kimakosa", "fuliza scam", "reversal", "fake mpesa message", "mpesa fraud", "tuma pesa kimakosa"],
    related: ["phone-stolen", "fake-job-offer"],
    sections: [
      { heading: "Inavyoonekana", body: ["SMS inaonekana kama ya M-Pesa lakini imetoka kwa mtu, au simu ya haraka ikisema 'tafadhali nirudishie'. Mara nyingi hakuna pesa iliyoingia."] },
      { heading: "Safe next steps", steps: [
        "Usikimbilie. Angalia balance yako kwa M-Pesa menu au app, si kwa SMS iliyokuja.",
        "Kama pesa imeingia kweli, usimtumie mtu. Mwambie aombe reversal kupitia Safaricom, na wewe usitume mwenyewe.",
        "Forward SMS ya kutisha kwa 333 (free) ili Safaricom ichunguze. Confirm kwenye tovuti ya Safaricom kama bado inafanya kazi.",
        "Usimpe mtu PIN, hata akijiita Safaricom. Hawakuulizi PIN.",
      ] },
    ],
    sources: [{ label: "Safaricom", url: "https://www.safaricom.co.ke" }],
  },
  {
    slug: "fake-job-offer", title: "Job offer inayotaka pesa kwanza", kicker: "Hii ni scam?",
    summary: "Kazi ya kweli haikuombi pesa ya interview, training au uniform. Angalia kabla ya kulipa.",
    category: "scams", status: "needs-review", lastVerified: null, reviewBy: "2026-12-01",
    aliases: ["fake job", "job scam", "kazi scam", "recruitment fee", "interview fee", "kazi ughaibuni", "abroad job", "training fee"],
    related: ["rental-deposit-scam", "mpesa-wrong-send"],
    sections: [
      { heading: "Warning signs", steps: [
        "Anakuomba ada ya interview, medical, training au uniform kabla ya kuanza.",
        "Mawasiliano ni WhatsApp na email ya Gmail, hakuna ofisi unayoweza kutembelea.",
        "Mshahara ni mkubwa kuliko kazi ya aina hiyo, na wanataka ujibu haraka.",
        "Kazi ya nje ya nchi bila agency inayoweza kuthibitishwa.",
      ] },
      { heading: "Safe next steps", steps: [
        "Tafuta kampuni kwa tovuti yao rasmi na uwapigie kwa namba ya huko, si ile uliyopewa.",
        "Tembelea ofisi kabla ya kutoa pesa au documents zako.",
        "Kama ni kazi ya nje, thibitisha agency kupitia mamlaka husika za serikali.",
      ] },
    ],
    sources: [{ label: "National Police Service", url: "https://www.nationalpolice.go.ke" }],
  },
];

export type Resource = { title: string; hint: string; href: string; external?: boolean; keywords: string[] };
export const resources: Resource[] = [
  { title: "Niko Emergency", hint: "Hatua za kwanza na namba za dharura", href: "/emergency", keywords: ["emergency", "dharura", "accident", "ajali", "fire", "moto", "999", "112", "police", "ambulance", "mugged", "robbery"] },
  { title: "Traffic Imenishika", hint: "Route na fare: nishukishe", href: "https://nishukishe.com", external: true, keywords: ["fare", "nauli", "matatu", "tao", "route", "stage", "rongai", "traffic", "jam", "bus", "directions", "transport"] },
  { title: "Pesa Ni Kidogo", hint: "Smart budget calculator", href: "https://pesacalc.co.ke/calculators/smart-budget", external: true, keywords: ["budget", "pesa", "food", "chakula", "ksh", "rent", "expenses", "kidogo", "salary", "calculator"] },
  { title: "Bei na budget: ukonangapi", hint: "Budget proposals", href: "https://ukonangapi.onrender.com", external: true, keywords: ["budget", "bei", "price", "cost", "food", "300", "day"] },
  { title: "Sasake feed", hint: "Live updates za jiji", href: "https://www.sasake.co.ke/feed", external: true, keywords: ["road closures", "closure", "leo", "today", "news", "protest", "maandamano", "demonstration", "updates"] },
];

export const searchIndex = [
  ...guides.map((g) => ({ title: g.title, hint: g.summary, href: `/guides/${g.slug}`, external: false, keywords: [g.title, g.summary, g.category, ...g.aliases] })),
  ...resources.map((r) => ({ title: r.title, hint: r.hint, href: r.href, external: !!r.external, keywords: r.keywords })),
].map((i) => ({ ...i, hay: i.keywords.join(" ").toLowerCase() }));

export type IndexItem = (typeof searchIndex)[number];
