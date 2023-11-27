import styles from './style.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
export const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={styles.tabs_container}>
      {items.map((tab, index) => (
        <div
          key={index}
          className={clsx(styles.tab, { [styles.active]: activeTab === index })}
          style={{ borderWidth: activeTab === index + 1 ? '0px' : '1px' }}
        >
          <div className={styles.tab_header} onClick={() => toggleTab(index)}>
            {tab.tabName}
            <Image
              src="img/icons/arrow-circle.svg"
              height={40}
              width={40}
              className={clsx(styles.link__icon, { [styles.active]: activeTab === index })}
              alt=""
            />
          </div>
          <div className={clsx(styles.tab_content, { [styles.open]: activeTab === index })}>
            <div className={styles.tab_content__text}>{tab.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
