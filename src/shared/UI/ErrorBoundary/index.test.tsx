import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ErrorBoundary from '.';

beforeAll(() => {
  // Необходимо, т.к. в консоль тестирования сыпется варнинг о том, что в компоненте ошибка
  // eslint-disable-next-line
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

const ProblemChild = () => {
  throw new Error('Error thrown from problem child!');

  // eslint-disable-next-line
  return <div>Problem Child</div>;
};

const FallbackComponent: React.FC<FallbackProps> = () => (
  <div>Something went wrong.</div>
);

describe('ErrorBoundary', () => {
  it('renders child component without error', () => {
    render(
      <ErrorBoundary fallbackComponent={FallbackComponent}>
        <div>Test Child</div>
      </ErrorBoundary>
    );

    expect(screen.queryByText('Test Child')).toBeInTheDocument();
  });

  it('renders fallback component when error is thrown', () => {
    render(
      <ErrorBoundary fallbackComponent={FallbackComponent}>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.queryByText('Something went wrong.')).toBeInTheDocument();
  });
});
