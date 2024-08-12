import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('ParticlesBlock', () => {
  it('renders the ParticlesBlock component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
