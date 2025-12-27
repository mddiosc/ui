import { cva } from '../../styled-system/css';

export const formFieldRecipe = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.375rem',
    width: '100%',
  },
});

export const formLabelRecipe = cva({
  base: {
    fontSize: 'sm',
    fontWeight: 'medium',
    color: 'text.primary',
    lineHeight: '1.25rem',
    
    '&[data-required="true"]::after': {
      content: '" *"',
      color: 'error.default',
    },
  },
});

export const formHelperTextRecipe = cva({
  base: {
    fontSize: 'sm',
    lineHeight: '1.25rem',
  },
  
  variants: {
    error: {
      true: {
        color: 'error.default',
      },
      false: {
        color: 'text.secondary',
      },
    },
  },
  
  defaultVariants: {
    error: false,
  },
});
