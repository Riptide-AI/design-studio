import { Banner } from '@/features/sections/Banner';
import { ContactUs } from '@/features/sections/ContactUs';
import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { Offers } from '@/features/sections/Offers';
import { Technologies } from '@/features/sections/Technologies';
import { heroBanner, offers, offers_mob, reviews } from '@/data/services';
import { Reviews } from '@/features/sections/Reviews';
import { useEffect, useState } from 'react';

export default function Services() {
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
      <Offers data={windowWidth>1440?offers: offers_mob} />
      <Technologies />
      <Banner />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
