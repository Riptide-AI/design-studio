import { AboutUsSection } from '@/features/sections/AboutUsSection';
import { HowItWorks } from '@/features/sections/HowItWorks';
import { Reasons } from '@/features/sections/Reasons';
import { OurClients } from '@/features/sections/OurClients';
export default function AboutUs() {
  return (
    <>
      <AboutUsSection />
      <OurClients />
      <HowItWorks hideBtn="true" />
      <Reasons />
    </>
  );
}
