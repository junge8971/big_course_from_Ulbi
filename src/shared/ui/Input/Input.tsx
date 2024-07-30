import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface InputComponentProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const InputComponent: FC<InputComponentProps> = ({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>();
  const [isFocused, setIsFocused] = useState(false);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.inputWrapper, [className])}>
      <div>{placeholder}</div>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.input)}
        {...props}
      />
    </div>
  );
};

export const Input = memo(InputComponent);
