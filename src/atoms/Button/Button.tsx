import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { buttonRecipe } from '../../recipes/button.recipe';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  
  /**
   * The size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * If true, the button will be rendered as a child element.
   * Useful for composition with other components.
   * @default false
   */
  asChild?: boolean;
}

/**
 * Button component with multiple variants and sizes.
 * Built with Radix UI Slot for composition and Panda CSS for styling.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <Comp
        className={buttonRecipe({ variant, size }) + (className ? ` ${className}` : '')}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

