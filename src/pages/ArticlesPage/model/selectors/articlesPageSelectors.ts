import { StateSchema } from 'app/Providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search;
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type;
