import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // Primitive colors - Gray scale
          gray: {
            50: { value: '#f9fafb' },
            100: { value: '#f3f4f6' },
            200: { value: '#e5e7eb' },
            300: { value: '#d1d5db' },
            400: { value: '#9ca3af' },
            500: { value: '#6b7280' },
            600: { value: '#4b5563' },
            700: { value: '#374151' },
            800: { value: '#1f2937' },
            900: { value: '#111827' },
            950: { value: '#030712' },
          },

          // Primary color - Blue
          blue: {
            50: { value: '#eff6ff' },
            100: { value: '#dbeafe' },
            200: { value: '#bfdbfe' },
            300: { value: '#93c5fd' },
            400: { value: '#60a5fa' },
            500: { value: '#3b82f6' },
            600: { value: '#2563eb' },
            700: { value: '#1d4ed8' },
            800: { value: '#1e40af' },
            900: { value: '#1e3a8a' },
            950: { value: '#172554' },
          },

          // Success - Green
          green: {
            50: { value: '#f0fdf4' },
            100: { value: '#dcfce7' },
            200: { value: '#bbf7d0' },
            300: { value: '#86efac' },
            400: { value: '#4ade80' },
            500: { value: '#22c55e' },
            600: { value: '#16a34a' },
            700: { value: '#15803d' },
            800: { value: '#166534' },
            900: { value: '#14532d' },
          },

          // Error - Red
          red: {
            50: { value: '#fef2f2' },
            100: { value: '#fee2e2' },
            200: { value: '#fecaca' },
            300: { value: '#fca5a5' },
            400: { value: '#f87171' },
            500: { value: '#ef4444' },
            600: { value: '#dc2626' },
            700: { value: '#b91c1c' },
            800: { value: '#991b1b' },
            900: { value: '#7f1d1d' },
          },

          // Warning - Yellow
          yellow: {
            50: { value: '#fefce8' },
            100: { value: '#fef9c3' },
            200: { value: '#fef08a' },
            300: { value: '#fde047' },
            400: { value: '#facc15' },
            500: { value: '#eab308' },
            600: { value: '#ca8a04' },
            700: { value: '#a16207' },
            800: { value: '#854d0e' },
            900: { value: '#713f12' },
          },

          // Semantic tokens
          white: { value: '#ffffff' },
          black: { value: '#000000' },
        },

        spacing: {
          0: { value: '0' },
          px: { value: '1px' },
          0.5: { value: '0.125rem' },
          1: { value: '0.25rem' },
          1.5: { value: '0.375rem' },
          2: { value: '0.5rem' },
          2.5: { value: '0.625rem' },
          3: { value: '0.75rem' },
          3.5: { value: '0.875rem' },
          4: { value: '1rem' },
          5: { value: '1.25rem' },
          6: { value: '1.5rem' },
          7: { value: '1.75rem' },
          8: { value: '2rem' },
          9: { value: '2.25rem' },
          10: { value: '2.5rem' },
          11: { value: '2.75rem' },
          12: { value: '3rem' },
          14: { value: '3.5rem' },
          16: { value: '4rem' },
          20: { value: '5rem' },
          24: { value: '6rem' },
          28: { value: '7rem' },
          32: { value: '8rem' },
          36: { value: '9rem' },
          40: { value: '10rem' },
          44: { value: '11rem' },
          48: { value: '12rem' },
          52: { value: '13rem' },
          56: { value: '14rem' },
          60: { value: '15rem' },
          64: { value: '16rem' },
          72: { value: '18rem' },
          80: { value: '20rem' },
          96: { value: '24rem' },
        },

        fontSizes: {
          xs: { value: '0.75rem' },
          sm: { value: '0.875rem' },
          md: { value: '1rem' },
          lg: { value: '1.125rem' },
          xl: { value: '1.25rem' },
          '2xl': { value: '1.5rem' },
          '3xl': { value: '1.875rem' },
          '4xl': { value: '2.25rem' },
          '5xl': { value: '3rem' },
          '6xl': { value: '3.75rem' },
          '7xl': { value: '4.5rem' },
          '8xl': { value: '6rem' },
          '9xl': { value: '8rem' },
        },

        fontWeights: {
          thin: { value: '100' },
          extralight: { value: '200' },
          light: { value: '300' },
          normal: { value: '400' },
          medium: { value: '500' },
          semibold: { value: '600' },
          bold: { value: '700' },
          extrabold: { value: '800' },
          black: { value: '900' },
        },

        lineHeights: {
          none: { value: '1' },
          tight: { value: '1.25' },
          snug: { value: '1.375' },
          normal: { value: '1.5' },
          relaxed: { value: '1.625' },
          loose: { value: '2' },
        },

        radii: {
          none: { value: '0' },
          sm: { value: '0.125rem' },
          base: { value: '0.25rem' },
          md: { value: '0.375rem' },
          lg: { value: '0.5rem' },
          xl: { value: '0.75rem' },
          '2xl': { value: '1rem' },
          '3xl': { value: '1.5rem' },
          full: { value: '9999px' },
        },

        shadows: {
          xs: { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
          sm: { value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
          md: { value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
          lg: { value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
          xl: { value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
          '2xl': { value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
          inner: { value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
          none: { value: '0 0 #0000' },
        },

        durations: {
          fast: { value: '150ms' },
          normal: { value: '250ms' },
          slow: { value: '350ms' },
          slower: { value: '500ms' },
        },

        easings: {
          default: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
          linear: { value: 'linear' },
          in: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
          out: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
          'in-out': { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        },
      },

      semanticTokens: {
        colors: {
          // Background colors
          bg: {
            canvas: { value: '{colors.white}' },
            surface: { value: '{colors.gray.50}' },
            muted: { value: '{colors.gray.100}' },
          },

          // Text colors
          text: {
            primary: { value: '{colors.gray.900}' },
            secondary: { value: '{colors.gray.600}' },
            tertiary: { value: '{colors.gray.500}' },
            disabled: { value: '{colors.gray.400}' },
            inverse: { value: '{colors.white}' },
          },

          // Border colors
          border: {
            default: { value: '{colors.gray.200}' },
            muted: { value: '{colors.gray.100}' },
            strong: { value: '{colors.gray.300}' },
          },

          // Interactive colors
          primary: {
            default: { value: '{colors.blue.600}' },
            hover: { value: '{colors.blue.700}' },
            active: { value: '{colors.blue.800}' },
            subtle: { value: '{colors.blue.50}' },
          },

          // Status colors
          success: {
            default: { value: '{colors.green.600}' },
            hover: { value: '{colors.green.700}' },
            subtle: { value: '{colors.green.50}' },
          },
          error: {
            default: { value: '{colors.red.600}' },
            hover: { value: '{colors.red.700}' },
            subtle: { value: '{colors.red.50}' },
          },
          warning: {
            default: { value: '{colors.yellow.600}' },
            hover: { value: '{colors.yellow.700}' },
            subtle: { value: '{colors.yellow.50}' },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // The JSX framework to use
  jsxFramework: 'react',
});
