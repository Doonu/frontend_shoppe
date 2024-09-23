import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '@shared/ui';

export const ButtonTestId = 'Button';

describe('Button', () => {
  test('Отображение компонента', () => {
    render(<Button />);
    expect(screen.getByTestId('Button')).toBeInTheDocument();
  });
});
