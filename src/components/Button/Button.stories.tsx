import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile button component built with Radix UI Slot and Panda CSS. Supports multiple variants, sizes, and composition patterns for maximum flexibility.

## Key Features

- ✅ **6 Variants** - Primary, Secondary, Outline, Ghost, Link, Destructive
- ✅ **3 Sizes** - Small, Medium, Large
- ✅ **Fully Accessible** - ARIA compliant with keyboard navigation
- ✅ **Composable** - Use \`asChild\` for custom elements
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Zero-Runtime** - Styled with Panda CSS
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
      description: 'The visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child element (for composition)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default variant for primary actions. High contrast and attention-grabbing. Use for main call-to-action buttons, form submissions, and primary navigation actions.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /primary button/i });
    
    // Verify button is in the document
    await expect(button).toBeInTheDocument();
    
    // Verify button is clickable
    await userEvent.click(button);
    
    // Verify button has correct attributes
    await expect(button).not.toBeDisabled();
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Red variant for dangerous or destructive actions. Use for delete operations, destructive actions, and warning prompts. Always pair with confirmation dialogs for critical actions.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /disabled button/i });
    
    // Verify button is disabled
    await expect(button).toBeDisabled();
    
    // Verify button cannot be clicked
    await expect(button).toHaveAttribute('disabled');
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Button',
    size: 'md',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button {...args} variant="primary">Primary</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="outline">Outline</Button>
        <Button {...args} variant="ghost">Ghost</Button>
        <Button {...args} variant="link">Link</Button>
        <Button {...args} variant="destructive">Destructive</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const AsChildExample: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`asChild\` prop to render button styles on a different element. Perfect for creating styled links, integrating with routing libraries (Next.js Link, React Router), or composing with other components while maintaining button appearance.`,
      },
    },
  },
  render: (args) => (
    <Button {...args} asChild>
      <a 
        href="https://github.com/mddiosc" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit GitHub profile (opens in new tab)"
      >
        GitHub Profile
      </a>
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /visit github profile/i });
    
    // Verify link is in the document
    await expect(link).toBeInTheDocument();
    
    // Verify link has correct attributes
    await expect(link).toHaveAttribute('href', 'https://github.com/mddiosc');
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Verify accessibility
    await expect(link).toHaveAccessibleName(/visit github profile/i);
  },
};
