import { AboutUsSection } from '@/features/sections/AboutUsSection';
import { BusinessShowCase } from '@/features/sections/BusinessShowCase';
import { HeroBanner } from '@/features/sections/HeroBanner';
import { HowItWorks } from '@/features/sections/HowItWorks';
import { ServicesTabs } from '@/features/sections/ServicesTabs';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesTabs />
      <AboutUsSection />
      <BusinessShowCase />
      <HowItWorks />
    </>
  );
}
