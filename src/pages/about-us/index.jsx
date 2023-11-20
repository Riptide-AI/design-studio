import { AboutUsSection } from '@/features/sections/AboutUsSection';
import { HowItWorks } from '@/features/sections/HowItWorks';
import styles from './style.module.scss';
import { Reasons } from '@/features/sections/Reasons';
import { OurClients } from '@/features/sections/OurClients';
import { Technologies } from '@/features/sections/Technologies';
export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
          <AboutUsSection />
          <OurClients/>
          <HowItWorks hideBtn="true"/>
          <Reasons/>
    </div>
  );
}
