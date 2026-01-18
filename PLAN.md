# Project Expansion Plan: Mzansi Crime Idle

## 1. Game Extension & Balancing
**Goal:** Increase the longevity of the game loop and introduce deeper progression mechanics beyond the current "Guptas Compound Raid" end-game.

### A. Rebalancing Economy (`js/data.js`)
- **Milestone Multipliers:** Implement a system where owning specific quantities of a mission (e.g., 25, 50, 100, 200) doubles its speed or profit. This encourages "back-filling" early game missions like *Smash and Grab*.
- **Cost Scaling:** Review the `BigNumber` growth curves. Ensure the jump from "Late-game" to "End-game" requires significant engagement with the Prestige system.

### B. New Progression Tier: "Continental Kingpin"
Extend the game beyond South African borders into the SADC region.
- **New Missions (Rank 3000+):**
  - *Cross-Border Cigarettes (Zimbabwe)*
  - *Luxury Car Smuggling (Mozambique)*
  - *Oil Bunkering (Angola)*
  - *Gold Mafia Operations (Dubai Connection)*

### C. Prestige 2.0: "State Capture"
Currently, prestige resets progress for multipliers. We will add a secondary currency: **Influence**.
- **Mechanic:** Spending "Chips" allows you to buy "Ministers".
- **Minister of Police:** Reduces "Heat" (see World Expansion).
- **Minister of Energy:** Reduces costs of industrial missions (factories/mines).
- **Minister of Transport:** Boosts Taxi and Smuggling income.

## 2. World Expansion
**Goal:** Move from a static list of missions to a geographic sense of progression, utilizing the diverse regions of South Africa.

### A. Regional Unlocks
Instead of a flat list, missions will be grouped by Province. Unlocking a province requires a specific Rank or License.

#### **Gauteng (The Concrete Jungle)**
*Focus: Violent Crime & White Collar Fraud*
- **Missions:** Smash and Grab, CIT Heist, Tender Fraud, Emperors Palace Heist.
- **Unique Mechanic:** High risk, high reward.

#### **Western Cape (The Ganglands)**
*Focus: Organized Crime & Export*
- **Missions:** Perlemoen Smuggling, Tik Labs, Tourist Extortion, Parliament Takeover.
- **Unique Mechanic:** "Turf" control increases passive income.

#### **KwaZulu-Natal (The Harbor)**
*Focus: Logistics & Import/Export*
- **Missions:** Sugar Cane Arson, Container Theft, Cross-Border Car Syndicate.
- **Unique Mechanic:** Shipping routes that deliver bulk cash periodically rather than per second.

### B. The "Heat" System (Wanted Level)
Reintroduce a mechanic inspired by the original GTA theme but adapted for Idle.
- **Mechanic:** High-value crimes (CIT Heists, ATM Bombings) generate **Heat**.
- **Consequence:** High Heat reduces global income efficiency (representing money lost to bribes and hiding).
- **Mitigation:**
  - Active: Pay "Bribes" (Cash sink).
  - Passive: Buy "Legal Fronts" (Car Washes, Shisanyamas) to launder money and lower Heat.

## 3. Asset & UI Updates
- **Map Interface:** Replace the simple list tab with a stylized map of SA. Clicking a province opens the mission list for that area.
- **Visual Progression:** The background image (`images/bg.webp`) should change based on the highest unlocked region (e.g., Table Mountain for WC, Ponte Tower for Gauteng).

---
*This plan aims to transition the game from a simple clicker to a strategy-lite management game.*