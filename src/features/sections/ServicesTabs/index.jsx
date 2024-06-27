import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { servicesTabs } from '@/data/homepage';
import Image from 'next/image';
import { Tabs } from '@/components/Tabs';
import { useTranslation } from 'react-i18next';

export const ServicesTabs = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <section className={styles.services}>
        <div className={styles.services__content}>
          <div className={styles.services__image}>
            <Image src="/img/services.png" fill="true" alt="" placeholder="empty" />
          </div>
          <div className={styles.services__desc}>
            <h3 className={styles.services__title}>{t('ServicesTabs.services')}</h3>
            <div className={styles.services__tabs}>
              <Tabs items={servicesTabs} />
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};
