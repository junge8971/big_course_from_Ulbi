import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';

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
    <ListBox
      className={classNames('', [className])}
      label={t('Страна')}
      items={countryOptions}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export const CountrySelect = memo(CountrySelectComponent);
