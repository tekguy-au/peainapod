import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import TermsPage from '@/pages/Terms'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
