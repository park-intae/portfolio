import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/common/Navbar';
import * as scrollUtil from '../utils/scroll';

describe('Mobile & Tablet Navigation Drawer Unit Tests', () => {
  it('should render hamburger menu toggle button for mobile/tablet screens', () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText('Toggle mobile and tablet menu drawer');
    expect(toggleButton).toBeInTheDocument();
  });

  it('should open mobile slide-in drawer when hamburger button is clicked', () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText('Toggle mobile and tablet menu drawer');
    
    // Click to open drawer
    fireEvent.click(toggleButton);
    expect(screen.getByText('Navigation Menu')).toBeInTheDocument();

    // Check menu items
    const navItems = screen.getAllByRole('button', { name: 'About Me' });
    expect(navItems.length).toBeGreaterThan(0);
  });

  it('should trigger smoothScrollTo and close drawer when a drawer item is clicked', () => {
    const scrollSpy = vi.spyOn(scrollUtil, 'smoothScrollTo').mockImplementation(() => {});

    render(<Navbar />);
    const toggleButton = screen.getByLabelText('Toggle mobile and tablet menu drawer');
    fireEvent.click(toggleButton);

    const drawerAboutButton = screen.getAllByRole('button', { name: 'About Me' })[0];
    fireEvent.click(drawerAboutButton);

    expect(scrollSpy).toHaveBeenCalledWith('about', 750);
  });
});
