const services = [
  {
    title: 'VOICE ACTING',
    description: 'Versatile voiceovers for animation, narration, games and character work.',
    features: [
      'Character voices, accents and narrator tones',
      'Emotionally expressive reads (3 takes per line)',
      'High-quality home studio recording',
      'Optional direction via notes or live interactive sessions',
    ],
  },
  {
    title: 'AUDIO EDITING',
    description: 'Immersive audio that enhances storytelling across formats.',
    features: [
      'Clean-up (noise, hums, clicks)',
      'Layered sound design & mixing',
      'Remote voice direction & pacing notes',
      'Script-to-audio syncing',
    ],
  },
  {
    title: 'SCRIPTING & PREPRODUCTION',
    description: 'Turning ideas into production-ready scripts with character, pacing and heart.',
    features: [
      'Original scripts, rewrites & dialogue polishing',
      'Treatments, loglines & concept development',
      'Visual references, mood boards and worldbuilding',
      'Set design ideas, prop lists & continuity tracking',
    ],
  },
  {
    title: 'VIDEO EDITING & POST-PRODUCTION',
    description: 'Polished story-driven edits for film, YouTube, Social Media and more.',
    features: [
      'Narrative editing, titles and transitions',
      'Colour correction & audio balancing',
      'Multi-platform formatting (YouTube, Reels, TikTok)',
      'Subtitles, captions & text overlays; VFX; organised handoffs',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {services.map(({ title, description, features }) => (
        <section
          key={title}
          className="py-16 px-6"
          style={{ backgroundColor: 'rgba(135,106,87,0.34)', borderBottom: '1px solid rgba(135,106,87,0.2)' }}
        >
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl font-bold mb-3 tracking-wide"
              style={{ color: '#333', letterSpacing: '0.05em' }}
            >
              {title}
            </h2>
            <p className="mb-5" style={{ color: '#666' }}>{description}</p>
            <ul className="space-y-2">
              {features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#666' }}>
                  <span style={{ color: '#2ea3f2', marginTop: '2px' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  )
}
