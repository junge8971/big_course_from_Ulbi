import { FC, useCallback } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

import { fetchNextArticlesListPage } from '../../model/services/fetchNextArticlesListPage/fetchNextArticlesListPage';
import { articlesPageReducer } from '../../model/slices/ArticlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};
interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => {
  const dispatch = useAppDispatch();

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper onScrollEnd={onLoadNextPage}>
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
