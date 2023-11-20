import styles from './style.module.scss';

export const CustomButton = ({ title, action, type, stylesClassName }) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`${stylesClassName} ${styles.button}`}
      onClick={action}
    >
      {title}
    </button>
  );
};
