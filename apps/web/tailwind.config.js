const preset = require('@tcc-fabio/config/tailwind-preset.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
