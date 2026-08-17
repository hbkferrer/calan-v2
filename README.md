# Calan — Homepage prototype

Prototype React de la nouvelle homepage **calan.com**, implémentation directe du document
« Website Strategy & Architecture » (V1 · 17 August 2026), dans un registre
**« grand cabinet »** (typographie éditoriale serif, photographie corporate, filets fins,
numérotation éditoriale) tout en conservant la direction artistique du site actuel :
bleu marine corporate, bleu Calan, carré vert signature.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/
```

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 3 (palette Calan dans `tailwind.config.ts`)
- Inter variable (UI) + Source Serif 4 variable (titres) · Lucide (icônes)

## Photos & vidéos

- Les photos sont des **placeholders Unsplash** référencés dans `src/lib/images.ts` —
  remplacez chaque URL par la photographie de marque finale (fichiers locaux dans
  `public/` ou CDN). Si une image ne charge pas (offline, CDN bloqué), le composant
  `Photo` bascule sur un **art de marque génératif** (skyline duotone dans la palette
  Calan), la mise en page reste donc toujours intentionnelle.
- Les blocs vidéo (`VideoPlaceholder`) sont des **emplacements** : showreel du hero et
  démos 90 secondes (stratégie §11). Brancher le vrai player au moment de
  l'intégration.
- Les profils de la section Experts sont **illustratifs**, à remplacer par le roster
  réel (stratégie §10 « People »).

## Structure — la séquence homepage de la stratégie (§7)

| # | Section | Composant |
|---|---------|-----------|
| — | Barre utilitaire + header + mega-menus (§5.1–5.3) | `src/components/Header.tsx` |
| 01 | Hero photo — « Finance operations, engineered. » + showreel | `Hero.tsx` |
| 02 | Proof bar — 1993, Europe, groupes cotés, ERP-agnostic | `ProofBar.tsx` |
| 03 | The problem — 5 constats numérotés | `Problem.tsx` |
| 04 | Three-part promise — Standardize / Automate / Operate | `PromiseSection.tsx` |
| 05 | Solutions by process — grille à filets, 6 processus | `Solutions.tsx` |
| 06 | Designed for complexity — bande photo sombre | `Solutions.tsx` |
| 07 | How Calan works — Assess → Improve + livrables | `Method.tsx` |
| 08 | Technology layer — Sources → Outputs + systèmes | `TechnologyLayer.tsx` |
| 09 | Client result — cas phare photo, avant/après, métriques | `ClientResult.tsx` |
| — | See the work — placeholders vidéo démos 90 s (§11) | `MediaSection.tsx` |
| 10 | Trust — 6 garanties de contrôle | `Trust.tsx` |
| — | Experts — portraits (placeholders, §10 People) | `Experts.tsx` |
| 11 | Insights — 3 contenus piliers avec visuels | `Insights.tsx` |
| 12 | Final CTA — formulaire de diagnostic (§12) | `FinalCta.tsx` |
| — | Footer 5 groupes (§5.4) | `Footer.tsx` |

## Notes

- Prototype front-end uniquement : le formulaire ne poste vers aucun backend
  (la stratégie prévoit un routage du lead par processus et marché).
- Le cas client et ses métriques sont **illustratifs**, à remplacer par des cas
  approuvés (stratégie §10 « Evidence to assemble before redesign »).
- Les liens du menu pointent vers les ancres des sections correspondantes de la
  page ; les URLs cibles définitives sont listées dans la stratégie (§6 sitemap).
