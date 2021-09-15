import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaycee Ingram</title>
        <meta name="description" content="Showcase for Kaycee Ingram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <h1 className={styles.heading}>KAYCEE INGRAM</h1>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Why would I be a good Content Developer?
        </h1>

        <p className={styles.description}>
          Grant me a moment of your time to show you :)
        </p>

        <div className={styles.downArrowContainer}>
          <Link href="#emails">
            <a className={styles.downArrow}>
              <Image height="75px" width="175px" src="/down-icon.png" alt="Downward Arrow" />
            </a>
          </Link>
        </div>

        <div id="emails" className={styles.sectionHeading}>
          <h2>Emails from Michael Hartl</h2>
          <p>Regarding typos that I spotted in his book</p>
        </div>

        <blockquote cite="/_next/image?url=%2Femail-2.png&w=640&q=75">
          I was amazed that the other ones you noticed hadn&apos;t already been fixed. You&apos;ve got an eagle eye! Keep &apos;em coming. :-) - <span className={styles.author}>Michael Hartl</span> (<span className={styles.author}>Author of The Ruby on Rails Tutorial Book</span>)
        </blockquote>

        <div className={styles.grid}>
          <Link href={"/view"}>
            <a className={styles.card}>
              <Image height="125px" width="175px" src="/email-1.png" alt="Email-1 Image" />
            </a>
          </Link>
          <Link href={"/view"}>
            <a className={styles.card}>
              <Image height="75px" width="250px" src="/email-2.png" alt="Email-2 Image" />
            </a>
          </Link>
          <Link href={"/view"}>
            <a className={styles.card}>
              <Image height="75px" width="275px" src="/email-3.png" alt="Email-3 Image" />
            </a>
          </Link>
        </div>

        <div className={styles.sectionHeading}>
          <h2>Ok fair enough... any other reasons?</h2>
          <p>I&apos;m glad you asked! Below are various merges on GitHub that I have acquired from several different Organizations. All of them were docs related. ( <em>Some of them are under the GitHub HippoDippo, my old account... yeah long story :|</em> )</p>
        </div>

        <div className={styles.grid}>
          <Link href={'https://github.com/reactjs/reactjs.org/pull/496'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" alt="Email-1 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/alpinejs/alpine/pull/1971'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/59030169?s=200&v=4" alt="Email-2 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/jsantell/poet/pull/141'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://camo.githubusercontent.com/bb4eb770c59f436df40514f00c22bbe8a5498057f3325535fd915f5c4bbe5213/68747470733a2f2f7261772e6769746875622e636f6d2f6a73616e74656c6c2f706f65742f67682d70616765732f696d672f706f65742e706e67" alt="Email-3 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/netlify/netlify-cms/pull/2559'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/7892489?s=200&v=4" alt="Email-3 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/netlify/netlify-cms/pull/1579 '}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/7892489?s=200&v=4" alt="Email-3 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/beaverbuilder/assistant/pull/317'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/35972447?s=200&v=4" alt="Email-3 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/realpython/python-guide/pull/1039'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/5448020?s=200&v=4" alt="Email-3 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/IntuitDeveloper/HelloWorld-PHP/pull/4'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/9217998?s=200&v=4" alt="Email-3 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/rubygems/bundler/pull/5729/files'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/208761?s=200&v=4" alt="Email-3 Image" />
            </a>
          </Link>
          <Link href={'https://github.com/rubygems/bundler-site/pull/302'}>
            <a target="_blank" className={styles.merges}>
              <Image height="125px" width="125px" src="https://avatars.githubusercontent.com/u/208761?s=200&v=4" alt="Email-3 Image" />
            </a>
          </Link>
        </div>

        <div className={styles.sectionHeading}>
          <h2>That it? Any final words?</h2>
          <p>Yes... I just wanted to say that I have many other great references on why I would be a great Content Developer.. Ok maybe not <strong>many</strong> but I have a few :) I would really love this job and built this delightful site before you to apply for it! I have always been naturally blessed with a keen eye for typos and grammatical errors when it comes to writing. I&apos;m not bragging or tooting my own horn per se because I am not very good at A LOT of things. But despite that confession of flaws, here is a fun fact folks! I was an English Major at one point! You darn tootin! I wrote for the <Link href={"https://thedraft.blog/2020/04/05/toilet-paper-the-new-official-currency/"}><a target="_blank" className={styles.newspaperLink}>Official University Newspaper</a></Link>. The Draft was just a blog I used to house the articles I was working on and share them with the Editor in Chief with ease. I understand that writing for a College Newspaper and writing technical documentation/tutorials is like apples to potatoes but I am also a self-taught web developer that is comfortable with React.js and digging deeper into Next.js very quickly. I am not an expert but I believe that is a good thing considering I am capable of understanding the mindset of beginner developers and the questions that they might have while learning a new technology like Next.js... so yeah. That&apos;s my two cents! :)</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}