const videos: { title: string; url: string }[] = [
  // YouTube links to be added — paste full youtube.com/watch?v=... or youtu.be/... URLs here
]

function getEmbedUrl(url: string) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

export default function Portfolio() {
  if (videos.length === 0) {
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#333] mb-3">Portfolio</h2>
            <div className="w-12 h-0.5 bg-[#2EA3F2] mx-auto mb-6" />
            <p className="text-[#666]">Portfolio coming soon — check back shortly.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#333] mb-3">Portfolio</h2>
          <div className="w-12 h-0.5 bg-[#2EA3F2] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(({ title, url }) => {
            const embedUrl = getEmbedUrl(url)
            if (!embedUrl) return null
            return (
              <div key={url} className="bg-white shadow-sm overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src={embedUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                {title && (
                  <div className="p-3">
                    <p className="text-sm font-semibold text-[#333]">{title}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
