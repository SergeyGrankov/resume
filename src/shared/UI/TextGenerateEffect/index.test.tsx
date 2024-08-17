import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('TextGenerateEffect', () => {
  it('renders the TextGenerateEffect component', () => {
    const { container } = render(<Component words="some words" />);

    expect(container.firstChild).not.toBeNull();
  });
});
