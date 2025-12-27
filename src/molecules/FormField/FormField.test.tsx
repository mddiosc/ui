import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormField } from './FormField';
import { Input } from '../../atoms/Input';

describe('FormField', () => {
  it('renders correctly', () => {
    render(
      <FormField>
        <Input data-testid="input" />
      </FormField>
    );
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('renders label', () => {
    render(
      <FormField label="Email">
        <Input />
      </FormField>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders helper text', () => {
    render(
      <FormField helperText="Enter your email address">
        <Input />
      </FormField>
    );
    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(
      <FormField error="Email is required">
        <Input />
      </FormField>
    );
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('error message replaces helper text', () => {
    render(
      <FormField helperText="Helper text" error="Error message">
        <Input />
      </FormField>
    );
    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
      <FormField label="Email" required>
        <Input />
      </FormField>
    );
    const label = screen.getByText(/Email/);
    expect(label).toHaveAttribute('data-required', 'true');
  });

  it('connects label to input with htmlFor', () => {
    render(
      <FormField label="Email" htmlFor="email-input">
        <Input id="email-input" />
      </FormField>
    );
    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('for', 'email-input');
  });

  it('applies custom className', () => {
    const { container } = render(
      <FormField className="custom-class">
        <Input />
      </FormField>
    );
    const formField = container.firstChild;
    expect(formField).toHaveClass('custom-class');
  });
});
