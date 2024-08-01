'use client';

import React from 'react';
import { TagSphere } from 'react-tag-sphere';

import Image from 'next/image';

interface IProps {
  className?: string;
}

interface ITags {
  src: string;
  key: string;
}

export default function Sphere({ className }: IProps) {
  const tags: Array<ITags> = [
    {
      src: 'https://cdn.svgporn.com/logos/react.svg',
      key: 'Реакт',
    },
    {
      src: 'https://cdn.svgporn.com/logos/javascript.svg',
      key: 'JS',
    },
    {
      src: 'https://cdn.svgporn.com/logos/sass.svg',
      key: 'sass',
    },
    {
      src: 'https://cdn.svgporn.com/logos/docker.svg',
      key: 'docker',
    },
    {
      src: 'https://cdn.svgporn.com/logos/git.svg',
      key: 'git',
    },
    {
      src: 'https://cdn.svgporn.com/logos/webpack.svg',
      key: 'webpack',
    },
    {
      src: 'https://cdn.svgporn.com/logos/vitejs.svg',
      key: 'vitejs',
    },
    {
      src: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
      key: 'nextjs',
    },
    {
      src: 'https://cdn.svgporn.com/logos/redux.svg',
      key: 'redux',
    },
    {
      src: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
      key: 'typescript',
    },
    {
      src: 'https://cdn.svgporn.com/logos/eslint.svg',
      key: 'eslint',
    },
    {
      src: 'https://cdn.svgporn.com/logos/jira.svg',
      key: 'jira',
    },
    {
      src: 'https://cdn.svgporn.com/logos/confluence.svg',
      key: 'confluence',
    },
    {
      src: 'https://cdn.svgporn.com/logos/jest.svg',
      key: 'jest',
    },
    {
      src: 'https://cdn.svgporn.com/logos/react-router.svg',
      key: 'jest',
    },
  ];

  return (
    <TagSphere
      tags={tags.map((i: ITags) => (
        <Image
          width={50}
          height={50}
          src={i['src']}
          key={i['key']}
          alt={i['key']}
        />
      ))}
      initialSpeed={7}
      radius={150}
      className={className}
    />
  );
}
