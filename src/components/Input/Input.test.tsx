import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders all variants', () => {
    const { rerender } = render(<Input variant="text" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');

    rerender(<Input variant="email" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');

    rerender(<Input variant="password" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'password');

    rerender(<Input variant="search" data-testid="input" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'search');
  });

  it('renders all sizes', () => {
    const { rerender } = render(<Input size="sm" data-testid="input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();

    rerender(<Input size="md" data-testid="input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();

    rerender(<Input size="lg" data-testid="input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Input disabled data-testid="input" />);
    expect(screen.getByTestId('input')).toBeDisabled();
  });

  it('handles onChange event', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Input onChange={handleChange} data-testid="input" />);
    
    await user.type(screen.getByTestId('input'), 'Hello');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error state', () => {
    render(<Input error data-testid="input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });
});
