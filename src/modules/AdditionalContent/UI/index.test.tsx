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

describe('AdditionalContent', () => {
  it('renders the AdditionalContent component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
