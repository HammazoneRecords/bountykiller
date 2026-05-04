import { motion } from 'motion/react';

const ITEMS = [
  { label: 'THE WARLORD TEE',      type: 'T-Shirt',  desc: 'Premium heavyweight cotton' },
  { label: 'GROUND GAD HOODIE',    type: 'Hoodie',   desc: 'Fleece pullover, military cut' },
  { label: 'POOR PEOPLE GOV. CAP', type: 'Cap',      desc: 'Structured six-panel, embroidered' },
  { label: 'NEXT MILLENNIUM CREWNECK', type: 'Crewneck', desc: 'Heavyweight drop-shoulder' },
];

export default function Merch() {
  return (
    <section className="relative h-screen flex items-center pt-14">
      <div className="relative z-10 w-full max-w-6xl px-10 md:px-14 lg:px-16">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-8">
          <p className="font-body font-bold text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(216,208,193,0.4)' }}>&#9632; Official Merchandise</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: '#D8D0C1' }}>MERCH</h2>
          <div className="h-px w-12 mt-3" style={{ background: '#6B1A1A' }} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="flex flex-col"
              style={{ border: '1px solid rgba(216,208,193,0.1)', background: 'rgba(12,14,7,0.4)' }}
            >
              {/* Placeholder product image */}
              <div className="aspect-square flex items-center justify-center"
                style={{ background: 'rgba(20,28,8,0.6)', borderBottom: '1px solid rgba(216,208,193,0.07)' }}>
                <span className="font-display text-[10px] tracking-widest uppercase" style={{ color: 'rgba(216,208,193,0.2)' }}>{item.type}</span>
              </div>
              <div className="p-3">
                <p className="font-display text-[11px] tracking-wider leading-tight mb-1" style={{ color: '#D8D0C1' }}>{item.label}</p>
                <p className="font-body text-[10px]" style={{ color: 'rgba(216,208,193,0.35)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            disabled
            className="font-display text-sm tracking-[0.2em] px-10 py-3 cursor-not-allowed"
            style={{ background: 'rgba(107,26,26,0.2)', border: '1px solid rgba(107,26,26,0.3)', color: 'rgba(200,100,100,0.4)' }}
          >
            VISIT STORE
          </button>
          <p className="font-body text-[10px] tracking-wider uppercase" style={{ color: 'rgba(216,208,193,0.25)' }}>
            Store activates after purchase — owner links Printify shop on setup
          </p>
        </motion.div>
      </div>
    </section>
  );
}
