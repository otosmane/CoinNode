// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinNode/i);
    expect(titleElement).toBeInTheDocument();
});
