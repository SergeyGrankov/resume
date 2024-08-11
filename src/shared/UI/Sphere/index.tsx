'use client';

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { TagSphere } from 'react-tag-sphere';

import { ITag, ITags } from '@/shared/consts/skills';
import Fallback from '@/shared/UI/Fallback';
import Image from 'next/image';

interface IProps {
  className?: string;
  tags: ITags | Array<string>;
  radius: number;
}

export default function Sphere({ radius, tags, className }: IProps) {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <TagSphere
        tags={tags.map((i: ITag | string) =>
          typeof i === 'string' ? (
            i
          ) : (
            <Image
              width={50}
              height={50}
              src={i['src']}
              key={i['key']}
              alt={i['key']}
            />
          )
        )}
        initialSpeed={4}
        maxSpeed={15}
        radius={radius}
        className={className}
      />
    </ErrorBoundary>
  );
}
