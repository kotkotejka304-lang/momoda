import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/translations';
import { Check, ChevronDown, Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        id="language-switcher-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Current language: ${currentLang.nativeName}. Click to change language.`}
        className={`group inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer min-h-[36px] sm:min-h-[38px] select-none shrink-0 ${
          isOpen
            ? 'bg-stone-100 dark:bg-neutral-900 border-red-600 text-red-600 dark:text-white shadow-xs'
            : 'bg-stone-100/90 hover:bg-stone-200/90 dark:bg-neutral-900/90 dark:hover:bg-neutral-850 border-stone-200 dark:border-neutral-800 hover:border-stone-300 dark:hover:border-neutral-700 text-stone-800 dark:text-stone-200'
        }`}
      >
        <span className="text-sm sm:text-base leading-none">{currentLang.flag}</span>
        <span className="text-xs font-semibold tracking-wide text-stone-800 dark:text-stone-100 hidden sm:inline">
          {compact ? currentLang.code.toUpperCase() : currentLang.nativeName}
        </span>
        <span className="text-[11px] font-bold tracking-wider text-stone-800 dark:text-stone-100 sm:hidden">
          {currentLang.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 dark:text-stone-400 group-hover:text-stone-600 dark:group-hover:text-stone-200 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-red-500' : ''
          }`}
        />
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <div
          id="language-switcher-menu"
          className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-1.5rem)] rounded-2xl bg-white/98 dark:bg-neutral-900/95 backdrop-blur-xl border border-stone-200 dark:border-neutral-800 shadow-xl shadow-stone-400/20 dark:shadow-black/80 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150 p-1.5"
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-stone-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-medium">
            <span className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-semibold">
              <Globe className="w-3.5 h-3.5" />
              Language / Teanga
            </span>
            <span className="text-stone-400 dark:text-stone-500 text-2xs">6 Languages</span>
          </div>

          {/* Options List */}
          <div className="py-1 space-y-0.5" role="menu">
            {SUPPORTED_LANGUAGES.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  type="button"
                  id={`lang-option-${item.code}`}
                  onClick={() => handleSelect(item.code)}
                  role="menuitem"
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-700/60 text-red-700 dark:text-white font-medium'
                      : 'hover:bg-stone-100 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg leading-none">{item.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold leading-snug text-stone-900 dark:text-white">
                        {item.nativeName}
                      </span>
                      <span className="text-2xs text-stone-500 dark:text-stone-400">
                        {item.name}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-red-600 dark:text-red-400 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
