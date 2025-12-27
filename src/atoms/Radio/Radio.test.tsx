import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders correctly', () => {
    render(<Radio data-testid="radio" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('type', 'radio');
  });

  it('renders with label', () => {
    render(<Radio label="Option A" data-testid="radio" />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  it('can be checked', async () => {
    const user = userEvent.setup();
    render(<Radio data-testid="radio" />);
    const radio = screen.getByTestId('radio') as HTMLInputElement;
    
    expect(radio.checked).toBe(false);
    
    await user.click(radio);
    expect(radio.checked).toBe(true);
  });

  it('respects defaultChecked prop', () => {
    render(<Radio defaultChecked data-testid="radio" />);
    const radio = screen.getByTestId('radio') as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it('can be disabled', () => {
    render(<Radio disabled data-testid="radio" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeDisabled();
  });

  it('applies size variants', () => {
    const { rerender } = render(<Radio size="sm" data-testid="radio" />);
    let radio = screen.getByTestId('radio');
    expect(radio).toHaveClass('w_4');
    
    rerender(<Radio size="lg" data-testid="radio" />);
    radio = screen.getByTestId('radio');
    expect(radio).toHaveClass('w_6');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Radio ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    const { container } = render(<Radio className="custom-class" />);
    const label = container.querySelector('label');
    expect(label).toHaveClass('custom-class');
  });
});
