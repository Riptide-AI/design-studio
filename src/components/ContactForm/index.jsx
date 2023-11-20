import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import { CustomButton } from '../CustomButton';
import { contactUs } from '@/data/homepage';

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('name')} />
      <input {...register('phone')} />
      <input {...register('email')} />
      <input {...register('desc')} />
      <CustomButton
        title={contactUs.btn}
        type="submit"
        stylesClassName={styles['contact-us__btn']}
      />
    </form>
  );
};
