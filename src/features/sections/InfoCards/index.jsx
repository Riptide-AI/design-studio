import styles from './style.module.scss';

export const InfoCards = ({ data }) => {
  return (
    <div className={styles.success}>
      <div className={styles.success__title}>{data.title}</div>
      {data.desc && <div className={styles.success__desc}>{data.desc}</div>}
      <div className={styles.success__list}>
        {data.list.map((item, i) => (
          <div className={styles.success__card} key={`card-${i}`}>
            <div className={styles.success__card__title}>{item.title}</div>
            <div className={styles.success__card__desc}>{item.desc}</div>
            <div className={styles.success__card__note}>{item.note}</div>
            <div className={styles.success__card__order}>{i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
