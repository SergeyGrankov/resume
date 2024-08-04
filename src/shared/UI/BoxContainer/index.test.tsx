import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import BoxContainer from '.';

describe('BoxContainer', () => {
  it('renders the BoxContainer component', () => {
    const { container } = render(
      <BoxContainer>
        <div />
      </BoxContainer>
    );

    expect(container.firstChild).not.toBeNull();
  });
});
