import { ContentWrapper } from '@/components/ContentWrapper';
import { weProvide } from '@/data/design';
import styles from './style.module.scss';
import Image from 'next/image';

export const WeProvide = () => {
  return (
    <ContentWrapper>
      <div className={styles.we_provide}>
        <div className={styles.we_provide__title}>{weProvide.title}</div>
        <div className={styles.we_provide__list}>
          {weProvide.list.map((item, i) => (
            <div className={styles.service_card} key={`item-${i}`}>
              <div className={styles.card_image}>
                {item.icons.map((img, i) => (
                  <Image
                    key={`item-${img}`}
                    data-name={item.styls[i]}
                    src={img}
                    width={50}
                    height={50}
                    alt="Picture"
                  />
                ))}
              </div>
              <div className={styles.card_label}>{item.title}</div>
              <div className={styles.card_text}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
