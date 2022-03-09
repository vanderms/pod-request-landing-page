import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHero from '../components/sections/section-hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Pod request access landing page</title>
      </Head>
      <SectionHero />
    </>
  );
};

export default Home;
