import React from 'react';
import '@testing-library/jest-dom';
import 'root/__mocks__/react-intersection-observer';
import { render } from '@testing-library/react';

import Component from '.';

jest.mock('@/shared/UI/Header', () => () => <div />);

describe('Experience', () => {
  it('renders the Experience component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
