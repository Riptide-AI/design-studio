import { PortfolioBanner } from '@/features/sections/PortfolioBanner';
import { portfolioList } from '@/data/portfolio';
import { ContactUs } from '@/features/sections/ContactUs';
import { PortfolioGoal } from '@/features/sections/PortfolioGoal';
import { PortfolioResult } from '@/features/sections/PortfolioResult';
import { PortfolioProjects } from '@/features/sections/PortfolioProjects';
import { PortfolioCatalog } from '@/features/sections/PortfolioCatalog';
import { PortfolioAdaptive } from '@/features/sections/PortfolioAdaptive';

export default function Page({ currentItem }) {
  return (
    <>
      <PortfolioBanner currentItem={currentItem} />
      <PortfolioGoal currentItem={currentItem} />
      <PortfolioResult currentItem={currentItem} />
      <PortfolioProjects currentItem={currentItem} />
      <PortfolioCatalog currentItem={currentItem} />
      <PortfolioAdaptive currentItem={currentItem} />
      <ContactUs />
    </>
  );
}

export async function getStaticPaths() {
  const locales = ['en', 'uk'];
  const paths = [];
  locales.forEach((locale) => {
    Object.keys(portfolioList).forEach((id) => {
      paths.push({ params: { id }, locale });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const currentItem = portfolioList[id] || null;
  return {
    props: {
      currentItem,
    },
  };
}
