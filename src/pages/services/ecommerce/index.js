import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import {
  heroBanner,
  reviews,
  offers,
  priceCards,
  workwithus,
  offers_mob,
  priceCards_mob,
} from '@/data/ecommerce';
import { ContactUs } from '@/features/sections/ContactUs';
import { Offers } from '@/features/sections/Offers';
import { Reviews } from '@/features/sections/Reviews';
import { WorkWithUs } from '@/features/sections/WorkWithUs';
import { PriceCards } from '@/features/sections/PriceCards';
import { SecurityList } from '@/features/sections/SecurityList';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function Ecommerce() {
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
      <WorkWithUs data={workwithus} />
      <PriceCards
        data={windowWidth < 1440 && i18n.language == 'en' ? priceCards_mob : priceCards}
      />
      <Offers data={windowWidth > 1440 ? offers : offers_mob} arrow={false} />
      <SecurityList />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
