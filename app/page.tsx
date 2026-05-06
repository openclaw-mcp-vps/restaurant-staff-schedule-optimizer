export default function Home() {
  const faqs = [
    {
      q: 'Which POS systems do you support?',
      a: 'ShiftSmart integrates with Square, Toast, Clover, and Lightspeed via their APIs. More integrations are added regularly.'
    },
    {
      q: 'How accurate are the demand forecasts?',
      a: 'Our ML models achieve 85–92% accuracy by combining your historical sales data with local weather and event calendars.'
    },
    {
      q: 'Can staff receive their schedules automatically?',
      a: 'Yes. Staff get SMS and email notifications the moment a new schedule is published, with one-tap shift confirmation.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Restaurant Staffing AI
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Guessing.<br />Start Scheduling Smarter.
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          ShiftSmart connects to your POS, reads weather and local events, then auto-generates optimized staff schedules — so you're never over- or under-staffed again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '📊', title: 'POS Integration', desc: 'Pulls real sales history from Square, Toast, Clover & more.' },
          { icon: '🌦️', title: 'Smart Forecasting', desc: 'Weather + local events feed our ML demand prediction engine.' },
          { icon: '📅', title: 'Auto Scheduling', desc: 'Optimal shifts generated in seconds, sent straight to staff.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Flat Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · unlimited staff · 1 location</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-2 mb-8">
            {[
              'POS data sync (Square, Toast, Clover, Lightspeed)',
              'AI demand forecasting with weather & events',
              'Auto-generated weekly schedules',
              'SMS & email staff notifications',
              'Schedule approval & shift swaps',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} ShiftSmart. Built for restaurant managers who value their time.
      </footer>
    </main>
  )
}
