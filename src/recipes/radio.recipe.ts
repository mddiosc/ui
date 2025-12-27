import { cva } from '../../styled-system/css';

export const radioRecipe = cva({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    userSelect: 'none',
    
    '&[data-disabled="true"]': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const radioInputRecipe = cva({
  base: {
    appearance: 'none',
    margin: 0,
    flexShrink: 0,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'border.default',
    borderRadius: '50%',
    backgroundColor: 'background.default',
    cursor: 'pointer',
    transition: 'all 0.2s',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    '&:hover:not(:disabled)': {
      borderColor: 'primary.default',
    },
    
    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: 'primary.default',
      outlineOffset: '2px',
    },
    
    '&:checked': {
      borderColor: 'primary.default',
    },
    
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    
    // Inner dot
    '&:checked::after': {
      content: '""',
      display: 'block',
      borderRadius: '50%',
      backgroundColor: 'primary.default',
    },
  },
  
  variants: {
    size: {
      sm: {
        width: '1rem',
        height: '1rem',
        
        '&:checked::after': {
          width: '0.5rem',
          height: '0.5rem',
        },
      },
      md: {
        width: '1.25rem',
        height: '1.25rem',
        
        '&:checked::after': {
          width: '0.625rem',
          height: '0.625rem',
        },
      },
      lg: {
        width: '1.5rem',
        height: '1.5rem',
        
        '&:checked::after': {
          width: '0.75rem',
          height: '0.75rem',
        },
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

export const radioLabelRecipe = cva({
  base: {
    fontSize: 'md',
    lineHeight: '1.5rem',
    color: 'text.primary',
    cursor: 'pointer',
    
    '&[data-disabled="true"]': {
      cursor: 'not-allowed',
    },
  },
  
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
        lineHeight: '1.25rem',
      },
      md: {
        fontSize: 'md',
        lineHeight: '1.5rem',
      },
      lg: {
        fontSize: 'lg',
        lineHeight: '1.75rem',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});
