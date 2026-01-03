# @mddiosc/ui

> Modern React component library built with Panda CSS, Radix UI, and TypeScript

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Panda CSS](https://img.shields.io/badge/Panda%20CSS-1.7-green.svg)](https://panda-css.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 Purpose

This is a **portfolio project** demonstrating my skills in:

- ✅ Component library architecture
- ✅ Design system implementation
- ✅ Modern React patterns (React 19)
- ✅ Zero-runtime CSS-in-JS (Panda CSS)
- ✅ Accessibility best practices (Radix UI)
- ✅ TypeScript advanced usage
- ✅ Testing with Vitest
- ✅ Documentation with Storybook

> **Note:** This library is for demonstration purposes and is not intended for production use.

## ✨ Features

- 🎨 **Zero-runtime styling** with Panda CSS
- ♿ **Accessible components** built on Radix UI primitives
- 📘 **TypeScript strict mode** for type safety
- 🧪 **Comprehensive testing** with Vitest + React Testing Library
- 📚 **Interactive documentation** with Storybook
- ⚡ **Optimized for React 19** with latest features
- 🎭 **Smooth animations** with Framer Motion
- 🌓 **Theme support** (coming soon)

## 🛠️ Tech Stack

### Core
- **React 19** - Latest React with compiler optimizations
- **TypeScript 5.9** - Strict type checking
- **Vite 7** - Lightning-fast build tool

### Styling
- **Panda CSS 1.7** - Zero-runtime CSS-in-JS
- **Design Tokens** - Comprehensive token system
- **Framer Motion** - Animation library

### Components
- **Radix UI** - Unstyled, accessible component primitives
- **Slot pattern** - Flexible component composition

### Development
- **Vitest** - Fast unit testing
- **React Testing Library** - Component testing
- **Storybook 10** - Component documentation
- **ESLint** - Code linting
- **pnpm** - Fast package manager

## 📦 Components

### Available Components (13)

#### Atoms (10)
- ✅ **Button** - Multiple variants (primary, secondary, outline, ghost, link, destructive) and sizes
- ✅ **Input** - Text inputs with validation states (default, error, success) and multiple types
- ✅ **Badge** - Status indicators and labels with color variants
- ✅ **Avatar** - User profile images with fallback support  
- ✅ **Icon** - 1000+ Lucide icons with size and color variants
- ✅ **Text** - Typography component with semantic variants
- ✅ **Heading** - Semantic headings (h1-h6) with customization
- ✅ **Checkbox** - Boolean input with indeterminate state support
- ✅ **Radio** - Mutually exclusive selection in groups
- ✅ **Switch** - Toggle for boolean states

#### Molecules (3)
- ✅ **Card** - Content containers with header, content, and footer sections
- ✅ **FormField** - Form wrapper with label, helper text, and error messages  
- ✅ **Select** - Dropdown selection (Radix UI-based, keyboard accessible, fully styled)

### Coming Soon

- 🚧 **Dialog / Modal** - Accessible dialogs with Radix UI
- 🚧 **Dropdown Menu** - Context menus and action menus
- 🚧 **Tooltip** - Contextual information on hover
- 🚧 **Toast** - Notification system
- 🚧 **Tabs** - Tabbed interfaces

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/mddiosc/ui.git

# Navigate to project
cd ui

# Install dependencies
pnpm install

# Generate Panda CSS
pnpm panda codegen
```

### Development

```bash
# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Build the library
pnpm build
```

## 📖 Documentation

Visit the [Storybook documentation](https://ui.migueldedioscalles.dev) to see all components in action.

## 🎨 Design System

### Design Tokens

The library includes a comprehensive design token system:

- **Colors**: Gray scale, primary (blue), success (green), error (red), warning (yellow)
- **Spacing**: Consistent scale from 0 to 96 (0rem to 24rem)
- **Typography**: Font sizes, weights, and line heights
- **Radii**: Border radius tokens
- **Shadows**: Elevation system
- **Animations**: Duration and easing tokens

### Semantic Tokens

Semantic tokens provide meaningful names for common use cases:

- `bg.canvas`, `bg.surface`, `bg.muted`
- `text.primary`, `text.secondary`, `text.tertiary`
- `border.default`, `border.muted`, `border.strong`
- `primary.default`, `primary.hover`, `primary.active`

## 🧪 Testing

All components include:

- ✅ Unit tests with Vitest
- ✅ Component tests with React Testing Library
- ✅ Accessibility tests in Storybook
- ✅ >80% code coverage goal

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage report
pnpm test:coverage
```

## 📁 Project Structure

```
ui/
├── src/
│   ├── components/          # React components
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.test.tsx
│   │       ├── Button.stories.tsx
│   │       └── index.ts
│   ├── recipes/             # Panda CSS recipes (variants)
│   │   └── button.recipe.ts
│   ├── test/                # Test setup
│   ├── index.css            # Panda CSS layers
│   └── index.ts             # Public API
├── styled-system/           # Generated by Panda CSS
├── .storybook/              # Storybook configuration
├── panda.config.ts          # Panda CSS configuration
├── vitest.config.ts         # Vitest configuration
└── package.json
```

## 🎯 Example Usage

```tsx
import { Button } from '@mddiosc/ui';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>
      
      <Button variant="outline" size="lg">
        Outline Button
      </Button>
      
      {/* Composition with asChild */}
      <Button asChild>
        <a href="/profile">Go to Profile</a>
      </Button>
    </div>
  );
}
```

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome! Feel free to open an issue or reach out.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👤 Author

**Miguel Ángel de Dios Calles**

- 🌐 Website: [migueldedioscalles.dev](https://migueldedioscalles.dev)
- 💼 LinkedIn: [Miguel Ángel de Dios](https://linkedin.com/in/mddiosc)
- 🐙 GitHub: [@mddiosc](https://github.com/mddiosc)

---

⭐ **If you found this project interesting, please consider giving it a star!**
