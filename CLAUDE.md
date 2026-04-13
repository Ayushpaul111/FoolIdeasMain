# FoolIdeas — Claude Code Guide

## Project
Next.js 14 marketing/landing page for the FoolIdeas consulting agency.

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

## Structure
```
app/
  layout.js          # Root layout
  page.js            # Main page (assembles all sections)
  globals.css        # Global styles
  pages/             # Section components (Hero, About, Team, etc.)
components/
  Navbar.jsx
  ui/                # Reusable UI (infinite-moving-*, aurora-background, etc.)
  vectors/           # SVGs and static assets
lib/                 # Utility functions
public/              # Static assets
```

## Key Conventions
- **Theme:** Dark green background `#00120B`, no light mode
- **Animations:** Framer Motion for all motion effects
- **Styling:** Tailwind CSS — use utility classes, avoid inline styles
- **Components:** `.jsx` for components, no TypeScript in component files
- **Icons:** Lucide React
- **Booking:** Cal.com embed via `@calcom/embed-react` in `Consult.jsx`
- **No testing setup** — manually verify in browser with `npm run dev`
