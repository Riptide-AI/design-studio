// _app.jsx

import '@/styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '@/data/store/store';
import { useRouter } from 'next/router';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import Head from 'next/head'; // Import Head from next/head
import i18n from 'i18n';
// Function to fetch meta data for the current page and locale
const fetchMetaData = async (locale, page) => {
  try {
    const { default: localeData } = await import(`../../locales/${locale}.json`);
    return localeData['meta'][page] || {};
  } catch (error) {
    console.error(`Error fetching meta data for ${page} in ${locale} locale:`, error);
    return {};
  }
};

function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;
  const [metaTags, setMetaTags] = useState({}); // State to hold meta tags
  const { pathname } = router;

  useEffect(() => {
    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);
  useEffect(() => {
    const fetchMetaTags = async () => {
      const metaData = await fetchMetaData(locale, pathname);
      setMetaTags(metaData); // Update state with fetched meta tags
    };

    fetchMetaTags(); // Call fetchMetaTags function on mount or locale change
  }, [locale, pathname]); // Depend on locale to refetch meta data when locale changes

  return (
    <Provider store={store}>
      <DefaultLayout>
        <Head>
          <title>{metaTags.title}</title>
          <meta name="description" content={metaTags.description} />
          <meta name="keywords" content={metaTags.keywords} />
          {/** add here new meta tags and add it into locales meta tags */}
          {metaTags.og && (
            <>
              <meta property="og:title" content={metaTags.og.title} />
              <meta property="og:description" content={metaTags.og.description} />
              <meta property="og:image" content={metaTags.og.image} /> 
            </>
             
          )}
        </Head>

        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

export default appWithTranslation(App);
