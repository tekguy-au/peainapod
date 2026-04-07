import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', to: '/', hash: '' },
  { label: 'Services', to: '/', hash: '#services' },
  { label: 'Portfolio', to: '/', hash: '#portfolio' },
  { label: 'Testimonials', to: '/', hash: '#testimonials' },
  { label: 'About', to: '/', hash: '#about' },
  { label: 'Contact', to: '/', hash: '#contact' },
  { label: 'Terms', to: '/terms', hash: '' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  function handleNav(hash: string) {
    setOpen(false)
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" onClick={() => handleNav('')}>
          <img src="/images/PIAP1.png" alt="Pea In A Pod Productions" className="h-10 w-auto" />
        </Link>

        <button
          className="md:hidden text-[#333] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, to, hash }) => {
            const isActive = location.pathname === to && !hash
            return (
              <li key={label}>
                {hash ? (
                  <button
                    onClick={() => handleNav(hash)}
                    className="text-sm font-semibold text-[#666] hover:text-[#2EA3F2] transition-colors"
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    to={to}
                    className={`text-sm font-semibold transition-colors ${isActive ? 'text-[#2EA3F2]' : 'text-[#666] hover:text-[#2EA3F2]'}`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ label, to, hash }) => (
              <li key={label}>
                {hash ? (
                  <button
                    onClick={() => handleNav(hash)}
                    className="text-sm font-semibold text-[#666] hover:text-[#2EA3F2] transition-colors"
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-[#666] hover:text-[#2EA3F2] transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
