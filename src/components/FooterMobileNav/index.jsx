import styles from './style.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const FooterMobileNav = ({ footer }) => {
  const {t}=useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const footerLinks = footer.links;
  const footerSubLinks = footer.subLinks;
  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };
  return (
    <div className={styles.tabs_container}>
      <div className={clsx(styles.tab, { [styles.active]: activeTab === 0 })}>
        <div className={styles.tab_header} onClick={() => toggleTab(0)}>
          {t('footer.navigate')}
          <div className={clsx(styles.tab__button, { [styles.icon_open]: activeTab === 0 })}>
            <Image src="/img/icons/cheveron-up.png" width={20} height={20} alt="" />
          </div>
        </div>
        <div className={clsx(styles.tab_content, { [styles.open]: activeTab === 0 })}>
          <div className={styles.tab_content__text}>
            {footerLinks.map((item) => (
              <Link href={item.link} key={item.title}>
                {t(item.title)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {footerSubLinks.map((tab, index) => (
        <div
          className={clsx(styles.tab, { [styles.active]: activeTab === index + 1 })}
          key={tab.title}
        >
          <div className={styles.tab_header} onClick={() => toggleTab(index + 1)}>
            {t(tab.title)}
            <div
              className={clsx(styles.tab__button, { [styles.icon_open]: activeTab === index + 1 })}
            >
              <Image src="/img/icons/cheveron-up.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={clsx(styles.tab_content, { [styles.open]: activeTab === index + 1 })}>
            <div className={styles.tab_content__text}>
              {tab.list.map((item,i) => (
                <Link href={item.link} key={i}>
                  {t(item.title)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
