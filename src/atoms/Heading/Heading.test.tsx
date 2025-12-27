import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders correctly', () => {
    render(<Heading data-testid="heading">Hello World</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello World');
  });

  it('renders as h2 by default', () => {
    render(<Heading data-testid="heading">Hello</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading.tagName).toBe('H2');
  });

  it('renders correct heading levels', () => {
    const { rerender } = render(<Heading level="h1" data-testid="heading">Hello</Heading>);
    let heading = screen.getByTestId('heading');
    expect(heading.tagName).toBe('H1');

    rerender(<Heading level="h3" data-testid="heading">Hello</Heading>);
    heading = screen.getByTestId('heading');
    expect(heading.tagName).toBe('H3');

    rerender(<Heading level="h6" data-testid="heading">Hello</Heading>);
    heading = screen.getByTestId('heading');
    expect(heading.tagName).toBe('H6');
  });

  it('applies weight variants', () => {
    const { rerender } = render(<Heading weight="normal" data-testid="heading">Hello</Heading>);
    let heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('fw_normal');

    rerender(<Heading weight="extrabold" data-testid="heading">Hello</Heading>);
    heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('fw_extrabold');
  });

  it('applies align variants', () => {
    const { rerender } = render(<Heading align="left" data-testid="heading">Hello</Heading>);
    let heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('textAlign_left');

    rerender(<Heading align="right" data-testid="heading">Hello</Heading>);
    heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('textAlign_right');
  });

  it('applies color variants', () => {
    const { rerender } = render(<Heading color="default" data-testid="heading">Hello</Heading>);
    let heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('color_text\\.primary');

    rerender(<Heading color="primary" data-testid="heading">Hello</Heading>);
    heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('color_primary\\.default');
  });

  it('applies custom className', () => {
    render(<Heading className="custom-class" data-testid="heading">Hello</Heading>);
    const heading = screen.getByTestId('heading');
    expect(heading).toHaveClass('custom-class');
  });
});
