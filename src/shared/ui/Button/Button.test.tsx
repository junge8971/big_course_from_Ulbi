/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('button', () => {
    render(<Button>Тест</Button>);
    expect(screen.getByText('Тест')).toBeInTheDocument();
  });
});
