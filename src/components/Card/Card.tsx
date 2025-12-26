import { type HTMLAttributes, type ReactNode } from 'react';
import { cardRecipe } from '../../recipes/card.recipe';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  children: ReactNode;
}

export const Card = ({ variant = 'default', className, children, ...props }: CardProps) => {
  return (
    <div
      className={`${cardRecipe({ variant })} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={className}
      style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={className}
      style={{ padding: '1.5rem' }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={className}
      style={{ padding: '1.5rem', borderTop: '1px solid #e5e7eb' }}
      {...props}
    >
      {children}
    </div>
  );
};
