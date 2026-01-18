# Multiplayer Concepts: Mzansi Crime Idle

## Overview
Implementing multiplayer in an idle game requires asynchronous interaction. Real-time PvP is generally poor for this genre. The focus should be on **Social Competition** and **Cooperative Growth**.

## Plan A: The Syndicate (Co-op)
**Theme:** "Stokvel" / Crime Family

### Mechanics
1.  **Creation:** Players can form a **Syndicate** (Guild).
2.  **The Pot:** Members contribute a percentage of their income to a communal "Stokvel".
3.  **Payouts:**
    - If the Syndicate reaches a weekly cash goal, all members receive a **"Payout Multiplier"** (e.g., x2 Global Income) for the following week.
    - Top contributors get "Influence" currency.
4.  **Syndicate Upgrades:** The leader can spend the pooled cash to buy permanent buffs for all members (e.g., "Better Lawyers" - 5% cheaper upgrades).

## Plan B: Taxi Wars (Competitive Asynchronous PvP)
**Theme:** Route Disputes

### Mechanics
1.  **Factions:** Players align with a Taxi Association (e.g., *Red Route* vs *Blue Route*).
2.  **Routes:** The game map has "Routes" that generate premium currency (Diamonds/Gold).
3.  **Conflict:**
    - Players assign their "Crew" (based on their Weapon/Rank stats) to attack or defend a Route.
    - This is a simple stat check: `(Attacker Power vs Defender Power) + RNG`.
4.  **Control:** The faction with the most wins on a Route at the end of the day controls it and gets the rewards.

## Plan C: The Heist (1v1 Raid)
**Theme:** Raiding the Stash

### Mechanics
1.  **The Stash:** Players have an "Unlaundered Cash" pile that hasn't been secured by a Prestige reset yet.
2.  **Defense:** Players buy security (Dogs, Electric Fences, Private Security) to increase their Defense Score.
3.  **Attack:** Players use their active Weapon stats to attempt a raid on another player.
4.  **Loot:** Successful attacks steal 1-5% of the target's unlaundered cash.
5.  **Revenge:** Victims get a "Revenge" tag to counter-attack for double rewards.

## Plan D: Global Leaderboards (Passive)
**Theme:** Most Wanted List

### Mechanics
- **Rankings:**
    - **Public Enemy No. 1:** Highest Rank.
    - **Top Earner:** Most Cash on Hand.
    - **State Capturer:** Most Prestige Levels.
- **Seasons:** Leaderboards reset monthly. Top 100 players receive unique cosmetic badges next to their name.

## Technical Requirements
- **Backend:** Node.js with WebSocket support (Socket.io) or Firebase Realtime Database.
- **Auth:** Simple ID generation or Google Auth to link saves to cloud accounts.
- **Anti-Cheat:** Server-side validation of income rates is required to prevent memory editing before syncing to the leaderboard.