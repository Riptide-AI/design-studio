import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { factors_mob, heroBanner } from '@/data/seo';
import { ContactUs } from '@/features/sections/ContactUs';
import { InfoCards } from '@/features/sections/InfoCards';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { approach, factors } from '@/data/seo';
import { SeoSolution } from '@/features/sections/SeoSolution';
import { PriceList } from '@/features/sections/PriceList';
import { pricelist, pricelist_mob } from '@/data/seo';
import { reviews } from '@/data/seo';
import { Reviews } from '@/features/sections/Reviews';
import { useEffect, useState } from 'react';

export default function Seo() {
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
      <SupportTypes data={approach} />
      <SeoSolution />
      <PriceList data={windowWidth > 1440 ? pricelist : pricelist_mob} />
      <InfoCards data={windowWidth>1440?factors:factors_mob} padding={0} />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
