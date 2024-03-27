import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner, reviews } from '@/data/smm';
import { ContactUs } from '@/features/sections/ContactUs';
import { SecurityList } from '@/features/sections/SecurityList';
import { Reviews } from '@/features/sections/Reviews';
import { checks } from '@/data/smm';
import { CheckList } from '@/features/sections/CheckList';
import { SocialSMM } from '@/features/sections/SocialSMM';

export default function Smm() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <SocialSMM/>
      <CheckList data={checks} />
      <SecurityList />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
