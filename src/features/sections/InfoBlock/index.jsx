import { ContentWrapper } from '@/components/ContentWrapper';
import { infoBlock } from '@/data/partnership';
import styles from './style.module.scss';

export const InfoBlock = () => {
  return (
    <ContentWrapper>
      <section className={styles.info_block}>
        <div className={styles.info_block__text}>{infoBlock.desc}</div>
      </section>
    </ContentWrapper>
  );
};
