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

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ada097' }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61580831673648"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full border transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/peainapodproductions/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full border transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
        <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>
          © 2025 Pea-InAPodProductions | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
