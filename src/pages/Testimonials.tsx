const testimonials = [
  {
    image: '/images/kathryn2.png',
    name: 'Jack Cunningham',
    role: 'Voice Actor',
    quote:
      "Kathryn is a pleasure to work with. Kind, patient and flexible. She cares deeply for her craft and I'm always happy when we make projects together!",
  },
  {
    image: '/images/kathryn3.png',
    name: 'Jennifer Hanson',
    role: 'Music Composer',
    quote:
      "In my 8 years knowing Kathryn, her creative spark never ceases to amaze me. It's always a pleasure composing music for her projects.",
  },
  {
    image: '/images/kathryn1.png',
    name: 'Kayne Valian',
    role: 'Freelance Artist',
    quote:
      'A great team member who always keeps up to date with schedules, people and is always willing to lend a hand. Love her to bits.',
  },
]

export default function TestimonialsPage() {
  return (
    <main className="pt-16">
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-3xl font-bold mb-3" style={{ color: '#333' }}>Testimonials</h1>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: '#2ea3f2' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ image, name, role, quote }) => (
              <div key={name} className="flex flex-col items-center text-center">
                <img
                  src={image}
                  alt={name}
                  className="w-40 h-40 object-cover rounded-full mb-6"
                />
                <p
                  className="italic text-sm leading-relaxed mb-6"
                  style={{ color: '#666' }}
                >
                  "{quote}"
                </p>
                <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#2ea3f2' }} />
                <p className="font-bold text-sm" style={{ color: '#333' }}>{name}</p>
                <p className="text-xs mt-1" style={{ color: '#2ea3f2' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
