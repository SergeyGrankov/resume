import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import BoxContainer from '.';

import styles from './styles/index.module.scss';

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

const { useInView } = require('react-intersection-observer');

describe('BoxContainer', () => {
  it('renders the BoxContainer component', () => {
    useInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: true,
    }));

    const { container } = render(
      <BoxContainer>
        <div />
      </BoxContainer>
    );

    expect(container.firstChild).not.toBeNull();
  });

  it('does not apply the inView class when inView is false', () => {
    useInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: false,
    }));

    render(
      <BoxContainer>
        <div>Test Content</div>
      </BoxContainer>
    );

    const box = screen.getByText('Test Content').parentElement;
    expect(box).not.toHaveClass(styles.inView);
  });
});
