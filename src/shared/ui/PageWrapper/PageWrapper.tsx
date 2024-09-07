import {
  FC, HTMLAttributes, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper: FC<PageWrapperProps> = ({
  className,
  children,
  onScrollEnd,
}) => {
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callBack: onScrollEnd,
  });
  return (
    <div ref={wrapperRef} className={classNames(cls.pageWrapper, [className])}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
