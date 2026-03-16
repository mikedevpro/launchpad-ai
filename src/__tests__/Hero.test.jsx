import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { heroStats } from '../data/content';

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
    AnimatePresence: ({ children }) => children ?? null,
  };
});

import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', {
        name: 'Turn scattered meeting notes into clear next steps.',
      })
    ).toBeInTheDocument();
  });

  it('renders the product badge / tagline', () => {
    render(<Hero />);
    expect(
      screen.getByText('Meeting notes → action-ready summaries')
    ).toBeInTheDocument();
  });

  it('renders the primary CTA button', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: 'Try LaunchPad AI' })).toBeInTheDocument();
  });

  it('renders the secondary CTA button', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: 'Watch demo' })).toBeInTheDocument();
  });

  it('renders all hero stat items from content.js', () => {
    render(<Hero />);
    heroStats.forEach((stat) => {
      expect(screen.getByText(stat)).toBeInTheDocument();
    });
  });

  it('renders the social-proof trust line', () => {
    render(<Hero />);
    expect(
      screen.getByText('Trusted by founders, small teams, and client-based businesses.')
    ).toBeInTheDocument();
  });

  it('renders the HeroCard weekly summary title', () => {
    render(<Hero />);
    expect(screen.getByText('Monday Product Sync')).toBeInTheDocument();
  });

  it('renders the HeroCard "Ready to share" status badge', () => {
    render(<Hero />);
    expect(screen.getByText('Ready to share')).toBeInTheDocument();
  });

  it('renders the HeroCard action items section', () => {
    render(<Hero />);
    expect(screen.getByText('Action items')).toBeInTheDocument();
    expect(
      screen.getByText('8 tasks assigned with owners and deadlines.')
    ).toBeInTheDocument();
  });

  it('renders the HeroCard blockers section', () => {
    render(<Hero />);
    expect(screen.getByText('Blockers')).toBeInTheDocument();
    expect(
      screen.getByText('2 items flagged for follow-up this week.')
    ).toBeInTheDocument();
  });
});
