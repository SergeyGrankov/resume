import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import FallbackComponent from '.';

describe('FallbackComponent', () => {
  it('renders the FallbackComponent component', () => {
    const { container } = render(
      // eslint-disable-next-line
      <FallbackComponent error={'some'} resetErrorBoundary={() => {}} />
    );

    expect(container.firstChild).not.toBeNull();
  });
});
