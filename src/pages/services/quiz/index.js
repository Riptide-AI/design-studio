import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import {
  heroBanner,
  reviews,
  offers,
  priceCards,
  achieveResults,
  workwithus,
  stages,
} from '@/data/quiz';
import { ContactUs } from '@/features/sections/ContactUs';
import { Offers } from '@/features/sections/Offers';
import { Reviews } from '@/features/sections/Reviews';
import { WorkWithUs } from '@/features/sections/WorkWithUs';
import { PriceCards } from '@/features/sections/PriceCards';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { DevelopmentStages } from '@/features/sections/DevelopmentStages';

export default function Quiz() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <WorkWithUs data={workwithus} />
      <PriceCards data={priceCards} />
      <Offers data={offers} arrow={false} />
      <DevelopmentStages data={stages} />
      <SupportTypes data={achieveResults} alt cols={2} startsWith="0" />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
