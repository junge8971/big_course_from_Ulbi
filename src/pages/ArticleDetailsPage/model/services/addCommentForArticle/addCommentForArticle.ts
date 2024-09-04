import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/Providers/StoreProvider';
import { getArticleDetailsData } from 'entity/Article';
import { Comment } from 'entity/Comment';
import { getUserAuthData } from 'entity/User';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle ', async (formText, thunkAPI) => {
  const {
    extra, dispatch, rejectWithValue, getState,
  } = thunkAPI;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !formText || !article) {
    return rejectWithValue('error');
  }
  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: article.id,
      userId: userData.id,
      text: formText,
    });

    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
