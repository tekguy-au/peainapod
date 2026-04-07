import { Link } from 'react-router-dom'

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#222222' }} className="text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/images/PIAP1.png" alt="Pea In A Pod Productions" className="h-12 w-auto" />

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: 'Services', hash: '#services' },
              { label: 'Portfolio', hash: '#portfolio' },
              { label: 'Testimonials', hash: '#testimonials' },
              { label: 'About', hash: '#about' },
              { label: 'Contact', hash: '#contact' },
            ].map(({ label, hash }) => (
              <button
                key={label}
                onClick={() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#bbb] hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
            <Link to="/terms" className="text-[#bbb] hover:text-white transition-colors">
              Terms
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61580831673648"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bbb] hover:text-[#2EA3F2] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/peainapodproductions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bbb] hover:text-[#2EA3F2] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#1F1F1F' }} className="py-4">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs text-[#bbb]">
          © 2025 Pea-InAPodProductions | All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
