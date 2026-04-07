export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#333] mb-3">Story Teller</h2>
          <div className="w-12 h-0.5 bg-[#2EA3F2] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <img
              src="/images/kathryn1.png"
              alt="Kathryn Peacock"
              className="w-full object-cover shadow-md"
            />
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/kathryn2.png" alt="Kathryn Peacock" className="w-full object-cover shadow-md" />
              <img src="/images/kathryn3.png" alt="Kathryn Peacock" className="w-full object-cover shadow-md" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#333] mb-2">Kathryn Peacock</h3>
            <p className="text-[#2EA3F2] font-semibold text-sm mb-5">
              Freelance Multimedia Artist · Queensland, Australia
            </p>
            <div className="space-y-4 text-[#666] text-sm leading-relaxed">
              <p>
                Kathryn is a freelance multimedia artist based in Queensland, Australia, creating
                meaningful narratives through video, audio, and design. As a neurodivergent creative,
                she transforms abstract concepts into immersive, emotionally resonant experiences.
              </p>
              <p>
                With a background in Screen and Media studies, Kathryn brings professional expertise
                across editing, sound design, and production support. She believes great storytelling
                should never be out of reach — offering accessible freelance services at reasonable
                rates for indie filmmakers and creators.
              </p>
              <p>
                Her philosophy is rooted in connection, creativity, and growth. Whether it's voice
                work, audio post, scripting, or video editing, every project is crafted with care
                and purpose.
              </p>
              <p className="font-semibold text-[#333] italic">
                "Professional dreamer, full-time storyteller."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
