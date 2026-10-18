# Nairobbery

Kaa rada usioshwe. Nairobi survival guides: traffic, fare, money, scams, emergencies.

## Run
```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
No environment variables are required yet (no database, no auth).

## Content
Guides live as typed data in `lib/content.ts`. Add a guide by adding an object; the homepage list, `/guides/[slug]` page and search index update automatically.
All guides currently carry status "Draft: needs source check" and `lastVerified: null`. Check each against official sources and set `status`/`lastVerified` before presenting them as verified.

## Known limitations
- Not built yet: budget calculator (links to pesacalc.co.ke and ukonangapi.onrender.com), neighbourhood explorer, services directory, submissions and moderation, live disruptions, offline caching.
- Search is a local keyword and synonym matcher over published content, not an AI chatbot.
- Only 999 and 112 are listed as emergency numbers; others are omitted until verified.
- Plain CSS with design tokens is used instead of Tailwind.
