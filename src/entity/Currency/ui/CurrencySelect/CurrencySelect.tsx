import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

import { Currency } from '../../model/types/common';

const currencyOptions = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectComponentProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const CurrencySelectComponent: FC<CurrencySelectComponentProps> = ({
  className,
  value = Currency.EUR,
  onChange,
  readOnly,
}) => {
  const { t } = useTranslation();

  return (
    <Select
      className={classNames('', [className])}
      label={t('Валюта')}
      options={currencyOptions}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export const CurrencySelect = memo(CurrencySelectComponent);
