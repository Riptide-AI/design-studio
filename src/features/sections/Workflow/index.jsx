import { ContentWrapper } from '@/components/ContentWrapper';
import { workflow } from '@/data/frontend';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from 'react-icons/ri';

export const Workflow = () => {
  const { t } = useTranslation();
  const cardList = useRef();

  async function scrollToNext() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft += 720;
      });
    }
  }
  async function scrollToPrev() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft -= 720;
      });
    }
  }
  return (
    <ContentWrapper>
      <div className={styles.workflow}>
        <div className={styles.workflow__title}>{t(workflow.title)}</div>
        <div className={styles.workflow__desc}>{t(workflow.desc)}</div>
        <div ref={cardList} className={styles.workflow__list}>
          {workflow.list.map((item, i) => (
            <div className={styles.workflow__item} key={`item-${i}`}>
              {/*  <div className={styles.workflow__item__order}>0{i + 1}</div> */}
              <div className={styles.workflow__item__title}>{t(item.title)}</div>
              <div className={styles.workflow__item__desc}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
        <div className={styles.paginationBtn}>
          <div className={styles.prevBtn} onClick={scrollToPrev}>
            <RiArrowLeftDoubleFill className={styles.link__icon} />
          </div>
          <div className={styles.nextBtn} onClick={scrollToNext}>
            <RiArrowRightDoubleFill className={styles.link__icon} />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
