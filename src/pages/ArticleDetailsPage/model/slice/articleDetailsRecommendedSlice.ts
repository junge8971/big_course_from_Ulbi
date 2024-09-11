import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/Providers/StoreProvider';
import { Article } from 'entity/Article';

import { fetchRecommendedArticles } from '../services/fetchRecommendedArticles/fetchRecommendedArticles';
import { articleDetailsRecommendedSchema } from '../types/articleDetailsRecommendedSchema';

const recommendedAdapter = createEntityAdapter<Article>();

export const getRecommended = recommendedAdapter.getSelectors<StateSchema>(
  // eslint-disable-next-line max-len
  (state: StateSchema) => state.articleDetailsPage?.recommended || recommendedAdapter.getInitialState(),
);

const articleDetailsRecommendedSlice = createSlice({
  name: 'articleDetailsRecommended',
  initialState: recommendedAdapter.getInitialState<articleDetailsRecommendedSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecommendedArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchRecommendedArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          recommendedAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchRecommendedArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsRecommendedReducer } = articleDetailsRecommendedSlice;
