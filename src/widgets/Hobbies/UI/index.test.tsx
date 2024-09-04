import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import 'root/__mocks__/react-intersection-observer';
import { render } from '@testing-library/react';

import Component from '.';

interface IProps {
  children: ReactNode;
}

jest.mock('@/shared/UI/Header', () => () => <div />);
jest.mock('@/shared/UI/TextGenerateEffect', () => () => <div />);
jest.mock('@/shared/UI/BoxContainer', () => {
  return function BoxContainer({ children }: IProps) {
    return <div>{children}</div>;
  };
});

describe('Hobbies', () => {
  it('renders the Hobbies component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
