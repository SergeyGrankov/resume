import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SecondarySkillsList from '.';

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

const { useInView } = require('react-intersection-observer');

describe('SecondarySkillsList', () => {
  it('renders the SecondarySkillsList component', () => {
    useInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: true,
    }));

    const { container } = render(<SecondarySkillsList />);

    expect(container.firstChild).not.toBeNull();
  });
});
