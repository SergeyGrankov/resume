import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Additional from '.';

jest.mock('@/shared/UI/Counter');

describe('Additional', () => {
  it('renders the Additional component', () => {
    const { container } = render(<Additional />);

    expect(container.firstChild).not.toBeNull();
  });
});
