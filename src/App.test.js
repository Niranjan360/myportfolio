import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio developer title', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Niranjan/i)[0];
  expect(linkElement).toBeInTheDocument();
});
