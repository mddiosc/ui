import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    render(<Avatar fallback="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders all sizes', () => {
    const { rerender } = render(<Avatar size="sm" fallback="SM" />);
    expect(screen.getByText('SM')).toBeInTheDocument();

    rerender(<Avatar size="md" fallback="MD" />);
    expect(screen.getByText('MD')).toBeInTheDocument();

    rerender(<Avatar size="lg" fallback="LG" />);
    expect(screen.getByText('LG')).toBeInTheDocument();

    rerender(<Avatar size="xl" fallback="XL" />);
    expect(screen.getByText('XL')).toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('alt', 'User Avatar');
  });

  it('shows fallback when no src', () => {
    render(<Avatar fallback="AB" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('generates initials from alt when no fallback', () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText('JO')).toBeInTheDocument();
  });
});
