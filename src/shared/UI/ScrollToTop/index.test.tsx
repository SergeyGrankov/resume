import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('ScrollToTop', () => {
  it('renders the ScrollToTop component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
