const testimonials = [
  {
    name: 'Jack Cunningham',
    role: 'Voice Actor',
    quote:
      "Kathryn is a pleasure to work with. Kind, patient and flexible. She cares deeply for her craft and I'm always happy when we make projects together!",
  },
  {
    name: 'Jennifer Hanson',
    role: 'Music Composer',
    quote:
      "In my 8 years knowing Kathryn, her creative spark never ceases to amaze me. It's always a pleasure composing music for her projects.",
  },
  {
    name: 'Kayne Valian',
    role: 'Freelance Artist',
    quote:
      'A great team member who always keeps up to date with schedules, people and is always willing to lend a hand. Love her to bits.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#333] mb-3">Testimonials</h2>
          <div className="w-12 h-0.5 bg-[#2EA3F2] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, quote }) => (
            <div key={name} className="border border-gray-100 p-8 text-center hover:shadow-md transition-shadow">
              <div className="text-[#2EA3F2] text-4xl leading-none mb-4">"</div>
              <p className="text-[#666] italic mb-6 text-sm leading-relaxed">{quote}</p>
              <div className="w-8 h-0.5 bg-[#2EA3F2] mx-auto mb-4" />
              <p className="font-bold text-[#333] text-sm">{name}</p>
              <p className="text-[#2EA3F2] text-xs mt-1">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
