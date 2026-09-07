import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/translations';
import { Check, ChevronDown, Globe, X } from 'lucide-react';
import { cyberSound } from '../utils/cyberSound';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (code: SupportedLanguage) => {
    const chosen = SUPPORTED_LANGUAGES.find((l) => l.code === code);
    setLanguage(code);
    cyberSound.playClick();
    setIsOpen(false);

    // Show temporary confirmation toast
    if (chosen) {
      setToastMessage(`${chosen.flag} ${chosen.nativeName}`);
      setTimeout(() => {
        setToastMessage(null);
      }, 2400);
    }
  };

  return (
    <>
      {/* Trigger Button in Header */}
      <button
        type="button"
        id="language-switcher-trigger"
        onClick={() => {
          cyberSound.playClick();
          setIsOpen(true);
        }}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={`Current language: ${currentLang.nativeName}. Click to change language.`}
        className="group inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-stone-200 hover:border-stone-300 dark:border-neutral-800 dark:hover:border-neutral-700 bg-stone-100/90 hover:bg-stone-200/90 dark:bg-neutral-900/90 dark:hover:bg-neutral-850 text-stone-800 dark:text-stone-200 transition-all duration-200 cursor-pointer min-h-[36px] sm:min-h-[38px] select-none shrink-0 active:scale-95 shadow-2xs"
      >
        <span className="text-base sm:text-lg leading-none shrink-0">{currentLang.flag}</span>
        <span className="text-xs font-semibold tracking-wide text-stone-800 dark:text-stone-100 hidden sm:inline">
          {compact ? currentLang.code.toUpperCase() : currentLang.nativeName}
        </span>
        <span className="text-[11px] font-bold tracking-wider text-stone-800 dark:text-stone-100 sm:hidden">
          {currentLang.code.toUpperCase()}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-600 dark:text-stone-500 dark:group-hover:text-stone-300 transition-transform duration-200 shrink-0" />
      </button>

      {/* Global Portaled Language Picker Dialog */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          id="language-picker-overlay"
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 dark:bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="language-picker-title"
        >
          {/* Modal / Bottom Sheet Content */}
          <div
            className="relative w-full sm:max-w-md bg-white dark:bg-neutral-950 text-stone-900 dark:text-white rounded-t-3xl sm:rounded-3xl border-t sm:border border-stone-200 dark:border-neutral-800 shadow-2xl p-4 sm:p-6 pb-8 sm:pb-6 z-10 animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200 max-h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sheet Handle */}
            <div className="sm:hidden w-12 h-1.5 rounded-full bg-stone-300 dark:bg-neutral-700 mx-auto mb-3 shrink-0" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-stone-100 dark:border-neutral-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 dark:bg-red-950/70 dark:text-red-400 flex items-center justify-center shadow-2xs">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h2 id="language-picker-title" className="font-bold text-sm sm:text-base leading-tight text-stone-900 dark:text-white">
                    Select Language / Roghnaigh Teanga
                  </h2>
                  <p className="text-2xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Momoda Asian Street Food • 6 Languages
                  </p>
                </div>
              </div>

              <button
                type="button"
                id="close-language-modal-btn"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 dark:bg-neutral-900 hover:bg-stone-200 dark:hover:bg-neutral-800 text-stone-600 dark:text-stone-300 flex items-center justify-center cursor-pointer transition active:scale-95 border border-stone-200 dark:border-neutral-800"
                aria-label="Close language selector"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Language Options List */}
            <div className="space-y-2 overflow-y-auto pr-1 -mr-1 flex-1 py-1">
              {SUPPORTED_LANGUAGES.map((item) => {
                const isSelected = item.code === language;
                return (
                  <button
                    key={item.code}
                    type="button"
                    id={`lang-option-${item.code}`}
                    onClick={() => handleSelect(item.code)}
                    className={`w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl text-left transition-all active:scale-98 cursor-pointer border min-h-[56px] ${
                      isSelected
                        ? 'bg-red-50/90 dark:bg-red-950/60 border-red-500 dark:border-red-600 text-red-900 dark:text-white ring-2 ring-red-500/20 shadow-xs'
                        : 'bg-stone-50/80 hover:bg-stone-100 dark:bg-neutral-900/70 dark:hover:bg-neutral-850 border-stone-200/90 dark:border-neutral-800 text-stone-800 dark:text-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl leading-none shrink-0 drop-shadow-xs">
                        {item.flag}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-bold leading-snug text-stone-900 dark:text-white">
                          {item.nativeName}
                        </span>
                        <span className="text-2xs sm:text-xs text-stone-500 dark:text-stone-400">
                          {item.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className="text-2xs font-bold px-2 py-0.5 rounded-md bg-stone-200/80 dark:bg-neutral-800 text-stone-700 dark:text-stone-300">
                        {item.code.toUpperCase()}
                      </span>
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-stone-300 dark:border-neutral-700" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Temporary Confirmation Toast - Portaled to document.body */}
      {toastMessage && typeof document !== 'undefined' && createPortal(
        <div className="fixed top-18 sm:top-20 left-1/2 -translate-x-1/2 z-[10000] bg-stone-900 text-white dark:bg-white dark:text-stone-950 px-4 py-2 rounded-full shadow-2xl border border-stone-800 dark:border-stone-200 flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-top-2 duration-150 pointer-events-none">
          <Check className="w-4 h-4 text-emerald-500 stroke-[3] shrink-0" />
          <span>Language: {toastMessage}</span>
        </div>,
        document.body
      )}
    </>
  );
};
