import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import styles from '../styles/index.module.scss';
import leman from '../styles/leman.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/eye.ico" />
        <title>Home Page</title>
      </Head>

      <div>Home</div>
      <Image src={leman} alt="Фото Апофеоз Геркулеса" width={500} />
      <div className={styles.testLine} />
    </>
  );
}
