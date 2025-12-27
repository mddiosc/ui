import { cva } from '../../styled-system/css';

export const checkboxRecipe = cva({
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

export const checkboxInputRecipe = cva({
  base: {
    appearance: 'none',
    margin: 0,
    flexShrink: 0,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'border.default',
    borderRadius: '0.25rem',
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
      backgroundColor: 'primary.default',
      borderColor: 'primary.default',
    },
    
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    
    // Checkmark
    '&:checked::after': {
      content: '""',
      display: 'block',
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
    },
  },
  
  variants: {
    size: {
      sm: {
        width: '1rem',
        height: '1rem',
        
        '&:checked::after': {
          width: '0.25rem',
          height: '0.5rem',
          marginTop: '-0.125rem',
        },
      },
      md: {
        width: '1.25rem',
        height: '1.25rem',
        
        '&:checked::after': {
          width: '0.3125rem',
          height: '0.625rem',
          marginTop: '-0.125rem',
        },
      },
      lg: {
        width: '1.5rem',
        height: '1.5rem',
        
        '&:checked::after': {
          width: '0.375rem',
          height: '0.75rem',
          marginTop: '-0.125rem',
        },
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

export const checkboxLabelRecipe = cva({
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
