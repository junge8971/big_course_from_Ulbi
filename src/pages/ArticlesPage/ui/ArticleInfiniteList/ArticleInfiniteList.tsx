import { ArticleList } from 'entity/Article';
import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticleList } from '../../model/services/initArtilcesList/initArtilcesList';
import { getArticles } from '../../model/slices/ArticlesPageSlice';

interface ArticleInfiniteListComponentProps {
  className?: string;
}

const ArticleInfiniteListComponent: FC<ArticleInfiniteListComponentProps> = ({
  className,
}) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  useEffect(() => {
    dispatch(initArticleList(searchParams));
  }, [dispatch, searchParams]);

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      view={view}
      className={className}
    />
  );
};

export const ArticleInfiniteList = memo(ArticleInfiniteListComponent);
