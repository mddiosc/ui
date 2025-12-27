import { type InputHTMLAttributes, forwardRef } from 'react';
import { radioRecipe, radioInputRecipe, radioLabelRecipe } from '../../recipes/radio.recipe';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Radio size */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ size = 'md', label, disabled, className, ...props }, ref) => {
    return (
      <label 
        className={`${radioRecipe()} ${className || ''}`}
        data-disabled={disabled}
      >
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className={radioInputRecipe({ size })}
          {...props}
        />
        {label && (
          <span 
            className={radioLabelRecipe({ size })}
            data-disabled={disabled}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
