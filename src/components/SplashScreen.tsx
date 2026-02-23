import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-vitalis-sage z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-vitalis-teal rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              opacity: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.5, 0],
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* DNA / Heartbeat Animation */}
        <div className="w-32 h-32 mb-8 relative">
           <svg viewBox="0 0 100 100" className="w-full h-full text-vitalis-teal">
             <motion.path
               d="M10,50 Q25,20 40,50 T70,50 T100,50"
               fill="none"
               stroke="currentColor"
               strokeWidth="4"
               strokeLinecap="round"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 1 }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
             <motion.circle 
               cx="50" cy="50" r="45" 
               stroke="currentColor" 
               strokeWidth="2" 
               fill="none"
               className="opacity-20"
             />
             <motion.circle 
               cx="50" cy="50" r="45" 
               stroke="currentColor" 
               strokeWidth="2" 
               fill="none"
               strokeDasharray="283"
               strokeDashoffset={283 - (283 * progress) / 100}
               className="rotate-[-90deg] origin-center"
             />
           </svg>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl text-vitalis-teal font-bold mb-2"
        >
          VITALIS HEALTH
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-vitalis-grey text-sm uppercase tracking-widest"
        >
          {progress < 40 ? "Checking coverage..." : progress < 80 ? "Preparing wellness..." : "Almost there..."}
        </motion.p>
      </div>
    </div>
  );
}
