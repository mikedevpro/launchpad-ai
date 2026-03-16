import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { navLinks } from '../data/content';

vi.mock('framer-motion', async () => {
  const { createElement } = await import('react');

  const makeMotionComponent = (tag) =>
    function MockMotion({
      children,
      initial,
      animate,
      exit,
      variants,
      whileHover,
      whileTap,
      whileInView,
      transition,
      viewport,
      ...rest
    }) {
      return createElement(tag, rest, children);
    };

  return {
    motion: new Proxy(
      {},
      {
        get(_, tag) {
          if (typeof tag !== 'string') return undefined;
          return makeMotionComponent(tag);
        },
      }
    ),
    // Render children directly so conditional rendering in AnimatePresence works
    AnimatePresence: ({ children }) => children ?? null,
  };
});

import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders the brand logo and name', () => {
    render(<Navbar />);
    expect(screen.getByText('LP')).toBeInTheDocument();
    expect(screen.getByText('LaunchPad AI')).toBeInTheDocument();
  });

  it('renders all desktop navigation links from content.js', () => {
    render(<Navbar />);
    navLinks.forEach(({ label, href }) => {
      // At least one link for each label exists (desktop nav always rendered)
      const links = screen.getAllByRole('link', { name: label });
      expect(links.length).toBeGreaterThanOrEqual(1);
      expect(links[0]).toHaveAttribute('href', href);
    });
  });

  it('renders the action buttons', () => {
    render(<Navbar />);
    expect(screen.getAllByRole('button', { name: 'Watch demo' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: 'Start free' }).length).toBeGreaterThan(0);
  });

  it('hides the mobile menu on initial render', () => {
    render(<Navbar />);
    // Desktop nav always renders its links; mobile menu does not.
    // When closed, each nav label appears exactly once (desktop only).
    navLinks.forEach(({ label }) => {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(1);
    });
  });

  it('sets aria-expanded="false" on the toggle button by default', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('opens the mobile menu when the toggle button is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));

    // Mobile menu is now rendered — each nav label appears twice (desktop + mobile)
    navLinks.forEach(({ label }) => {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(2);
    });
  });

  it('sets aria-expanded="true" after opening the menu', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));

    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  it('closes the mobile menu when a mobile nav link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Open the menu
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }));
    // Two "Features" links exist — [0] desktop, [1] mobile
    const mobileLink = screen.getAllByRole('link', { name: 'Features' })[1];
    await user.click(mobileLink);

    // Mobile menu is gone — back to one link per label
    navLinks.forEach(({ label }) => {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(1);
    });
  });

  it('toggles the menu closed again when the button is clicked a second time', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggleBtn = screen.getByRole('button', { name: 'Toggle menu' });
    await user.click(toggleBtn); // open
    await user.click(toggleBtn); // close

    navLinks.forEach(({ label }) => {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(1);
    });
  });
});
