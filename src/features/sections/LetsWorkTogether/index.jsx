import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { ContactForm } from '@/components/ContactForm';
import { workTogether } from '@/data/contacts';
export const LetsWorkTogether = () => {
  return (
    <ContentWrapper>
      <div className={styles['work-together']}>
        <div className={styles['work-together__content']}>
          <h1 className={styles['work-together__title']}>{workTogether.title}</h1>
          <h3
            className={styles['work-together__desc']}
            dangerouslySetInnerHTML={{ __html: workTogether.desc }}
          ></h3>
        </div>
        <div className={styles['work-together__form']}>
          <ContactForm variant="contacts" />
        </div>
      </div>
    </ContentWrapper>
  );
};
