import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/portfolio';
import { ContactUs } from '@/features/sections/ContactUs';
import { PortfolioPagination } from '@/features/sections/PortfolioPagination';

export default function Portfolio() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <PortfolioPagination />
      <ContactUs />
    </>
  );
}
