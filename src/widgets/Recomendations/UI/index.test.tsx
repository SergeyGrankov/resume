import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

jest.mock('@/shared/UI/Header', () => () => <div />);
jest.mock('./Card', () => () => <div />);

describe('Recomendations', () => {
  it('renders the Recomendations component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
