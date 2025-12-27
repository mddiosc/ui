import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size',
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled & Checked" disabled defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Checkbox size="sm" />
      <Checkbox size="md" />
      <Checkbox size="lg" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Checkbox
          label="Controlled checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Current state: {checked ? 'Checked' : 'Unchecked'}
        </p>
        <button
          onClick={() => setChecked(!checked)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
          }}
        >
          Toggle
        </button>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      newsletter: false,
      updates: true,
      marketing: false,
    });
    
    return (
      <div style={{ maxWidth: '400px', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Email Preferences
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Checkbox
            label="Newsletter subscription"
            checked={preferences.newsletter}
            onChange={(e) => setPreferences({ ...preferences, newsletter: e.target.checked })}
          />
          <Checkbox
            label="Product updates"
            checked={preferences.updates}
            onChange={(e) => setPreferences({ ...preferences, updates: e.target.checked })}
          />
          <Checkbox
            label="Marketing emails"
            checked={preferences.marketing}
            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
          />
        </div>
        <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
            Selected: {Object.entries(preferences).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None'}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};
