import { AboutUsSection } from '@/features/sections/AboutUsSection';
import { BecomePartner } from '@/features/sections/BecomePartner';
import { BusinessShowCase } from '@/features/sections/BusinessShowCase';
import { HeroBanner } from '@/features/sections/HeroBanner';
import { HowItWorks } from '@/features/sections/HowItWorks';
import { ServicesTabs } from '@/features/sections/ServicesTabs';
import { OurWorks } from '@/features/sections/OurWorks';
import { ContactUs } from '@/features/sections/ContactUs';

export default function Home() {
	return (
		<>
			<HeroBanner />
			<ServicesTabs />
			<AboutUsSection />
			<BusinessShowCase />
			<HowItWorks />
			<BecomePartner />
			<OurWorks />
			<ContactUs />
		</>
	);
}
