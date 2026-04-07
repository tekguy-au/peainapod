import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#333] mb-3">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-[#2EA3F2] mx-auto mb-6" />
          <p className="text-[#666] text-sm">
            Ready to bring your story to life? Let's talk.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-12">
            <p className="text-[#2EA3F2] font-semibold text-lg mb-2">Message sent!</p>
            <p className="text-[#666] text-sm">Thanks for reaching out — Kathryn will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#2EA3F2] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#2EA3F2] transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border border-gray-200 px-4 py-3 text-sm text-[#333] focus:outline-none focus:border-[#2EA3F2] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again or email info@peainapod.au directly.</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#2EA3F2] hover:bg-[#1a8fd1] disabled:opacity-60 text-white font-semibold py-3 transition-colors"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
