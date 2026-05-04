import { motion } from 'motion/react';

const FACTS = [
  { label: 'Origin', value: 'Kingston, Jamaica' },
  { label: 'Active Since', value: '1993' },
  { label: 'Title', value: 'The Warlord · Poor People Governor · Ground Gad' },
  { label: 'Label', value: 'Mirgenics Records · VP Records' },
  { label: 'Legacy', value: 'Mentored Kartel, Mavado, Aidonia & a generation' },
];

export default function About() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-14">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="font-body font-bold text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: 'rgba(216,208,193,0.4)' }}>
            &#9632; The Warlord
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-2" style={{ color: '#D8D0C1' }}>THE GENERAL</h2>
          <div className="h-px w-16 mb-8" style={{ background: '#6B1A1A' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.15 }}>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(216,208,193,0.7)' }}>
              Rodney Basil Price — known worldwide as <strong style={{ color: '#D8D0C1' }}>Bounty Killer</strong> — is the architect of modern dancehall. For over three decades, the Warlord has commanded stages from Kingston's garrison communities to the Barclays Center, New York.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-lg mt-4" style={{ color: 'rgba(216,208,193,0.5)' }}>
              As the "Poor People Governor," his music has been the voice of the marginalized — blunt, uncompromising, and politically charged. He is not just an artist. He is a doctrine.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
            className="space-y-3">
            {FACTS.map((f, i) => (
              <div key={i} className="flex gap-4 items-start py-3" style={{ borderBottom: '1px solid rgba(216,208,193,0.08)' }}>
                <span className="font-body font-bold text-[10px] tracking-widest uppercase shrink-0 w-24" style={{ color: 'rgba(216,208,193,0.4)' }}>{f.label}</span>
                <span className="font-body text-sm" style={{ color: '#D8D0C1' }}>{f.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
