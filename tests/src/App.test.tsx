import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App.tsx';

test('renders Hello world text', () => {
  render(<App />);
  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});
