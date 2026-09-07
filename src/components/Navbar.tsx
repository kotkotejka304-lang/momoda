import React, { useState } from 'react';
import { ShoppingBag, Search, Info, Phone, MapPin, X, ShieldAlert } from 'lucide-react';
import { MomodaLogo } from './MomodaLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenInfo: (tab?: 'hours' | 'contact' | 'deals' | 'allergens') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  searchQuery,
  onSearchChange,
  onOpenInfo,
}) => {
  const { t } = useLanguage();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState<boolean>(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-stone-100 dark:bg-neutral-900 text-stone-600 dark:text-stone-300 text-xs py-1.5 px-2.5 sm:px-4 border-b border-stone-200 dark:border-neutral-800 flex items-center justify-between w-full max-w-full overflow-hidden transition-colors duration-300">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 truncate min-w-0 max-w-full">
          <span className="font-medium text-stone-800 dark:text-stone-200 flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-red-500 shrink-0" />
            <span className="truncate">{t.locationTicker}</span>
          </span>

          <span className="text-stone-300 dark:text-neutral-700 hidden xs:inline">•</span>
          <a
            href="tel:+353436672871"
            className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium items-center gap-1.5 transition shrink-0 hidden xs:flex"
          >
            <Phone className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
            <span>{t.phoneTicker}</span>
          </a>

          <span className="text-stone-300 dark:text-neutral-700 sm:hidden">•</span>
          <button
            type="button"
            onClick={() => onOpenInfo('allergens')}
            className="sm:hidden text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium cursor-pointer shrink-0 flex items-center gap-1"
          >
            <ShieldAlert className="w-3 h-3 text-amber-500 dark:text-amber-400" />
            <span>{t.allergensTicker}</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400 shrink-0">
          <span>{t.deliveryTimeTicker}</span>
          <span className="text-stone-300 dark:text-neutral-700">•</span>
          <button
            type="button"
            onClick={() => onOpenInfo('deals')}
            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold underline cursor-pointer"
          >
            {t.dealsTicker}
          </button>
          <span className="text-stone-300 dark:text-neutral-700">•</span>
          <button
            type="button"
            onClick={() => onOpenInfo('allergens')}
            className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white cursor-pointer"
          >
            {t.allergensTicker}
          </button>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-30 w-full max-w-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-stone-200 dark:border-neutral-800 shadow-xs dark:shadow-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 h-15 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <MomodaLogo size="sm" />
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold tracking-tight text-neutral-900 dark:text-white text-sm xs:text-base sm:text-lg leading-none transition-colors duration-300 truncate">
                Momoda
              </span>
              <span className="text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-red-600 dark:text-red-500 leading-none mt-1 truncate">
                Asian Street Food
              </span>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-stone-400 dark:text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="desktop-search-input"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-stone-100 dark:bg-neutral-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2 border border-stone-200 dark:border-neutral-800 focus:border-red-500 focus:outline-none transition-colors duration-300"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Actions: Theme Toggle + Language Switcher + Info + Cart */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Mobile Search Toggle */}
            <button
              type="button"
              id="mobile-search-toggle"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              aria-label="Toggle search input"
              className={`md:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition active:scale-95 cursor-pointer border ${
                isMobileSearchOpen || searchQuery
                  ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border-red-300 dark:border-red-600/50'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-neutral-800'
              }`}
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Smooth Light / Dark Mode Toggle */}
            <ThemeToggle />

            {/* Multi-Language Switcher */}
            <LanguageSwitcher />

            {/* Info Button (Desktop) */}
            <button
              type="button"
              id="open-info-btn"
              onClick={() => onOpenInfo('hours')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-neutral-800 hover:border-stone-300 dark:hover:border-neutral-700 bg-stone-100/90 hover:bg-stone-200 dark:bg-neutral-900/80 dark:hover:bg-neutral-850 text-stone-800 dark:text-stone-200 font-medium text-xs sm:text-sm transition cursor-pointer min-h-[38px]"
              title="Opening Hours, Location & Allergens"
            >
              <Info className="w-4 h-4 text-red-600 dark:text-red-500" />
              <span>{t.infoAndHours}</span>
            </button>

            {/* Cart / Order Slip Button */}
            <button
              type="button"
              id="open-cart-btn"
              onClick={onOpenCart}
              aria-label={`View order slip, ${cartCount} items, total €${cartTotal.toFixed(2)}`}
              className="relative inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-medium text-xs sm:text-sm shadow-md shadow-red-900/20 dark:shadow-red-900/30 border border-red-500/40 transition active:scale-95 cursor-pointer min-h-[34px] sm:min-h-[38px] shrink-0"
            >
              <div className="relative">
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white dark:bg-neutral-950 text-red-600 dark:text-red-400 text-[9px] sm:text-2xs font-bold rounded-full flex items-center justify-center border border-red-500 shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-2xs text-red-100 uppercase font-semibold hidden sm:inline">
                  {t.orderSlip}
                </span>
                <span className="font-bold text-white text-xs sm:text-sm">
                  €{cartTotal.toFixed(2)}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Expandable Mobile Search Bar */}
        {(isMobileSearchOpen || searchQuery) && (
          <div className="md:hidden px-3.5 pb-2.5 pt-1 border-t border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-neutral-900">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-stone-400 dark:text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="mobile-search-input"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.searchPlaceholder}
                autoFocus={isMobileSearchOpen && !searchQuery}
                className="w-full bg-white dark:bg-neutral-950 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 text-xs rounded-xl pl-9 pr-9 py-2 border border-stone-200 dark:border-neutral-800 focus:outline-none focus:border-red-500 min-h-[40px]"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 text-xs"
                >
                  ✕
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsMobileSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

