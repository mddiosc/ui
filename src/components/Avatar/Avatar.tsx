import { type HTMLAttributes } from 'react';
import { avatarRecipe } from '../../recipes/avatar.recipe';

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar = ({ size = 'md', src, alt, fallback, className, ...props }: AvatarProps) => {
  const initials = fallback || alt?.slice(0, 2).toUpperCase() || '?';
  
  return (
    <div
      className={`${avatarRecipe({ size })} ${className || ''}`}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};
