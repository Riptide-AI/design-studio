import { useTranslation } from 'react-i18next';
import { Slider } from '../Slider';
import styles from './style.module.scss';
import { ContentWrapper } from '@/components/ContentWrapper';

export const Reviews = ({ data }) => {
  const {t}=useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.reviews}>
        <div className={styles.reviews__title}>{t(data.title)}</div>
        <div className={styles.reviews__desc}>{t(data.desc)}</div>
        <Slider slides={data.slides} />
      </div>
    </ContentWrapper>
  );
};
