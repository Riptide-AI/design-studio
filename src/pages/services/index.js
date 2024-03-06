import { Banner } from '@/features/sections/Banner';
import { ContactUs } from '@/features/sections/ContactUs';
import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { Offers } from '@/features/sections/Offers';
import { Technologies } from '@/features/sections/Technologies';
import { heroBanner, offers, reviews } from '@/data/services';
import { Reviews } from '@/features/sections/Reviews';

export default function Services() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <Offers data={offers} />
      <Technologies />
      <Banner />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
