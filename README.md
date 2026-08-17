# Calan — Homepage prototype

Prototype React de la nouvelle homepage **calan.com**, implémentation directe du document
« Website Strategy & Architecture » (V1 · 17 August 2026) avec la direction artistique du
site actuel : bleu marine corporate, bleu Calan, carré vert signature, fonds bleu clair.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/
```

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 3 (palette Calan dans `tailwind.config.ts`)
- Lucide (icônes) · Inter variable (typo)

## Structure — la séquence homepage de la stratégie (§7)

| # | Section | Composant |
|---|---------|-----------|
| — | Header + mega-menus Solutions / Technology (§5.1–5.3) | `src/components/Header.tsx` |
| 01 | Hero — « Finance operations, engineered. » | `Hero.tsx` |
| 02 | Proof bar — 30+ ans, Europe, groupes cotés, ERP-agnostic | `ProofBar.tsx` |
| 03 | The problem — 5 constats | `Problem.tsx` |
| 04 | Three-part promise — Standardize / Automate / Operate | `PromiseSection.tsx` |
| 05 | Solutions by process — 6 cartes | `Solutions.tsx` |
| 06 | Designed for complexity | `Solutions.tsx` (bandeau) |
| 07 | How Calan works — Assess → Improve + livrables | `Method.tsx` |
| 08 | Technology layer — Sources → Outputs + ERP | `TechnologyLayer.tsx` |
| 09 | Client result — cas phare avant/après | `ClientResult.tsx` |
| 10 | Trust — 6 garanties de contrôle | `Trust.tsx` |
| 11 | Insights — 3 contenus piliers | `Insights.tsx` |
| 12 | Final CTA — formulaire de diagnostic (§12) | `FinalCta.tsx` |
| — | Footer 5 groupes (§5.4) | `Footer.tsx` |

## Notes

- Prototype front-end uniquement : le formulaire ne poste vers aucun backend
  (la stratégie prévoit un routage du lead par processus et marché).
- Le cas client et ses métriques sont **illustratifs**, à remplacer par des cas
  approuvés (stratégie §10 « Evidence to assemble before redesign »).
- Les liens du menu pointent vers les ancres des sections correspondantes de la
  page ; les URLs cibles définitives sont listées dans la stratégie (§6 sitemap).
