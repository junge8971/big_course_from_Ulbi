import { ArticleList, ArticleView, ArticleViewSelector } from 'entity/Article';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';

import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesListPage } from '../../model/services/fetchNextArticlesListPage/fetchNextArticlesListPage';
import { initArticleList } from '../../model/services/initArtilcesList/initArtilcesList';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slices/ArticlesPageSlice';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};
interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );
  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticleList());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper onScrollEnd={onLoadNextPage}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList articles={articles} isLoading={isLoading} view={view} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
