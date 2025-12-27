import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '../../atoms/Input';
import { Checkbox } from '../../atoms/Checkbox';
import { Radio } from '../../atoms/Radio';
import { Switch } from '../../atoms/Switch';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: 'Email',
    helperText: 'We\'ll never share your email',
    htmlFor: 'email',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <FormField {...args}>
        <Input id="email" type="email" placeholder="Enter your email" />
      </FormField>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <FormField
        label="Username"
        helperText="Choose a unique username"
        required
        htmlFor="username"
      >
        <Input id="username" placeholder="Enter username" />
      </FormField>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <FormField
        label="Password"
        error="Password must be at least 8 characters"
        required
        htmlFor="password"
      >
        <Input id="password" type="password" placeholder="Enter password" />
      </FormField>
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <FormField
        label="Preferences"
        helperText="Select your communication preferences"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Checkbox label="Email notifications" />
          <Checkbox label="SMS notifications" />
          <Checkbox label="Push notifications" />
        </div>
      </FormField>
    </div>
  ),
};

export const WithRadio: Story = {
  render: () => {
    const [plan, setPlan] = useState('basic');
    
    return (
      <div style={{ width: '300px' }}>
        <FormField
          label="Subscription Plan"
          helperText="Choose your preferred plan"
          required
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Radio
              label="Basic - $9/month"
              name="plan"
              value="basic"
              checked={plan === 'basic'}
              onChange={(e) => setPlan(e.target.value)}
            />
            <Radio
              label="Pro - $29/month"
              name="plan"
              value="pro"
              checked={plan === 'pro'}
              onChange={(e) => setPlan(e.target.value)}
            />
          </div>
        </FormField>
      </div>
    );
  },
};

export const WithSwitch: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <FormField
        label="Privacy Settings"
        helperText="Control your privacy preferences"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Switch label="Make profile public" />
          <Switch label="Allow search engines" />
          <Switch label="Show online status" defaultChecked />
        </div>
      </FormField>
    </div>
  ),
};

export const CompleteForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      plan: 'basic',
      newsletter: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Sign Up
        </h3>
        
        <FormField
          label="Full Name"
          error={errors.name}
          required
          htmlFor="name"
        >
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
          />
        </FormField>

        <FormField
          label="Email"
          helperText="We'll never share your email"
          error={errors.email}
          required
          htmlFor="email"
        >
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
          />
        </FormField>

        <FormField
          label="Plan"
          helperText="Choose your subscription plan"
          required
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Radio
              label="Basic - $9/month"
              name="plan"
              value="basic"
              checked={formData.plan === 'basic'}
              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            />
            <Radio
              label="Pro - $29/month"
              name="plan"
              value="pro"
              checked={formData.plan === 'pro'}
              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            />
          </div>
        </FormField>

        <FormField>
          <Checkbox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          />
        </FormField>

        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    );
  },
  parameters: {
    layout: 'centered',
  },
};
