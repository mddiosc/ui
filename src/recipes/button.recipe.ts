import { cva, type RecipeVariantProps } from '../../styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    fontWeight: 'semibold',
    fontSize: 'md',
    lineHeight: 'none',
    transition: 'all',
    transitionDuration: 'fast',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    userSelect: 'none',
    
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'primary.default',
      outlineOffset: '2px',
    },
    
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },
  
  variants: {
    variant: {
      primary: {
        bg: 'primary.default',
        color: 'text.inverse',
        _hover: {
          bg: 'primary.hover',
        },
        _active: {
          bg: 'primary.active',
        },
      },
      
      secondary: {
        bg: 'bg.muted',
        color: 'text.primary',
        _hover: {
          bg: 'gray.200',
        },
        _active: {
          bg: 'gray.300',
        },
      },
      
      outline: {
        bg: 'transparent',
        color: 'text.primary',
        border: '1px solid',
        borderColor: 'border.default',
        _hover: {
          bg: 'bg.surface',
          borderColor: 'border.strong',
        },
        _active: {
          bg: 'bg.muted',
        },
      },
      
      ghost: {
        bg: 'transparent',
        color: 'text.primary',
        _hover: {
          bg: 'bg.surface',
        },
        _active: {
          bg: 'bg.muted',
        },
      },
      
      link: {
        bg: 'transparent',
        color: 'primary.default',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        _hover: {
          color: 'primary.hover',
        },
        _active: {
          color: 'primary.active',
        },
      },
      
      destructive: {
        bg: 'red.700',
        color: 'white',
        _hover: {
          bg: 'red.800',
        },
      },
    },
    
    size: {
      sm: {
        px: '3',
        py: '1.5',
        fontSize: 'sm',
        gap: '1.5',
      },
      md: {
        px: '4',
        py: '2',
        fontSize: 'md',
        gap: '2',
      },
      lg: {
        px: '6',
        py: '3',
        fontSize: 'lg',
        gap: '2.5',
      },
    },
  },
  
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;
