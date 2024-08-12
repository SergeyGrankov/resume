import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('Sphere', () => {
  it('renders the Sphere component', () => {
    const { container } = render(<Component radius={140} tags={['some']} />);

    expect(container.firstChild).not.toBeNull();
  });
});
