import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHero from '../components/sections/section-hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Pod request access landing page</title>
        <meta
          name="description"
          content="Frontend Mentor: Pod Request Landing Page"
        />
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta
          property="og:site_name"
          content="Frontend Mentor | Pod Request Landing Page "
        />
        <meta property="og:title" content="Pod Request Landing Page" />
        <meta
          property="og:description"
          content="My solution to the challenge Pod Request Landing Page, by Frontend Mentor"
        />

        {/* <!-- Image to display -->  */}
        {/* <!-- Replace   «example.com/image01.jpg» with your own -->  */}
        <meta
          property="og:image"
          content="https://upbeat-goldwasser-23f0a9.netlify.app/preview.jpg"
        />

        {/* <!-- No need to change anything here -->  */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Website to visit when clicked in fb or WhatsApp-->  */}
        <meta
          property="og:url"
          content="https://upbeat-goldwasser-23f0a9.netlify.app/"
        ></meta>
      </Head>
      <main>
        <SectionHero />
      </main>
    </>
  );
};

export default Home;
