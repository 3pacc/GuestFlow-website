<p align="center">
  <img src="src/assets/hero.png" alt="GuestFlow" width="120" />
</p>

<h1 align="center">GuestFlow — Site Vitrine Officiel</h1>

<p align="center">
  Plateforme IA native pour l'hôtellerie — Automatisation des réservations et interactions clients par agent vocal intelligent.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## Aperçu

Site vitrine B2B premium pour **GuestFlow**, conçu pour présenter la plateforme d'IA vocale hôtelière et convertir les visiteurs en prospects qualifiés. Le site est entièrement rédigé en français avec un ton professionnel haut de gamme.

### Caractéristiques principales

- **Style d'interface** — Fond noir profond, glassmorphism, accents néon violet/rose/cyan
- **Navigation** — Accueil, Solutions, Produit, Tarifs, Ressources, Contact
- **Animations fluides** — Transitions Framer Motion sur chaque section et interaction
- **Assistant IA intégré** — Widget chatbot flottant avec base de connaissances contextuelle
- **Modal de réservation** — Parcours de prise de démo en 4 étapes avec validation
- **Responsive** — Mobile-first, optimisé pour tous les breakpoints
- **Accessible** — HTML sémantique, attributs ARIA, navigation clavier, focus states

---

## Stack technique

| Technologie | Rôle |
|---|---|
| **React 19** | Framework UI (composants fonctionnels, hooks) |
| **Vite 8** | Build tool et serveur de développement |
| **Tailwind CSS 3** | Système de styles utilitaires |
| **Framer Motion 11** | Animations et transitions |
| **React Router DOM 7** | Navigation multi-pages (SPA) |
| **PostCSS + Autoprefixer** | Traitement CSS |

---

## Architecture du projet

```
guestflow-website/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                    # Images et SVG
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── layout/                # Composants globaux
│   │   │   ├── AnimatedBackground.jsx   # Orbes gradient flottantes
│   │   │   ├── AssistantWidget.jsx      # Chatbot IA flottant
│   │   │   ├── BookingModal.jsx         # Modal de réservation démo
│   │   │   ├── CustomCursor.jsx         # Curseur personnalisé (desktop)
│   │   │   ├── Footer.jsx              # Pied de page
│   │   │   └── Header.jsx              # En-tête sticky glassmorphism
│   │   ├── shared/                # Composants d'animation
│   │   │   ├── CountUpStat.jsx          # Animation compteur
│   │   │   └── Reveal.jsx              # Apparition au scroll
│   │   └── ui/                    # Primitives UI réutilisables
│   │       ├── Button.jsx               # Bouton avec variantes
│   │       ├── CardHeader.jsx           # En-tête carte (eyebrow + puces)
│   │       ├── GlassPanel.jsx           # Panel glassmorphism interactif
│   │       ├── GradientBadge.jsx        # Badge gradient
│   │       └── SectionTitle.jsx         # Titre de section
│   ├── data/
│   │   └── siteData.js            # Données centralisées du site
│   ├── hooks/
│   │   └── useIsTouchDevice.js    # Détection appareil tactile
│   ├── lib/
│   │   └── motion.js              # Constantes d'animation Framer
│   ├── pages/
│   │   ├── HomePage.jsx           # Accueil (hero, KPIs, partenaires)
│   │   ├── SolutionsPage.jsx      # Solutions par segment
│   │   ├── ProductPage.jsx        # Aperçu plateforme
│   │   ├── PricingPage.jsx        # Tarification SaaS
│   │   ├── ResourcesPage.jsx      # Études de cas et ressources
│   │   └── ContactPage.jsx        # Contact et formulaire
│   ├── App.jsx                    # Router principal
│   ├── index.css                  # Styles globaux + marquee CSS
│   └── main.jsx                   # Point d'entrée React
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## Pages

### Accueil (`/`)
Hero immersif avec glow dynamique, barre de confiance auto-défilante (marquee), section problème/solution, grille de capacités IA, KPIs animés (count-up), CTA final de conversion.

### Solutions (`/solutions`)
Onglets segmentés (hôtels indépendants, groupes hôteliers, résidences), défis par segment, workflow GuestFlow, impact attendu, deep-dives fonctionnels, comparaison avant/après.

### Produit (`/produit`)
Pipeline vocal (STT → Agent Graph → LLM → TTS), intelligence de réservation, couche opérationnelle (dashboard, logs, analytics), timeline interactive, blocs sécurité et fiabilité.

### Tarifs (`/tarifs`)
3 plans SaaS (Starter, Growth, Enterprise), add-ons optionnels, mini calculateur ROI, FAQ objections tarifaires.

### Ressources (`/ressources`)
6 études de cas avec tags (conversion, expérience client, productivité), teasers insights, lead magnet téléchargeable.

### Contact (`/contact`)
Méthodes de contact (email, téléphone, adresse), formulaire complet avec validation, FAQ interactive en accordéon.

---

## Composants globaux

| Composant | Description |
|---|---|
| `Header` | Navigation sticky, transparent → glassmorphism au scroll, CTAs "Demander une démo" et "Parler à un expert" |
| `AnimatedBackground` | Orbes gradient flottantes en arrière-plan, grille basse opacité |
| `CustomCursor` | Curseur deux parties (point + anneau), désactivé sur mobile |
| `AssistantWidget` | Chatbot IA flottant avec knowledge base, suggestions contextuelles, historique localStorage |
| `BookingModal` | Modal 4 étapes : date → créneau → coordonnées → confirmation |
| `Footer` | Liens de navigation, mentions légales, réseaux sociaux |

---

## Installation et lancement

### Prérequis

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
git clone <repository-url>
cd guestflow-website
npm install
```

### Développement

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5173` avec HMR (Hot Module Replacement).

Pour exposer sur le réseau :

```bash
npm run dev -- --host 0.0.0.0
```

### Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`.

### Prévisualisation du build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Palette de couleurs

| Couleur | Hex | Usage |
|---|---|---|
| Noir profond | `#000000` | Arrière-plan principal |
| Blanc | `#FFFFFF` | Texte principal |
| Violet | `#7C3AED` | Accent gradient (gauche) |
| Rose | `#EC4899` | Accent gradient (centre) |
| Cyan | `#22D3EE` | Accent gradient (droite), éléments interactifs |
| Blanc/5 — Blanc/20 | `rgba(255,255,255,0.05–0.2)` | Glassmorphism (fond, bordures) |

---

## Système d'animation

Toutes les animations utilisent **Framer Motion** avec des paramètres cohérents :

- **Durée** : 0.6s – 0.8s
- **Easing** : `[0.16, 1, 0.3, 1]` (cubic-bezier fluide)
- **Hover boutons** : `scale: 1.02–1.05` + lueur subtile
- **Hover cartes** : élévation + lueur bordure + révélation contenu
- **Scroll reveal** : apparition staggerée des enfants via `<Reveal>`
- **Count-up** : animation incrémentale des KPIs via `<CountUpStat>`

---

## Déploiement

Le site est actuellement déployé via **RunPod** (SSH) avec un tunnel **ngrok** pour l'accès externe.

### Tunnel ngrok (développement) via ngrok

```bash
ngrok http 5173 --url=<url>
```

### Déploiement statique

Le build Vite génère un dossier `dist/` compatible avec tout hébergement statique :

- **Vercel** : `vercel --prod`
- **Netlify** : drag & drop du dossier `dist/`
- **AWS S3 + CloudFront**
- **GitHub Pages**

---

## Licence

Projet propriétaire — © 2026 GuestFlow. Tous droits réservés.
