import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { headerContent } from '../content';

describe('Navbar Component Unit Tests', () => {
  it('should render brand logo text from header.json', () => {
    render(<Navbar />);
    expect(screen.getByText(headerContent.logoText)).toBeInTheDocument();
  });

  it('should toggle theme when dark mode switcher button is clicked', () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText('Toggle dark mode');
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
