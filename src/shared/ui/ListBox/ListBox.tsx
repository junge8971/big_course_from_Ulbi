import {
  Field,
  Listbox as HListBox,
  Label,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxComponentProps {
  items: ListBoxItem[];
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  label?: string;
  className?: string;
}

export const ListBox: FC<ListBoxComponentProps> = ({
  className,
  items,
  value,
  label,
  onChange,
  readOnly,
}) => {
  return (
    <Field className={classNames(cls.listBox, [className])}>
      {label && <Label>{label}</Label>}
      <HListBox disabled={readOnly} value={value} onChange={onChange} as="div">
        <ListboxButton as={Button}>{value}</ListboxButton>
        <ListboxOptions className={cls.options} anchor="bottom">
          {items.map((item) => (
            <ListboxOption key={item.value} value={item.value} disabled={item.disabled}>
              {({ focus, selected }) => (
                <div
                  className={classNames(cls.option, [], {
                    [cls.focus]: focus,
                    [cls.selected]: selected,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </Field>
  );
};
