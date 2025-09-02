// hero.ts
import { heroui } from '@heroui/react'
// or import from theme package if you are using individual packages.
// import { heroui } from "@heroui/theme";
export default heroui({
  themes: {
    light: {
      colors: {
        background: '#F4F4F5',
        foreground: '#111827',
        primary: {
          DEFAULT: '#4a5df9',
          foreground: '#111827',
        },
        secondary: { DEFAULT: '#48245d' },
        // accent: { DEFAULT: '#00E7C6' },
        // border: '#D1D5DB',
        // muted: '#6B7280',
        // card: '#FFFFFF',
        success: { DEFAULT: '#b3df72' },
        warning: { DEFAULT: '#FFC107' },
        danger: { DEFAULT: '#F15B50' },
      },
      layout: {
        radius: {
          small: '8px',
          medium: '8px',
          large: '8px',
          // full: '8px',
        },
      },
    },
    dark: {
      colors: {
        background: '#1f1f21',
        foreground: '#d4d1ea',
        content1: '#242528',
        primary: { DEFAULT: '#4a5df9', foreground: '#ffffff' },
        secondary: { DEFAULT: '#cc95e9', foreground: '#292a2e' },
        // accent: { DEFAULT: '#1a212b' },
        // border: '#24292E',
        // muted: '#1a212b',
        // card: '#1a212b',
        success: { DEFAULT: '#b3df72' },
        warning: { DEFAULT: '#FFCA28' },
        danger: { DEFAULT: '#F15B50' },
      },
      layout: {
        fontSize: { small: '16px' },
      },
    },
  },
})
