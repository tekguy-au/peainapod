import { Mic, Music, FileText, Film } from 'lucide-react'

const services = [
  {
    icon: Mic,
    title: 'Voice Acting',
    description: 'Versatile voiceovers for animation, narration, games, and character work.',
    features: [
      'Character voices with accents',
      'Emotionally expressive readings (3 takes/line)',
      'High-quality home studio recording',
      'Optional direction via notes or live sessions',
    ],
  },
  {
    icon: Music,
    title: 'Audio Editing',
    description: 'Immersive audio for storytelling across formats.',
    features: [
      'Noise and artifact cleanup',
      'Layered sound design & mixing',
      'Remote voice direction',
      'Script-to-audio sync',
    ],
  },
  {
    icon: FileText,
    title: 'Scripting & Pre-Production',
    description: 'Ideas to production-ready scripts with character, pacing, and heart.',
    features: [
      'Original scripts, rewrites, dialogue refinement',
      'Treatments, loglines, concept development',
      'Visual references, mood boards, worldbuilding',
      'Set design, prop lists, continuity tracking',
    ],
  },
  {
    icon: Film,
    title: 'Video Editing & Post-Production',
    description: 'Polished story-driven edits for film, YouTube, and social media.',
    features: [
      'Narrative editing, titles, transitions, colour correction',
      'Multi-platform formatting (YouTube, Reels, TikTok)',
      'Subtitles, captions, text overlays, VFX',
      'Audio balancing and organised handoffs',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#333] mb-3">Services</h2>
          <div className="w-12 h-0.5 bg-[#2EA3F2] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div key={title} className="border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={28} className="text-[#2EA3F2] shrink-0" />
                <h3 className="text-xl font-bold text-[#333]">{title}</h3>
              </div>
              <p className="text-[#666] mb-5">{description}</p>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#666] text-sm">
                    <span className="text-[#2EA3F2] mt-1 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
