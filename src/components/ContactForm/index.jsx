import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton';
import { contactUs } from '@/data/homepage';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const ContactForm = ({ variant }) => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    const message = router.query.message || '';
    setValue('desc', message);
  }, [router.query.message, setValue]);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__personal}>
        <input {...register('name')} className={styles.form__input} placeholder={t(contactUs.name)} />
        <input
          {...register('phone')}
          className={styles.form__input}
          placeholder={t(contactUs.phone)}
        />
      </div>
      <input {...register('email')} className={styles.form__input} placeholder={t(contactUs.email)} />
      <label htmlFor="desc" className={variant ? styles.form__label__alt : styles.form__label}>
        {t(contactUs.desc)}
      </label>
      <textarea
        {...register('desc')}
        id={'desc'}
        className={styles.form__textarea}
        placeholder={t(contactUs.descPlaceholder)}
      />
      <CustomButton
        title={t(contactUs.btn)}
        type="submit"
        stylesClassName={variant ? styles[`${variant}-btn`] : styles.form__btn}
      />
    </form>
  );
};
