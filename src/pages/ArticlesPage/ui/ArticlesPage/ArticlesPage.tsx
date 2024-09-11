import { ArticleList, ArticleViewSelector } from 'entity/Article';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesListPage } from '../../model/services/fetchNextArticlesListPage/fetchNextArticlesListPage';
import { initArticleList } from '../../model/services/initArtilcesList/initArtilcesList';
import { articlesPageReducer, getArticles } from '../../model/slices/ArticlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};
interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticleList(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper onScrollEnd={onLoadNextPage}>
        <ArticlesPageFilters />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
          className={cls.list}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
