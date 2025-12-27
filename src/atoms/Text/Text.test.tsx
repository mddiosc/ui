import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    render(<Text data-testid="text">Hello World</Text>);
    const text = screen.getByTestId('text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Hello World');
  });

  it('renders as paragraph by default', () => {
    render(<Text data-testid="text">Hello</Text>);
    const text = screen.getByTestId('text');
    expect(text.tagName).toBe('P');
  });

  it('renders as different elements with as prop', () => {
    const { rerender } = render(<Text as="span" data-testid="text">Hello</Text>);
    let text = screen.getByTestId('text');
    expect(text.tagName).toBe('SPAN');

    rerender(<Text as="div" data-testid="text">Hello</Text>);
    text = screen.getByTestId('text');
    expect(text.tagName).toBe('DIV');

    rerender(<Text as="label" data-testid="text">Hello</Text>);
    text = screen.getByTestId('text');
    expect(text.tagName).toBe('LABEL');
  });

  it('applies size variants', () => {
    const { rerender } = render(<Text size="xs" data-testid="text">Hello</Text>);
    let text = screen.getByTestId('text');
    expect(text).toHaveClass('fs_xs');

    rerender(<Text size="xl" data-testid="text">Hello</Text>);
    text = screen.getByTestId('text');
    expect(text).toHaveClass('fs_xl');
  });

  it('applies weight variants', () => {
    const { rerender } = render(<Text weight="normal" data-testid="text">Hello</Text>);
    let text = screen.getByTestId('text');
    expect(text).toHaveClass('fw_normal');

    rerender(<Text weight="bold" data-testid="text">Hello</Text>);
    text = screen.getByTestId('text');
    expect(text).toHaveClass('fw_bold');
  });

  it('applies align variants', () => {
    const { rerender } = render(<Text align="left" data-testid="text">Hello</Text>);
    let text = screen.getByTestId('text');
    expect(text).toHaveClass('textAlign_left');

    rerender(<Text align="center" data-testid="text">Hello</Text>);
    text = screen.getByTestId('text');
    expect(text).toHaveClass('textAlign_center');
  });

  it('applies color variants', () => {
    const { rerender } = render(<Text color="default" data-testid="text">Hello</Text>);
    let text = screen.getByTestId('text');
    expect(text).toHaveClass('color_text\\.primary');

    rerender(<Text color="primary" data-testid="text">Hello</Text>);
    text = screen.getByTestId('text');
    expect(text).toHaveClass('color_primary\\.default');
  });

  it('applies custom className', () => {
    render(<Text className="custom-class" data-testid="text">Hello</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('custom-class');
  });
});
