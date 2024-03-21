import { ContentWrapper } from '@/components/ContentWrapper';
import Image from 'next/image';
import styles from './style.module.scss';

export const PortfolioProjects = ({ currentItem }) => {
  return (
    <ContentWrapper>
      <div className={styles.projects}>
        <div className={styles.projects__image}>
          <Image src={currentItem.projects.image} alt="" fill={true} />
        </div>
        <div className={styles.projects__content}>
        <div className={styles.projects__section_name}>{currentItem.projects.sectionName}</div>
        <div className={styles.projects__title}> {currentItem.projects.title}</div>
        <div className={styles.projects__desc}> {currentItem.projects.desc}</div>
        </div>
      </div>
    </ContentWrapper>
  );
};
