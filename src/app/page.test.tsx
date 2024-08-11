import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Home from './page';

jest.mock('@/modules/HomeContent');

describe('Home', () => {
  it('renders the Home component', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).not.toBeNull();
  });
});
