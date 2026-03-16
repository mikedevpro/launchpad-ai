import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import { appData } from '../data/content'

export default function LandingPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 p-6 md:p-10">
      <Navbar />
      <main className="grid gap-8">
        <Hero />
        <p className="text-sm text-slate-500">{appData.headline}</p>
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
