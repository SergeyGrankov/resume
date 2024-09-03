import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

interface IProps {
  children: ReactNode;
}

jest.mock('./About', () => () => <div />);
jest.mock('@/shared/UI/Header', () => () => <div />);
jest.mock('@/shared/UI/BoxContainer', () => ({ children }: IProps) => (
  <div>{children}</div>
));

describe('AboutInfo', () => {
  it('renders the AboutInfo component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
