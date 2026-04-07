import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/piad-scaled.png)' }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <img
            src="/images/PIAP1.png"
            alt="Pea In A Pod Productions"
            className="mx-auto mb-8 h-28 w-auto"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your Story, But With Awesome
          </h1>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Freelance multimedia services — voice acting, audio editing, scripting, and video post-production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="font-semibold px-8 py-3 transition-colors"
              style={{ backgroundColor: '#2ea3f2', color: '#fff' }}
            >
              Our Services
            </Link>
            <Link
              to="/about-kp"
              className="border-2 border-white font-semibold px-8 py-3 transition-colors hover:bg-white"
              style={{ color: '#fff' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#333' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
            >
              About Kathryn
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
