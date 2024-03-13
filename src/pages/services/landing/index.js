import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import {
  heroBanner,
  reviews,
  priceCards,
  achieveResults,
  workwithus,
  stages,
} from '@/data/landing';
import { ContactUs } from '@/features/sections/ContactUs';
import { Reviews } from '@/features/sections/Reviews';
import { WorkWithUs } from '@/features/sections/WorkWithUs';
import { PriceCards } from '@/features/sections/PriceCards';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { DevelopmentStages } from '@/features/sections/DevelopmentStages';

export default function Landing() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <WorkWithUs data={workwithus} />
      <PriceCards data={priceCards} />
      <SupportTypes data={achieveResults} />
      <DevelopmentStages data={stages} length={9} />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
