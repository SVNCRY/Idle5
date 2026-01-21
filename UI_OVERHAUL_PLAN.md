# UI Overhaul Plan: Mzansi Crime Idle

## 1. Vision: From "Spreadsheet" to "Street Empire"
**Objective:** Transform the interface from a static HTML table structure into a dynamic, app-like experience that immerses the player in the South African underworld theme. The UI should feel "juicy" (responsive, animated, rewarding) and mobile-first.

## 2. Visual Identity (The "Mzansi" Aesthetic)
**Theme:** Dark Mode with High Contrast.
- **Background:** Dark slate/charcoal (`#1a1a1a`) to represent the night/underworld.
- **Primary Accent:** **Gold** (`#FFD700`) for Money/Prestige.
- **Secondary Accent:** **Danger Red** (`#ef4444`) for Heat/Risk.
- **Tertiary:** **Neon Green** (`#39ff14`) for Income Rates/Upgrades.
- **Texture:** Subtle grit/noise overlays or localized patterns (Shweshwe patterns subtly in headers).

**Typography:**
- **Headings:** *'Black Ops One'* or *'Rye'* (Stenciled/Gritty look).
- **Body:** *'Inter'* or *'Roboto'* (Clean, legible for numbers).

## 3. Layout Architecture (Mobile-First)

### A. The HUD (Heads-Up Display)
*Fixed Top Bar*
1.  **Left:** Rank Badge (Icon + Rank Name e.g., "Tsotsi").
2.  **Center:** **Cash Counter** (Large, animated ticker).
3.  **Right:** **Heat Meter** (0-5 Stars, GTA style).
4.  **Sub-bar:** Net Income/sec (Green text).

### B. The Viewport (Main Content)
*Scrollable Central Area*
- **Dynamic Background:** Fixed position image behind the scrollable content. Changes based on the current Province (e.g., Ponte City for Gauteng, Table Mountain for WC).
- **Content Container:** Semi-transparent dark glass effect (`backdrop-blur`) to ensure text readability over the background.

### C. Navigation (The "Burner Phone" Menu)
*Fixed Bottom Bar (App Style)*
Instead of top tabs, use a bottom navigation bar with icons:
1.  **Hustle:** (Fist Icon) Active clicking & Weapons.
2.  **Rackets:** (Briefcase Icon) Passive Missions.
3.  **Map:** (Map Icon) Province selector.
4.  **Empire:** (Crown Icon) Upgrades, Prestige, Ministers.
5.  **Menu:** (Cog Icon) Settings, Stats, Save/Load.

## 4. Component Redesign (DaisyUI + Tailwind)

### A. Mission Cards (Replacing Tables)
Transform the `<table>` rows into **Cards**.
```html
<div class="card w-full bg-base-100 shadow-xl image-full">
  <figure><img src="mission-bg.jpg" /></figure>
  <div class="card-body">
    <h2 class="card-title">CIT Heist <span class="badge badge-secondary">Lvl 50</span></h2>
    <p>Income: R 5,000/sec</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy (R 50k)</button>
    </div>
    <progress class="progress progress-warning w-56" value="70" max="100"></progress>
  </div>
</div>
```

### B. The Map Interface
- **Visual:** An SVG map of South Africa.
- **Interactivity:**
  - **Locked Provinces:** Greyed out, padlock icon.
  - **Unlocked Provinces:** Colored by "Risk Level" (Green/Orange/Red).
  - **Selected:** Pulsing outline.
- **Tooltip:** Hovering/Tapping shows "Income Multiplier" and "Unique Resource" for that region.

### C. Feedback & "Juice"
- **Floating Text:** Clicking the active button spawns floating "R 100" text that drifts up and fades out.
- **Button Press:** CSS `active:scale-95` for tactile feel.
- **Number Rolling:** When cash increases significantly, the numbers should "roll" up rather than instantly changing.

## 5. Implementation Roadmap

### Phase 1: Skeleton & Navigation
- [ ] Install **DaisyUI**.
- [ ] Rewrite `index.html` to use the **Header - Main - Footer** grid layout.
- [ ] Implement the Bottom Navigation bar.

### Phase 2: Card Conversion
- [ ] Refactor `js/ui.js` to render Missions and Weapons as Cards.
- [ ] Add the "Dynamic Background" logic to `js/ui.js` (listening to `map.js` region changes).

### Phase 3: The Map
- [ ] Create/Import an SVG of South Africa with paths for each province.
- [ ] Bind click events in `js/map.js` to the SVG paths.