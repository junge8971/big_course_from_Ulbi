import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

import { Country } from '../../model/types/common';

const countryOptions = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

interface CountrySelectComponentProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const CountrySelectComponent: FC<CountrySelectComponentProps> = ({
  className,
  value = Country.Armenia,
  onChange,
  readOnly,
}) => {
  const { t } = useTranslation();

  return (
    <Select
      className={classNames('', [className])}
      label={t('Страна')}
      options={countryOptions}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export const CountrySelect = memo(CountrySelectComponent);
