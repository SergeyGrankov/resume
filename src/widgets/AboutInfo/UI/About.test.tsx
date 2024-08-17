import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from './About';

jest.mock('@/shared/UI/TextGenerateEffect', () => () => <div />);

describe('About', () => {
  it('renders the About component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
