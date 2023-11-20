import { ContentWrapper } from '@/components/ContentWrapper';
import { ourClients } from '@/data/aboutUs';
import styles from './style.module.scss';
import Image from 'next/image';
import { CustomButton } from '@/components/CustomButton';

export const OurClients = () => {
  return (
    <ContentWrapper>
      <div className={styles.clients}>
        <h3 className={styles.clients__title}>{ourClients.title}</h3>
        <div className={styles.clients__list}>
          {ourClients.list.map((item, i) => (
            <div key={`image-${i}`} className={styles.clients__item}>
              <Image src={item.src} alt={item.alt} fill="true" />
            </div>
          ))}
          <CustomButton title={ourClients.btn} stylesClassName={styles.clients__btn} />
        </div>
      </div>
    </ContentWrapper>
  );
};
