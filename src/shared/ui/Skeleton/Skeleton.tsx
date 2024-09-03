import { CSSProperties, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonComponentProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

const SkeletonComponent: FC<SkeletonComponentProps> = ({
  className,
  height,
  width,
  border,
}) => {
  const styles: CSSProperties = { width, height, borderRadius: border };
  return <div className={classNames(cls.skeleton, [className])} style={styles} />;
};

export const Skeleton = memo(SkeletonComponent);
