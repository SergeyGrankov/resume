import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

interface IProps {
  children: ReactNode;
}

jest.mock('@/shared/UI/TracingBeam', () => ({ children }: IProps) => (
  <div>{children}</div>
));
jest.mock('@/widgets/SkillsList', () => () => <div />);
jest.mock('@/widgets/SecondarySkillsList', () => () => <div />);
jest.mock('@/widgets/ParticlesBlock', () => () => <div />);
jest.mock('@/widgets/Recomendations', () => () => <div />);
jest.mock('@/widgets/Proud', () => () => <div />);
jest.mock('@/widgets/Anchorbar', () => () => <div />);
jest.mock('@/widgets/AboutInfo', () => () => <div />);
jest.mock('@/widgets/Experience', () => () => <div />);

describe('HomeContent', () => {
  it('renders the HomeContent component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
