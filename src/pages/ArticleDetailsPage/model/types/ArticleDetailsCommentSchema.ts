import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entity/Comment';

export interface ArticleDetailsCommentSchema extends EntityState<Comment, string> {
  isLoading: boolean;
  error?: string;
}
