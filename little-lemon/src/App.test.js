import { fireEvent, getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import Home from './Home'

test('renders learn react link', () => {
  render(<Home />);
  const buttonElement = screen.getByText('Book a table');
  expect(buttonElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<Home />);
  fireEvent.click(screen.getByText('Book a table'))
  const optionElement = screen.getByText('17:00');
  expect(optionElement).toBeInTheDocument();
});