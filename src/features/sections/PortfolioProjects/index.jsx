import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const PortfolioProjects = ({ currentItem }) => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <div className={styles.projects}>
        <div className={styles.projects__image}>
          <Image src={currentItem.projects.image} alt="" fill={true} />
        </div>
        <div className={styles.projects__content}>
          <div className={styles.projects__section_name}>{t(currentItem.projects.sectionName)}</div>
          <div className={styles.projects__title}> {t(currentItem.projects.title)}</div>
          <div className={styles.projects__desc}> {t(currentItem.projects.desc)}</div>
        </div>
      </div>
    </ContentWrapper>
  );
};
