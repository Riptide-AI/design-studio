import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { servicesTabs } from '@/data/homepage';
import Image from 'next/image';
import { Tabs } from '@/components/Tabs';
export const ServicesTabs = () => {
  return (
    <ContentWrapper>
      <section className={styles.services}>
        <div className={styles.services__content}>
          <div className={styles.services__image}>
            <Image src="/img/services-tabs.png" fill="true" />
          </div>
          <div className={styles.services__desc}>
            <h4 className={styles.services__title}>Послуги</h4>
            <div className={styles.services__tabs}>
              <Tabs items={servicesTabs} />
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};
