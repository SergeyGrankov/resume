import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from './page';

jest.mock('@/modules/AdditionalContent');

describe('Additional', () => {
  it('renders the Additional component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
