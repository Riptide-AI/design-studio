import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner, reviews, offers, priceCards, workwithus, achieveResults } from '@/data/store';
import { ContactUs } from '@/features/sections/ContactUs';
import { Offers } from '@/features/sections/Offers';
import { Reviews } from '@/features/sections/Reviews';
import { WorkWithUs } from '@/features/sections/WorkWithUs';
import { PriceCards } from '@/features/sections/PriceCards';
import { SecurityList } from '@/features/sections/SecurityList';
import { SupportTypes } from '@/features/sections/SupportTypes';

export default function Store() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <WorkWithUs data={workwithus} />
      <PriceCards data={priceCards} />
      <Offers data={offers} arrow={false} />
      <SupportTypes data={achieveResults} alt cols={2} startsWith="0" />
      <SecurityList />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
