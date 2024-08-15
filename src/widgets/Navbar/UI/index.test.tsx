import React from 'react';
import '@testing-library/jest-dom';
import { usePathname, useRouter } from 'next/navigation';
import { render } from '@testing-library/react';

import { routes } from '@/shared/consts/routes';

import Component from '.';

const mockedUseRouter = useRouter as jest.Mock;
const mockedUsePathname = usePathname as jest.Mock;

beforeEach(() => {
  mockedUseRouter.mockImplementation(() => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
  }));
  mockedUsePathname.mockImplementation(() => routes.HOME);
});

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
