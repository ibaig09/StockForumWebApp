# ChartHive UI — Design System & Prototype

India's trader community platform. Built with vanilla HTML, CSS, and JavaScript — no build tools or frameworks required.

## Color palette

| Token | Hex | Role |
|---|---|---|
| `--ch-canvas` | `#0f1117` | App background |
| `--ch-surface-1` | `#13161f` | Cards, inputs |
| `--ch-surface-2` | `#1a1c2e` | Elevated surfaces |
| `--ch-surface-3` | `#0c0e16` | Nav, sidebars |
| `--ch-indigo` | `#4f46e5` | Brand, primary actions |
| `--ch-bull` | `#4ade80` | Bullish signals, success (use sparingly) |
| `--ch-bear` | `#f87171` | Bearish signals, danger |
| `--ch-caution` | `#fbbf24` | Warnings, VIX high |
| `--ch-ai` | `#c4b5fd` | AI features |

## File structure

```
charthive/
├── assets/
│   ├── logo.svg          ← Full wordmark (200×60)
│   └── favicon.svg       ← App icon / favicon (64×64)
├── css/
│   ├── tokens.css        ← CSS custom properties (design tokens)
│   └── components.css    ← All reusable components
├── js/
│   └── app.js            ← UI interactions (votes, tabs, OTP, etc.)
└── pages/
    ├── index.html         ← Homepage feed
    ├── stock.html         ← Stock discussion page (NIFTY 50)
    ├── profile.html       ← User profile page
    └── login.html         ← Sign up / OTP verification flow
```

## Running locally

No build step needed. Just open any HTML file directly in a browser, or serve with any static file server:

```bash
# Python
python3 -m http.server 3000

# Node
npx serve .

# Then visit: http://localhost:3000/pages/index.html
```

## Pages

| Page | File | Description |
|---|---|---|
| Homepage | `pages/index.html` | Feed with AI pulse, post cards, sidebar |
| Stock page | `pages/stock.html` | NIFTY 50 discussion + chart + OI data |
| Profile | `pages/profile.html` | User stats, karma, post history |
| Auth | `pages/login.html` | 3-step signup with OTP verification |

## Design principles

1. **Color earns meaning** — signal green `#4ade80` is reserved exclusively for bullish/positive data. It never decorates UI chrome.
2. **Indigo owns actions** — every primary button, active state, and brand element uses `#4f46e5`.
3. **Typography is tight** — two weights only (500 and 700). Labels use uppercase + letter-spacing for visual separation.
4. **Hierarchy through surface depth** — not through shadows or gradients. Darker = deeper/further back.

## Logo usage

The Concept 01 hexagon logo features red and green candlestick bars inside an indigo hexagon. Use:
- `assets/logo.svg` for the full wordmark in headers and marketing
- `assets/favicon.svg` for browser tabs and app icons
- Never alter the candle colors — they encode bullish/bearish meaning

## Disclaimer (required on every page)

> All discussions on ChartHive are for educational purposes only and do not constitute investment advice. ChartHive is not a SEBI-registered investment advisor. Trade at your own risk.

---

Built for ChartHive.in · Designed by Claude (Anthropic) · 2025
