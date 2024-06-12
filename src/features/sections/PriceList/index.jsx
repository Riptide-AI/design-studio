import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export const PriceList = ({ data }) => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <div className={styles.price_section}>
        <div className={styles.price_section__title}>{t(data.title)}</div>
        {data.desc && <div className={styles.price_section__desc}>{t(data.desc)}</div>}
        <div className={styles.price_section__list}>
          {data.list.map((item) => (
            <div className={styles.price_section__item} key={t(item.title)}>
              <div className={styles.price_section__item__title_wrap}>
                {item.planType && (
                  <div className={styles.price_section__item__plan}>{t(item.planType)}</div>
                )}
                <div
                  className={clsx(styles.price_section__item__title, {
                    [styles.price_section__item__title_alt]: !item.due,
                  })}
                >
                  {t(item.title)}
                </div>
                {t(item.subTitle) && (
                  <div className={styles.price_section__item__subtitle}>{t(item.subTitle)}</div>
                )}
              </div>
              <div className={styles.price_section__item__desc}>{t(item.desc)}</div>
              <div className={styles.price_section__item__price_wrap}>
                <div className={styles.price_section__item__price}>{t(item.price)}</div>
                {t(item.due) && <div className={styles.price_section__item__due}>{t(item.due)}</div>}
                <Link href={{ pathname: '/contacts', query: { message: t(item.message)} }}>
                  <CustomButton
                    title={t(data.orderBtn)}
                    stylesClassName={styles.price_section__item__btn}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
