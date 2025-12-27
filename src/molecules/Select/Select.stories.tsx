import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { FormField } from '../FormField';

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Select size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
];

export const Default: Story = {
  args: {
    options: countries,
    placeholder: 'Select a country',
    size: 'md',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Select {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select size="sm" options={countries} placeholder="Small select" />
      <Select size="md" options={countries} placeholder="Medium select" />
      <Select size="lg" options={countries} placeholder="Large select" />
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Select options={countries} defaultValue="us" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Select options={countries} placeholder="Select a country" disabled />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  render: () => {
    const options = [
      { value: 'basic', label: 'Basic - $9/month' },
      { value: 'pro', label: 'Pro - $29/month' },
      { value: 'enterprise', label: 'Enterprise - Custom', disabled: true },
    ];
    
    return (
      <div style={{ width: '300px' }}>
        <Select options={options} placeholder="Select a plan" />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [country, setCountry] = useState('');
    
    return (
      <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Select
          options={countries}
          placeholder="Select a country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Selected: {country || 'None'}
        </p>
        <button
          onClick={() => setCountry('us')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
          }}
        >
          Select United States
        </button>
      </div>
    );
  },
};

export const WithFormField: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <FormField
        label="Country"
        helperText="Select your country of residence"
        required
        htmlFor="country"
      >
        <Select
          id="country"
          options={countries}
          placeholder="Select a country"
        />
      </FormField>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: '',
      language: '',
      timezone: '',
    });

    const languages = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
    ];

    const timezones = [
      { value: 'utc', label: 'UTC' },
      { value: 'est', label: 'Eastern Time (EST)' },
      { value: 'pst', label: 'Pacific Time (PST)' },
      { value: 'cet', label: 'Central European Time (CET)' },
    ];

    return (
      <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Regional Settings
        </h3>

        <FormField
          label="Country"
          helperText="Your country of residence"
          required
          htmlFor="country"
        >
          <Select
            id="country"
            options={countries}
            placeholder="Select a country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
        </FormField>

        <FormField
          label="Language"
          helperText="Preferred language"
          required
          htmlFor="language"
        >
          <Select
            id="language"
            options={languages}
            placeholder="Select a language"
            value={formData.language}
            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
          />
        </FormField>

        <FormField
          label="Timezone"
          helperText="Your local timezone"
          htmlFor="timezone"
        >
          <Select
            id="timezone"
            options={timezones}
            placeholder="Select a timezone"
            value={formData.timezone}
            onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
          />
        </FormField>

        <div style={{ padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
            <strong>Country:</strong> {formData.country || 'Not selected'}<br />
            <strong>Language:</strong> {formData.language || 'Not selected'}<br />
            <strong>Timezone:</strong> {formData.timezone || 'Not selected'}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};
