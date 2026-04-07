export default function TermsPage() {
  return (
    <main className="pt-16 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#333] mb-2">Terms & Conditions</h1>
        <div className="w-12 h-0.5 bg-[#2EA3F2] mb-10" />

        <div className="space-y-8 text-[#666] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#333] mb-3">Agreement</h2>
            <p>
              The artist reserves the right to decline any commission at their discretion. All work is undertaken based on an approved scoping document agreed upon by both parties prior to commencement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333] mb-3">Payment</h2>
            <p>
              A 50% prepayment is required before work begins. This deposit is non-refundable and secures your booking. The remaining 50% is due upon delivery of the final files.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333] mb-3">Intellectual Property Rights</h2>
            <p>
              The artist retains full copyright of all work produced unless a separate written agreement explicitly transfers ownership. Clients receive a non-exclusive licence for personal or non-commercial use of delivered work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333] mb-3">AI Protection</h2>
            <p>
              The artist's voice, likeness, and creative work may not be used for AI training, voice cloning, generative AI, or any derivative AI application without explicit written permission from the artist.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333] mb-3">Revisions</h2>
            <p>
              Reasonable revisions as outlined in the scoping document are included. Errors made by the artist will be corrected at no additional cost. Changes that fall outside the agreed scope may incur additional fees, which will be communicated before work proceeds.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333] mb-3">Cancellations</h2>
            <p>
              Cancellations are subject to a partial non-refundable policy based on the proportion of work completed at the time of cancellation. All cancellations are subject to Australian Consumer Law.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
