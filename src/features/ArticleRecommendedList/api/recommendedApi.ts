import { Article } from 'entity/Article';
import { rtkApi } from 'shared/api/rtkApi';

const recommendedApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRecommendedArticles: build.query<Article[], number>({
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
