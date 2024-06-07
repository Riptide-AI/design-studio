import { ContentWrapper } from '@/components/ContentWrapper';
import { infoBlock } from '@/data/partnership';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const InfoBlock = () => {
  const {t}=useTranslation();
  return (
    <ContentWrapper>
      <section className={styles.info_block}>
        <div className={styles.info_block__text}>{t(infoBlock.desc)}</div>
      </section>
    </ContentWrapper>
  );
};
