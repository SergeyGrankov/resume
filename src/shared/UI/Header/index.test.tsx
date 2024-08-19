import React from 'react';
import '@testing-library/jest-dom';
import 'root/__mocks__/react-intersection-observer';
import { render } from '@testing-library/react';

import Component from '.';

jest.mock('react-intersection-observer');

describe('Header', () => {
  it('renders the Header component', () => {
    const { container } = render(<Component id="mainSkills" text="some" />);

    expect(container.firstChild).not.toBeNull();
  });
});
