import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner, infoCards_mob, /* workflow */ } from '@/data/frontend';
import { BusinessShowCase } from '@/features/sections/BusinessShowCase';
import { OurWorks } from '@/features/sections/OurWorks';
import { ContactUs } from '@/features/sections/ContactUs';
/* import { Workflow } from '@/features/sections/Workflow'; */
import { InfoCards } from '@/features/sections/InfoCards';
import { WeCreate } from '@/features/sections/WeCreate';
import { infoCards } from '@/data/frontend';
import { useEffect, useState } from 'react';

export default function Frontend() {
  const [windowWidth, setwindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth);
      const updateWidth = () => setwindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <WeCreate />
      <BusinessShowCase left={true} />
      {/* {windowWidth > 1440 ? <Workflow data={workflow} /> : ''} */}
      <InfoCards data={windowWidth > 1440 ? infoCards : infoCards_mob} />
      <OurWorks />
      <ContactUs />
    </>
  );
}
