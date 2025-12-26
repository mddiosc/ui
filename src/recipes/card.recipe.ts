import { cva } from '../../styled-system/css';

export const cardRecipe = cva({
  base: {
    borderRadius: 'lg',
    bg: 'bg.canvas',
    overflow: 'hidden',
    transition: 'all',
    transitionDuration: 'fast',
  },
  
  variants: {
    variant: {
      default: {
        boxShadow: 'md',
      },
      outlined: {
        border: '1px solid',
        borderColor: 'border.default',
      },
      elevated: {
        boxShadow: 'lg',
      },
    },
  },
  
  defaultVariants: {
    variant: 'default',
  },
});
