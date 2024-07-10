import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Card({ card, i }) {
  const { t } = useTranslation();
  const [mouseOnCard, setMouseOnCard] = useState();
  const [mouseOnLogoCard, setMouseOnLogoCard] = useState();

  function mouseOn(them) {
    if (them === 'Business cards') {
      setMouseOnCard(true);
    }
    if (them === 'Logos') {
      setMouseOnLogoCard(true);
    }
  }
  function mouseOut(them) {
    if (them === 'Business cards') {
      setMouseOnCard(false);
    }
    if (them === 'Logos') {
      setMouseOnLogoCard(false);
    }
  }
  return card.category == 'Business cards' || card.category == 'Logos' ? (
    <div
      onMouseEnter={() => mouseOn(card.category)}
      onMouseLeave={() => mouseOut(card.category)}
      className={styles.pagination__list__item}
    >
      <div data-card="BusinesdCard" className={styles.pagination__list__item__image}>
        <Image
          style={mouseOnLogoCard && { transform: 'scale(1.15)' }}
          src={card.image}
          alt={card.alt}
          fill={true}
          className={!mouseOnCard ? styles.base_image : styles.base_image + ' ' + styles.rotate}
        />
        {card.category == 'Business cards' && (
          <div
            className={
              !mouseOnCard ? styles.backImage : styles.backImage + ' ' + styles.backImage__vis
            }
          >
            <Image
              src={card.backImage}
              alt={card.alt + ' ' + i}
              fill={true}
              data-card="BusinesdCard"
            />
          </div>
        )}
      </div>
      <div className={styles.pagination__list__item__title}>{t(card.title)}</div>
      <div className={styles.pagination__list__item__desc}>{t(card.theme)}</div>
    </div>
  ) : (
    <div
      onMouseEnter={() => mouseOn(card.category)}
      onMouseLeave={() => mouseOut(card.category)}
      className={styles.pagination__list__item}
    >
      
      <Link
        href={  card.category == 'Web design'?
         card.link :
          card.category == 'Business cards' || card.category == 'Logos'
            ? `/portfolio/`
            : `/portfolio/${card.id}`
        }
      >
        <div data-card="BusinesdCard" className={styles.pagination__list__item__image}>
          <Image
            style={mouseOnLogoCard && { transform: 'scale(1.15)' }}
            src={card.image}
            alt={card.alt}
            fill={true}
            className={!mouseOnCard ? styles.base_image : styles.base_image + ' ' + styles.rotate}
          />
          {card.category == 'Business cards' && (
            <div
              className={
                !mouseOnCard ? styles.backImage : styles.backImage + ' ' + styles.backImage__vis
              }
            >
              <Image
                src={card.backImage}
                alt={card.alt + ' ' + i}
                fill={true}
                data-card="BusinesdCard"
              />
            </div>
          )}
        </div>
        <div className={styles.pagination__list__item__title}>{t(card.title)}</div>
        <div className={styles.pagination__list__item__desc}>{t(card.theme)}</div>
      </Link>
    </div>
  );
}
