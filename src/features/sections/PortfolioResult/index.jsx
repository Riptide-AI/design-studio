import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const PortfolioResult = ({ currentItem }) => {
  const {t}=useTranslation();

  return (
    <div className={styles.wrapper}>
      <ContentWrapper>
        <div className={styles.result}>
          <div className={styles.result__banner_image}>
            <Image src={currentItem.results.image} alt="" width={1000} height={1000}/>
          </div>
          <div className={styles.result__content}>
            <div className={styles.result__content__section_title}>
              {t(currentItem.results.sectionName)}
            </div>
            <div className={styles.result__content__title}>{t(currentItem.results.title)}</div>
            <div className={styles.result__content__list}>
              {currentItem.results.list.map((item, i) => (
                <div className={styles.result__content__item} key={`item-${i}`}>
                  <div className={styles.result__content__item__desc}>{t(item.desc)}</div>
                  <div className={styles.result__content__item__image}>
                    <Image src={item.image} alt=""  width={1000} height={1000} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
