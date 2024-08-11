import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Additional from './page';

jest.mock('@/modules/AdditionalContent');

describe('Additional', () => {
  it('renders the Additional component', () => {
    const { container } = render(<Additional />);

    expect(container.firstChild).not.toBeNull();
  });
});
