import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { CustomButton } from '@/components/CustomButton';
import { howitworks } from '@/data/homepage';
import Image from 'next/image';
import { useState } from 'react';

export const HowItWorks = ({ hideBtn }) => {
  const [currentBlockId, setCurrentBlockId] = useState(null);
  const handleSwitch = (id) => {
    id === currentBlockId ? setCurrentBlockId(null) : setCurrentBlockId(id);
  };
  return (
    <ContentWrapper>
      <div className={styles.howitworks}>
        <h3 className={styles.howitworks__title}>Як ми працюємо</h3>
        <div className={styles.howitworks__cards}>
          {howitworks.map((item, index) => (
            <div className={styles.howitworks__card} key={index}>
              <div className={styles.howitworks__card__content}>
                <div className={styles.howitworks__card__icon}>
                  <Image src={item.icon} height={100} width={100} alt="" placeholder="empty" />
                </div>
              </div>
              <CustomButton
                title={item.title}
                stylesClassName={styles.howitworks__card__btn}
                action={() => handleSwitch(index)}
              />
            </div>
          ))}
        </div>
        {currentBlockId !== null ? (
          <div className={styles.howitworks__desc}> {howitworks[currentBlockId].desc}</div>
        ) : !hideBtn ? (
          <CustomButton title="Замовити веб-сайт" stylesClassName={styles.howitworks__btn} />
        ) : (
          <></>
        )}
      </div>
    </ContentWrapper>
  );
};
