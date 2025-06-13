/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',    // azul moderno
        secondary: '#6366f1',  // roxo suave
        accent: '#f59e0b',     // amarelo destaque
        dark: '#111827',       // fundo escuro
        light: '#f9fafb',      // fundo claro
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
