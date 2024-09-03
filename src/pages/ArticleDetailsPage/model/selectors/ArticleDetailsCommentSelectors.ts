/* eslint-disable max-len */
import { StateSchema } from 'app/Providers/StoreProvider';

export const getArticleDetailsCommentError = (state: StateSchema) => state.ArticleDetailsComment?.error;
export const getArticleDetailsCommentIsLoading = (state: StateSchema) => state.ArticleDetailsComment?.isLoading;
