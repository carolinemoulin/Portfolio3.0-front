import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
