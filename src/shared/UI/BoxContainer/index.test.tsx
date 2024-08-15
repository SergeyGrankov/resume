import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('BoxContainer', () => {
  it('renders the BoxContainer component', () => {
    const { container } = render(
      <Component>
        <div />
      </Component>
    );

    expect(container.firstChild).not.toBeNull();
  });
});
