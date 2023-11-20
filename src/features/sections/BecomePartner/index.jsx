import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { becomePartner } from '@/data/homepage';
import { CustomButton } from '@/components/CustomButton';
export const BecomePartner = () => {
  return (
    <ContentWrapper>
      <div className={styles['become-partner']}>
        <h4 className={styles['become-partner__title']}>{becomePartner.title}</h4>
        <div className={styles['become-partner__programs']}>
          {becomePartner.list.map((item,index) => (
            <div className={styles['become-partner__program-item']} style={{
              background: `linear-gradient(0deg, rgba(18, 39, 60, 0.80) 0%, rgba(18, 39, 60, 0.80) 100%), url(${item.image}) lightgray 50% / contain no-repeat`,
              backgroundSize: 'auto 100%'
            }}
            key={index}
            >
              <div className={styles['become-partner__program-title']}>{item.title}</div>
              <div className={styles['become-partner__program-desc']}>{item.desc}</div>
              <CustomButton
                title={item.title}
                stylesClassName={styles['become-partner__program-btn']}
              />
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
