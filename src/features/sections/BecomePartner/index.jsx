import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { becomePartner } from '@/data/homepage';
import { CustomButton } from '@/components/CustomButton';
import Link from 'next/link';
export const BecomePartner = () => {
  return (
    <ContentWrapper>
      <div className={styles['become-partner']}>
        <h4 className={styles['become-partner__title']}>{becomePartner.title}</h4>
        <div className={styles['become-partner__programs']}>
          {becomePartner.list.map((item, index) => (
            <div className={styles['become-partner__program-item']} key={index}>
              <div
                className={styles['become-partner__program-image']}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className={styles['become-partner__program-title']}>{item.title}</div>
              <div className={styles['become-partner__program-desc']}>{item.desc}</div>
              <Link href={'/contacts'}>
                <CustomButton
                  title={item.btn}
                  stylesClassName={styles['become-partner__program-btn']}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
