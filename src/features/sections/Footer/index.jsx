import { ContentWrapper } from '@/components/ContentWrapper';
import { useState, useEffect } from 'react';
import { FooterMobileNav } from '@/components/FooterMobileNav';
import styles from './style.module.scss';
import Image from 'next/image';
import { footer } from '@/data/footer';
import Link from 'next/link';
import FoterSocials from '@/components/FooterSocials';
import { useTranslation } from 'react-i18next';



export const Footer = () => {
  const {t}=useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1440);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);
  return (
    <div className={styles.footer__bg}>
      <ContentWrapper>
        <div className={styles.footer}>
          <div className={styles.footer__content}>
            <div className={styles.footer__info}>
              <div className={styles.footer__logo}>
                <Image
                  src="/img/footer-logo.png"
                  alt="logo"
                  width={168}
                  height={38}
                  quality="100"
                />
              </div>
              <p className={styles.footer__desc}>{t(footer.desc)}</p>
              <a href={`mailto:${footer.email}`} className={styles.footer__contacts}>
                {footer.email}
              </a>
              <a href={`tel:${footer.phone}`} className={styles.footer__contacts}>
                {footer.phoneDisplay}
              </a>
            </div>
            {isMobile ? (
              <FooterMobileNav footer={footer} />
            ) : (
              <div className={styles.footer__nav}>
                <ul className={styles.footer__links}>
                  {footer.links.map((item) => (
                    <li className={styles['footer__link-item']} key={item.title}>
                      <Link href={item.link}>{t(item.title)}</Link>
                    </li>
                  ))}
                </ul>
                <ul className={styles.footer__subLinks}>
                  {footer.subLinks.map((group) => (
                    <li key={group.title}>
                      <div className={styles['footer__link-item']}>{t(group.title)}</div>
                      <ul className={styles.footer__links}>
                        {group.list.map((subLink) => (
                          <li className={styles['footer__subLink-item']} key={subLink.title}>
                            <Link href={subLink.link}>{t(subLink.title)}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <FoterSocials opacityCount ={1}/>
          <div className={styles.footer__rights}>{t(footer.rights)}</div>
        </div>
      </ContentWrapper>
    </div>
  );
};

