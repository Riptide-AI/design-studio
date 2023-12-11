import styles from './style.module.scss';

export const ContentWrapper = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
