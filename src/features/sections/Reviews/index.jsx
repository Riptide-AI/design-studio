import { Slider } from '../Slider';
import styles from './style.module.scss';
import { ContentWrapper } from '@/components/ContentWrapper';

export const Reviews = ({ data }) => {
  return (
    <ContentWrapper>
      <div className={styles.reviews}>
        <div className={styles.reviews__title}>{data.title}</div>
        <div className={styles.reviews__desc}>{data.desc}</div>
        <Slider slides={data.slides} />
      </div>
    </ContentWrapper>
  );
};
