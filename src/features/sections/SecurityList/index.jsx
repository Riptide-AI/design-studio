import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { securityList } from '@/data/support';
import Image from 'next/image';

export const SecurityList = () => {
  return (
    <ContentWrapper>
      <div className={styles.We_protect}>
        <div className={styles.We_protect_row}>
          <div className={styles.content}>
            <div className={styles.content_label}>
              <h2 className={styles.label}>{securityList.title}</h2>
              <p className={styles.sub_label}>{securityList.desc}</p>
            </div>
            <div className={styles.content_row}>
              {securityList.list.map((item, i) => (
                <div className={styles.card} key={`security-item-${i}`}>
                  <div className={styles.card_image}>
                    {item.icons.map((img, i) => (
                      <Image
                        key={`image- ${i}`}
                        src={img}
                        data-name={item.styles[i]}
                        width={32}
                        height={32}
                        alt="Picture"
                      />
                    ))}
                  </div>
                  <div className={styles.card_information}>
                    <div className={styles.card_name_block}>
                      <div className={styles.card_count}>0{i + 1}</div>
                      <div className={styles.card_name}>{item.title}</div>
                    </div>
                    <div className={styles.card_text}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.main_image}>
            <Image src={securityList.image} width={400} height={450} alt="" />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
