import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ParticlesBlock from '.';

describe('ParticlesBlock', () => {
  it('renders the ParticlesBlock component', () => {
    const { container } = render(<ParticlesBlock />);

    expect(container.firstChild).not.toBeNull();
  });
});
