import styles from './style.module.scss';

export const ContentWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
