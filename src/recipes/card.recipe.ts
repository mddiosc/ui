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

export const cardHeaderRecipe = cva({
  base: {
    padding: '6', // 1.5rem
    borderBottom: '1px solid',
    borderColor: 'border.default',
  },
});

export const cardContentRecipe = cva({
  base: {
    padding: '6', // 1.5rem
  },
});

export const cardFooterRecipe = cva({
  base: {
    padding: '6', // 1.5rem
    borderTop: '1px solid',
    borderColor: 'border.default',
  },
});
