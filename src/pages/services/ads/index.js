import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { adsDetails, adsExplanation, checks, heroBanner, ppc } from '@/data/ads';
import { ContactUs } from '@/features/sections/ContactUs';
import { InfoCards } from '@/features/sections/InfoCards';
import { PriceList } from '@/features/sections/PriceList';
import { pricelist } from '@/data/ads';
import { Explanation } from '@/features/sections/Explanation';
import { CheckList } from '@/features/sections/CheckList';
import { Reviews } from '@/features/sections/Reviews';
import { reviews } from '@/data/ads';

export default function Ads() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <Explanation data={adsExplanation} />
      <CheckList data={checks} />
      <PriceList data={pricelist} />
      <InfoCards data={ppc} />
   {/*    <InfoCards data={adsDetails} /> */}
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
