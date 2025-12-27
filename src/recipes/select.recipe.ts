import { cva } from '../../styled-system/css';

export const selectRecipe = cva({
  base: {
    width: '100%',
    padding: '0.5rem 2.5rem 0.5rem 0.75rem',
    fontSize: 'md',
    lineHeight: '1.5rem',
    color: 'text.primary',
    backgroundColor: 'background.default',
    border: '1px solid',
    borderColor: 'border.default',
    borderRadius: '0.375rem',
    appearance: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: 'right 0.5rem center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1.5em 1.5em',
    
    '&:hover:not(:disabled)': {
      borderColor: 'primary.default',
    },
    
    '&:focus': {
      outline: '2px solid',
      outlineColor: 'primary.default',
      outlineOffset: '2px',
      borderColor: 'primary.default',
    },
    
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: 'background.muted',
    },
  },
  
  variants: {
    size: {
      sm: {
        padding: '0.375rem 2rem 0.375rem 0.5rem',
        fontSize: 'sm',
        lineHeight: '1.25rem',
      },
      md: {
        padding: '0.5rem 2.5rem 0.5rem 0.75rem',
        fontSize: 'md',
        lineHeight: '1.5rem',
      },
      lg: {
        padding: '0.625rem 3rem 0.625rem 1rem',
        fontSize: 'lg',
        lineHeight: '1.75rem',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});
