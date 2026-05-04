import { motion } from 'motion/react';

const PHOTOS = [
  { src: 'https://www.dancehallmag.com/assets/2020/06/BountyKiller.jpg',          label: 'The Warlord' },
  { src: 'https://www.dancehallmag.com/assets/2019/12/bounty-1.jpg',              label: 'Ground Gad' },
  { src: 'https://clintonlindsay.com/wp-content/uploads/2025/08/BountyKiller2025.jpg', label: 'Barclays Center 2025' },
  { src: 'https://www.dancehallmag.com/assets/2025/07/bounty9.jpg',               label: 'The General' },
];

export default function Gallery() {
  return (
    <section className="relative h-screen flex items-center pt-14">
      <div className="relative z-10 w-full max-w-6xl px-10 md:px-14 lg:px-16">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-6">
          <p className="font-body font-bold text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(216,208,193,0.4)' }}>&#9632; Visual Archive</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: '#D8D0C1' }}>GALLERY</h2>
          <div className="h-px w-12 mt-3" style={{ background: '#6B1A1A' }} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {PHOTOS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="relative aspect-square overflow-hidden group"
              style={{ border: '1px solid rgba(216,208,193,0.1)' }}
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                style={{ filter: 'saturate(0.7) brightness(0.8)' }}
              />
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                style={{ background: 'rgba(12,14,7,0.35)' }} />
              <p className="absolute bottom-2 left-3 font-body font-bold text-[9px] tracking-widest uppercase"
                style={{ color: 'rgba(216,208,193,0.6)' }}>
                {p.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
