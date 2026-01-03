import { type HTMLAttributes } from 'react';
import { icons } from 'lucide-react';
import clsx from 'clsx';
import { iconRecipe } from '../../recipes/icon.recipe';
import { type IconName } from './icon-types';

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Icon name from Lucide (e.g., "Heart", "Star", "Check") */
  name: IconName;
  /** Icon size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Icon color */
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error';
}

export const Icon = ({ name, size = 'md', color = 'default', className, ...props }: IconProps) => {
  // Get the icon component from the icons object
  const IconComponent = (icons as any)[name];

  // If icon doesn't exist, return null
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <span
      className={clsx(iconRecipe({ size, color }), className)}
      {...props}
    >
      <IconComponent size="100%" strokeWidth={2} />
    </span>
  );
};
