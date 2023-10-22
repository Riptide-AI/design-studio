import { Footer } from '@/features/Footer';
import { Navbar } from '@/features/Navbar';
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
