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

import { DevelopmentStages } from '@/features/sections/DevelopmentStages';
import { Workflow } from '@/features/sections/Workflow';



export default function Landing() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <WorkWithUs data={workwithus} />
      <PriceCards data={priceCards} />
 
      <Workflow data={achieveResults} lengh={1820} top={'85px'} />
      <DevelopmentStages data={stages} length={9} />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
