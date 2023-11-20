import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton';
import { contactUs } from '@/data/homepage';

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__personal}>
        <input {...register('name')} className={styles.form__input} placeholder={contactUs.name}/>
        <input {...register('phone')}  className={styles.form__input} placeholder={contactUs.phone}/>
      </div>
      <input {...register('email')}className={styles.form__input} placeholder={contactUs.email}/>
      <label htmlFor="desc" className={styles.form__label}>{contactUs.desc} </label>
      <input {...register('desc')} id={'desc'} className={styles.form__input} placeholder={contactUs.descPlaceholder}/>
      <CustomButton title={contactUs.btn} type="submit" stylesClassName={styles.form__btn} />
    </form>
  );
};
