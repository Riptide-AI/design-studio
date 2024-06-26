import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';

export const CustomButton = ({ title, action, type, stylesClassName }) => {
  const { t } = useTranslation();
  return (
    <button
      type={type ? type : 'button'}
      className={`${stylesClassName} ${styles.button}`}
      onClick={action}
    >
      {t(title)}
    </button>
  );
};
