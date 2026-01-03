import { forwardRef, type InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { inputRecipe } from '../../recipes/input.recipe';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  state?: 'default' | 'error' | 'success';
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', state = 'default', error, className, type = 'text', ...props }, ref) => {
    const inputState = error ? 'error' : state;
    
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(inputRecipe({ size, state: inputState }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
