import {
  CSSProperties, FC, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarComponentProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

const AvatarComponent: FC<AvatarComponentProps> = ({
  className, src, alt, size = 100,
}) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return <img className={classNames(cls.avatar, [className])} src={src} alt={alt} style={styles} />;
};

export const Avatar = memo(AvatarComponent);
