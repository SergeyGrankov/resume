import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Additional from '.';

jest.mock('@/shared/UI/BoxContainer');
jest.mock('@/shared/UI/ScrollToTop');

describe('Additional', () => {
  it('renders the Additional component', () => {
    const { container } = render(<Additional />);

    expect(container.firstChild).not.toBeNull();
  });
});
