import styles from './style.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(3);
  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };
  const { t } = useTranslation();

  return (
    <div className={styles.tabs_container}>
      {items.map((tab, index) => (
        <div
          key={index}
          className={clsx(styles.tab, { [styles.active]: activeTab === index })}
          style={{ borderWidth: activeTab === index + 1 ? '0px' : '1px' }}
        >
          <div className={styles.tab_header} onClick={() => toggleTab(index)}>
            {t(tab.tabName)}
            <div className={styles.tab__button}>
              <Link href={tab.link}>
                <Image
                  src="/img/icons/arrow-circle.svg"
                  fill={true}
                  className={clsx(styles.link__icon, { [styles.active]: activeTab === index })}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className={clsx(styles.tab_content, { [styles.open]: activeTab === index })}>
            <div className={styles.tab_content__text}>{t(tab.content)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
