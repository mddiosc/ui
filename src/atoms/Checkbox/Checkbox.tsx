import { type InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { checkboxRecipe, checkboxInputRecipe, checkboxLabelRecipe } from '../../recipes/checkbox.recipe';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Checkbox size */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size = 'md', label, disabled, className, ...props }, ref) => {
    return (
      <label 
        className={clsx(checkboxRecipe(), className)}
        data-disabled={disabled}
      >
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={checkboxInputRecipe({ size })}
          {...props}
        />
        {label && (
          <span 
            className={checkboxLabelRecipe({ size })}
            data-disabled={disabled}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
