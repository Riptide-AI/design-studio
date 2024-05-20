import { ContentWrapper } from '@/components/ContentWrapper';
import { CustomButton } from '@/components/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import { DetailsModal } from '@/components/DetailsModal';
import { useEffect, useRef, useState } from 'react';

export const PriceCards = ({ data }) => {
  const cardsRef = useRef('');
  function scrolX() {
    cardsRef.current.scrollBy({
      left: 40,
      top: 0,
      behavior: 'smooth',
    });
 
    setTimeout(() => {
      cardsRef.current.scrollBy({
        left: -40,
        top: 0,
        behavior: 'smooth',
      });
    
    }, 250);
  }

  useEffect(() => {
    setInterval(() => {
      scrolX();
    }, 10000);
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };
  return (
    <ContentWrapper>
      {modalContent && (
        <DetailsModal
          isOpen={isModalOpen}
          handleClose={handleCloseModal}
          modalContent={modalContent}
        />
      )}
      <div className={styles.price_cards}>
        <div className={styles.price_cards__title}>{data.title}</div>
        <div className={styles.price_cards__desc}>{data.desc}</div>
        <div ref={cardsRef} className={styles.price_cards__list}>
          {data.list.map((item, i) => (
            <div
              className={styles.price_cards__item}
              key={`item-${i}`}
              style={{ backgroundColor: item.color }}
            >
              <div className={styles.price_cards__item__size_type}>{item.sizeType}</div>
              <div className={styles.price_cards__item__title}>{item.title}</div>
              <div className={styles.price_cards__item__desc}>{item.desc}</div>
              <div className={styles.price_cards__item__price}>{item.price}</div>
              <Link href={{ pathname: '/contacts', query: { message: item.message } }}>
                <CustomButton stylesClassName={styles.price_cards__item__btn} title={item.order} />
              </Link>
              <CustomButton
                stylesClassName={styles.price_cards__item__btn_alt}
                title={item.details}
                action={() => handleOpenModal(item.modal)}
              />
              <ul className={styles.price_cards__item__checks_list}>
                {item.checks.map((check, i) => (
                  <li key={`check-${i}`} className={styles.price_cards__item__check_item}>
                    <Image src={data.checkIcon} width={30} height={30} alt="" />
                    <span className={styles.price_cards__item__check_item__text}>
                      {check.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
