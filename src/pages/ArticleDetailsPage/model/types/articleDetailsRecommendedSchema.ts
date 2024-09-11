import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entity/Article';

export interface articleDetailsRecommendedSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;
}
