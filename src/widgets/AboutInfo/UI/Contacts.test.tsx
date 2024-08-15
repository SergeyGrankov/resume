import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from './Contacts';

describe('Contacts', () => {
  it('renders the Contacts component', () => {
    const { container } = render(<Component />);

    expect(container.firstChild).not.toBeNull();
  });
});
