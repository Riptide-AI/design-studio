import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '@/components/NavLinks';
import { navigation } from '@/data/navigation';
import { LocaleSwitch } from '@/components/LocaleSwitch';
import { CustomButton } from '@/components/CustomButton';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.navbar}>
      <div className={styles['nav-wrapper']}>
        <Link href="/home">
          <div className={styles.logo}>
            <Image
              src="/img/logo.png"
              alt="logo"
              width={168}
              height={38}
              quality="100"
              placeholder="empty"
            />
          </div>
        </Link>
        <NavLinks links={navigation} />
        <div className={styles.navbar__right}>
          <LocaleSwitch />
          <CustomButton title={t('buttons.contactUs')} stylesClassName={styles.navbar__btn} />
        </div>
      </div>
    </header>
  );
};
