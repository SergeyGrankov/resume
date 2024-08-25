import React from 'react';
import 'root/__mocks__/react-intersection-observer';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('Recomendations', () => {
  it('renders the Recomendations component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
