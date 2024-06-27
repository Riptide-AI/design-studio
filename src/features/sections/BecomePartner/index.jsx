import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { becomePartner } from '@/data/homepage';
import { CustomButton } from '@/components/CustomButton';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
export const BecomePartner = (/* props */) => {
  const { t } = useTranslation();
/*   const { onDataChange } = props;
 */
  return (
    <ContentWrapper>
      <div className={styles['become-partner']}>
        <h4 className={styles['become-partner__title']}>{t(becomePartner.title)}</h4>
        <div className={styles['become-partner__programs']}>
          {becomePartner.list.map((item, index) => (
            <div className={styles['become-partner__program-item']} key={index}>
              <div
                className={styles['become-partner__program-image']}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className={styles['become-partner__program-title']}>{t(item.title)}</div>
              <div className={styles['become-partner__program-desc']}>{t(item.desc)}</div>
              <Link href={'/contacts'} /* onClick={() => onDataChange('index++')} */>
                <CustomButton
                  title={t(item.btn)}
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
