import styles from './style.module.scss';
export const StatsCard = ({ card, id }) => {
  const formatIndex = id < 10 ? `0${id + 1}` : `${id + 1}`;
  return (
    <div className={styles.card}>
      <div className={styles.card__order}>{formatIndex}</div>
      <div className={styles.card__desc}>{card.desc}</div>
      <div className={styles.card__stats}>{card.stats}</div>
      <div className={styles.card__stats_name}>{card.statsName}</div>
    </div>
  );
};
