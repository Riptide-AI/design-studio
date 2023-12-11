import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/frontend';
import { BusinessShowCase } from '@/features/sections/BusinessShowCase';
import { OurWorks } from '@/features/sections/OurWorks';
import { ContactUs } from '@/features/sections/ContactUs';
import { Workflow } from '@/features/sections/Workflow';
import { InfoCards } from '@/features/sections/InfoCards';
import { infoCards } from '@/data/frontend';

export default function Frontend() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <Workflow />
      <BusinessShowCase />
      <InfoCards data={infoCards} />
      <OurWorks />
      <ContactUs />
    </>
  );
}
