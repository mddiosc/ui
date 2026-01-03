import { type ReactNode, type HTMLAttributes } from 'react';
import clsx from 'clsx';
import { formFieldRecipe, formLabelRecipe, formHelperTextRecipe } from '../../recipes/form-field.recipe';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message (replaces helper text when present) */
  error?: string;
  /** Mark field as required */
  required?: boolean;
  /** Input element or component */
  children: ReactNode;
  /** HTML for attribute for label */
  htmlFor?: string;
}

export const FormField = ({
  label,
  helperText,
  error,
  required,
  children,
  htmlFor,
  className,
  ...props
}: FormFieldProps) => {
  const hasError = Boolean(error);
  const displayText = error || helperText;

  return (
    <div className={clsx(formFieldRecipe(), className)} {...props}>
      {label && (
        <label
          htmlFor={htmlFor}
          className={formLabelRecipe()}
          data-required={required}
        >
          {label}
        </label>
      )}
      {children}
      {displayText && (
        <span className={formHelperTextRecipe({ error: hasError })}>
          {displayText}
        </span>
      )}
    </div>
  );
};
