import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/Providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entity/Article';
import { SortOrder } from 'shared/types';

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticleList = createAsyncThunk<void, URLSearchParams, ThunkConfig<void>>(
  'articlesPage/initArticleList ',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const _inited = getArticlesPageInited(getState());

    if (!_inited) {
      dispatch(articlesPageActions.initState());

      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
      }
      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }
      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }
      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl));
      }

      dispatch(fetchArticlesList({}));
    }
  },
);
