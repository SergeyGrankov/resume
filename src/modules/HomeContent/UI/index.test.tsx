import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Home from '.';

jest.mock('@/shared/UI/ScrollToTop');
jest.mock('@/widgets/SkillsList/UI');
jest.mock('@/widgets/SecondarySkillsList/UI');

describe('Home', () => {
  it('renders the Home component', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).not.toBeNull();
  });
});
