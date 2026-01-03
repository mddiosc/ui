import { type HTMLAttributes } from 'react';
import clsx from 'clsx';
import { badgeRecipe } from '../../recipes/badge.recipe';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export const Badge = ({ variant = 'default', size = 'md', className, children, ...props }: BadgeProps) => {
  return (
    <span
      className={clsx(badgeRecipe({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
};
