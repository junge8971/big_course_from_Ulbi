import { ArticleDetails, ArticleList, ArticleView } from 'entity/Article';
import { CommentList } from 'entity/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

import { getArticleDetailsCommentIsLoading } from '../../model/selectors/ArticleDetailsCommentSelectors';
import { getArticleDetailsRecommendedIsLoading } from '../../model/selectors/articleDetailsRecommendedSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { fetchRecommendedArticles } from '../../model/services/fetchRecommendedArticles/fetchRecommendedArticles';
import { articleDetailsPageReducer } from '../../model/slice';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import { getRecommended } from '../../model/slice/articleDetailsRecommendedSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};
interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentIsLoading);

  const recommended = useSelector(getRecommended.selectAll);
  const recommendedIsLoading = useSelector(getArticleDetailsRecommendedIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchRecommendedArticles());
  }, [dispatch, id]);

  if (!id) {
    return (
      <div className={classNames(cls.article, [className])}>{t('Статья не найдена')}</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper className={classNames(cls.article, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Рекомендуем')} />
        <ArticleList
          target="_blank"
          articles={recommended}
          isLoading={recommendedIsLoading}
          view={ArticleView.SMALL}
          className={cls.recommendedList}
        />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
