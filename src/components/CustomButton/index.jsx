import styles from './style.module.scss';

export const CustomButton = ({ title, action, stylesClassName }) => {
  return (
    <div role="button" className={`${stylesClassName} ${styles.button}`}>
      {title}
    </div>
  );
};
