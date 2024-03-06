import { ContentWrapper } from '@/components/ContentWrapper';
import { CustomButton } from '@/components/CustomButton';
import Image from 'next/image';
import styles from './style.module.scss';

export const PriceCards = ({ data }) => {
  return (
    <ContentWrapper>
      <div className={styles.price_cards}>
        <div className={styles.price_cards__title}>{data.title}</div>
        <div className={styles.price_cards__desc}>{data.desc}</div>
        <div className={styles.price_cards__list}>
          {data.list.map((item, i) => (
            <div
              className={styles.price_cards__item}
              key={`item-${i}`}
              style={{ backgroundColor: item.color }}
            >
              <div className={styles.price_cards__item__size_type}>{item.sizeType}</div>
              <div className={styles.price_cards__item__title}>{item.title}</div>
              <div className={styles.price_cards__item__desc}>{item.desc}</div>
              <div className={styles.price_cards__item__price}>{item.price}</div>
              <CustomButton stylesClassName={styles.price_cards__item__btn} title={item.order} />
              <CustomButton
                stylesClassName={styles.price_cards__item__btn_alt}
                title={item.details}
              />
              <ul className={styles.price_cards__item__checks_list}>
                {item.checks.map((check, i) => (
                  <li key={`check-${i}`} className={styles.price_cards__item__check_item}>
                    <Image src={data.checkIcon} width={30} height={30} />
                    <span className={styles.price_cards__item__check_item__text}>
                      {check.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
