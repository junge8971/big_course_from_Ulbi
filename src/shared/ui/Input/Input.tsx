import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  MutableRefObject,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;
interface InputComponentProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
}

const InputComponent: FC<InputComponentProps> = ({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  readOnly,
  ...props
}) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
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
        className={classNames(cls.input, [], { [cls.readOnly]: readOnly })}
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};

export const Input = memo(InputComponent);
