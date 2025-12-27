import { type HTMLAttributes } from 'react';
import { headingRecipe } from '../../recipes/typography.recipe';

export interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
  /** Heading level (semantic HTML element) */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Text color */
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error';
}

export const Heading = ({ 
  level = 'h2', 
  weight = 'bold', 
  align = 'left', 
  color = 'default',
  className, 
  children,
  ...props 
}: HeadingProps) => {
  const Component = level;
  
  return (
    <Component
      className={`${headingRecipe({ level, weight, align, color })} ${className || ''}`}
      {...props}
    >
      {children}
    </Component>
  );
};
