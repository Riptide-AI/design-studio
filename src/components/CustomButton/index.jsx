import styles from './style.module.scss';

export const CustomButton = ({ title, action }) => {
  return (
    <div role="button" className={styles.button}>
      {title}
    </div>
  );
};
