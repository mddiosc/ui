import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Text size',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'error'],
      description: 'Text color',
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label'],
      description: 'HTML element to render',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    size: 'md',
    weight: 'normal',
    align: 'left',
    color: 'default',
  },
};

export const Sizes: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    weight: 'normal',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Text {...args} size="xs">Extra Small: The quick brown fox jumps over the lazy dog</Text>
      <Text {...args} size="sm">Small: The quick brown fox jumps over the lazy dog</Text>
      <Text {...args} size="md">Medium: The quick brown fox jumps over the lazy dog</Text>
      <Text {...args} size="lg">Large: The quick brown fox jumps over the lazy dog</Text>
      <Text {...args} size="xl">Extra Large: The quick brown fox jumps over the lazy dog</Text>
    </div>
  ),
};

export const Weights: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    size: 'md',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Text {...args} weight="normal">Normal: The quick brown fox jumps over the lazy dog</Text>
      <Text {...args} weight="medium">Medium: The quick brown fox jumps over the lazy dog</Text>
      <Text {...args} weight="semibold">Semibold: The quick brown fox jumps over the lazy dog</Text>
      <Text {...args} weight="bold">Bold: The quick brown fox jumps over the lazy dog</Text>
    </div>
  ),
};

export const Alignments: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    size: 'md',
    weight: 'normal',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Text {...args} align="left">Left aligned text</Text>
      <Text {...args} align="center">Center aligned text</Text>
      <Text {...args} align="right">Right aligned text</Text>
    </div>
  ),
};

export const Colors: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    size: 'md',
    weight: 'normal',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Text {...args} color="default">Default color</Text>
      <Text {...args} color="muted">Muted color</Text>
      <Text {...args} color="primary">Primary color</Text>
      <Text {...args} color="success">Success color</Text>
      <Text {...args} color="warning">Warning color</Text>
      <Text {...args} color="error">Error color</Text>
    </div>
  ),
};

export const AsElements: Story = {
  args: {
    children: 'This text can be rendered as different HTML elements',
    size: 'md',
    weight: 'normal',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Text {...args} as="p">As paragraph (p)</Text>
      <Text {...args} as="span">As span</Text>
      <Text {...args} as="div">As div</Text>
      <Text {...args} as="label">As label</Text>
    </div>
  ),
};
