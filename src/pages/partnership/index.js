import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/partnership';
import { ContactUs } from '@/features/sections/ContactUs';
import { BecomePartner } from '@/features/sections/BecomePartner';
import { InfoBlock } from '@/features/sections/InfoBlock';
import { WhyWorkWithUs } from '@/features/sections/WhyWorkWithUs';
import { WhatYouGet } from '@/features/sections/WhatYouGet';

export default function Partnership() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <InfoBlock />
      <BecomePartner />
      <WhyWorkWithUs />
      <WhatYouGet />
      <ContactUs />
    </>
  );
}
