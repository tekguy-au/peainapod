import { Link } from 'react-router-dom'

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Terms', to: '/terms' },
  { label: 'About', to: '/about-kp' },
]

export default function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: '#222222' }} className="text-white py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to="/">
            <img src="/images/PIAP1.png" alt="Pea In A Pod Productions" className="h-12 w-auto" />
          </Link>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm transition-opacity"
                  style={{ color: '#bbb' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61580831673648"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#bbb' }}
              className="hover:text-[#2ea3f2] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/peainapodproductions/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#bbb' }}
              className="hover:text-[#2ea3f2] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#1f1f1f' }} className="py-3">
        <p className="text-center text-xs" style={{ color: '#bbb' }}>
          © 2025 Pea-InAPodProductions | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
