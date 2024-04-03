import Image from 'next/image';
import React, { useRef } from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
import Image8 from '../../../../public/img/Blog/Articles_img/8.png';
import Image7 from '../../../../public/img/Blog/Articles_img/7.png';
import Image6 from '../../../../public/img/Blog/Articles_img/6.png';
import Image5 from '../../../../public/img/Blog/Articles_img/5.png';
import Image4 from '../../../../public/img/Blog/Articles_img/4.png';
import Image3 from '../../../../public/img/Blog/Articles_img/3.png';
import Image2 from '../../../../public/img/Blog/Articles_img/2.png';
import Image1 from '../../../../public/img/Blog/Articles_img/1.png';
import Link from 'next/link';
import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/blog';
export default function page() {
  const router = useRouter();

  const pageImage = useRef(Image1);

  switch (router.query.page) {
    case '1':
      pageImage.current = Image1;
      break;
    case '2':
      pageImage.current = Image2;
      break;
    case '3':
      pageImage.current = Image3;
      break;
    case '4':
      pageImage.current = Image4;
      break;
    case '5':
      pageImage.current = Image5;
      break;
    case '6':
      pageImage.current = Image6;
      break;
    case '7':
      pageImage.current = Image7;
      break;
    case '8':
      pageImage.current = Image8;
      break;
    default:
      break;
  }

  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <div className={styles.Article_page}>
        <div className={styles.wrapper}>
          <div className={styles.article_label}>Вступний заголовок статті</div>
          <p className={styles.sub_label_text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            es
          </p>
          <div className={styles.picture_block}>
            <Image src={pageImage.current} alt="" />
          </div>
          <div className={styles.sub_label}>Вступний підзаголовок статті</div>
          <p className={styles.last_text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            es Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id es Excepteur sint occaecat cupidatat non
          </p>
          <div className={styles.more_articles}>
            <div className={styles.more_articles_label}>Схожі статті</div>
            <div className={styles.more_articles_card_row}>
              <Link href={'/blog/article_page/1'}>
                <div className={styles.card}>
                  <div className={styles.card_image}>
                    <Image src={Image6} alt="" />
                  </div>
                  <div className={styles.card_label}>Назва глави блогу</div>
                  <div className={styles.card_text}>
                    **************** *********** ******* *************** ************...
                  </div>
                  <div className={styles.card_more_info}>
                    <div className={styles.card_views}>50 342</div>
                    <div className={styles.card_time}>20 хв</div>
                  </div>
                </div>
              </Link>
              <Link href={'/blog/article_page/2'}>
                {' '}
                <div className={styles.card}>
                  <div className={styles.card_image}>
                    <Image src={Image5} alt="" />
                  </div>
                  <div className={styles.card_label}>Назва глави блогу</div>
                  <div className={styles.card_text}>
                    **************** *********** ******* *************** ************...
                  </div>
                  <div className={styles.card_more_info}>
                    <div className={styles.card_views}>50 342</div>
                    <div className={styles.card_time}>20 хв</div>
                  </div>
                </div>
              </Link>
              <Link href={'/blog/article_page/3'}>
                {' '}
                <div className={styles.card}>
                  <div className={styles.card_image}>
                    <Image src={Image4} alt="" />
                  </div>
                  <div className={styles.card_label}>Назва глави блогу</div>
                  <div className={styles.card_text}>
                    **************** *********** ******* *************** ************...
                  </div>
                  <div className={styles.card_more_info}>
                    <div className={styles.card_views}>50 342</div>
                    <div className={styles.card_time}>20 хв</div>
                  </div>
                </div>
              </Link>
              <Link href={'/blog/article_page/4'}>
                {' '}
                <div className={styles.card}>
                  <div className={styles.card_image}>
                    <Image src={Image3} alt="" />
                  </div>
                  <div className={styles.card_label}>Назва глави блогу</div>
                  <div className={styles.card_text}>
                    **************** *********** ******* *************** ************...
                  </div>
                  <div className={styles.card_more_info}>
                    <div className={styles.card_views}>50 342</div>
                    <div className={styles.card_time}>20 хв</div>
                  </div>
                </div>
              </Link>
            </div>
            <button className={styles.more_button}>Більше</button>
          </div>
        </div>
      </div>
    </>
  );
}
