import { motion } from 'motion/react';

export default function Sybkpics() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-14">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-8">
          <p className="font-body font-bold text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(216,208,193,0.4)' }}>&#9632; Visual Archive</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: '#D8D0C1' }}>SYBKPICS</h2>
          <div className="h-px w-12 mt-3" style={{ background: '#6B1A1A' }} />
        </motion.div>

        {/* Photo grid — 4 tiles using the single hero photo, owner to swap in gallery images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2"
        >
          {[
            { label: 'Stage Presence', obj: 'object-top' },
            { label: 'The Command', obj: 'object-center' },
            { label: 'Ground Gad', obj: 'object-bottom' },
            { label: 'The Warlord', obj: 'object-top' },
          ].map((tile, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group"
              style={{ border: '1px solid rgba(216,208,193,0.1)' }}>
              <img
                src="/bk-hero.webp"
                alt={tile.label}
                className={`w-full h-full object-cover ${tile.obj} transition-transform duration-500 group-hover:scale-105`}
                style={{ filter: `saturate(0.5) brightness(${0.35 + i * 0.05})`, transform: `scale(${1 + i * 0.05})` }}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(12,14,7,0.5)' }} />
              <p className="absolute bottom-2 left-3 font-body font-bold text-[9px] tracking-widest uppercase" style={{ color: 'rgba(216,208,193,0.5)' }}>
                {tile.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 font-body text-[10px] tracking-widest uppercase"
          style={{ color: 'rgba(216,208,193,0.2)' }}
        >
          Full gallery activates after purchase — owner uploads media after transfer
        </motion.p>
      </div>
    </section>
  );
}
