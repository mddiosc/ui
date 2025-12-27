import { cva } from '../../styled-system/css';

export const textRecipe = cva({
  base: {
    margin: 0,
    padding: 0,
  },
  
  variants: {
    size: {
      xs: {
        fontSize: 'xs',
        lineHeight: '1.25rem',
      },
      sm: {
        fontSize: 'sm',
        lineHeight: '1.5rem',
      },
      md: {
        fontSize: 'md',
        lineHeight: '1.5rem',
      },
      lg: {
        fontSize: 'lg',
        lineHeight: '1.75rem',
      },
      xl: {
        fontSize: 'xl',
        lineHeight: '1.75rem',
      },
    },
    
    weight: {
      normal: {
        fontWeight: 'normal',
      },
      medium: {
        fontWeight: 'medium',
      },
      semibold: {
        fontWeight: 'semibold',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
    
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
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
    weight: 'normal',
    align: 'left',
    color: 'default',
  },
});

export const headingRecipe = cva({
  base: {
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
  },
  
  variants: {
    level: {
      h1: {
        fontSize: '3xl',
        lineHeight: '2.25rem',
      },
      h2: {
        fontSize: '2xl',
        lineHeight: '2rem',
      },
      h3: {
        fontSize: 'xl',
        lineHeight: '1.75rem',
      },
      h4: {
        fontSize: 'lg',
        lineHeight: '1.75rem',
      },
      h5: {
        fontSize: 'md',
        lineHeight: '1.5rem',
      },
      h6: {
        fontSize: 'sm',
        lineHeight: '1.5rem',
      },
    },
    
    weight: {
      normal: {
        fontWeight: 'normal',
      },
      medium: {
        fontWeight: 'medium',
      },
      semibold: {
        fontWeight: 'semibold',
      },
      bold: {
        fontWeight: 'bold',
      },
      extrabold: {
        fontWeight: 'extrabold',
      },
    },
    
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
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
    level: 'h2',
    weight: 'bold',
    align: 'left',
    color: 'default',
  },
});
