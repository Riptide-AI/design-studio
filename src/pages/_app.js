import '@/styles/globals.scss';
import { appWithTranslation } from 'next-i18next';

import { DefaultLayout } from '@/layouts/DefaultLayout';
import '../../i18n';

function App({ Component, pageProps }) {
	return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	);
}

export default appWithTranslation(App);
