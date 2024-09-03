import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlockComponentComponent: FC<ArticleTextBlockComponentComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={classNames(cls.textBlock, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}

      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
};

export const ArticleTextBlockComponent = memo(ArticleTextBlockComponentComponent);
