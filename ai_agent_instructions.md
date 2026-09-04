# System Specification: Thai Restaurant Responsive Website Rebuild

## 1. Context & Objective
The goal is to rebuild, modernize, and launch an updated digital home for **Little Thai Corner**, an authentic Thai street food takeout restaurant. 

The original website structure and assets have been extracted using a automated pipeline. You are being provided with:
- `scraped_data.json`: Contains raw layout text copies, page discovery routes, heading architectures, and image maps.
- `menu_data.json`: A meticulously parsed, highly structured representation of the entire text-based menu (names, item numbers, pricing, descriptions, and category arrays).
- `scraped_assets/`: A resource folder containing original site images and full-page layout screenshots (`layout_snap_*.png`).

Your objective is to build a responsive, high-fidelity, conversion-optimized Single Page Application (SPA) or multi-page static experience that retains the brand identity but drastically optimizes the UI and UX.

## 2. Design Directive: Balance Familiarity with Modern UX
- **The Core Problem:** The previous site relied on massive static menu image leaflets that forced mobile users to pinch-and-zoom to read prices or dishes.
- **Visual Continuity:** Review the full-page layout snapshots (`layout_snap_*.png`) and look at the existing background image patterns, logos, and color choices. Treat them as design foundations—do not lose the "Little Thai Corner" authentic street food identity.
- **UI/UX Transformation:** Upgrade the implementation to modern components. Replace image grids with accessible text layout arrays, semantic grids, and smooth interactions.

## 3. Tech Stack Requirements
- **Framework Choices:** Vanilla HTML5/CSS3/Modern JS with Tailwind CSS (via CDN or local bundler) or React/Vite. Choose a platform configuration optimized for fast localized builds.
- **Responsiveness:** Rigorous mobile-first compliance. Transition perfectly across Mobile (320px+), Tablet, and Desktop resolutions without text clipping or vertical layout overflows.
- **Aesthetics:** Warm, charcoal/dark-themed premium canvas contrasted with deep gold/amber highlights, crisp iconography, and highly readable typography.

## 4. Feature & Section Architecture

| Section / Block | Source Mapping | Design & Functional Requirements |
| :--- | :--- | :--- |
| **Hero Section** | `scraped_data.json` & Snapshots | Bold, clean brand name typography. Use recovered background graphics. Clear, unambiguous CTA buttons linking to `"View Menu"` and `"Call to Order"`. |
| **Header / Quick Info** | `menu_data.json` (`restaurant_info`) | Highly visible phone line wrapper (`0470.96.54.35`) and current operational hours dynamically accented so customers immediately see if the kitchen is open. |
| **Interactive Menu UI** | `menu_data.json` (`menu`) | **CRITICAL OVERHAUL:** Parse the nested categories (Starters, Curry Schotels, Thai Wok, etc.). Build a fast, filterable tabbed system. When a category tab is pressed, swap out the grid smoothly. Display the ID numbers, Dutch descriptions, and pricing cards cleanly. Provide subtle styling flags for Spicy/Vegan variants based on text indicators. |
| **About / Local Narrative** | `scraped_data.json` | Clean text columns mapping extracted heading/paragraph content, paired gracefully with context photos. |
| **Footer / Map Frame** | `menu_data.json` | Clear print of structural address layout. Include a fast-loading OpenStreetMap embed centering the Koning Boudewijnlaan 13 venue location. |

## 5. Input Assets & Fallbacks
- Parse input maps from `menu_data.json` and read page layouts dynamically or hard-code during compilation. 
- Track media resources locally via the mapping paths provided under `./scraped_assets/`.
- If an individual food dish does not have a dedicated image asset inside the folder, gracefully fallback to a stylized, high-quality vector silhouette or abstract placeholder.

## 6. Deliverables
- Fully fluid, commented, valid production-ready frontend bundle.
- High-contrast, highly readable UI text scaling across any viewport size.
- Filterable digital menu interface built with native HTML elements instead of static images.