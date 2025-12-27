import { cva } from '../../styled-system/css';

export const switchRecipe = cva({
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

export const switchInputRecipe = cva({
  base: {
    appearance: 'none',
    margin: 0,
    flexShrink: 0,
    borderRadius: '9999px',
    backgroundColor: 'border.default',
    cursor: 'pointer',
    transition: 'all 0.2s',
    position: 'relative',
    
    '&:hover:not(:disabled)': {
      backgroundColor: 'border.muted',
    },
    
    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: 'primary.default',
      outlineOffset: '2px',
    },
    
    '&:checked': {
      backgroundColor: 'primary.default',
    },
    
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    
    // Toggle thumb
    '&::after': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: '50%',
      transition: 'transform 0.2s',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
  },
  
  variants: {
    size: {
      sm: {
        width: '2rem',
        height: '1rem',
        
        '&::after': {
          width: '0.75rem',
          height: '0.75rem',
          top: '0.125rem',
          left: '0.125rem',
        },
        
        '&:checked::after': {
          transform: 'translateX(1rem)',
        },
      },
      md: {
        width: '2.75rem',
        height: '1.5rem',
        
        '&::after': {
          width: '1.25rem',
          height: '1.25rem',
          top: '0.125rem',
          left: '0.125rem',
        },
        
        '&:checked::after': {
          transform: 'translateX(1.25rem)',
        },
      },
      lg: {
        width: '3.5rem',
        height: '2rem',
        
        '&::after': {
          width: '1.75rem',
          height: '1.75rem',
          top: '0.125rem',
          left: '0.125rem',
        },
        
        '&:checked::after': {
          transform: 'translateX(1.5rem)',
        },
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

export const switchLabelRecipe = cva({
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
