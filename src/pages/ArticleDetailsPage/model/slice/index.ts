import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentReducer } from './articleDetailsCommentSlice';
import { articleDetailsRecommendedReducer } from './articleDetailsRecommendedSlice';

export const articleDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentReducer,
  recommended: articleDetailsRecommendedReducer,
});
