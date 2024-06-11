import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const WorkWithUs = ({ data }) => {
  const {t}=useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.work_with_us}>
        <div className={styles.work_with_us__title}>{t(data.title)}</div>
        <div className={styles.work_with_us__list}>
          {data.list.map((item, i) => (
            <div className={styles.work_with_us__item} key={`item-${i}`}>
              <div className={styles.work_with_us__item__icon}>
                <Image src={item.icon} width={56} height={56} alt="" />
              </div>
              <div className={styles.work_with_us__item__desc}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
