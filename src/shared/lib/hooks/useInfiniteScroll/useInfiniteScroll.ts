import { MutableRefObject, useEffect, useRef } from 'react';

export interface useInfiniteScrollProps {
  callBack?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  callBack,
  triggerRef,
  wrapperRef,
}: useInfiniteScrollProps) => {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callBack) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callBack();
        }
      }, options);

      observer.observe(triggerElement);

      return () => {
        if (observer) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(triggerElement);
        }
      };
    }
  }, [callBack, triggerRef, wrapperRef]);
};
