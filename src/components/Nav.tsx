import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Terms', to: '/terms' },
  { label: 'About', to: '/about-kp' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[99999] bg-white" style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.1)' }}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src="/images/PIAP1.png" alt="Pea In A Pod Productions" className="h-10 w-auto" />
        </Link>

        <button
          className="md:hidden text-[#333] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className="hidden md:flex items-center gap-0">
          {links.map(({ label, to }) => {
            const active = location.pathname === to
            return (
              <li key={label}>
                <Link
                  to={to}
                  className="block px-[22px] text-sm font-medium transition-opacity"
                  style={{ color: active ? '#2ea3f2' : 'rgba(0,0,0,0.6)' }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium"
                  style={{ color: location.pathname === to ? '#2ea3f2' : 'rgba(0,0,0,0.6)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
