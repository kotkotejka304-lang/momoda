import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      id="theme-toggle-switch"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      onClick={(e) => toggleTheme(e)}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      className={`group relative inline-flex items-center gap-2 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 ${className}`}
    >
      {/* Switch Track */}
      <div
        className={`relative w-[60px] h-[32px] rounded-full p-1 transition-colors duration-400 ease-out flex items-center border ${
          isDark
            ? 'bg-neutral-900 border-neutral-700/90 shadow-inner shadow-black/50'
            : 'bg-stone-200/90 border-stone-300 shadow-inner shadow-stone-300/60'
        }`}
      >
        {/* Track Icons (background celestial indicators) */}
        <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none">
          <Sun
            className={`w-3.5 h-3.5 transition-all duration-300 ${
              isDark ? 'text-stone-600 opacity-30 scale-75' : 'text-amber-500 opacity-90 scale-95'
            }`}
          />
          <div className="flex items-center gap-0.5">
            {isDark && (
              <Sparkles className="w-2 h-2 text-amber-300/40 animate-pulse hidden xs:inline" />
            )}
            <Moon
              className={`w-3.5 h-3.5 transition-all duration-300 ${
                isDark ? 'text-amber-200 opacity-90 scale-95' : 'text-stone-400 opacity-30 scale-75'
              }`}
            />
          </div>
        </div>

        {/* Hardware-Accelerated Sliding Thumb */}
        <motion.div
          animate={{ x: isDark ? 28 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 480,
            damping: 28,
            mass: 0.8,
          }}
          className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-br from-neutral-800 to-neutral-950 text-amber-300 border border-neutral-700 shadow-black/70 ring-1 ring-amber-400/20'
              : 'bg-white text-amber-500 border border-stone-200 shadow-stone-400/40 ring-1 ring-amber-500/20'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, scale: 0.2, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.2, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="flex items-center justify-center"
              >
                <Moon className="w-3.5 h-3.5 fill-amber-300/25 text-amber-300 stroke-[2.2]" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, scale: 0.2, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0.2, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="flex items-center justify-center"
              >
                <Sun className="w-3.5 h-3.5 fill-amber-400/25 text-amber-500 stroke-[2.2]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-semibold text-stone-700 dark:text-stone-300 transition-colors duration-300">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </motion.button>
  );
};

