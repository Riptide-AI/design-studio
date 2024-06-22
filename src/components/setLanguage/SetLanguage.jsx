import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const SetLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { id: 1, src: '/img/lang/FlagEN.png', code: 'en' },
    { id: 2, src: '/img/lang/FlagUA.png', code: 'ua' },
    { id: 3, src: '/img/lang/FlagRU.png', code: 'ru' },
    /*{ id: 3, src: '/img/lang/FlagIN.png', code: 'in' },*/
  ];
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [selectedItem, setSelectedItem] = useState(items.find((item) => item.code == lang));
  const [language, setLanguage] = useState(
    items.filter((element) => element.id !== selectedItem.id),
  );

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const handleItemClick = (item) => {
    setIsOpen(false);
    setSelectedItem(item);
    setLang(item.code);
    setLanguage(items.filter((element) => element.id !== item.id));
  };

  return (
    <div className={styles.dropdown_container} onClick={() => setIsOpen(!isOpen)}>
      <div
        className={
          isOpen
            ? styles.dropdown_header
            : styles.dropdown_header + ' ' + styles.dropdown_header_open
        }
      >
        <Image width={40} height={24} src={selectedItem.src} alt="flag select country" />
      </div>
      <div className={isOpen ? styles.dropdown_list + ' ' + styles.open : styles.dropdown_list}>
        {language.map((item) => (
          <div key={item.id} className={styles.dropdown_item} onClick={() => handleItemClick(item)}>
            <Image
              width={40}
              height={28}
              src={item.src}
              style={{
                borderRadius: '5px',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'white',
              }}
              alt="flag country"
            />
          </div>
        ))}
      </div>
      <div
        className={isOpen ? styles.down_arrow + ' ' + styles.down_arrow_open : styles.down_arrow}
      ></div>
    </div>
  );
};

export default SetLanguage;
