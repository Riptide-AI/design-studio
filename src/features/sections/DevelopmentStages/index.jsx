import { useState, useEffect } from 'react';
import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const DevelopmentStages = ({ data, length = 7 }) => {
  const {t}=useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1440);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);
  return (
    <ContentWrapper>
      <div className={styles.stages}>
        <div className={styles.stages__title}>{t(data.title)}</div>
        <div className={styles.stages__desc}>{t(data.desc)}</div>
        <div
          className={styles.stages__timeline}
          style={
            !isMobile
              ? { gridTemplateColumns: `repeat(${length},1fr)` }
              : { gridTemplateRows: `repeat(${length},1fr)`, gridTemplateColumns: `1fr` }
          }
        >
          {data.list.map((item, i) => (
            <div className={styles.stages__timeline__item} key={`item-${i}`}>
              <div data-count={i + 1} className={styles.stages__timeline__item__order}>
                0
              </div>
              <div className={styles.stages__timeline__item__title}>{t(item.title)}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
