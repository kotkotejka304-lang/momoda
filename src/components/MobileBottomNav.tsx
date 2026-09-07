import React from 'react';
import { UtensilsCrossed, Search, Phone, Clock, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface MobileBottomNavProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenInfo: (tab?: 'hours' | 'contact' | 'deals' | 'allergens') => void;
  onFocusSearch: () => void;
  onScrollToMenu: () => void;
  activeCategory: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenInfo,
  onFocusSearch,
  onScrollToMenu,
  activeCategory,
}) => {
  const { t } = useLanguage();

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg border-t border-stone-200/90 dark:border-neutral-800/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_25px_rgba(0,0,0,0.4)] pb-safe transition-colors duration-300"
    >
      <div className="flex items-center justify-around px-2 py-1.5 min-h-[56px]">
        {/* Menu Tab */}
        <button
          type="button"
          id="mobile-nav-menu"
          onClick={onScrollToMenu}
          aria-label="Browse Menu"
          className="flex-1 flex flex-col items-center justify-center py-1 min-h-[44px] text-stone-600 dark:text-stone-400 hover:text-red-600 dark:hover:text-red-400 active:scale-95 transition cursor-pointer"
        >
          <UtensilsCrossed className="w-5 h-5 text-red-600 dark:text-red-500 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight text-stone-800 dark:text-stone-200">
            {t.catAll || 'Menu'}
          </span>
        </button>

        {/* Search Tab */}
        <button
          type="button"
          id="mobile-nav-search"
          onClick={onFocusSearch}
          aria-label="Search Dishes"
          className="flex-1 flex flex-col items-center justify-center py-1 min-h-[44px] text-stone-600 dark:text-stone-400 hover:text-red-600 dark:hover:text-red-400 active:scale-95 transition cursor-pointer"
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">
            Search
          </span>
        </button>

        {/* Quick Call */}
        <a
          href="tel:+353436672871"
          id="mobile-nav-call"
          aria-label="Call Momoda Restaurant"
          className="flex-1 flex flex-col items-center justify-center py-1 min-h-[44px] text-stone-600 dark:text-stone-400 hover:text-red-600 dark:hover:text-red-400 active:scale-95 transition"
        >
          <Phone className="w-5 h-5 mb-0.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-[10px] font-semibold tracking-tight">
            Call
          </span>
        </a>

        {/* Hours & Info */}
        <button
          type="button"
          id="mobile-nav-hours"
          onClick={() => onOpenInfo('hours')}
          aria-label="Restaurant Hours and Allergens"
          className="flex-1 flex flex-col items-center justify-center py-1 min-h-[44px] text-stone-600 dark:text-stone-400 hover:text-red-600 dark:hover:text-red-400 active:scale-95 transition cursor-pointer"
        >
          <Clock className="w-5 h-5 mb-0.5 text-amber-500" />
          <span className="text-[10px] font-semibold tracking-tight">
            Hours
          </span>
        </button>

        {/* Order Slip / Cart */}
        <button
          type="button"
          id="mobile-nav-cart"
          onClick={onOpenCart}
          aria-label={`Order slip, ${cartCount} items`}
          className="flex-1 flex flex-col items-center justify-center py-1 min-h-[44px] relative active:scale-95 transition cursor-pointer"
        >
          <div className="relative">
            <div
              className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                cartCount > 0
                  ? 'bg-red-600 text-white shadow-md shadow-red-900/30'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-red-500">
                {cartCount}
              </span>
            )}
          </div>
          <span
            className={`text-[10px] font-bold tracking-tight mt-0.5 ${
              cartCount > 0 ? 'text-red-600 dark:text-red-400' : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            {cartCount > 0 ? `€${cartTotal.toFixed(2)}` : t.orderSlip || 'Slip'}
          </span>
        </button>
      </div>
    </nav>
  );
};
