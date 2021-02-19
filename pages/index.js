import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thimmdev-Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Navbar />
      <About />   
    </div>
  )
}
