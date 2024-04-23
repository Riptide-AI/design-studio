import Image from 'next/image';
import React from 'react';
import styles from './style.module.scss';
import { footer } from '@/data/footer';

export default function FoterSocials({ opacityCount }) {
  return (
    <div className={styles.socials} style={{ opacity: opacityCount }}>
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
      <a href={footer.linkedInmLink} target="_blink">
        <Image
          src="/img/icons/linkedIn.svg"
          alt="logo"
          width={28}
          height={28}
          placeholder="empty"
        />
      </a>
    </div>
  );
}
