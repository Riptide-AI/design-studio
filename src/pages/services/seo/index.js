import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/seo';
import { ContactUs } from '@/features/sections/ContactUs';
import { InfoCards } from '@/features/sections/InfoCards';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { approach, factors } from '@/data/seo';
// import { SeoSolution } from '@/features/sections/SeoSolution';
import { PriceList } from '@/features/sections/PriceList';
import { pricelist } from '@/data/seo';
import { reviews } from '@/data/seo';
import { Reviews } from '@/features/sections/Reviews';

export default function Seo() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <SupportTypes data={approach} />
      {/* <SeoSolution /> */}
      <PriceList data={pricelist} />
      <InfoCards data={factors} />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
