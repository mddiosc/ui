import { type SelectHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { selectRecipe } from '../../recipes/select.recipe';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select size */
  size?: 'sm' | 'md' | 'lg';
  /** Options array */
  options: SelectOption[];
  /** Placeholder text */
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = 'md', options, placeholder, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={clsx(selectRecipe({ size }), className)}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
