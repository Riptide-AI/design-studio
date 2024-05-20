import { AboutUsSection } from '@/features/sections/AboutUsSection';
import { HowItWorks } from '@/features/sections/HowItWorks';
import { Reasons } from '@/features/sections/Reasons';
import { InfiniteSlider } from '@/components/InfiniteSlider';
import { partners } from '@/data/homepage';
export default function AboutUs() {
  return (
    <>
      <AboutUsSection > 
        <InfiniteSlider list={partners} opacityCount={0.5} /> </AboutUsSection>
     
      <HowItWorks hideBtn="true" />
      <Reasons />
    </>
  );
}
