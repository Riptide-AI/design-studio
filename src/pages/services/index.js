import { Banner } from '@/features/sections/Banner';
import { ContactUs } from '@/features/sections/ContactUs';
import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { Offers } from '@/features/sections/Offers';
import { Technologies } from '@/features/sections/Technologies';

export default function Services() {
  return (
    <>
      <HeroBannerLight />
      <Offers/>
      <Banner/>
      <Technologies/>
      <ContactUs/>
    </>
  );
}
