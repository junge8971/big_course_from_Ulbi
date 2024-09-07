import { ArticleDetails } from 'entity/Article';
import { CommentList } from 'entity/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { Text } from 'shared/ui/Text/Text';

import { getArticleDetailsCommentIsLoading } from '../../model/selectors/ArticleDetailsCommentSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  ArticleDetailsCommentReducer,
  getArticleComments,
} from '../../model/slice/ArticleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = { ArticleDetailsComment: ArticleDetailsCommentReducer };
interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return (
      <div className={classNames(cls.article, [className])}>{t('Статья не найдена')}</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper className={classNames(cls.article, [className])}>
        <Button onClick={onBackToList}>{t('Назад')}</Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
