import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

jest.mock('@/shared/UI/ScrollToTop', () => () => <div />);
jest.mock('@/shared/UI/StarsBackground', () => () => <div />);
jest.mock('@/widgets/SkillsList', () => () => <div />);
jest.mock('@/widgets/SecondarySkillsList', () => () => <div />);
jest.mock('@/widgets/ParticlesBlock', () => () => <div />);
jest.mock('@/widgets/Anchorbar', () => () => <div />);
jest.mock('@/widgets/AboutInfo', () => () => <div />);

describe('HomeContent', () => {
  it('renders the HomeContent component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
