import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { FC, ReactNode, memo } from 'react';

import { Button } from '../Button/Button';

interface PopUpComponentProps {
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

const PopUpComponent: FC<PopUpComponentProps> = ({ title, className, children }) => {
  return (
    <Popover className={className}>
      <PopoverButton as={Button}>{title}</PopoverButton>
      <PopoverPanel anchor="bottom">{children}</PopoverPanel>
    </Popover>
  );
};

export const PopUp = memo(PopUpComponent);
