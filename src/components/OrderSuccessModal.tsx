import React from 'react';
import { CheckCircle2, Clock, Utensils } from 'lucide-react';
import { CartItem } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedDish } from '../i18n/dishTranslations';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderCode: string;
  tableNumber?: string;
  orderType?: 'waiter' | 'paid';
  items: CartItem[];
  total: number;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  orderCode,
  items,
  total,
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const totalDishCount = items.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative bg-white dark:bg-neutral-950 text-stone-900 dark:text-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-neutral-800 my-auto transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top celebratory banner */}
        <div className="bg-stone-50 dark:bg-neutral-900 border-b border-stone-200 dark:border-neutral-800 text-stone-900 dark:text-white p-5 sm:p-6 text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/40 flex items-center justify-center mx-auto mb-2 shadow-sm">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <span className="text-2xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
            Order Slip Confirmed
          </span>
          <h3 className="text-xl font-bold text-stone-900 dark:text-white">{t.orderConfirmedHeading}</h3>
          <p className="text-xs text-stone-600 dark:text-stone-300">
            {t.orderConfirmedSubtitle}
          </p>
        </div>

        <div className="p-4 sm:p-6 space-y-4 text-left text-xs pb-safe">
          {/* Order Details Grid */}
          <div className="p-3 sm:p-4 bg-stone-50 dark:bg-neutral-900 rounded-2xl border border-stone-200 dark:border-neutral-800 grid grid-cols-2 gap-2.5 sm:gap-3 text-stone-600 dark:text-stone-400">
            <div>
              <span className="block text-2xs text-stone-500 font-medium uppercase">{t.waiterVerificationCode}</span>
              <span className="font-bold text-red-600 dark:text-red-400 text-sm tracking-wide">{orderCode}</span>
            </div>
            <div>
              <span className="block text-2xs text-stone-500 font-medium uppercase">{t.subtotalLabel}</span>
              <span className="font-bold text-stone-900 dark:text-white text-sm flex items-center gap-1">
                <Utensils className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                {totalDishCount} dishes
              </span>
            </div>
            <div>
              <span className="block text-2xs text-stone-500 font-medium uppercase">{t.prepTimePrefix}</span>
              <span className="font-bold text-amber-600 dark:text-amber-400 text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 8–12 Min
              </span>
            </div>
            <div>
              <span className="block text-2xs text-stone-500 font-medium uppercase">{t.totalLabel}</span>
              <span className="font-bold text-stone-900 dark:text-white text-sm">€{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Quick Item List */}
          <div className="space-y-1.5 pt-2 border-t border-stone-200 dark:border-neutral-800">
            <span className="text-xs text-stone-500 dark:text-stone-400 uppercase font-semibold">
              Items on Slip ({totalDishCount})
            </span>
            <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
              {items.map((it) => {
                const localized = getLocalizedDish(it.item, language);
                return (
                  <div key={it.cartItemId} className="flex justify-between items-start text-xs text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-neutral-900 p-2.5 rounded-xl border border-stone-200 dark:border-neutral-800">
                    <div className="pr-2">
                      <span className="font-semibold text-stone-900 dark:text-white">{it.quantity}x {localized.name}</span>
                      {it.item.asianName && (
                        <span className="block text-2xs text-red-600/80 dark:text-red-400/80">{it.item.asianName}</span>
                      )}
                      {Object.entries(it.selectedOptions).length > 0 && (
                        <span className="block text-2xs text-stone-500 dark:text-stone-400">
                          {Object.values(it.selectedOptions).join(', ')}
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-stone-900 dark:text-white shrink-0">€{it.totalPrice.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-2xs text-stone-600 dark:text-stone-400 text-center bg-stone-50 dark:bg-neutral-900/60 p-2.5 rounded-xl border border-stone-200 dark:border-neutral-800">
            💳 Cash or card payment handled directly with your waiter at your table.
          </div>

          {/* Close Action */}
          <button
            type="button"
            id="order-success-close-btn"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-900/20 dark:shadow-red-950/40 border border-red-500/40 transition cursor-pointer"
          >
            {t.backToMenuBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
