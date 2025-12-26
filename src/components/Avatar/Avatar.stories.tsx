import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A circular avatar component for displaying user images or initials. Built with Panda CSS for zero-runtime styling.

## Key Features

- ✅ **4 Sizes** - Small, Medium, Large, Extra Large
- ✅ **Image Support** - Display user photos
- ✅ **Fallback** - Shows initials when no image
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Zero-Runtime** - Styled with Panda CSS
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The size of the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    src: {
      control: 'text',
      description: 'Image source URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
      table: {
        type: { summary: 'string' },
      },
    },
    fallback: {
      control: 'text',
      description: 'Fallback text (usually initials)',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar',
  },
};

export const WithInitials: Story = {
  args: {
    fallback: 'JD',
  },
};

export const AllSizes: Story = {
  args: {
    fallback: 'AB',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="xl" />
    </div>
  ),
};

export const AvatarGroup: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Avatar {...args} src="https://i.pravatar.cc/150?img=1" alt="User 1" />
      <Avatar {...args} src="https://i.pravatar.cc/150?img=2" alt="User 2" />
      <Avatar {...args} src="https://i.pravatar.cc/150?img=3" alt="User 3" />
      <Avatar {...args} fallback="+5" />
    </div>
  ),
};
