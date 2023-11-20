import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { banner } from '@/data/services';

export const Banner = () => {
  return (
    <ContentWrapper>
      <div className={styles.banner}>
        <div className={styles.banner__content}>
        <div className={styles.banner__title}>{banner.title}</div>
        <div className={styles.banner__desc}>{banner.desc}</div>
        </div>
        <div className={styles.banner__image}>
        <Image src={banner.image} fill="true"  alt="" placeholder = 'empty'/>
        </div>
      </div>
    </ContentWrapper>
  );
};
