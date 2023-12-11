import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import clsx from 'clsx';

export const PriceList = ({ data }) => {
  return (
    <ContentWrapper>
      <div className={styles.price_section}>
        <div className={styles.price_section__title}>{data.title}</div>
        {data.desc && <div className={styles.price_section__desc}>{data.desc}</div>}
        <div className={styles.price_section__list}>
          {data.list.map((item) => (
            <div className={styles.price_section__item} key={item.title}>
              <div className={styles.price_section__item__title_wrap}>
                {item.planType && (
                  <div className={styles.price_section__item__plan}>{item.planType}</div>
                )}
                <div
                  className={clsx(styles.price_section__item__title, {
                    [styles.price_section__item__title_alt]: !item.due,
                  })}
                >
                  {item.title}
                </div>
                {item.subTitle && (
                  <div className={styles.price_section__item__subtitle}>{item.subTitle}</div>
                )}
              </div>
              <div className={styles.price_section__item__desc}>{item.desc}</div>
              <div className={styles.price_section__item__price_wrap}>
                <div className={styles.price_section__item__price}>{item.price}</div>
                {item.due && <div className={styles.price_section__item__due}>{item.due}</div>}
                <CustomButton
                  title={data.orderBtn}
                  stylesClassName={styles.price_section__item__btn}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
