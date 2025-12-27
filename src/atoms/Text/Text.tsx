import { type HTMLAttributes, type ElementType } from 'react';
import { textRecipe } from '../../recipes/typography.recipe';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  /** Text size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Text color */
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error';
  /** Render as different HTML element */
  as?: 'p' | 'span' | 'div' | 'label';
}

export const Text = ({ 
  size = 'md', 
  weight = 'normal', 
  align = 'left', 
  color = 'default',
  as = 'p',
  className, 
  children,
  ...props 
}: TextProps) => {
  const Component = as as ElementType;
  
  return (
    <Component
      className={`${textRecipe({ size, weight, align, color })} ${className || ''}`}
      {...props}
    >
      {children}
    </Component>
  );
};
