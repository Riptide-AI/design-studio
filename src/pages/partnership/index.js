import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/partnership';
import { ContactUs } from '@/features/sections/ContactUs';
import { BecomePartner } from '@/features/sections/BecomePartner';
import { InfoBlock } from '@/features/sections/InfoBlock';
import { WhyWorkWithUs } from '@/features/sections/WhyWorkWithUs';
import { WhatYouGet } from '@/features/sections/WhatYouGet';
/* import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react'; */

export default function Partnership() {
/*   const loc = usePathname();
  const [first, setfirst] = useState(loc);
  const handleDataChange = (newData) => {
    setfirst(newData);
  };
  useEffect(() => {
    // Retrieve scroll position from sessionStorage
    const scrollPosition = parseInt(sessionStorage.getItem('scrollPosition') || '0');
    console.log('Scroll Position:', scrollPosition); // Log for debugging

    // Set scroll position on component load with a slight delay to ensure DOM readiness
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 100); // Adjust delay if needed

    // Store scroll position before leaving the page
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    });
     return () => {
      // Remove event listener on component unmount
      window.removeEventListener('beforeunload', () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
      });
    }; 
  }, [first]);
  console.log(first);
 */
 
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <InfoBlock />
      <BecomePartner /* onDataChange={handleDataChange} */ />
      <WhyWorkWithUs />
      <WhatYouGet />
      <ContactUs />
    </>
  );
}
