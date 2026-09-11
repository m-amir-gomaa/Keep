# Keep — Vanilla JavaScript Google Keep Clone

A pixel-faithful, fully functional clone of **Google Keep** built with zero frameworks — just **vanilla JavaScript, CSS, and HTML**, bundled with **Webpack**.

This project is a deliberate proof of competence: demonstrating that complex, interactive, data-driven UIs can be architected cleanly in pure JavaScript without reaching for React or Vue.

---

## Live Demo

> Run locally with `npm start` — see [Getting Started](#getting-started) below.

---

## Features

- 📝 **Create notes** — expandable note composer with title and body
- 📌 **Pin notes** — pinned notes float to the top of the grid in a separate section
- 🗂 **Archive notes** — move notes to the Archive section
- 🗑 **Trash** — soft delete with restore and "Empty Trash" support
- 🏷 **Label management** — create, rename, delete labels via a modal dialog
- 📱 **Responsive design** — works from mobile to ultrawide
- 🎨 **Animated sidebar** — collapses to icon-rail, expands to full labels on hover
- 🔍 **Search bar** — full UI with focus/blur state, clear button
- 💾 **localStorage persistence** — notes and labels survive page reloads
- ♿ **Accessible** — ARIA roles, tab navigation, visible focus rings, tooltips
- ✨ **Premium dark UI** — amber accent, glassmorphism overlays, micro-animations

---

## Tech Stack

| Concern       | Technology                     |
|---------------|-------------------------------|
| Language      | Vanilla JavaScript (ES2020+)  |
| Styling       | Vanilla CSS with custom properties |
| Build         | Webpack 5 + Babel              |
| Fonts         | Google Sans, Product Sans, Roboto |
| Data layer    | `localStorage` (no backend)   |

> **No React. No Vue. No Angular. No jQuery.** Just the platform.

---

## Project Structure

```
src/
├── index.js              # App entry point — bootstraps all modules
├── index.css             # Global design tokens, typography, utilities
│
├── header/
│   ├── header.js         # Header: logo, search field, action buttons
│   └── header.css
│
├── side/
│   ├── side.js           # Sidebar: animated feature rail, label entries
│   └── side.css
│
└── main/
    ├── main.js           # Router — maps sidebar selection → view loader
    ├── main.css          # Shared layout (grid padding, empty-state)
    │
    ├── notes/
    │   ├── notes.js      # Note composer + masonry card grid
    │   ├── notes.css
    │   └── notes-store.js# Pure localStorage CRUD layer (no DOM)
    │
    ├── edit-labels/
    │   ├── edit_labels.js # Modal: create / rename / delete labels
    │   └── edit_labels.css
    │
    ├── archive/
    │   ├── archive.js     # Archived notes with unarchive action
    │   └── archive.css
    │
    ├── trash/
    │   ├── trash.js       # Deleted notes with restore + permanent delete
    │   └── trash.css
    │
    ├── reminders/
    │   └── reminders.js   # Reminders placeholder view
    │
    └── labels/
        └── labels.js      # Label-filtered note view
```

### Key Design Decisions

**Module-per-feature** — Each sidebar section (`Notes`, `Archive`, `Trash`, etc.) is an isolated JS module with its own CSS. The `main.js` router simply calls the right loader, making it trivial to add new sections.

**Separation of concerns** — `notes-store.js` is a pure data-layer: it reads and writes `localStorage` but never touches the DOM. The UI layer (`notes.js`) calls the store API and renders based on what it returns.

**CSS custom properties as a design system** — All colours, shadows, transitions, and radii are defined as `:root` tokens in `index.css`. Changing the theme requires editing one block.

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
git clone https://github.com/your-username/keep-vanilla.git
cd keep-vanilla
npm install
```

### Development server

```bash
npm start          # Webpack dev server with HMR at http://localhost:3000
```

### Production build

```bash
NODE_ENV=production npm run build   # Outputs minified bundle to /dist
```

---

## Scripts

| Script        | Description                          |
|---------------|--------------------------------------|
| `npm start`   | Start dev server (HMR, port 3000)   |
| `npm run dev` | `webpack serve` (same as start)     |
| `npm run build` | Build production bundle to `/dist` |

---

## What This Demonstrates

This project was built as a **portfolio piece** for freelance work, specifically to prove proficiency in:

- **DOM manipulation without abstractions** — every element is created with `createElement`, configured, and mounted manually. There is no JSX or template syntax.
- **ES Modules** — the codebase is split across `import`/`export` modules, demonstrating understanding of the module graph and tree-shaking.
- **State management without libraries** — `localStorage` acts as the store, and the UI re-renders from it on every mutation — a pattern that mirrors how React/Redux works, but implemented from scratch.
- **Event delegation and listener hygiene** — events are attached purposefully, not scattered.
- **CSS architecture** — the design system is token-based. Components inherit from global tokens. No utility-class bloat.
- **Accessibility** — `role`, `tabindex`, `aria-label`, `aria-multiline`, visible focus rings, and keyboard navigation are all present.
- **Build tooling** — Webpack 5 with Babel transpilation, CSS/asset loaders, and production/development mode split.

---

## Screenshots

> Coming soon — run locally to see the live UI.

---

## License

MIT
