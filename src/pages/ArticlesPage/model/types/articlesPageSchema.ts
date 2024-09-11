import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticleType, ArticleView,
} from 'entity/Article';
import { SortOrder } from 'shared/types';

export interface articlesPageSchema extends EntityState<Article, string> {
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  // loading
  isLoading?: boolean;
  error?: string;

  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited?: boolean;
}
