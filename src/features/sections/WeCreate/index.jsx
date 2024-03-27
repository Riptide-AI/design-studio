import { ContentWrapper } from '@/components/ContentWrapper';
import { weCreate } from '@/data/frontend';
import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';

export const WeCreate = () => {
  return (
    <ContentWrapper>
      <div className={styles.we_create}>
        <div className={styles.we_create__title}>{weCreate.title}</div>
        <div className={styles.we_create__list}>
          {weCreate.list.map((item, i) => (
            <div className={styles.we_create__item} key={`item-${i}`}>
              <div className={styles.we_create__item__icon}>
                <Image src={item.icon} width={40} height={40} alt="" />
              </div>
              <div className={styles.we_create__item__title}>{item.title}</div>
              <Link href={item.link} target='_blank' className={styles.we_create__item__button}>
                <Image src={'/img/icons/last.svg'} width={16} height={16} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
