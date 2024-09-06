import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3).map((_, index) => (
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
  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      className={cls.card}
    />
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, [className, cls[view]])}>
      {articles.map(renderArticle)}
    </div>
  );
};

export const ArticleList = memo(ArticleListComponent);
