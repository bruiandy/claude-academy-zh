/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          clay: '#d97757',
          ground: 'var(--cds-brand-ground, #faf7f5)',
          peach: '#ebc9b7',
        },
        surface: {
          0: 'var(--cds-surface-0)',
          1: 'var(--cds-surface-1)',
          2: 'var(--cds-surface-2)',
        },
        primary: 'var(--cds-text-primary)',
        secondary: 'var(--cds-text-secondary)',
        muted: 'var(--cds-text-muted)',
        border: 'var(--cds-border-color)',
      },
      fontFamily: {
        sans: ['Sohne', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Canela', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'card-ring': 'var(--cds-shadow-card-ring)',
        'card-ring-xs': '0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'focus': '0 0 0 2px #d97757',
      }
    },
  },
  plugins: [],
}
