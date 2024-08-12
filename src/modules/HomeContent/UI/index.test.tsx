import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

jest.mock('@/shared/UI/ScrollToTop');
jest.mock('@/widgets/SkillsList');
jest.mock('@/widgets/SecondarySkillsList');
jest.mock('@/widgets/Anchorbar');

describe('HomeContent', () => {
  it('renders the HomeContent component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
