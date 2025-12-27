import { type InputHTMLAttributes, forwardRef } from 'react';
import { switchRecipe, switchInputRecipe, switchLabelRecipe } from '../../recipes/switch.recipe';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Switch size */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ size = 'md', label, disabled, className, ...props }, ref) => {
    return (
      <label 
        className={`${switchRecipe()} ${className || ''}`}
        data-disabled={disabled}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          disabled={disabled}
          className={switchInputRecipe({ size })}
          {...props}
        />
        {label && (
          <span 
            className={switchLabelRecipe({ size })}
            data-disabled={disabled}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
