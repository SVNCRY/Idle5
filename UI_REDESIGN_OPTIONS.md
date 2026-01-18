# UI Redesign Strategy: Options & Recommendations

The current UI relies heavily on standard HTML Tables (`<table>`) and the default Fomantic UI theme. To modernize the game and align with the "Mobile/PWA" goals, here are three strategic options.

## Option 1: The "Card" Metamorphosis (Recommended)
**Concept:** Move away from spreadsheet-like data tables for Missions and Weapons. Instead, use "Cards" that display the item icon, name, stats, and action buttons in a contained block.

**Why:** Tables feel like work (spreadsheets). Cards feel like game inventory.

**Implementation:**
- **HTML:** Replace `<table id="missions">` with `<div id="missions-container" class="ui stackable cards">`.
- **JS:** Update `js/ui.js` to generate Card HTML instead of Table Rows (`<tr>`).
- **Responsive:** Cards automatically stack on mobile and spread out on desktop.

### Example Card Structure
```html
<div class="card inverted">
  <div class="image">
    <img src="images/missions/cit_heist.webp">
  </div>
  <div class="content">
    <div class="header">CIT Heist</div>
    <div class="meta">Level 50</div>
    <div class="description">
      <div class="ui label">Income: R500/s</div>
    </div>
  </div>
  <div class="ui bottom attached green button">
    <i class="cart icon"></i> Buy (R200)
  </div>
</div>
```

## Option 2: The "Mobile-First" Dashboard
**Concept:** Redesign the layout to mimic a native mobile app, moving navigation to the bottom and consolidating headers.

**Why:** The roadmap emphasizes PWA and mobile wrappers. Top-heavy menus are hard to reach on phones.

**Implementation:**
- **Navigation:** Move the top menu (`#game-menu`) to a fixed **Bottom Navigation Bar** on mobile screens.
- **Header:** Consolidate Money, Rank, and Chips into a sticky top header bar.
- **Layout:** Switch from the 2-column grid to a single-column feed for mobile, keeping the 2-column layout only for desktop.

## Option 3: Thematic "GTA" Skin (Low Effort)
**Concept:** Apply a strong visual theme (fonts, colors, borders) without changing the HTML structure.

**Why:** Quickest way to change the "vibe" without rewriting JavaScript logic.

**Implementation:**
- **Font:** Import a "Pricedown" style font or a gritty sans-serif.
- **Palette:** Override Fomantic UI variables. Change standard Green/Black to "Caution Yellow", "Police Blue", and "Concrete Grey".
- **Borders:** Add thick borders and drop shadows to existing tables.

---

## Recommendation
**Combine Option 1 and Option 2.**
1.  **Phase 1 (v1.1):** Convert Tables to Cards. This solves the "visual" boredom immediately.
2.  **Phase 2 (v1.2):** Implement Mobile Navigation when the Map is introduced, as the Map will require more screen real estate.