import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

interface IProps {
  children: ReactNode;
}

jest.mock('@/shared/UI/Header', () => () => <div />);
jest.mock('./Skill', () => () => <div />);
jest.mock('@/shared/UI/BoxContainer', () => {
  return function BoxContainer({ children }: IProps) {
    return <div>{children}</div>;
  };
});

describe('SecondarySkillsList', () => {
  it('renders the SecondarySkillsList component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
