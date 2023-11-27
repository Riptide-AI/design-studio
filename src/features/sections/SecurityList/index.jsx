import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { securityList } from '@/data/support';
import Image from 'next/image';

export const SecurityList = () => {
  return (
    <ContentWrapper>
      <div className={styles.security}>
        <div className={styles.security__title}>{securityList.title}</div>
        <div className={styles.security__desc}>{securityList.desc}</div>
        <div className={styles.security__list}>
          {securityList.list.map((item, i) => (
            <div className={styles.security__item}  key={`security-item-${i}`}>
              <div className={styles.security__item__order}>0{i + 1}</div>
              <div className={styles.security__item__title}>{item.title}</div>
              <div className={styles.security__item__desc}>{item.desc}</div>
              <div className={styles.security__item__icon}>
                <Image src={item.icon} alt="" height={32} width={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
