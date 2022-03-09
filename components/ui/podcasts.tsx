import Image from 'next/image';

export default function Podcasts() {
  return (
    <div className="root-component-podcasts">
      <div className="image-wrapper">
        <Image
          src="/assets/desktop/spotify.svg"
          width={96}
          height={29}
          alt=""
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/assets/desktop/apple-podcast.svg"
          width={78}
          height={29}
          alt=""
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/assets/desktop/google-podcasts.svg"
          width={125}
          height={18}
          alt=""
        />
      </div>
      <div className="image-wrapper">
        <Image
          src="/assets/desktop/pocket-casts.svg"
          width={129}
          height={26}
          alt=""
        />
      </div>
    </div>
  );
}
