import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from './Sphere';

jest.mock('@/shared/UI/Fallback', () => () => <div />);
jest.mock('./TagSphere', () => () => <div />);

describe('Sphere', () => {
  it('renders the Sphere component', () => {
    const { container } = render(
      <Component radius={140} tags={[{ src: 'some', key: 'some' }]} />
    );

    expect(container.firstChild).not.toBeNull();
  });
});
