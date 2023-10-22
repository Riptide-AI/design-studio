import styles from './style.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export const NavLinks = ({ links }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <ul className={styles.links}>
      {links.map((item) => (
        <li
          className={`${styles['link-item']} ${
            item.link === router.pathname ? styles['link-item--active'] : ''
          }`}
          key={item.title}
        >
          <Link href={item.link}>{t(`navigation.${item.title}`)}</Link>
        </li>
      ))}
    </ul>
  );
};
