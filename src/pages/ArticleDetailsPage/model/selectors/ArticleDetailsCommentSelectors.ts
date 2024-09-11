/* eslint-disable max-len */
import { StateSchema } from 'app/Providers/StoreProvider';

export const getArticleDetailsCommentError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
export const getArticleDetailsCommentIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
