import { type HTMLAttributes, type ReactNode } from 'react';
import clsx from 'clsx';
import { cardRecipe, cardHeaderRecipe, cardContentRecipe, cardFooterRecipe } from '../../recipes/card.recipe';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  children: ReactNode;
}

export const Card = ({ variant = 'default', className, children, ...props }: CardProps) => {
  return (
    <div
      className={clsx(cardRecipe({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(cardHeaderRecipe(), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(cardContentRecipe(), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(cardFooterRecipe(), className)}
      {...props}
    >
      {children}
    </div>
  );
};
