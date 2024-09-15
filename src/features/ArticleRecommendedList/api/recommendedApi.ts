import { rtkApi } from 'shared/api/rtkApi';

const recommendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRecommendedArticles: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommendedList = recommendedApi.useGetRecommendedArticlesQuery;
