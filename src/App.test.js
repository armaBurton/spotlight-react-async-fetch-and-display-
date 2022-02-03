import { render, screen } from '@testing-library/react';
import App from './App';

test('She transferred to Honnōji Academy searching for the twin', () => {
  render(<App />);
  const linkElement = screen.getByText(/Honnōji Academy/i);
  expect(linkElement).toBeInTheDocument();
});
