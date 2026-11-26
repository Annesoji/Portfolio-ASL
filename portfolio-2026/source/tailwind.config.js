/** @type {import('tailwindcss').Config} */
export default {
  // skill-test : page de revue des tests du skill (développement uniquement)
  content: ['./index.html', './src/**/*.{ts,tsx}', './skill-test.html', './skill-test/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        elevated: 'var(--elevated)',
        line: 'var(--line)',
        rule: 'var(--rule)',
        sidebar: 'var(--sidebar)',
        bubble: 'var(--bubble)',
        'bubble-fg': 'var(--bubble-fg)',
        vermillion: 'var(--vermillion)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-fg': 'var(--accent-fg)',
        'accent-text': 'var(--accent-text)',
        'accent-tint': 'var(--accent-tint)',
        olive: 'var(--olive)',
        'olive-fg': 'var(--olive-fg)',
        'olive-text': 'var(--olive-text)',
        'olive-tint': 'var(--olive-tint)',
        'code-bg': 'var(--code-bg)',
        'code-ink': 'var(--code-ink)',
        'code-muted': 'var(--code-muted)',
      },
      boxShadow: {
        signature: 'var(--shadow)',
      },
    },
  },
  plugins: [],
};
