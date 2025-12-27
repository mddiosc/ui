import { cva } from '../../styled-system/css';

export const iconRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  
  variants: {
    size: {
      xs: {
        w: '3',
        h: '3',
      },
      sm: {
        w: '4',
        h: '4',
      },
      md: {
        w: '5',
        h: '5',
      },
      lg: {
        w: '6',
        h: '6',
      },
      xl: {
        w: '8',
        h: '8',
      },
    },
    
    color: {
      default: {
        color: 'text.primary',
      },
      muted: {
        color: 'text.secondary',
      },
      primary: {
        color: 'primary.default',
      },
      success: {
        color: 'success.default',
      },
      warning: {
        color: 'warning.default',
      },
      error: {
        color: 'error.default',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});
