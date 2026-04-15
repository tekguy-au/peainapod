import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '/images/photographer-icon-06.png',
    title: 'Voice Acting',
    body: 'Bring your characters and narration to life with authentic, emotive voice performances tailored to your project.',
  },
  {
    icon: '/images/photographer-icon-04.png',
    title: 'ScriptWriting',
    body: 'Compelling scripts that capture your voice and drive your narrative forward with purpose and clarity.',
  },
  {
    icon: '/images/photographer-icon-03.png',
    title: 'Pre-Production',
    body: 'From concept to call sheet — meticulous planning that sets your project up for a smooth production.',
  },
  {
    icon: '/images/photographer-icon-02.png',
    title: 'Post-Production',
    body: 'End-to-end finishing that polishes your project into a professional, audience-ready final product.',
  },
]

function ServiceCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/services"
      className="flex flex-col items-center text-center p-8 transition-all"
      style={{
        backgroundColor: hovered ? '#F9F9F9' : '#ffffff',
        boxShadow: hovered ? '0 0 20px rgba(0,0,0,0.1)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={icon} alt={title} style={{ width: 40, height: 40, marginBottom: 16 }} />
      <h5
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#333',
          marginBottom: 12,
        }}
      >
        {title}
      </h5>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7 }}>{body}</p>
    </Link>
  )
}

function FacebookCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function HomePage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setFormState('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <main className="pt-16">
      {/* Section 0 — Banner image only */}
      <section
        style={{
          backgroundImage: 'url(/images/PIAP1.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          minHeight: 598,
          padding: 0,
          marginTop: 0,
          marginBottom: 0,
        }}
      />

      {/* Section 1 — Services grid */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: 32, paddingBottom: 80 }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {services.map(s => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Contact / black bg */}
      <section style={{ backgroundColor: '#000000', paddingTop: 80, paddingBottom: 80 }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 75,
              fontWeight: 700,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 48,
              lineHeight: 1.1,
            }}
          >
            Get in touch
          </h2>

          <form onSubmit={handleSubmit} style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 28 }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#ffffff',
                  marginBottom: 8,
                }}
              >
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid #ffffff',
                  color: '#ffffff',
                  fontSize: 16,
                  padding: '8px 0',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#ffffff',
                  marginBottom: 8,
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid #ffffff',
                  color: '#ffffff',
                  fontSize: 16,
                  padding: '8px 0',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ marginBottom: 36 }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#ffffff',
                  marginBottom: 8,
                }}
              >
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid #ffffff',
                  color: '#ffffff',
                  fontSize: 16,
                  padding: '8px 0',
                  outline: 'none',
                  resize: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={formState === 'sending'}
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                padding: '14px 36px',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                cursor: formState === 'sending' ? 'not-allowed' : 'pointer',
                opacity: formState === 'sending' ? 0.7 : 1,
              }}
            >
              {formState === 'sending' ? 'Sending…' : 'Submit'}
            </button>

            {formState === 'success' && (
              <p style={{ color: '#aaa', marginTop: 16, fontSize: 14 }}>
                Thank you! Your message has been sent.
              </p>
            )}
            {formState === 'error' && (
              <p style={{ color: '#f66', marginTop: 16, fontSize: 14 }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>

          <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
            <a
              href="https://www.facebook.com/profile.php?id=61580831673648"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
              aria-label="Facebook"
            >
              <FacebookCircle />
            </a>
            <a
              href="https://www.instagram.com/peainapodproductions/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
              aria-label="Instagram"
            >
              <InstagramCircle />
            </a>
          </div>

          <div
            style={{
              borderTop: '1px solid #666',
              paddingTop: 24,
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <span style={{ color: '#ffffff', fontSize: 14 }}>Gold Coast, QLD</span>
            <a
              href="mailto:info@peainapod.au"
              style={{ color: '#ffffff', fontSize: 14, textDecoration: 'none' }}
            >
              info@peainapod.au
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
