import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import StarsBackground from '.';

describe('StarsBackground', () => {
  it('renders the StarsBackground component', () => {
    const { container } = render(<StarsBackground />);

    expect(container.firstChild).not.toBeNull();
  });
});
