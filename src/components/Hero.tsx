export default function Hero() {
  function scrollTo(hash: string) {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/PEA-INAPODPRODUCTIONS-1-scaled.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <img
          src="/images/PIAP1.png"
          alt="Pea In A Pod Productions"
          className="mx-auto mb-8 h-28 w-auto"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Your Story, But With Awesome
        </h1>
        <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
          Voice acting, audio editing, scripting, and video post-production by Kathryn Peacock — freelance multimedia artist, Queensland Australia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('#services')}
            className="bg-[#2EA3F2] hover:bg-[#1a8fd1] text-white font-semibold px-8 py-3 transition-colors"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="border-2 border-white text-white hover:bg-white hover:text-[#333] font-semibold px-8 py-3 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
