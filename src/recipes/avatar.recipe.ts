import { cva } from '../../styled-system/css';

export const avatarRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'full',
    overflow: 'hidden',
    bg: 'bg.muted',
    color: 'text.secondary',
    fontWeight: 'medium',
    flexShrink: 0,
    
    // Estilos para la imagen
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  
  variants: {
    size: {
      sm: {
        w: '8',
        h: '8',
        fontSize: 'xs',
      },
      md: {
        w: '10',
        h: '10',
        fontSize: 'sm',
      },
      lg: {
        w: '12',
        h: '12',
        fontSize: 'md',
      },
      xl: {
        w: '16',
        h: '16',
        fontSize: 'lg',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});
