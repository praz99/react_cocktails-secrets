export const theme = {
  colors: {
    bg1: '#0b1120',
    bg2: '#060d1a',
    surface: '#0f1a2e',
    card: '#111d35',
    cardHover: '#162240',
    accent: '#14d4c0',
    accentGlow: 'rgba(20, 212, 192, 0.15)',
    accentDim: '#0fb9a8',
    muted: '#8899b0',
    text: '#e8f0f8',
    textDim: '#b0c4d8',
    error: '#ff6b6b',
    border: 'rgba(255, 255, 255, 0.05)',
    borderFocus: 'rgba(20, 212, 192, 0.4)',
    overlay: 'rgba(6, 13, 26, 0.7)',
    glassBg: 'rgba(255, 255, 255, 0.03)',
    glassBorder: 'rgba(255, 255, 255, 0.06)',
  },
  fonts: {
    body: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    display: "'Playfair Display', 'Inter', serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace",
  },
  shadows: {
    sm: '0 2px 8px rgba(2, 6, 23, 0.4)',
    md: '0 6px 20px rgba(2, 6, 23, 0.5)',
    lg: '0 12px 40px rgba(2, 6, 23, 0.6)',
    glow: '0 0 30px rgba(20, 212, 192, 0.08)',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;

export type Theme = typeof theme;
