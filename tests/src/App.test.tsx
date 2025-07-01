import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/App.tsx';

test('renders coming soon text', () => {
  render(<App />);
  const textElement = screen.getByText(/coming soon/i);
  expect(textElement).toBeInTheDocument();
});
