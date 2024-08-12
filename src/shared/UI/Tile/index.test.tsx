import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('StarsBackground', () => {
  it('renders the StarsBackground component', () => {
    const { container } = render(<Component text="text" />);

    expect(container.firstChild).not.toBeNull();
  });
});
