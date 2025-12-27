import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { allIconNames } from './icon-types';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: allIconNames,
      description: 'Icon name from Lucide',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size',
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'success', 'warning', 'error'],
      description: 'Icon color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'Heart',
    size: 'md',
    color: 'default',
  },
};

export const Sizes: Story = {
  args: {
    name: 'Heart',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Icon {...args} size="xs" />
      <Icon {...args} size="sm" />
      <Icon {...args} size="md" />
      <Icon {...args} size="lg" />
      <Icon {...args} size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  args: {
    name: 'Heart',
    size: 'md',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Icon {...args} color="default" />
      <Icon {...args} color="muted" />
      <Icon {...args} color="primary" />
      <Icon {...args} color="success" />
      <Icon {...args} color="warning" />
      <Icon {...args} color="error" />
    </div>
  ),
};

export const CommonIcons: Story = {
  args: {
    size: 'md',
    color: 'default',
  },
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.5rem' }}>
      <Icon {...args} name="Heart" />
      <Icon {...args} name="Star" />
      <Icon {...args} name="Check" />
      <Icon {...args} name="X" />
      <Icon {...args} name="CircleAlert" />
      <Icon {...args} name="Info" />
      <Icon {...args} name="Settings" />
      <Icon {...args} name="User" />
      <Icon {...args} name="Mail" />
      <Icon {...args} name="Phone" />
      <Icon {...args} name="House" />
      <Icon {...args} name="Search" />
    </div>
  ),
};

export const StatusIcons: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <Icon {...args} name="Check" color="success" />
      <Icon {...args} name="CircleAlert" color="warning" />
      <Icon {...args} name="X" color="error" />
      <Icon {...args} name="Info" color="primary" />
    </div>
  ),
};

// Catalog of all available Lucide icons with pagination
export const AllIcons: Story = {
  args: {
    size: 'lg',
    color: 'primary',
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const iconsPerPage = 100;

    // Filter icons based on search term
    const filteredIcons = searchTerm
      ? allIconNames.filter(name => 
          name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allIconNames;

    // Calculate pagination
    const totalPages = Math.ceil(filteredIcons.length / iconsPerPage);
    const startIndex = (currentPage - 1) * iconsPerPage;
    const endIndex = startIndex + iconsPerPage;
    const currentIcons = filteredIcons.slice(startIndex, endIndex);

    return (
      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Lucide Icons Catalog
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1.5rem' }}>
            {filteredIcons.length} icons available • Use controls to change size and color
          </p>

          {/* Search */}
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#2563eb';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Icon Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {currentIcons.map((name) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                transition: 'all 0.2s',
                cursor: 'pointer',
                backgroundColor: '#fff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.backgroundColor = '#eff6ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => {
                navigator.clipboard.writeText(name);
              }}
              title={`Click to copy: ${name}`}
            >
              <Icon name={name as any} size={args.size} color={args.color} />
              <span style={{ 
                fontSize: '0.7rem', 
                textAlign: 'center', 
                color: '#374151',
                fontWeight: '500',
                wordBreak: 'break-word',
                lineHeight: '1.2',
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              backgroundColor: currentPage === 1 ? '#f3f4f6' : '#fff',
              color: currentPage === 1 ? '#9ca3af' : '#374151',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontWeight: '500',
            }}
          >
            Previous
          </button>
          
          <span style={{ padding: '0 1rem', color: '#6b7280' }}>
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              backgroundColor: currentPage === totalPages ? '#f3f4f6' : '#fff',
              color: currentPage === totalPages ? '#9ca3af' : '#374151',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontWeight: '500',
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};
