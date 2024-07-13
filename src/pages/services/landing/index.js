import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import {
  heroBanner,
  reviews,
  priceCards,
  achieveResults,
  workwithus,
  priceCards_mob,
  stages,
  stages_mob,
} from '@/data/landing';
import { ContactUs } from '@/features/sections/ContactUs';
import { Reviews } from '@/features/sections/Reviews';
import { WorkWithUs } from '@/features/sections/WorkWithUs';
import { PriceCards } from '@/features/sections/PriceCards';

import { DevelopmentStages } from '@/features/sections/DevelopmentStages';
import { Workflow } from '@/features/sections/Workflow';
import { useEffect, useState } from 'react';

export default function Landing() {
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
      {windowWidth > 1440 && <WorkWithUs data={workwithus} />}

      <PriceCards data={windowWidth < 1440 ? priceCards_mob : priceCards} />
      {windowWidth > 1440 && <Workflow data={achieveResults} lengh={1820} top={'85px'} />}
      <DevelopmentStages data={windowWidth > 1440 ? stages : stages_mob} length={9} />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
