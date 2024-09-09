import { StateSchema } from 'app/Providers/StoreProvider';
import { getUiScrollByPath, uiActions } from 'features/Ui';
import {
  FC, MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

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
  const dispatch = useAppDispatch();
  const location = useLocation();

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  // eslint-disable-next-line max-len
  const scrollPosition = useSelector((state: StateSchema) => getUiScrollByPath(state, location.pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callBack: onScrollEnd,
  });

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        path: location.pathname,
        position: event.currentTarget.scrollTop,
      }),
    );
  }, 500);

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.pageWrapper, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
