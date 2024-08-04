import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SkillsList from '.';

describe('SkillsList', () => {
  it('renders the SkillsList component', () => {
    const { container } = render(<SkillsList />);

    expect(container.firstChild).not.toBeNull();
  });
});
