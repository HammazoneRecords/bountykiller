import { motion } from 'motion/react';

const HEADLINES = [
  {
    date: '2025',
    headline: 'Bounty Killer Shuts Down The Barclays Center',
    sub: 'A legacy-defining night — proof of dancehall\'s most important figure in 30 years.',
    tag: 'LIVE',
  },
  {
    date: '2024',
    headline: 'The Warlord Returns to International Stages',
    sub: 'Multiple sold-out performances across the diaspora. The General\'s Command never ceases.',
    tag: 'TOUR',
  },
  {
    date: '2024',
    headline: 'Bounty Killer: The Godfather\'s Era',
    sub: 'New releases and collaborations cementing his status as the architect of modern dancehall.',
    tag: 'MUSIC',
  },
  {
    date: 'Ongoing',
    headline: 'Poor People Governor — The Social Mission',
    sub: 'Bounty Killer continues community advocacy, mentorship, and support for the marginalized.',
    tag: 'COMMUNITY',
  },
];

export default function News() {
  return (
    <section className="relative h-screen flex items-center pt-14">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-8">
          <p className="font-body font-bold text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(216,208,193,0.4)' }}>&#9632; Dispatches</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: '#D8D0C1' }}>FIELD REPORTS</h2>
          <div className="h-px w-12 mt-3" style={{ background: '#6B1A1A' }} />
        </motion.div>

        <div className="space-y-0">
          {HEADLINES.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 py-4"
              style={{ borderBottom: '1px solid rgba(216,208,193,0.08)' }}
            >
              <span className="font-body font-bold text-[9px] tracking-widest shrink-0 w-16" style={{ color: 'rgba(216,208,193,0.35)' }}>{h.date}</span>
              <span className="font-body font-bold text-[9px] tracking-widest px-2 py-0.5 shrink-0"
                style={{ border: '1px solid rgba(139,26,26,0.5)', color: 'rgba(200,100,100,0.8)', background: 'rgba(107,26,26,0.1)' }}>
                {h.tag}
              </span>
              <div className="flex-1">
                <p className="font-body font-bold text-base md:text-lg" style={{ color: '#D8D0C1' }}>{h.headline}</p>
                <p className="font-body text-sm mt-0.5" style={{ color: 'rgba(216,208,193,0.45)' }}>{h.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
