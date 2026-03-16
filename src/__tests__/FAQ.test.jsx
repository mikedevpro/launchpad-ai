import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQ from '../components/FAQ';
import { faqs } from '../data/content';

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />);
    expect(
      screen.getByRole('heading', { name: 'A few quick answers.' })
    ).toBeInTheDocument();
  });

  it('renders the FAQ label', () => {
    render(<FAQ />);
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('renders the correct number of FAQ items', () => {
    render(<FAQ />);
    // Each FAQItem is an <article> element
    expect(screen.getAllByRole('article')).toHaveLength(faqs.length);
  });

  it('renders every question from content.js', () => {
    render(<FAQ />);
    faqs.forEach(({ question }) => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });

  it('renders every answer from content.js', () => {
    render(<FAQ />);
    faqs.forEach(({ answer }) => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });
  });
});
