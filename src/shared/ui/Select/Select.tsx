import {
  ChangeEvent, FC, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectComponentProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const SelectComponent: FC<SelectComponentProps> = ({
  className,
  label,
  options,
  value,
  onChange,
  readOnly,
}) => {
  const optionList = useMemo(() => {
    return options?.map((optionElement) => (
      <option key={optionElement.value} className={cls.option} value={optionElement.value}>
        {optionElement.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={classNames(cls.wrapper, [className])}>
      {label && <div className={cls.label}>{label}</div>}
      <select value={value} className={cls.select} onChange={onChangeHandler} disabled={readOnly}>
        {optionList}
      </select>
    </div>
  );
};

export const Select = memo(SelectComponent);
