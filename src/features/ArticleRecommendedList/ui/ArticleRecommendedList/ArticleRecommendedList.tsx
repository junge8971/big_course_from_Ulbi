import { ArticleList } from 'entity/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text } from 'shared/ui/Text/Text';

import { useArticleRecommendedList } from '../../api/recommendedApi';

interface ArticleRecommendedListComponentProps {
  className?: string;
}

const ArticleRecommendedListComponent: FC<ArticleRecommendedListComponentProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  const { isLoading, data: articles } = useArticleRecommendedList(3);

  if (isLoading) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', [className])}>
      <Text title={t('Рекомендуем')} />
      <ArticleList articles={articles} isLoading={isLoading} target="_blank" />
    </VStack>
  );
};

export const ArticleRecommendedList = memo(ArticleRecommendedListComponent);
