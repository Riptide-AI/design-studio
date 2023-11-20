import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { contactUs } from '@/data/homepage';
import { ContactForm } from '@/components/ContactForm';
export const ContactUs = () => {
  return (
    <div
      className={styles['contact-us']}
      style={{
        background: `linear-gradient(0deg, rgba(18, 39, 60, 0.82) 0%, rgba(18, 39, 60, 0.82) 100%), url(${contactUs.bgImage}), lightgray 50% / cover no-repeat;
    `,
        backgroundSize: '100% auto',
      }}
    >
      <ContentWrapper>
        <h4 className={styles['contact-us__title']}>{contactUs.title}</h4>
        <ContactForm />
      </ContentWrapper>
    </div>
  );
};
