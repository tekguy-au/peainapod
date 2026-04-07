import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HomePage from '@/pages/Home'
import ServicesPage from '@/pages/Services'
import TestimonialsPage from '@/pages/Testimonials'
import PortfolioPage from '@/pages/Portfolio'
import AboutPage from '@/pages/About'
import TermsPage from '@/pages/Terms'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about-kp" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
