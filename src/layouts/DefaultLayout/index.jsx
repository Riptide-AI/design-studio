import { Footer } from '@/features/Footer';
import { Navbar } from '@/features/Navbar';

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
