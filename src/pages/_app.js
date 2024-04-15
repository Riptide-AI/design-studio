import '@/styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@/data/store/store';

import { DefaultLayout } from '@/layouts/DefaultLayout';
import '../../i18n';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

export default appWithTranslation(App);
