import { ContentWrapper } from '@/components/ContentWrapper';
import { weCreate } from '@/data/frontend';
import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
export const WeCreate = () => {
  const { t } = useTranslation();
  return (
    <ContentWrapper>
      <div className={styles.we_create}>
        <div className={styles.we_create__title}>{t(weCreate.title)}</div>
        <div className={styles.we_create__card_rows}>
          {weCreate.list.map((item, i) => (
            <Link href={item.link} key={`item-${i}`}>
              <div className={styles.card}>
                <div className={styles.card_row}>
                  <div className={styles.image}>
                    {item.icons.map((img, i) => (
                      <Image
                        key={`image-${i + item.link} `}
                        data-name={item.styles[i]}
                        src={img}
                        width={40}
                        height={40}
                        alt="Picture"
                      />
                    ))}
                  </div>
                  <span>{t(item.title)} </span>
                </div>
                <button className={styles.card_btn}></button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
