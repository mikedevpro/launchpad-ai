import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CTASection from '../components/CTASection';

describe('CTASection', () => {
  it('renders the section title', () => {
    render(<CTASection />);
    expect(
      screen.getByRole('heading', { name: 'Turn meetings into momentum.' })
    ).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<CTASection />);
    expect(
      screen.getByText(
        'LaunchPad AI helps teams turn notes into clear action, without extra friction.'
      )
    ).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<CTASection />);
    expect(screen.getByRole('button', { name: 'Start free today' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Book a demo' })).toBeInTheDocument();
  });

  it('applies primary (cyan) style to the first button', () => {
    render(<CTASection />);
    const primaryBtn = screen.getByRole('button', { name: 'Start free today' });
    expect(primaryBtn).toHaveClass('bg-cyan-400');
  });

  it('applies secondary (border) style to the second button', () => {
    render(<CTASection />);
    const secondaryBtn = screen.getByRole('button', { name: 'Book a demo' });
    expect(secondaryBtn).toHaveClass('border');
    expect(secondaryBtn).not.toHaveClass('bg-cyan-400');
  });
});
