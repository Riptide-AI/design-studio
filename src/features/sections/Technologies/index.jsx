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
          <div
            className={styles.technologies__img}
            style={{
              background: `url(${technologies.img})`,
            }}
          ></div>
          {technologies.list.map((item, i) => (
            <div className={styles.technologies__item} key={`item-${i}`}>
               <Image src={item.icon} alt="" className={styles.technologies__item_icon} height={40} width={40}/>
              <div className={styles.technologies__item_title}>{item.title}</div>
              <div className={styles.technologies__item_desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
