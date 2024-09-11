import {
  FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsComponentProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

const ArticleTypeTabsComponent: FC<ArticleTypeTabsComponentProps> = ({
  className,
  value,
  onChangeType,
}) => {
  const { t } = useTranslation();

  const tabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('Все'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика'),
      },
      {
        value: ArticleType.IT,
        content: t('АЙТИ'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука'),
      },
    ],
    [t],
  );
  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      onTabClick={onTabClick}
      tabs={tabs}
      value={value}
      className={classNames('', [className])}
    />
  );
};

export const ArticleTypeTabs = memo(ArticleTypeTabsComponent);
