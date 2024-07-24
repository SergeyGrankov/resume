import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/person.ico" />
        <title>About Page</title>
      </Head>
      <div>About</div>
    </>
  );
}
