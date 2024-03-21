import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';

export const PortfolioResult = ({ currentItem }) => {
  return (
    <div className={styles.wrapper}>
      <ContentWrapper>
        <div className={styles.result}>
          <div className={styles.result__banner_image}>
            <Image src={currentItem.results.image} alt="" fill={true} />
          </div>
          <div className={styles.result__content}>
            <div className={styles.result__content__section_title}>
              {currentItem.results.sectionName}
            </div>
            <div className={styles.result__content__title}>{currentItem.results.title}</div>
            <div className={styles.result__content__list}>
              {currentItem.results.list.map((item, i) => (
                <div className={styles.result__content__item} key={`item-${i}`}>
                  <div className={styles.result__content__item__desc}>{item.desc}</div>
                  <div className={styles.result__content__item__image}>
                    <Image src={item.image} alt="" fill={true} />
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
