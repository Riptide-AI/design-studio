import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Footer } from '@/features/sections/Footer';
import { LocaleSwitch } from '../LocaleSwitch';
export const BurgerMenu = ({ links, isOpen, handleToggle }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <div className={styles.burger_menu__btn} role="button" onClick={handleToggle}>
        {isOpen ? (
          <Image src={'/img/icons/close-btn.svg'} height={28} width={28} alt="" />
        ) : (
          <Image src={'/img/icons/burger-menu.svg'} height={28} width={28} alt="" />
        )}
      </div>

      {isOpen && (
        <div className={styles.burger_menu__wrapper}>
          <ul className={styles.burger_menu__links}>
            {links.map((item) => (
              <li
                className={`${styles['link-item']} ${
                  item.link === router.pathname ? styles['link-item--active'] : ''
                }`}
                key={item.title}
              >
                <Image src={item.icon} width={20} height={20} alt="" />
                <Link href={item.link}>{t(`navigation.${item.title}`)}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.burger_menu__switch}>
            <LocaleSwitch />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};
