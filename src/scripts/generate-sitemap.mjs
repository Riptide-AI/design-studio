import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { resolve } from 'path';
import { globby } from 'globby';

const getHostname = () => {
  if (process.env.NODE_ENV === 'production') {
    // Replace with your production domain
    return 'https://design-studio-beta.vercel.app'; // Final domain
  } else {
    // Local development environment
    return 'http://localhost:3000';
  }
};

const getPaths = async () => {
  const pages = await globby([
    './src/pages/**/*.{js,ts,jsx,tsx}', // Adjust the glob pattern to match your file types
    '!./src/pages/_*.{js,ts,jsx,tsx}', // Exclude special Next.js files
    '!./src/pages/api/**', // Exclude API routes
  ]);

  const paths = pages
    .map((page) => {
      let path = page
        .replace('./src/pages', '')
        .replace(/(.js|.ts|.jsx|.tsx)$/, '')
        .replace(/\/index$/, ''); // Remove 'index' from paths

      // Check if the path contains [id], [slug], or any other dynamic segment
      if (/\[\w+\]/.test(path)) {
        return null; // Ignore paths with dynamic segments like [id], [slug], etc.
      }

      return { url: path === '' ? '/' : path };
    })
    .filter((path) => path !== null); // Filter out null paths

  console.log('Paths:', paths); // Debugging line
  return paths;
};

const generateSitemap = async () => {
  const hostname = getHostname();
  const paths = await getPaths();

  if (paths.length === 0) {
    console.error('No paths found.');
    return;
  }

  const smStream = new SitemapStream({ hostname });

  // Define languages
  const languages = ['ua', 'en', 'ru'];

  // Generate sitemap for each language
  for (let lang of languages) {
    paths.forEach((path) => {
      const url = `${hostname}/${lang}${path.url}`; // Prefix each path with language code
      smStream.write({ url, changefreq: 'monthly', priority: 1 });
    });
  }

  smStream.end();

  const sitemap = await streamToPromise(smStream).then((data) => data.toString());

  writeFileSync(resolve('public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');

  // Generate robots.txt with sitemap reference
  const robotsTxt = `User-agent: *\nDisallow: /_next/\nDisallow: /api/\n\nSitemap: ${hostname}/sitemap.xml`;

  writeFileSync(resolve('public/robots.txt'), robotsTxt);
  console.log('Robots.txt generated successfully!');
};

generateSitemap();
