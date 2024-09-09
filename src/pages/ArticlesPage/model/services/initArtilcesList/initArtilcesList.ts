import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/Providers/StoreProvider';

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticleList = createAsyncThunk<void, void, ThunkConfig<void>>(
  'articlesPage/initArticleList ',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const _inited = getArticlesPageInited(getState());

    if (!_inited) {
      dispatch(articlesPageActions.initState());
      dispatch(
        fetchArticlesList({
          page: 1,
        }),
      );
    }
  },
);
