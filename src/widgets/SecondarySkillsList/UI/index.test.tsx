import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SecondarySkillsList from '.';

describe('SecondarySkillsList', () => {
  it('renders the SecondarySkillsList component', () => {
    const { container } = render(<SecondarySkillsList />);

    expect(container.firstChild).not.toBeNull();
  });
});
