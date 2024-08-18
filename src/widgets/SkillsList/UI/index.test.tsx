import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

interface IProps {
  children: ReactNode;
}

jest.mock('@/shared/UI/Header', () => () => <div />);
jest.mock('./Sphere', () => () => <div />);
jest.mock('@/shared/UI/Tile', () => () => <div />);
jest.mock('@/shared/UI/BoxContainer', () => {
  return function BoxContainer({ children }: IProps) {
    return <div>{children}</div>;
  };
});

describe('SkillsList', () => {
  it('renders the SkillsList component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
