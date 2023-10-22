import styles from './style.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const NavLinks = ({ links }) => {
  const { t } = useTranslation();

  return (
    <ul className={styles.links}>
      {links.map((item) => (
        <li className={styles['link-item']}>
          <Link href={item.link}>{t(`${item.title}`)}</Link>
        </li>
      ))}
    </ul>
  );
};
