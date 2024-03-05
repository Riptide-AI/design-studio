import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner, reviews } from '@/data/support';
import { ContactUs } from '@/features/sections/ContactUs';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { supportTypes } from '@/data/support';
import { supportPackages } from '@/data/support';
import { SecurityList } from '@/features/sections/SecurityList';
import { Reviews } from '@/features/sections/Reviews';

export default function Support() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <SupportTypes data={supportTypes} />
      <SupportTypes data={supportPackages} />
      <SecurityList />
      <Reviews data= {reviews}/>
      <ContactUs />
    </>
  );
}
