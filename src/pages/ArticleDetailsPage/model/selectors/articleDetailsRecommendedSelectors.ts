/* eslint-disable max-len */

import { StateSchema } from 'app/Providers/StoreProvider';

export const getArticleDetailsRecommendedError = (state: StateSchema) => state.articleDetailsPage?.recommended?.error;
export const getArticleDetailsRecommendedIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommended?.isLoading;
