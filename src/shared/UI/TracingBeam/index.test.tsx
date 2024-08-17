import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('TracingBeam', () => {
  it('renders the TracingBeam component', () => {
    const { container } = render(
      <Component>
        <div />
      </Component>
    );

    expect(container.firstChild).not.toBeNull();
  });
});
