import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero — black bg, KP1.png at bottom */}
      <section
        className="relative flex items-end justify-center bg-black bg-no-repeat bg-bottom bg-cover"
        style={{
          backgroundImage: 'url(/images/KP1.png)',
          paddingTop: '10vw',
          paddingBottom: '10vw',
          minHeight: '70vh',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Kathryn Peacock
          </h1>
          <p
            className="text-sm font-semibold mb-8 tracking-[0.2em] uppercase text-white"
          >
            Story Teller
          </p>
          <Link
            to="/portfolio"
            className="inline-block font-semibold px-8 py-3 text-sm transition-colors"
            style={{ backgroundColor: '#2ea3f2', color: '#fff' }}
          >
            View A Selection Of My Work
          </Link>
        </div>
      </section>

      {/* In The Moment */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333' }}>In The Moment</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#666' }}>
            <p>
              Hi, I'm Kathryn, a freelance multimedia artist based in sunny Queensland, Australia.
              I create meaningful stories through video, audio, and design, transforming abstract
              ideas into immersive, emotionally resonant experiences.
            </p>
            <p>
              As a neurodivergent creative, I combine structured project management with imaginative
              spontaneity — bringing both analytical precision and creative intuition to every project.
              My background in Screen and Media has shaped me into an adaptable collaborator across
              editing, sound design, voice work, and production support.
            </p>
          </div>
        </div>
      </section>

      {/* Why This */}
      <section className="py-16 px-6 bg-white" style={{ borderTop: '1px solid #eee' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333' }}>Why This</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#666' }}>
            <p>
              I believe great storytelling should never be out of reach. That's why I offer
              freelance services at reasonable rates — supporting indie filmmakers and creators
              with limited budgets who still want professional-quality results.
            </p>
            <p>
              Every project I take on is guided by a commitment to connection, creativity, and
              growth. Whether it's a short film, a YouTube series, or a passion project, I bring
              the same care and dedication to authentic storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* About Kathryn */}
      <section className="py-16 px-6 bg-white" style={{ borderTop: '1px solid #eee' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333' }}>About Kathryn</h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#666' }}>
            <p>
              Blending film, sound, and design, Kathryn balances structure with spontaneity to
              create work that resonates. Whether directing her own projects or collaborating with
              other creators, she brings both heart and professionalism to everything she does.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61580831673648"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold transition-colors hover:text-[#2ea3f2]"
              style={{ color: '#666' }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/peainapodproductions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold transition-colors hover:text-[#2ea3f2]"
              style={{ color: '#666' }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
