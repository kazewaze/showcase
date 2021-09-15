import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/FullView.module.css'

export default function FullView() {

  const img = useRouter().query.image;
  const imgRoute = `/${img}.png`;
  const sizes = [{h: "1200px", w: "1500px"}, {h: "500px", w: "1500px"}, {h: "500px", w: "2000px"}];
  const nextImg = parseInt(img.slice(-1), 10) === 3 ? 1 : parseInt(img.slice(-1), 10) + 1;

  return (
    <div className={styles.container}>
      <div className={styles.viewToolbar}>
        <Link href="/">
          <a className={styles.backBtn}>
            {`<`}--- Back
          </a>
        </Link>
        <Link href={{
          pathname: '/view',
          query: { image: `email-${nextImg}`},
        }}>
          <a className={styles.moreBtn}>
            See more ---{`>`}
          </a>
        </Link>
      </div>
      <Image height={sizes[parseInt(img.slice(-1), 10)-1].h} width={sizes[parseInt(img.slice(-1), 10)-1].w} src={imgRoute} alt="Image" placeholder={'blur'} blurDataURL={{data: "image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs/P/wPwAHrANaRCTopQAAAABJRU5ErkJggg=="}} />
    </div>
  );
}