import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

test('renders Home route', () => {
  render(
    <MemoryRouter initialEntries={["/portfolio"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Hi! I'm/i)).toBeInTheDocument();
});

test('renders 404 page for unknown route', () => {
  render(
    <MemoryRouter initialEntries={["/unknown"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});
