import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const sections = [
  { key: "navbar", component: Navbar },
  { key: "hero", component: Hero },
  { key: "features", component: Features },
  { key: "how-it-works", component: HowItWorks },
  { key: "testimonials", component: Testimonials },
  { key: "pricing", component: Pricing },
  { key: "faq", component: FAQ },
  { key: "cta", component: CTASection },
  { key: "footer", component: Footer },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {sections.map(({ key, component: Section }) => (
        <Section key={key} />
      ))}
    </div>
  );
}
