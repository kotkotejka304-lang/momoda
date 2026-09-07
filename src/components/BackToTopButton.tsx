import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  hasActiveCart?: boolean;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({ hasActiveCart = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top of menu"
      className={`fixed right-3 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/95 dark:bg-neutral-900/95 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-neutral-700 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-200 active:scale-90 hover:bg-stone-100 dark:hover:bg-neutral-800 cursor-pointer ${
        hasActiveCart
          ? 'bottom-[138px] sm:bottom-24'
          : 'bottom-[68px] sm:bottom-8'
      }`}
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-red-600 dark:text-red-500 stroke-[2.5]" />
    </button>
  );
};
