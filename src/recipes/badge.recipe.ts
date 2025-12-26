import { cva } from '../../styled-system/css';

export const badgeRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    fontWeight: 'medium',
    whiteSpace: 'nowrap',
    transition: 'all',
    transitionDuration: 'fast',
  },
  
  variants: {
    variant: {
      default: {
        bg: 'bg.muted',
        color: 'text.secondary',
      },
      primary: {
        bg: 'primary.default',
        color: 'white',
      },
      success: {
        bg: 'success.default',
        color: 'white',
      },
      warning: {
        bg: 'warning.default',
        color: 'white',
      },
      error: {
        bg: 'error.default',
        color: 'white',
      },
    },
    
    size: {
      sm: {
        px: '2',
        py: '0.5',
        fontSize: 'xs',
        h: '5',
      },
      md: {
        px: '2.5',
        py: '1',
        fontSize: 'sm',
        h: '6',
      },
    },
  },
  
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});
