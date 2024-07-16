import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '@/components/NavLinks';
import { navigation } from '@/data/navigation';
import { CustomButton } from '@/components/CustomButton';
import { BurgerMenu } from '@/components/BurgerMenu';
import { useTranslation } from 'react-i18next';
import { scrollTo } from '@/scripts/scrollTo';
import { usePathname } from 'next/navigation';
import SetLanguage from '@/components/setLanguage/SetLanguage';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const handleToggle = () => {
    isMenuOpen
      ? document.body.classList.remove('overflow-hidden')
      : document.body.classList.add('overflow-hidden');
    setIsMenuOpen(!isMenuOpen);
  };
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
    <header className={`${styles.navbar} ${isMenuOpen ? styles['navbar--open'] : ''}`}>
      <div className={styles['nav-wrapper']}>
        <Link href="/home">
          <div className={styles.logo}>
            <Image src="/img/logo.png" alt="logo" width={125} height={30} quality="100" placeholder="empty" />
          </div>
        </Link>
        {!isMobile && <NavLinks links={navigation} />}
        <div className={styles.navbar__right}>
          {!isMobile && <SetLanguage />}
          {!isMobile &&
            (path == '/contacts' || path == '/blog' || path == '/about-us' ? (
              <Link href={'/contacts'}>
                <CustomButton
                  title={t('buttons.contactUs')}
                  stylesClassName={styles.navbar__btn}
                  /*  action={() => scrollTo('contact-form')} */
                />
              </Link>
            ) : (
              <CustomButton
                title={t('buttons.contactUs')}
                stylesClassName={styles.navbar__btn}
                action={() => scrollTo('contact-form')}
              />
            ))}
          {isMobile && (
            <BurgerMenu
              links={navigation}
              isOpen={isMenuOpen}
              handleToggle={handleToggle}
              setOpen={setIsMenuOpen}
            />
          )}
        </div>
      </div>
    </header>
  );
};
