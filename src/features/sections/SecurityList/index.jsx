import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { securityList } from '@/data/support';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
export const SecurityList = () => {
  const {t}=useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.security}>
        <div className={styles.security__content}>
          <div className={styles.security__title}>{t(securityList.title)}</div>
          <div className={styles.security__desc}>{t(securityList.desc)}</div>
          <div className={styles.security__list}>
            {securityList.list.map((item, i) => (
              <div className={styles.security__item} key={`security-item-${i}`}>
                <div className={styles.security__item__order}>0{i + 1}</div>
                <div className={styles.security__item__title}>{t(item.title)}</div>
                <div className={styles.security__item__desc}>{t(item.desc)}</div>
                <div className={styles.security__item__icon}>
                  <Image src={item.icon} alt="" height={32} width={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.security__image}>
          <Image src={securityList.image} alt="" fill="true" />
        </div>
      </div>
    </ContentWrapper>
  );
};
