// import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/FullView.module.css'

export default function FullView() {
  return (
    <div className={styles.container}>
      <div className={styles.viewToolbar}>
        <Link href="/">
          <a className={styles.backBtn}>
            {`<`}--- Back
          </a>
        </Link>
      </div> 
      <Image height={"1200px"} width={"1500px"} src={`/email-1.png`} alt="Image" placeholder={'blur'} blurDataURL={{data: "image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs/P/wPwAHrANaRCTopQAAAABJRU5ErkJggg=="}} />
      <Image height={"500px"} width={"1500px"} src={`/email-2.png`} alt="Image" placeholder={'blur'} blurDataURL={{data: "image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs/P/wPwAHrANaRCTopQAAAABJRU5ErkJggg=="}} />
      <Image height={"500px"} width={"2000px"} src={`/email-3.png`} alt="Image" placeholder={'blur'} blurDataURL={{data: "image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOs/P/wPwAHrANaRCTopQAAAABJRU5ErkJggg=="}} />
    </div>
  );
}