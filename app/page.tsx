import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          NewsLetter<span>Now</span>
        </h1>
        <div className={`${styles.flex} ${styles.spaceX4}`}>
          <div>
            <input 
              type="text" 
              placeholder="Search..." 
              className={styles.input}
            />
            <Link href="/authors" className={styles.link}>
              Authors
            </Link>
          </div>
          <Link href="/login" className={styles.link}>
           Login
          </Link>
          <Link href="/signup" className={styles.link}>
           Sign Up          </Link>
        </div>
      </nav>
      <hr />
      <main>
        <h1>Hello User</h1>
        <Link href="/users" legacyBehavior>
          <a className={styles.link}>Users here</a>
        </Link>
        <br />
        <hr />
        <section className={styles.mainSection}>
          <h2>Trending letters</h2>
        </section>
      </main>
    </div>
  );
}

