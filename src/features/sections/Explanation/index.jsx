import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const Explanation = ({ data }) => {
  const { t } = useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.explanation}>
        <div className={styles.explanation__title}>{t(data.title)}</div>
        <div className={styles.explanation__desc}>{t(data.desc)}</div>
        <div className={styles.explanation__images}>
          <div className={styles.explanation__image}>
            <Image src={data.imageOne} fill={true} alt={data.alt} />
          </div>
          <div className={styles.explanation__image}>
            <Image src={data.imageTwo} fill={true} alt={data.alt} />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
