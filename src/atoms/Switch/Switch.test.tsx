import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute('type', 'checkbox');
    expect(switchElement).toHaveAttribute('role', 'switch');
  });

  it('renders with label', () => {
    render(<Switch label="Enable feature" data-testid="switch" />);
    expect(screen.getByText('Enable feature')).toBeInTheDocument();
  });

  it('can be toggled on and off', async () => {
    const user = userEvent.setup();
    render(<Switch data-testid="switch" />);
    const switchElement = screen.getByTestId('switch') as HTMLInputElement;
    
    expect(switchElement.checked).toBe(false);
    
    await user.click(switchElement);
    expect(switchElement.checked).toBe(true);
    
    await user.click(switchElement);
    expect(switchElement.checked).toBe(false);
  });

  it('respects defaultChecked prop', () => {
    render(<Switch defaultChecked data-testid="switch" />);
    const switchElement = screen.getByTestId('switch') as HTMLInputElement;
    expect(switchElement.checked).toBe(true);
  });

  it('can be disabled', () => {
    render(<Switch disabled data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toBeDisabled();
  });

  it('applies size variants', () => {
    const { rerender } = render(<Switch size="sm" data-testid="switch" />);
    let switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveClass('w_8');
    
    rerender(<Switch size="lg" data-testid="switch" />);
    switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveClass('w_14');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Switch ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    const { container } = render(<Switch className="custom-class" />);
    const label = container.querySelector('label');
    expect(label).toHaveClass('custom-class');
  });
});
