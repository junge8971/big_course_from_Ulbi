import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entity/Article';

export interface articlesPageSchema extends EntityState<Article, string> {
  view: ArticleView;

  isLoading?: boolean;
  error?: string;
}
