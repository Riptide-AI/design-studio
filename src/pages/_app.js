import '@/styles/globals.scss';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { appWithTranslation } from 'next-i18next';
import '../../i18n';


function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default appWithTranslation(App);
