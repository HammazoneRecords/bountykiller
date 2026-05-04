import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-14">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full">

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mb-8">
          <p className="font-body font-bold text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: 'rgba(216,208,193,0.4)' }}>&#9632; Booking · Press · Business</p>
          <h2 className="font-display text-4xl md:text-6xl" style={{ color: '#D8D0C1' }}>COMMAND LINE</h2>
          <div className="h-px w-12 mt-3" style={{ background: '#6B1A1A' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="p-6 md:p-10"
          style={{ border: '1px solid rgba(216,208,193,0.1)', background: 'rgba(12,14,7,0.5)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="NAME / ORGANIZATION"
              className="w-full bg-transparent px-5 py-3 font-body text-xs tracking-widest focus:outline-none transition-colors"
              style={{ border: '1px solid rgba(216,208,193,0.15)', color: '#D8D0C1', caretColor: '#6B1A1A' }}
              onFocus={e => (e.target.style.borderColor = 'rgba(216,208,193,0.4)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(216,208,193,0.15)')} />
            <input type="email" placeholder="EMAIL ADDRESS"
              className="w-full bg-transparent px-5 py-3 font-body text-xs tracking-widest focus:outline-none transition-colors"
              style={{ border: '1px solid rgba(216,208,193,0.15)', color: '#D8D0C1', caretColor: '#6B1A1A' }}
              onFocus={e => (e.target.style.borderColor = 'rgba(216,208,193,0.4)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(216,208,193,0.15)')} />
          </div>
          <select className="w-full bg-transparent px-5 py-3 font-body text-xs tracking-widest mb-4 focus:outline-none appearance-none"
            style={{ border: '1px solid rgba(216,208,193,0.15)', color: 'rgba(216,208,193,0.5)', background: 'rgba(12,14,7,0.8)' }}>
            <option value="" style={{ background: '#0C0E07' }}>ENQUIRY TYPE</option>
            <option value="booking" style={{ background: '#0C0E07' }}>Event Booking</option>
            <option value="press" style={{ background: '#0C0E07' }}>Press / Media</option>
            <option value="collab" style={{ background: '#0C0E07' }}>Collaboration</option>
            <option value="business" style={{ background: '#0C0E07' }}>Business</option>
          </select>
          <textarea placeholder="YOUR MESSAGE" rows={4}
            className="w-full bg-transparent px-5 py-3 font-body text-xs tracking-widest mb-4 focus:outline-none resize-none transition-colors"
            style={{ border: '1px solid rgba(216,208,193,0.15)', color: '#D8D0C1', caretColor: '#6B1A1A' }}
            onFocus={e => (e.target.style.borderColor = 'rgba(216,208,193,0.4)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(216,208,193,0.15)')} />
          <button disabled
            className="w-full py-3 font-display text-sm tracking-[0.25em] cursor-not-allowed"
            style={{ background: 'rgba(107,26,26,0.2)', border: '1px solid rgba(107,26,26,0.3)', color: 'rgba(200,100,100,0.4)' }}>
            TRANSMIT
          </button>
          <p className="mt-2 text-center font-body text-[9px] tracking-widest uppercase" style={{ color: 'rgba(216,208,193,0.2)' }}>
            Contact form activates after purchase — owner configures on setup
          </p>
        </motion.div>
      </div>
    </section>
  );
}
