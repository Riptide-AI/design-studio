import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { technologies } from '@/data/services';
import Image from 'next/image';

export const Technologies = () => {
  return (
    <ContentWrapper>
      <div className={styles.technologies}>
        <div className={styles.technologies__title}>{technologies.title}</div>
        <div className={styles.technologies__desc}>{technologies.desc}</div>
        <div className={styles.technologies__list}>
          <div className={styles.technologies__img}>
            <Image src={technologies.img} alt="" fill="true" />
          </div>
          {technologies.list.map((item, i) => (
            <div className={styles.card} key={`item-${i}`}>
             
              <div className={styles.card_image}>
                {item.icons.map((img, i) => (
                  <Image
                    key={`image-${img}`}
                    data-name={item.styles[i]}
                    src={img}
                    width={40}
                    height={40}
                    alt="Picture of the tehnology "
                  />
                ))}
              </div>
              <div className={styles.card_content}>
                <div className={styles.card_label}>{item.title}</div>
                <div className={styles.card_text}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
