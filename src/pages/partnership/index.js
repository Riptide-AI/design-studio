import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/partnership';
import { ContactUs } from '@/features/sections/ContactUs';
import { BecomePartner } from '@/features/sections/BecomePartner';

export default function Partnership() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <BecomePartner />
      <ContactUs />
    </>
  );
}
