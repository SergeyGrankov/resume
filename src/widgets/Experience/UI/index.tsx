'use client';

import React from 'react';
import Link from '@mui/material/Link';
import { motion } from 'framer-motion';

import { getMotionProps } from '@/shared/lib/getMotionProps';
import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';
import Image from 'next/image';

import styles from '../styles/index.module.scss';

export default function Experience() {
  return (
    <BoxContainer>
      <Header id="experience" text="Experience" />

      <div className={styles.info}>
        <motion.div
          className={styles.title}
          {...getMotionProps({ delay: 0.4 })}
        >
          Experience&nbsp;-&nbsp;OOO&nbsp;«Domclick» (Sber)
          -&nbsp;1&nbsp;year&nbsp;9&nbsp;month
          <Image
            className={styles.image}
            width={72}
            height={26}
            src="/widgets/Experience/domclick.webp"
            alt="Image of Domclick"
            loading="lazy"
          />
        </motion.div>

        <motion.span
          className={styles.title}
          {...getMotionProps({ delay: 0.6 })}
        >
          Post:
        </motion.span>
        <motion.span
          className={styles.text}
          {...getMotionProps({ delay: 0.6 })}
        >
          {' '}
          Frontend-developer
        </motion.span>

        <motion.div
          className={styles.title}
          {...getMotionProps({ delay: 0.8 })}
        >
          What did I do:
        </motion.div>

        <motion.div className={styles.title} {...getMotionProps({ delay: 1 })}>
          I have worked on three projects:
        </motion.div>
        <motion.div
          className={styles.title}
          {...getMotionProps({ delay: 1.2 })}
        >
          1. Frontend for Residential Complex Pages:
        </motion.div>
        <motion.div className={styles.text} {...getMotionProps({ delay: 1.2 })}>
          ◉&nbsp;The Residential Complex (RC) page can be accessed by clicking
          on a listing card:
          <br />
          <Link
            href="https://domclick.ru/search?category=living&deal_type=sale&offer_type=complex&from=topline2020"
            underline="hover"
            sx={{
              wordBreak: 'break-all',
            }}
          >
            https://domclick.ru/search?category=living&deal_type=sale&offer_type=complex&from=topline2020
          </Link>
        </motion.div>
        <br />
        <motion.div className={styles.text} {...getMotionProps({ delay: 1.2 })}>
          ◉&nbsp;Apartment and layout pages can be accessed from within the RC
          page (link above).
        </motion.div>
        <br />
        <motion.div className={styles.text} {...getMotionProps({ delay: 1.2 })}>
          On this project, I developed new major parts of the page, optimized
          the existing code, fixed bugs of varying complexity, participated in
          architectural discussions, implemented metrics, monitored crashes and
          errors in production, took part in the CI/CD process, covered the
          application with unit tests, and worked on performance improvements.
        </motion.div>
        <motion.div
          className={styles.title}
          {...getMotionProps({ delay: 1.4 })}
        >
          2. Search Project:
        </motion.div>
        <motion.div className={styles.text} {...getMotionProps({ delay: 1.4 })}>
          ◉&nbsp;
          <Link
            href="https://domclick.ru/search?category=living&deal_type=sale&offer_type=complex&from=topline2020"
            underline="hover"
            sx={{
              wordBreak: 'break-all',
            }}
          >
            https://domclick.ru/search?category=living&deal_type=sale&offer_type=complex&from=topline2020
          </Link>
          <br />
          <br />
          This is the primary project for listing search results. I also
          developed new components, worked with metrics, fixed bugs, and covered
          the application with unit tests in this project.
        </motion.div>
        <motion.div
          className={styles.title}
          {...getMotionProps({ delay: 1.6 })}
        >
          3. Airbnb-style Startup:
        </motion.div>
        <motion.div className={styles.text} {...getMotionProps({ delay: 1.6 })}>
          ◉&nbsp;
          <Link
            href="https://24.domclick.ru"
            sx={{
              wordBreak: 'break-all',
            }}
          >
            https://24.domclick.ru
          </Link>
          <br />
          <br />I had the opportunity to work on this startup.
        </motion.div>
      </div>
    </BoxContainer>
  );
}
