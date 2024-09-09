import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entity/Article';

export interface articlesPageSchema extends EntityState<Article, string> {
  view: ArticleView;
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  isLoading?: boolean;
  error?: string;

  _inited?: boolean;
}
