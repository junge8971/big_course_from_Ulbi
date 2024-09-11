import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { articleDetailsRecommendedSchema } from './articleDetailsRecommendedSchema';

export interface articleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema;
  recommended: articleDetailsRecommendedSchema;
}
