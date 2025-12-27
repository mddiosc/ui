import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    render(<Icon name="Heart" data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('applies size variants', () => {
    const { rerender } = render(<Icon name="Heart" size="xs" data-testid="icon" />);
    let icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('w_3');
    
    rerender(<Icon name="Heart" size="xl" data-testid="icon" />);
    icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('w_8');
  });

  it('applies color variants', () => {
    const { rerender } = render(<Icon name="Heart" color="primary" data-testid="icon" />);
    let icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('color_primary\\.default');
    
    rerender(<Icon name="Heart" color="error" data-testid="icon" />);
    icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('color_error\\.default');
  });

  it('applies custom className', () => {
    render(<Icon name="Heart" className="custom-class" data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-class');
  });

  it('renders the provided icon component', () => {
    const { container } = render(<Icon name="Heart" />);
    // Lucide icons render as SVG elements
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
