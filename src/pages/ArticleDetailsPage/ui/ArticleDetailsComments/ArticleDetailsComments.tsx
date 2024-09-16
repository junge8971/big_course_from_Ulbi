import { CommentList } from 'entity/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import {
  FC, Suspense, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';

import { getArticleDetailsCommentIsLoading } from '../../model/selectors/ArticleDetailsCommentSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';

interface ArticleDetailsCommentsComponentProps {
  className?: string;
  id: string;
}

const ArticleDetailsCommentsComponent: FC<ArticleDetailsCommentsComponentProps> = ({
  className,
  id,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <div className={classNames('', [className])}>
      <Text title={t('Комментарии')} />
      <Suspense>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </div>
  );
};

export const ArticleDetailsComments = memo(ArticleDetailsCommentsComponent);
