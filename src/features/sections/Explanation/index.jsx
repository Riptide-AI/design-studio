import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';

export const Explanation = ({ data }) => {
  return (
    <ContentWrapper>
      <div className={styles.explanation}>
        <div className={styles.explanation__title}>{data.title}</div>
        <div className={styles.explanation__desc}>{data.desc}</div>
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
