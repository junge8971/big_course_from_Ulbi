import { FC, ReactNode, memo } from 'react';
import { createPortal } from 'react-dom';

interface PortalComponentProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<PortalComponentProps> = ({ children, element = document.body }) => {
  return createPortal(children, element);
};
