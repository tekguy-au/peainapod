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
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center h-16 relative">
        <button
          className="md:hidden absolute right-6 text-[#333] p-2"
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
                  className="block px-[18px] font-bold transition-colors"
                  style={{ fontSize: '18px', color: active ? '#000000' : 'rgba(0,0,0,0.6)' }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#000000' }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'rgba(0,0,0,0.6)' }}
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
                  className="font-bold"
                  style={{ fontSize: '18px', color: location.pathname === to ? '#000000' : 'rgba(0,0,0,0.6)' }}
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
