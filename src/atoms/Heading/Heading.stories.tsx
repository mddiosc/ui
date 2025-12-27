import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level (semantic HTML)',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
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
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox',
    level: 'h2',
    weight: 'bold',
    align: 'left',
    color: 'default',
  },
};

export const Levels: Story = {
  args: {
    children: 'The Quick Brown Fox',
    weight: 'bold',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '600px' }}>
      <Heading {...args} level="h1">Heading 1: The Quick Brown Fox</Heading>
      <Heading {...args} level="h2">Heading 2: The Quick Brown Fox</Heading>
      <Heading {...args} level="h3">Heading 3: The Quick Brown Fox</Heading>
      <Heading {...args} level="h4">Heading 4: The Quick Brown Fox</Heading>
      <Heading {...args} level="h5">Heading 5: The Quick Brown Fox</Heading>
      <Heading {...args} level="h6">Heading 6: The Quick Brown Fox</Heading>
    </div>
  ),
};

export const Weights: Story = {
  args: {
    children: 'The Quick Brown Fox',
    level: 'h2',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Heading {...args} weight="normal">Normal Weight</Heading>
      <Heading {...args} weight="medium">Medium Weight</Heading>
      <Heading {...args} weight="semibold">Semibold Weight</Heading>
      <Heading {...args} weight="bold">Bold Weight</Heading>
      <Heading {...args} weight="extrabold">Extra Bold Weight</Heading>
    </div>
  ),
};

export const Alignments: Story = {
  args: {
    children: 'The Quick Brown Fox',
    level: 'h2',
    weight: 'bold',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Heading {...args} align="left">Left Aligned Heading</Heading>
      <Heading {...args} align="center">Center Aligned Heading</Heading>
      <Heading {...args} align="right">Right Aligned Heading</Heading>
    </div>
  ),
};

export const Colors: Story = {
  args: {
    children: 'The Quick Brown Fox',
    level: 'h2',
    weight: 'bold',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px' }}>
      <Heading {...args} color="default">Default Color</Heading>
      <Heading {...args} color="muted">Muted Color</Heading>
      <Heading {...args} color="primary">Primary Color</Heading>
      <Heading {...args} color="success">Success Color</Heading>
      <Heading {...args} color="warning">Warning Color</Heading>
      <Heading {...args} color="error">Error Color</Heading>
    </div>
  ),
};

export const PageExample: Story = {
  args: {
    weight: 'bold',
    color: 'default',
  },
  render: (args) => (
    <div style={{ maxWidth: '800px', padding: '2rem' }}>
      <Heading {...args} level="h1">Main Page Title</Heading>
      <p style={{ marginTop: '1rem', color: '#6b7280' }}>
        This is a paragraph of body text that follows the main heading.
      </p>
      
      <Heading {...args} level="h2" style={{ marginTop: '2rem' }}>Section Heading</Heading>
      <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>
        Another paragraph explaining this section in more detail.
      </p>
      
      <Heading {...args} level="h3" style={{ marginTop: '1.5rem' }}>Subsection Heading</Heading>
      <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>
        Content for the subsection goes here.
      </p>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
