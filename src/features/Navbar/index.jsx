import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { NavLinks } from '@/components/NavLinks';
import { navigation } from '@/data/navigation';

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <ContentWrapper>
        <div className={styles['nav-wrapper']}>
          <div className={styles.logo}>
            <Image src="/img/logo.png" alt="logo" layout="fill" objectFit="cover" />
          </div>
          <NavLinks links={navigation} />
        </div>
      </ContentWrapper>
    </header>
  );
};
