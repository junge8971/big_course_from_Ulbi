import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponentComponent: FC<
  ArticleImageBlockComponentComponentProps
> = ({ className, block }) => {
  return (
    <div className={classNames(cls.imageBlock, [className])}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && <Text text={block.title} />}
    </div>
  );
};

export const ArticleImageBlockComponent = memo(ArticleImageBlockComponentComponent);
