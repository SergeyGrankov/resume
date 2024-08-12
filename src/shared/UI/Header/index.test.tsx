import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Component from '.';

describe('Header', () => {
  it('renders the Header component', () => {
    const { container } = render(
      <Component id="mainSkills" text="some" animationStyle="pulse" />
    );

    expect(container.firstChild).not.toBeNull();
  });
});
