import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import {
  heroBanner,
  reviews,
  offers,
  priceCards,
  achieveResults,
  workwithus,priceCards_mob,
  stages,
} from '@/data/quiz';
import { ContactUs } from '@/features/sections/ContactUs';
import { Offers } from '@/features/sections/Offers';
import { Reviews } from '@/features/sections/Reviews';
import { WorkWithUs } from '@/features/sections/WorkWithUs';
import { PriceCards } from '@/features/sections/PriceCards';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { DevelopmentStages } from '@/features/sections/DevelopmentStages';
import { useEffect, useState } from 'react';

export default function Quiz() {
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
      <WorkWithUs data={workwithus} />
      <PriceCards data={windowWidth < 1440 ? priceCards_mob : priceCards} />
      <Offers data={offers} arrow={false} />
      <DevelopmentStages data={stages} />
      <SupportTypes data={achieveResults} alt cols={2} startsWith="0" />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
