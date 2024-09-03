import React from 'react';
import 'root/__mocks__/react-intersection-observer';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Component from './Card';

describe('Card', () => {
  const item = {
    src: '/widgets/Recomendations/pankratov.webp',
    name: 'name',
    surname: 'surname',
    post: 'post',
    role: 'role',
    telephone: '1234567890',
  };

  it('renders the Card component', () => {
    const { container } = render(<Component index={1} item={item} />);

    expect(container.firstChild).not.toBeNull();
  });

  it('should toggle contacts visibility on button click', () => {
    render(<Component index={1} item={item} />);

    expect(screen.queryByText('Show contacts')).toBeInTheDocument();
    expect(screen.queryByTestId('telephone')).toBeNull();

    fireEvent.click(screen.getByText('Show contacts'));

    expect(screen.queryByText('Show contacts')).not.toBeInTheDocument();
    expect(screen.queryByTestId('telephone')).toBeInTheDocument();
  });
});
