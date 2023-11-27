import { Banner } from '@/features/sections/Banner';
import { ContactUs } from '@/features/sections/ContactUs';
import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { Offers } from '@/features/sections/Offers';
import { Technologies } from '@/features/sections/Technologies';
import { heroBanner } from '@/data/services';
export default function Services() {
	return (
		<>
			<HeroBannerLight data={heroBanner} />
			<Offers />
			<Banner />
			<Technologies />
			<ContactUs />
		</>
	);
}