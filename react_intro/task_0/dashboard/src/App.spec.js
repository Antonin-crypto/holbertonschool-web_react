import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders h1 with text 'School dashboard'', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders correct text in body and footer', () => {
    render(<App />);

    // Paragraph in App-body
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();

    // Paragraph in App-footer
    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(
      new RegExp(`©? ?${currentYear} - holberton school`, 'i')
    );
    expect(footerText).toBeInTheDocument();
  });

  test('renders the logo image', () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });
});
