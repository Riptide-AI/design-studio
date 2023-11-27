import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { footer } from '@/data/footer';
import Link from 'next/link';

export const Footer = () => {
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
              <p className={styles.footer__desc}>{footer.desc}</p>
              <a href={`mailto:${footer.email}`} className={styles.footer__contacts}>
                {footer.email}
              </a>
              <a href={`tel:${footer.phone}`} className={styles.footer__contacts}>
                {footer.phoneDisplay}
              </a>
            </div>
            <div className={styles.footer__nav}>
              <ul className={styles.footer__links}>
                {footer.links.map((item) => (
                  <li className={styles['footer__link-item']} key={item.title}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.footer__subLinks}>
                {footer.subLinks.map((group) => (
                  <li key={group.title}>
                    <div className={styles['footer__link-item']}>{group.title}</div>
                    <ul className={styles.footer__links}>
                      {group.list.map((subLink) => (
                        <li className={styles['footer__subLink-item']} key={subLink.title}>
                          <Link href={subLink.link}>{subLink.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footer__socials}>
            <a href={footer.telegramLink} target="_blink">
              <Image
                src="/img/icons/telegram.svg"
                alt="logo"
                width={28}
                height={28}
                placeholder="empty"
              />
            </a>
            <a href={footer.instagramLink} target="_blink">
              <Image
                src="/img/icons/instagram.svg"
                alt="logo"
                width={28}
                height={28}
                placeholder="empty"
              />
            </a>
          </div>
          <div className={styles.footer__rights}>{footer.rights}</div>
        </div>
      </ContentWrapper>
    </div>
  );
};
