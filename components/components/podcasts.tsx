import Image from 'next/image';

export default function Podcasts() {
  return (
    <div className="podcasts">
      <div className="spotify">
        <Image
          src="/assets/desktop/spotify.svg"
          width={96}
          height={29}
          alt="spotify"
          layout='responsive'
        />
      </div>
      <div className="apple-podcast">
        <Image
          src="/assets/desktop/apple-podcast.svg"
          width={78}
          height={29}
          alt="apple podcast"
          layout='responsive'
        />
      </div>
      <div className="google-podcast">
        <Image
          src="/assets/desktop/google-podcasts.svg"
          width={125}
          height={18}
          alt="google podcasts"
          layout='responsive'
        />
      </div>
      <div className="pocket-cast">
        <Image
          src="/assets/desktop/pocket-casts.svg"
          width={129}
          height={26}
          alt="pocket cast"
          layout='responsive'
        />
      </div>
    </div>
  );
}
