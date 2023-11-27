import { Footer } from '@/features/sections/Footer';
import { Navbar } from '@/features/sections/Navbar';
import styles from './style.module.scss';

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
