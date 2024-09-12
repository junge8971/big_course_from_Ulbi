import { getArticleDetailsData } from 'entity/Article';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import { getIsArticleEditableByUser } from '../../model/selectors/articleSelectors';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderComponentProps {
  className?: string;
}

const ArticleDetailsPageHeaderComponent: FC<ArticleDetailsPageHeaderComponentProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData);
  const isUserCanEdit = useSelector(getIsArticleEditableByUser);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articleDetails}${article?.id}/edit`);
  }, [article, navigate]);

  return (
    <div className={classNames(cls.articlePageHeader, [className])}>
      <Button onClick={onBackToList}>{t('Назад')}</Button>
      {isUserCanEdit && (
        <Button onClick={onEditArticle} className={cls.editButton}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
};

export const ArticleDetailsPageHeader = memo(ArticleDetailsPageHeaderComponent);
