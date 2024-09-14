import {
  Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/react';
import {
  FC, Fragment, ReactNode, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink } from '../AppLink/AppLink';
import { Button } from '../Button/Button';
import cls from './DropDown.module.scss';

export interface DropDownItem {
  content: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

interface DropDownProps {
  label: ReactNode;
  items: DropDownItem[];
  className?: string;
}

export const DropDown: FC<DropDownProps> = ({ className, label, items }) => {
  const renderItem = useCallback((item: DropDownItem, focus: boolean) => {
    if (item.href) {
      return (
        <AppLink
          className={classNames(cls.dropDownItem, [], {
            [cls.focus]: focus,
            [cls.disabled]: item.disabled,
          })}
          to={item.href}
        >
          {item.content}
        </AppLink>
      );
    }

    if (item.onClick) {
      return (
        <Button
          type="button"
          onClick={item.onClick}
          className={classNames(cls.dropDownItem, [], {
            [cls.focus]: focus,
            [cls.disabled]: item.disabled,
          })}
        >
          {item.content}
        </Button>
      );
    }
  }, []);

  return (
    <Menu>
      <MenuButton as={Button} className={classNames(cls.button, [className])}>
        {label}
      </MenuButton>
      <MenuItems anchor="bottom" className={cls.dropDownItems}>
        {items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MenuItem key={index} as={Fragment} disabled={item.disabled}>
            {({ focus }) => renderItem(item, focus)}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
