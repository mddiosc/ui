import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" data-testid="checkbox" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup();
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;
    
    expect(checkbox.checked).toBe(false);
    
    await user.click(checkbox);
    expect(checkbox.checked).toBe(true);
    
    await user.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it('respects defaultChecked prop', () => {
    render(<Checkbox defaultChecked data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('can be disabled', () => {
    render(<Checkbox disabled data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('applies size variants', () => {
    const { rerender } = render(<Checkbox size="sm" data-testid="checkbox" />);
    let checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('w_4');
    
    rerender(<Checkbox size="lg" data-testid="checkbox" />);
    checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveClass('w_6');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    const { container } = render(<Checkbox className="custom-class" />);
    const label = container.querySelector('label');
    expect(label).toHaveClass('custom-class');
  });
});
