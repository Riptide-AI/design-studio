import { LocaleSwitch } from '@/components/LocaleSwitch';
import { HeroBanner } from '@/features/HeroBanner';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <LocaleSwitch />
    </>
  );
}
