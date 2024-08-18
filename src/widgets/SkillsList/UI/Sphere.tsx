import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ITag, ITags } from '@/shared/consts/skills';
import Fallback from '@/shared/UI/Fallback';
import Image from 'next/image';

import TagSphere from './TagSphere';

interface IProps {
  className?: string;
  tags: ITags;
  radius: number;
}

export default function Sphere({ radius, tags, className }: IProps) {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <TagSphere
        tags={tags.map((i: ITag) => (
          <Image
            width={50}
            height={50}
            src={i['src']}
            key={i['key']}
            alt={i['key']}
          />
        ))}
        initialSpeed={4}
        maxSpeed={15}
        radius={radius}
        className={className}
      />
    </ErrorBoundary>
  );
}
