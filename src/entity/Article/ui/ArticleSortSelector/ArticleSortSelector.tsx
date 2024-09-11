import {
  FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/Select/Select';

import { ArticleSortField } from '../../model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorComponentProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelectorComponent: FC<ArticleSortSelectorComponentProps> = ({
  className,
  onChangeOrder,
  onChangeSort,
  order,
  sort,
}) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      { value: 'desk', content: t('убыванию') },
    ],
    [t],
  );
  const sortFieldOptions = useMemo<SelectOption[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('заголовку'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  const onChangeOrderHandler = useCallback(
    (newOrder: string) => {
      onChangeOrder(newOrder as SortOrder);
    },
    [onChangeOrder],
  );
  const onChangeSortHandler = useCallback(
    (newSort: string) => {
      onChangeSort(newSort as ArticleSortField);
    },
    [onChangeSort],
  );

  return (
    <div className={classNames(cls.sortSelector, [className])}>
      <Select
        label={t('Сортировать по:')}
        options={sortFieldOptions}
        onChange={onChangeSortHandler}
        value={sort}
      />
      <Select
        value={order}
        label={t('По:')}
        options={orderOptions}
        onChange={onChangeOrderHandler}
      />
    </div>
  );
};

export const ArticleSortSelector = memo(ArticleSortSelectorComponent);
