const videos: { title: string; url: string }[] = [
  // Paste YouTube URLs here — e.g. { title: 'My Short Film', url: 'https://www.youtube.com/watch?v=...' }
]

function getEmbedUrl(url: string) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

export default function PortfolioPage() {
  return (
    <main className="pt-16">
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-3xl font-bold mb-3" style={{ color: '#333' }}>Portfolio</h1>
            <div className="w-12 h-0.5 mx-auto" style={{ backgroundColor: '#2ea3f2' }} />
          </div>

          {videos.length === 0 ? (
            <p className="text-center text-sm" style={{ color: '#666' }}>
              Portfolio coming soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(({ title, url }) => {
                const embedUrl = getEmbedUrl(url)
                if (!embedUrl) return null
                return (
                  <div key={url} className="overflow-hidden shadow-sm">
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
                      <div className="p-3 bg-white">
                        <p className="text-sm font-semibold" style={{ color: '#333' }}>{title}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
