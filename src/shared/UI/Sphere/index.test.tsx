import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Sphere from '.';

describe('Sphere', () => {
  it('renders the Sphere component', () => {
    const { container } = render(<Sphere radius={140} tags={['some']} />);

    expect(container.firstChild).not.toBeNull();
  });
});
