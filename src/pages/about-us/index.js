import { AboutUsSection } from '@/features/sections/AboutUsSection';
import { HowItWorks } from '@/features/sections/HowItWorks';
import { Reasons } from '@/features/sections/Reasons';
import { InfiniteSlider } from '@/components/InfiniteSlider';
import { partners } from '@/data/homepage';
export default function AboutUs() {
  return (
    <>
      <AboutUsSection isBtn={true} > 
        <InfiniteSlider list={partners} opacityCount={1} isTitle={true} /> </AboutUsSection>
     
      <HowItWorks hideBtn="true" />
      <Reasons />
    </>
  );
}
