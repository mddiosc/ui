import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from 'storybook/test';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible input component with multiple variants, sizes, and states for form interactions. Built with Panda CSS for zero-runtime styling and full accessibility support.

## Key Features

- ✅ **4 Variants** - Text, Email, Password, Search
- ✅ **3 Sizes** - Small, Medium, Large
- ✅ **3 States** - Default, Error, Success
- ✅ **Fully Accessible** - ARIA compliant with proper labels
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
      options: ['text', 'email', 'password', 'search'],
      description: 'The input type variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual state of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Shorthand for error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

// Story 1: All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input variant="text" placeholder="Text input" />
      <Input variant="email" placeholder="Email input" />
      <Input variant="password" placeholder="Password input" />
      <Input variant="search" placeholder="Search input" />
    </div>
  ),
};

// Story 2: All Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input (default)" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

// Story 3: With Label
export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '300px' }}>
      <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
        Email Address
      </label>
      <Input id="email" variant="email" placeholder="you@example.com" />
      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
        We'll never share your email with anyone else.
      </span>
    </div>
  ),
};

// Story 4: With Helper Text
export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="username" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
          Username
        </label>
        <Input id="username" placeholder="Enter username" />
        <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          Choose a unique username
        </span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
          Password
        </label>
        <Input id="password" variant="password" placeholder="Enter password" />
        <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          Must be at least 8 characters
        </span>
      </div>
    </div>
  ),
};

// Story 5: Error State with Play Function
export const ErrorState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '300px' }}>
      <label htmlFor="error-input" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
        Email Address
      </label>
      <Input 
        id="error-input" 
        variant="email" 
        error 
        placeholder="you@example.com"
        aria-invalid="true"
        aria-describedby="error-message"
      />
      <span id="error-message" style={{ fontSize: '0.75rem', color: '#dc2626' }}>
        Please enter a valid email address
      </span>
    </div>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    
    await step('Verify error state is visible', async () => {
      const input = canvas.getByRole('textbox');
      await expect(input).toHaveAttribute('aria-invalid', 'true');
      await expect(canvas.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  },
};

// Story 6: Interactive Input with Play Function
export const InteractiveInput: Story = {
  args: {
    placeholder: 'Type something...',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    
    await step('Type in the input', async () => {
      const input = canvas.getByPlaceholderText('Type something...');
      await userEvent.type(input, 'Hello World', { delay: 100 });
    });
    
    await step('Verify input value', async () => {
      const input = canvas.getByPlaceholderText('Type something...');
      await expect(input).toHaveValue('Hello World');
    });
    
    await step('Clear input', async () => {
      const input = canvas.getByPlaceholderText('Type something...');
      await userEvent.clear(input);
      await expect(input).toHaveValue('');
    });
  },
};

// Story 7: Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

// Story 8: Success State
export const SuccessState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '300px' }}>
      <label htmlFor="success-input" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
        Email Address
      </label>
      <Input 
        id="success-input" 
        variant="email" 
        state="success"
        defaultValue="user@example.com"
      />
      <span style={{ fontSize: '0.75rem', color: '#16a34a' }}>
        ✓ Email is valid
      </span>
    </div>
  ),
};
