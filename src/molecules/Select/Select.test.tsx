import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Select } from './Select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select', () => {
  it('renders correctly', () => {
    render(<Select options={options} data-testid="select" />);
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
    expect(select.tagName).toBe('SELECT');
  });

  it('renders all options', () => {
    render(<Select options={options} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    render(<Select options={options} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('can select an option', async () => {
    const user = userEvent.setup();
    render(<Select options={options} data-testid="select" />);
    const select = screen.getByTestId('select') as HTMLSelectElement;
    
    await user.selectOptions(select, 'option2');
    expect(select.value).toBe('option2');
  });

  it('respects defaultValue', () => {
    render(<Select options={options} defaultValue="option2" data-testid="select" />);
    const select = screen.getByTestId('select') as HTMLSelectElement;
    expect(select.value).toBe('option2');
  });

  it('can be disabled', () => {
    render(<Select options={options} disabled data-testid="select" />);
    const select = screen.getByTestId('select');
    expect(select).toBeDisabled();
  });

  it('renders disabled options', () => {
    const optionsWithDisabled = [
      ...options,
      { value: 'option4', label: 'Option 4 (disabled)', disabled: true },
    ];
    render(<Select options={optionsWithDisabled} />);
    const option4 = screen.getByText('Option 4 (disabled)');
    expect(option4).toHaveAttribute('disabled');
  });

  it('applies size variants', () => {
    const { rerender } = render(<Select options={options} size="sm" data-testid="select" />);
    let select = screen.getByTestId('select');
    expect(select).toHaveClass('fs_sm');
    
    rerender(<Select options={options} size="lg" data-testid="select" />);
    select = screen.getByTestId('select');
    expect(select).toHaveClass('fs_lg');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null as HTMLSelectElement | null };
    render(<Select options={options} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it('applies custom className', () => {
    render(<Select options={options} className="custom-class" data-testid="select" />);
    const select = screen.getByTestId('select');
    expect(select).toHaveClass('custom-class');
  });
});
