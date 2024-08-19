import React from 'react';
import '@testing-library/jest-dom';
import 'root/__mocks__/react-intersection-observer';
import { render } from '@testing-library/react';

import Component from './Skill';

describe('Skill', () => {
  it('renders the Skill component', () => {
    const { container } = render(
      <Component title="some" text="some" delay={0} />
    );

    expect(container.firstChild).not.toBeNull();
  });
});
