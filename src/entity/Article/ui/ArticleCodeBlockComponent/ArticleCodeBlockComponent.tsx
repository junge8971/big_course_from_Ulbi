import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';

import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlockComponentComponent: FC<ArticleCodeBlockComponentComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={classNames(cls.codeBlock, [className])}>
      <Code text={block.code} />
    </div>
  );
};

export const ArticleCodeBlockComponent = memo(ArticleCodeBlockComponentComponent);
