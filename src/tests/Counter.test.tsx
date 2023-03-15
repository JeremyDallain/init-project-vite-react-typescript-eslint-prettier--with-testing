import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Counter } from '../components/Counter.js';

describe('App', () => {
  it('Renders hello world', () => {
    render(<Counter />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
