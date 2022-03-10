import Image from 'next/image';
import Link from 'next/link';
import Form from '../components/form';
import Podcasts from '../components/podcasts';

export default function SectionHero() {
  return (
    <header className="root-section-hero">
      <div className="row-logo">
        <Link href="/">
          <a className="logo-link">
            <Image
              layout="fill"
              src="/assets/desktop/logo.svg"
              alt="Homepage"
            />
          </a>
        </Link>
      </div>
      <div className="content">
        <h1 className="title">
          <em>Publish your podcasts</em> everywhere.
        </h1>
        <p className="description">
          Upload your audio to Pod with a single click. We&#39;ll then
          distribute your podcast to Spotify, Apple Podcasts, Google Podcasts,
          Pocket Casts and more!
        </p>
        <Podcasts />
        <Form />
      </div>
    </header>
  );
}
