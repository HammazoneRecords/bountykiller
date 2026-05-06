import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloadProps {
  onComplete: () => void;
}

export default function Preload({ onComplete }: PreloadProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src="/bountypreload.mp4"
            onEnded={onComplete}
            onLoadedData={() => setIsLoading(false)}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none" />

          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              >
                <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-6 left-6 md:top-8 md:left-8"
          >
            <span className="font-body text-lg md:text-2xl tracking-widest text-white font-bold uppercase">
              BOUNTY <span style={{ color: '#C8A84B' }}>KILLER</span>
            </span>
          </motion.div>

          <AnimatePresence>
            {showSkip && !isLoading && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={onComplete}
                className="absolute bottom-6 right-6 md:bottom-8 md:right-8 font-body text-xs uppercase tracking-widest px-5 py-2 border border-white/30 text-white/60 hover:border-white hover:text-white transition-all duration-200"
              >
                Skip ⏭
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
