import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

jest.mock('@/shared/UI/BoxContainer');
jest.mock('@/shared/UI/ScrollToTop');

describe('AdditionalContent', () => {
  it('renders the AdditionalContent component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
