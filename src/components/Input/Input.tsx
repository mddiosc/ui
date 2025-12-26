import { forwardRef, type InputHTMLAttributes } from 'react';
import { inputRecipe } from '../../recipes/input.recipe';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'text' | 'email' | 'password' | 'search';
  size?: 'sm' | 'md' | 'lg';
  state?: 'default' | 'error' | 'success';
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'text', size = 'md', state = 'default', error, className, type, ...props }, ref) => {
    const inputType = type || variant;
    const inputState = error ? 'error' : state;
    
    return (
      <input
        ref={ref}
        type={inputType}
        className={`${inputRecipe({ variant, size, state: inputState })} ${className || ''}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
