import { getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import Book from './components/Book';

test('renders learn react link', () => {
  render(<Book />);
  const buttonElement = screen.getByText('Book a table');
  //expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
