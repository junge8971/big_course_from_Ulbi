import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/Providers/StoreProvider';

import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export interface fetchNextArticlesListPageProps {
  page?: number;
}

export const fetchNextArticlesListPage = createAsyncThunk<void, void, ThunkConfig<void>>(
  'articlesPage/fetchNextArticlesListPage ',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const hasMore = getArticlesPageHasMore(getState());
    const pageNumber = getArticlesPageNumber(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(pageNumber + 1));
      dispatch(fetchArticlesList({}));
    }
  },
);
