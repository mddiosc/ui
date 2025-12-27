import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Radio size',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option A',
    size: 'md',
    name: 'default-radio',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio size="sm" label="Small radio" name="size-demo" />
      <Radio size="md" label="Medium radio" name="size-demo" />
      <Radio size="lg" label="Large radio" name="size-demo" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio label="Unchecked" name="states" />
      <Radio label="Checked" name="states" defaultChecked />
      <Radio label="Disabled" name="states-disabled" disabled />
      <Radio label="Disabled & Checked" name="states-disabled-checked" disabled defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Radio size="sm" name="no-label" />
      <Radio size="md" name="no-label" />
      <Radio size="lg" name="no-label" />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
          Select an option:
        </h4>
        <Radio
          label="Option 1"
          name="radio-group"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          label="Option 2"
          name="radio-group"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Radio
          label="Option 3"
          name="radio-group"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
          Selected: {selected}
        </p>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [plan, setPlan] = useState('basic');
    
    return (
      <div style={{ maxWidth: '400px', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Choose a Plan
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
            <Radio
              label="Basic - $9/month"
              name="plan"
              value="basic"
              checked={plan === 'basic'}
              onChange={(e) => setPlan(e.target.value)}
            />
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginLeft: '1.75rem', marginTop: '0.25rem' }}>
              Perfect for individuals
            </p>
          </div>
          <div style={{ padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
            <Radio
              label="Pro - $29/month"
              name="plan"
              value="pro"
              checked={plan === 'pro'}
              onChange={(e) => setPlan(e.target.value)}
            />
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginLeft: '1.75rem', marginTop: '0.25rem' }}>
              Best for small teams
            </p>
          </div>
          <div style={{ padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
            <Radio
              label="Enterprise - Custom"
              name="plan"
              value="enterprise"
              checked={plan === 'enterprise'}
              onChange={(e) => setPlan(e.target.value)}
            />
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginLeft: '1.75rem', marginTop: '0.25rem' }}>
              For large organizations
            </p>
          </div>
        </div>
        <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
            Selected plan: <strong>{plan}</strong>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};
