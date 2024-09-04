import React from 'react';
import '@testing-library/jest-dom';
import 'root/__mocks__/react-intersection-observer';
import { render } from '@testing-library/react';

import Component from '.';

describe('Header', () => {
  it('renders the Header component', () => {
    const { container } = render(<Component text="some" />);

    expect(container.firstChild).not.toBeNull();
  });
});
