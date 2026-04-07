const sections = [
  {
    heading: 'Agreement',
    body: `The client acknowledges reading and accepting these terms by commissioning the Artist. The Artist may decline a commission before accepting the project or issuing an invoice.`,
  },
  {
    heading: 'Scope of Work',
    body: `All work is based on an agreed and approved project scoping document. Work requested outside this scope may require additional fees, which will be discussed and agreed upon before proceeding.`,
  },
  {
    heading: 'Payment Terms',
    body: `A 50% pre-payment is required upfront before work commences. The remaining 50% is due on delivery of the final files. Pre-payment constitutes advance payment for time and services scheduled and commenced, not a refundable deposit.`,
  },
  {
    heading: 'Copyright & Usage',
    body: `The Artist retains copyright of all work produced unless otherwise agreed in writing. Clients receive a non-exclusive licence for personal or non-commercial use only. Commercial licensing is available by separate written agreement.`,
  },
  {
    heading: 'AI & Voice Protection',
    body: `The Artist's voice, likeness, and creative work may not be used for AI training or datasets, voice cloning or synthesis, generative, transformative, or synthetic AI tools, or any derivative AI application without explicit written permission from the Artist.`,
  },
  {
    heading: 'Revisions',
    body: `Reasonable revisions as outlined in the scoping document are included. Errors made by the Artist will be corrected at no additional cost. Changes falling outside the agreed scope may incur additional fees, communicated before work proceeds.`,
  },
  {
    heading: 'Timelines & Delivery',
    body: `Agreed timelines are discussed and confirmed upfront. Delays caused by the client (e.g. late feedback, missing assets) do not extend the Artist's delivery responsibility beyond the original timeline.`,
  },
  {
    heading: 'Privacy & NDAs',
    body: `All agreed projects are subject to NDA acceptance before work begins where required. Client information and project details are kept confidential and will not be shared with third parties without consent.`,
  },
  {
    heading: 'Cancellations & Refunds',
    body: `Refunds are based on the proportion of work completed at the time of cancellation. Pre-payment may be partially non-refundable once work has started. All cancellations are subject to Australian Consumer Law.`,
  },
]

export default function TermsPage() {
  return (
    <main className="pt-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#333' }}>
          Pea-In-A-Pod Productions — Terms of Service
        </h1>
        <div className="w-12 h-0.5 mb-10" style={{ backgroundColor: '#2ea3f2' }} />

        <div className="space-y-8">
          {sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2 className="text-lg font-bold mb-2" style={{ color: '#333' }}>{heading}</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
