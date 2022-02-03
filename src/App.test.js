import { render, screen } from '@testing-library/react';
import App from './App';

test('dry-weight: 99.5', async() => {
  render(<App />);
  const linkElement = await screen.findByText(/dry-weight: 99.5/i);
  expect(linkElement).toBeInTheDocument();
});
