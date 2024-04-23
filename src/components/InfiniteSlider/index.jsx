import styles from './style.module.scss';
import Image from 'next/image';
import { useMemo } from 'react';

export const InfiniteSlider = ({ list, opacityCount }) => {
  const componentsList = useMemo(() => {
    return list.map((item, i) => (
      <div key={`image-${i}`} className={styles.logo}>
        <Image src={item.src} alt={item.alt} fill="true" />
      </div>
    ));
  }, [list]);
  return (
    <div className={styles.infiniteSlider} style={{ opacity: opacityCount }}>
      <div>
        <div>{componentsList}</div>
        <div>{componentsList}</div>
        <div>{componentsList}</div>
      </div>
    </div>
  );
};
