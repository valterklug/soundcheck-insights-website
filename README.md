# Soundcheck Insights — Website

React + Vite site. Deployable to Vercel in minutes.

## Quick Start
```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # → /dist
```

## Deploy to Vercel
1. Push to GitHub (or drag folder to Vercel)
2. New Project → Import → Framework: Vite (auto-detected)
3. Click Deploy — done. `vercel.json` handles SPA routing.

## ✉️ Contact Forms Setup (REQUIRED)
Forms use Formspree (free). One-time setup:
1. Create account at formspree.io
2. New Form → copy your Form ID (looks like: xkndvpzq)
3. Open `src/components/ContactForm.jsx`
4. Replace `YOUR_FORMSPREE_ID` on line 11 with your actual ID
5. Redeploy — forms deliver to your email

## Brand Colors
- Orange: #E8472A — primary CTA
- Navy: #060F1E — page background
- Teal: #00C4D4 — labels & data
