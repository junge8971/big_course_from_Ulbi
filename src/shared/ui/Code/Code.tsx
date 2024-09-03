import {
  FC, ReactNode, memo, useCallback,
} from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import cls from './Code.module.scss';

interface CodeComponentProps {
  className?: string;
  text: string;
}

const CodeComponent: FC<CodeComponentProps> = ({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.codeWrapper, [className])}>
      <Button className={cls.copyButton} onClick={onCopy}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code className={cls.code}>{text}</code>
    </pre>
  );
};

export const Code = memo(CodeComponent);
