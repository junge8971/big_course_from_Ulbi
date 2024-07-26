import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LanguageSwitcherComponentProps {
  className?: string;
}

const LanguageSwitcherComponent: FC<LanguageSwitcherComponentProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div className={className}>
      <Button theme={ButtonTheme.clear} onClick={toggleLanguage}>
        {t('Сменить язык')}
      </Button>
    </div>
  );
};

export const LanguageSwitcher = memo(LanguageSwitcherComponent);
