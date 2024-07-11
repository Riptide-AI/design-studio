import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { checks_mob,checks, heroBanner, reviews } from '@/data/smm';
import { ContactUs } from '@/features/sections/ContactUs';
import { SecurityList } from '@/features/sections/SecurityList';
import { Reviews } from '@/features/sections/Reviews';
import { CheckList } from '@/features/sections/CheckList';
import { SocialSMM } from '@/features/sections/SocialSMM';
import { useEffect, useState } from 'react';

export default function Smm() {
  const [windowWidth, setwindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth);
      const updateWidth = () => setwindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <SocialSMM />
      <CheckList data={windowWidth>1440?checks:checks_mob} />
      <SecurityList />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
