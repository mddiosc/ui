import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const theme = create({
  base: 'light',
  
  // Branding
  brandTitle: 'MADC UI',
  brandUrl: 'https://migueldedioscalles.dev',
  brandImage: '/logo-full.png',
  brandTarget: '_blank',
  
  // Colors (based on your design system)
  colorPrimary: '#2563eb',      // blue.600
  colorSecondary: '#3b82f6',    // blue.500
  
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 8,
  
  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Fira Code", monospace',
  
  // Text colors
  textColor: '#111827',
  textInverseColor: '#ffffff',
  
  // Toolbar
  barTextColor: '#6b7280',
  barSelectedColor: '#2563eb',
  barHoverColor: '#2563eb',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e5e7eb',
  inputTextColor: '#111827',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
});
