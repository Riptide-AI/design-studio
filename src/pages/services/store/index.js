import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import {
  heroBanner,
  reviews,
  offers,
  priceCards,
  workwithus,
  achieveResults,
  workwithus_mob,
  priceCards_mob,
} from '@/data/store';
import { ContactUs } from '@/features/sections/ContactUs';
import { Offers } from '@/features/sections/Offers';
import { Reviews } from '@/features/sections/Reviews';
import { WorkWithUs } from '@/features/sections/WorkWithUs';
import { PriceCards } from '@/features/sections/PriceCards';
import { SecurityList } from '@/features/sections/SecurityList';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Store() {
  const [windowWidth, setwindowWidth] = useState();
  const { i18n } = useTranslation();

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
      <WorkWithUs
        data={windowWidth < 1440 && i18n.language == 'en' ? workwithus_mob : workwithus}
      />
      <PriceCards
        data={windowWidth < 1440 && i18n.language == 'en' ? priceCards_mob : priceCards}
      />
      <Offers data={offers} arrow={false} />
      <SupportTypes data={achieveResults} alt cols={2} startsWith="0" />
      <SecurityList />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
