import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Switch size',
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
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Off" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled (Off)" disabled />
      <Switch label="Disabled (On)" disabled defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Switch
          label="Controlled switch"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Current state: {enabled ? 'On' : 'Off'}
        </p>
        <button
          onClick={() => setEnabled(!enabled)}
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

export const SettingsExample: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false,
    });
    
    const updateSetting = (key: keyof typeof settings) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSettings({ ...settings, [key]: e.target.checked });
    };
    
    return (
      <div style={{ maxWidth: '400px', padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Settings
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '500', margin: 0 }}>Notifications</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Receive push notifications
              </p>
            </div>
            <Switch
              checked={settings.notifications}
              onChange={updateSetting('notifications')}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '500', margin: 0 }}>Dark Mode</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Use dark theme
              </p>
            </div>
            <Switch
              checked={settings.darkMode}
              onChange={updateSetting('darkMode')}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '500', margin: 0 }}>Auto Save</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Automatically save changes
              </p>
            </div>
            <Switch
              checked={settings.autoSave}
              onChange={updateSetting('autoSave')}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '500', margin: 0 }}>Analytics</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                Help improve our product
              </p>
            </div>
            <Switch
              checked={settings.analytics}
              onChange={updateSetting('analytics')}
            />
          </div>
        </div>
        <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
            Enabled: {Object.entries(settings).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None'}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};
