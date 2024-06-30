import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const StatsCard = ({ card, id }) => {
  const formatIndex = id < 10 ? `0${id + 1}` : `${id + 1}`;
  const mobformatIndex = id < 10 ? `0${Math.abs(id - 3)}` : `${Math.abs(id - 3)}`;
  const { t } = useTranslation();
  const [windowWidth, setwindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth);
      const updateWidth = () => setwindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);
  return (
    <div className={styles.card}>
      {windowWidth > 1440 ? (
        <>
          <div className={styles.card__order}>{formatIndex}</div>
          <div className={styles.card__desc}>
            {t(windowWidth > 1440 ? card.desc : card.mobDesc)}
          </div>
          <div className={styles.card__stats}>
            {windowWidth > 1440 ? card.stats : card.mobStats}
          </div>
          <div className={styles.card__stats_name}>
            {windowWidth > 1440 ? t(card.statsName) : t(card.mobStatsName)}
          </div>
        </>
      ) : (
        <>
          <div className={styles.rounds}>
            {card.images.map((src, i) => (
              <Image key={src + i + Math.random()} src={src} width={22} height={22} alt="" />
            ))}
          </div>
          <div className={styles.card__stats}>{t(card.mobStats)}</div>
          <div className={styles.card__stats_name}>{t(card.mobStatsName)}</div>
          <div className={styles.card__order}>{mobformatIndex}</div>
          <div className={styles.card__desc}>{t(card.mobDesc)}</div>
        </>
      )}
    </div>
  );
};
