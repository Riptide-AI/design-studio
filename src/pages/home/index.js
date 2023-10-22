import { LocaleSwitch } from '@/components/LocaleSwitch';
import { AboutUsSection } from '@/features/AboutUsSection';
import { HeroBanner } from '@/features/HeroBanner';
import { ServicesTabs } from '@/features/ServicesTabs';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesTabs />
      <AboutUsSection />
    </>
  );
}
