import { cva } from '../../styled-system/css';

export const inputRecipe = cva({
  base: {
    display: 'flex',
    width: '100%',
    borderRadius: 'md',
    border: '1px solid',
    borderColor: 'border.default',
    bg: 'bg.canvas',
    px: '3',
    fontSize: 'md',
    fontWeight: 'normal',
    color: 'text.primary',
    transition: 'all',
    transitionDuration: 'fast',
    outline: 'none',
    
    _placeholder: {
      color: 'text.tertiary',
    },
    
    _focus: {
      borderColor: 'primary.default',
      boxShadow: '0 0 0 3px token(colors.blue.50)',
    },
    
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      bg: 'bg.muted',
    },
    
    _hover: {
      _disabled: {
        borderColor: 'border.default',
      },
      borderColor: 'border.strong',
    },
  },
  
  variants: {
    variant: {
      text: {},
      email: {},
      password: {},
      search: {
        pl: '10',
      },
    },
    
    size: {
      sm: {
        h: '8',
        px: '2.5',
        fontSize: 'sm',
      },
      md: {
        h: '10',
        px: '3',
        fontSize: 'md',
      },
      lg: {
        h: '12',
        px: '4',
        fontSize: 'lg',
      },
    },
    
    state: {
      default: {},
      error: {
        borderColor: 'error.default',
        _focus: {
          borderColor: 'error.default',
          boxShadow: '0 0 0 3px token(colors.red.50)',
        },
      },
      success: {
        borderColor: 'success.default',
        _focus: {
          borderColor: 'success.default',
          boxShadow: '0 0 0 3px token(colors.green.50)',
        },
      },
    },
  },
  
  defaultVariants: {
    variant: 'text',
    size: 'md',
    state: 'default',
  },
});
