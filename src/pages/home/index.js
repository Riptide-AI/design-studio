import { LocaleSwitch } from '@/components/LocaleSwitch';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return <div>{t('home')}
  <LocaleSwitch/></div>;
}LocaleSwitch
