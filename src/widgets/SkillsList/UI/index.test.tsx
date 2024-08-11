import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SkillsList from '.';

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

const { useInView } = require('react-intersection-observer');

describe('SkillsList', () => {
  it('renders the SkillsList component', () => {
    useInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: true,
    }));

    const { container } = render(<SkillsList />);

    expect(container.firstChild).not.toBeNull();
  });
});
