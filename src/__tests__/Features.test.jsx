import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { features } from '../data/content';

// Capture props passed to every motion.article so animation config can be asserted.
// vi.hoisted ensures this variable is available inside the vi.mock factory, which
// Vitest hoists to the top of the module before any imports are resolved.
const articleCaptures = vi.hoisted(() => []);

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
      if (tag === 'article') {
        articleCaptures.push({ initial, whileInView, transition });
      }
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

import Features from '../components/Features';

describe('Features', () => {
  beforeEach(() => {
    // Reset capture array between tests
    articleCaptures.length = 0;
  });

  it('renders the section heading', () => {
    render(<Features />);
    expect(
      screen.getByRole('heading', { name: 'Built to keep teams moving.' })
    ).toBeInTheDocument();
  });

  it('renders the "Features" label', () => {
    render(<Features />);
    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  it('renders the correct number of feature cards from content.js', () => {
    render(<Features />);
    expect(screen.getAllByRole('article')).toHaveLength(features.length);
  });

  it('renders every feature title from content.js', () => {
    render(<Features />);
    features.forEach(({ title }) => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    });
  });

  it('renders every feature description from content.js', () => {
    render(<Features />);
    features.forEach(({ description }) => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it('applies a fade-up initial animation to each feature card', () => {
    render(<Features />);
    expect(articleCaptures).toHaveLength(features.length);
    articleCaptures.forEach(({ initial }) => {
      expect(initial).toEqual({ opacity: 0, y: 18 });
    });
  });

  it('applies the correct whileInView animation to each feature card', () => {
    render(<Features />);
    articleCaptures.forEach(({ whileInView }) => {
      expect(whileInView).toEqual({ opacity: 1, y: 0 });
    });
  });

  it('applies staggered animation delays to feature cards', () => {
    render(<Features />);
    articleCaptures.forEach(({ transition }, index) => {
      expect(transition.delay).toBeCloseTo(index * 0.08);
    });
  });
});
