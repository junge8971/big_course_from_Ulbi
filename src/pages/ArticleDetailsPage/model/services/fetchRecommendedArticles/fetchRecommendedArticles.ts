import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/Providers/StoreProvider';
import { Article } from 'entity/Article';

export const fetchRecommendedArticles = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articleDetailsRecommended/fetchRecommendedArticles ', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Article[]>('/articles/', {
      params: {
        _limit: 4,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
