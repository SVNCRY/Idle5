/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Extracted from idle-mmo.com source
        'immo': '#111722',        // Main body background
        'immo-surface': '#151b2b', // Dropdowns/Modals
        'immo-card':    '#191f2c',    // Cards/Panels
        'immo-lighter': '#1c212c', // Hover states

        // Quality colors from css1.txt
        'quality-standard-text': '#d1d5db',
        'quality-standard-border': '#37415166',
        'quality-standard-background': '#161d2a',
        'quality-refined-text': '#4d76d6',
        'quality-refined-border': '#4d76d64d',
        'quality-refined-background': '#152951',
        'quality-premium-text': '#1fd60b',
        'quality-premium-border': '#1fd60b4d',
        'quality-premium-background': '#16382b',
        'quality-epic-text': '#c0392b',
        'quality-epic-border': '#c0392b4d',
        'quality-epic-background': '#421d25',
        'quality-legendary-text': '#f7bd1e',
        'quality-legendary-border': '#f7bd1e4d',
        'quality-legendary-background': '#3d3222',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mzansi: {
          "primary": "#4f46e5",   // Indigo-600 (Buttons)
          "secondary": "#eab308", // Yellow-500 (Accents)
          "accent": "#22c55e",    // Green-500 (Success)
          "neutral": "#111827",   // Gray-900
          "base-100": "#111722",  // Main BG
          "base-200": "#191f2c",  // Card BG
          "base-300": "#374151",  // Borders
        },
      },
      "dark",
    ],
  },
}