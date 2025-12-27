import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible card component with composition pattern for building content containers. Built with Panda CSS for zero-runtime styling.

## Key Features

- ✅ **3 Variants** - Default, Outlined, Elevated
- ✅ **Composition** - Header, Content, Footer components
- ✅ **Flexible** - Use any combination of sub-components
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
      options: ['default', 'outlined', 'elevated'],
      description: 'The visual style variant of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <CardContent>
        <p>This is a default card with shadow.</p>
      </CardContent>
    ),
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Card {...args} style={{ width: '350px' }}>
      <CardHeader>
        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Card Title</h3>
        <p style={{ margin: '0.5rem 0 0', color: '#6b7280', fontSize: '0.875rem' }}>
          Card subtitle or description
        </p>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0 }}>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '0.375rem', border: '1px solid #e5e7eb', background: 'white', cursor: 'pointer' }}>
            Cancel
          </button>
          <button style={{ padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', background: '#2563eb', color: 'white', cursor: 'pointer' }}>
            Save
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const AllVariants: Story = {
  args: {
    children: (
      <CardContent>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>Content shared across variants</p>
      </CardContent>
    ),
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card {...args} variant="default" style={{ width: '200px' }}>
        <CardHeader><strong style={{ fontSize: '0.875rem' }}>Default</strong></CardHeader>
        {args.children}
      </Card>
      <Card {...args} variant="outlined" style={{ width: '200px' }}>
        <CardHeader><strong style={{ fontSize: '0.875rem' }}>Outlined</strong></CardHeader>
        {args.children}
      </Card>
      <Card {...args} variant="elevated" style={{ width: '200px' }}>
        <CardHeader><strong style={{ fontSize: '0.875rem' }}>Elevated</strong></CardHeader>
        {args.children}
      </Card>
    </div>
  ),
};
