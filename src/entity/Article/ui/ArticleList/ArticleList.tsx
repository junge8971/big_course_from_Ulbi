import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
  ));
};

interface ArticleListComponentProps {
  className?: string;
  isLoading?: boolean;
  view?: ArticleView;
  articles: Article[];
}

const ArticleListComponent: FC<ArticleListComponentProps> = ({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL,
}) => {
  const { t } = useTranslation();
  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      className={cls.card}
    />
  );

  if (!isLoading && articles.length) {
    return (
      <div className={classNames(cls.articleList, [className, cls[view]])}>
        <Text title={t('Статьи не найдены')} size={TextSize.l} theme={TextTheme.error} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, [className, cls[view]])}>
      {articles.map(renderArticle)}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export const ArticleList = memo(ArticleListComponent);
