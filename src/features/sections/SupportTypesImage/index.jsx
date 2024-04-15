import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';

export const SupportTypesImage = ({ data, alt, cols = 3 }) => {
  return (
    <ContentWrapper>
      <div className={styles.support_types}>
        <div className={styles.support_types__title}>{data.title}</div>
        <div
          className={styles.support_types__list}
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {data.list.map((item, i) => (
            <div
              className={`${styles.support_types__item}  ${alt ? styles.alt : ''}`}
              key={`item-${i}`}
            >
              <div className={`${styles.support_types__item__title} ${alt ? styles.alt : ''}`}>
                {item.title}
              </div>
              <div className={`${styles.support_types__item__desc} ${alt ? styles.alt : ''}`}>
                {item.desc}
              </div>
              <div className={styles.support_types__item__image}>
                <Image src={item.image} alt="" fill="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
