import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/frontend';
import { BusinessShowCase } from '@/features/sections/BusinessShowCase';
import { OurWorks } from '@/features/sections/OurWorks';
import { ContactUs } from '@/features/sections/ContactUs';
import { Workflow } from '@/features/sections/Workflow';
import { SuccessBanner } from '@/features/sections/SuccessBanner';

export default function Frontend() {
	return (
		<>
			<HeroBannerLight data={heroBanner} />
			<Workflow />
			<BusinessShowCase />
			<SuccessBanner />
			<OurWorks />
			<ContactUs />
		</>
	);
}
