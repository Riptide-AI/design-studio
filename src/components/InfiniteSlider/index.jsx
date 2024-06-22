import styles from './style.module.scss';
import Image from 'next/image';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const InfiniteSlider = ({ list, opacityCount, isTitle }) => {
  const {t}=useTranslation()
  const componentsList = useMemo(() => {
    return list.map((item, i) => (
      <div key={`image-${i}`} className={styles.logo}>
        <Image src={item.src} alt={item.alt} fill="true" />
      </div>
    ));
  }, [list]);
  return (
    <>
      {isTitle && <div className={styles.title}> {t('InfiniteSlider.title')} </div> }
      <div className={styles.infiniteSlider} style={{ opacity: opacityCount }}>
        <div>
          <div>{componentsList}</div>
          <div>{componentsList}</div>
          <div>{componentsList}</div>
          <div>{componentsList}</div>
          <div>{componentsList}</div>
        </div>
      </div>{' '}
    </>
  );
};
