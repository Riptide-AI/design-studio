import { ContentWrapper } from '@/components/ContentWrapper';

import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect, useState, useCallback } from 'react';

import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from 'react-icons/ri';

export const Workflow = ({ data, lengh = 2950, top = '128px' }) => {
  const { t } = useTranslation();
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(true);
  const cardList = useRef();

  // Update checkBorder to directly access cardList.current.scrollLeft
  const checkBorder = useCallback(() => {
    const currentScrollLeft = cardList.current?.scrollLeft || 0;

    if (currentScrollLeft === 0) {
      setStart(true);
    } else {
      setStart(false);
    }

    if (currentScrollLeft > lengh) {
      setEnd(true); // Assuming you have setEnd state
    } else {
      setEnd(false);
    }
  }, [cardList, lengh]);

  useEffect(() => {
    const element = cardList.current;
    checkBorder();

    const handleScroll = () => {
      checkBorder();
    };

    if (element) {
      element.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, [cardList, checkBorder]);

  async function scrollToNext() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft += 940;
      });
    }
  }

  async function scrollToPrev() {
    if (cardList.current) {
      requestAnimationFrame(() => {
        cardList.current.scrollLeft -= 940;
      });
    }
  }
  return (
    <ContentWrapper>
      <div className={styles.workflow}>
        <div className={styles.workflow__title}>{t(data.title)}</div>
        <div className={styles.workflow__desc}>{t(data.desc)}</div>
        <div ref={cardList} className={styles.workflow__list}>
          {data.list.map((item, i) => (
            <div className={styles.workflow__item} key={`item-${i}`}>
              {/*  <div className={styles.workflow__item__order}>0{i + 1}</div> */}
              <div className={styles.workflow__item__title}>{t(item.title)}</div>
              <div className={styles.workflow__item__desc}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
        <div style={{ top: top }} className={styles.paginationBtn}>
          <div className={styles.prevBtn} onClick={scrollToPrev}>
            <RiArrowLeftDoubleFill
              style={start ? { opacity: '0.25' } : { opacity: '1' }}
              className={styles.link__icon}
            />
          </div>
          <div className={styles.nextBtn} onClick={scrollToNext}>
            <RiArrowRightDoubleFill
              style={end ? { opacity: '0.25' } : { opacity: '1' }}
              className={styles.link__icon}
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
