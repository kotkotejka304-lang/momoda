import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle2, Utensils, Check, Smartphone } from 'lucide-react';
import { MomodaLogo } from './MomodaLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedDish, getLocalizedOptionChoice } from '../i18n/dishTranslations';

interface WaiterOrderSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderAcknowledged: (orderCode: string) => void;
}

export const WaiterOrderSlipModal: React.FC<WaiterOrderSlipModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderAcknowledged,
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Generate a consistent order code
  const orderCode = `MM-${Math.floor(1000 + (cartItems.length * 137) % 9000)}`;
  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleItemCheck = (cartItemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [cartItemId]: !prev[cartItemId],
    }));
  };

  const handleConfirmOrder = () => {
    onOrderAcknowledged(orderCode);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-neutral-950 text-stone-900 dark:text-white w-full max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-neutral-800 flex flex-col max-h-[94vh] sm:max-h-[90vh] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner for Waiter */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white px-3 py-2 text-center text-xs font-semibold tracking-wide uppercase flex items-center justify-center gap-1.5 shrink-0 shadow-md">
          <Smartphone className="w-4 h-4 text-white" />
          <span>{t.waiterInstructionHeading}</span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close order slip"
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-stone-100 dark:bg-neutral-900/80 dark:hover:bg-neutral-800 text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white border border-stone-200 dark:border-neutral-700 flex items-center justify-center transition cursor-pointer shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Digital Slip Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 bg-stone-50 dark:bg-neutral-950 text-left overscroll-contain">
          {/* Logo & Table Header */}
          <div className="text-center space-y-1.5 border-b border-dashed border-stone-300 dark:border-neutral-800 pb-3">
            <div className="flex justify-center">
              <MomodaLogo size="sm" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Momoda Asian Street Food • Guest Order Slip
            </div>
            <div className="text-xs text-stone-500 dark:text-stone-400">
              1 Pound St, Edgeworthstown, Co. Longford • Tel: (043) 667 2871
            </div>

            {/* Order Ticket Code Badge */}
            <div className="mt-2 inline-flex items-center justify-center gap-2 bg-white dark:bg-neutral-900 text-stone-900 dark:text-white px-4 py-2 rounded-xl border border-stone-200 dark:border-neutral-800 shadow-xs">
              <Utensils className="w-4 h-4 text-red-600 dark:text-red-500" />
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">{t.waiterVerificationCode}:</span>
                <span className="text-base sm:text-lg font-extrabold text-red-600 dark:text-red-400">{orderCode}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-2xs text-stone-500 dark:text-stone-400 pt-2 px-1 border-t border-stone-200/70 dark:border-neutral-800/70">
              <span>ITEMS: <strong className="text-stone-800 dark:text-stone-200">{totalItemCount}</strong></span>
              <span>TOTAL: <strong className="text-red-600 dark:text-red-400 font-bold">€{total.toFixed(2)}</strong></span>
              <span>TIME: <strong className="text-stone-800 dark:text-stone-200">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong></span>
            </div>
          </div>

          {/* Waiter Checklist Guide */}
          <div className="bg-amber-50/80 dark:bg-neutral-900 border border-amber-200/80 dark:border-neutral-800 rounded-xl p-3 text-xs text-amber-950 dark:text-stone-300">
            <p className="leading-relaxed">
              💡 <strong>Waiter Notice:</strong> {t.waiterInstructionText}
            </p>
          </div>

          {/* Itemized Order List */}
          <div className="space-y-2 max-h-[36vh] sm:max-h-[38vh] overflow-y-auto pr-0.5">
            {cartItems.map((cartItem) => {
              const isChecked = !!checkedItems[cartItem.cartItemId];
              const localized = getLocalizedDish(cartItem.item, language);

              return (
                <div
                  key={cartItem.cartItemId}
                  onClick={() => toggleItemCheck(cartItem.cartItemId)}
                  className={`min-h-[44px] p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'bg-stone-200/50 border-stone-300 dark:bg-neutral-900/40 dark:border-neutral-800 opacity-60 line-through'
                      : 'bg-white border-stone-200 hover:border-stone-300 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-700 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked 
                          ? 'bg-emerald-600 border-emerald-500 text-white' 
                          : 'border-stone-300 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-950'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div>
                        <div className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                          <span className="px-1.5 py-0.2 rounded bg-red-600 text-white text-2xs font-bold">
                            {cartItem.quantity}x
                          </span>
                          <span className="line-clamp-1">{localized.name}</span>
                        </div>
                        {cartItem.item.asianName && (
                          <div className="text-2xs text-red-600/80 dark:text-red-400/80">
                            {cartItem.item.asianName}
                          </div>
                        )}

                        {/* Options */}
                        {Object.entries(cartItem.selectedOptions).length > 0 && (
                          <div className="text-2xs text-stone-500 dark:text-stone-400 mt-0.5">
                            {Object.entries(cartItem.selectedOptions)
                              .map(([_, val]) => `• ${getLocalizedOptionChoice(String(val), language)}`)
                              .join(' ')}
                          </div>
                        )}

                        {/* Special Note */}
                        {cartItem.specialInstructions && (
                          <div className="mt-1 text-2xs font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/40 px-1.5 py-0.5 rounded inline-block">
                            ⚠️ Note: {cartItem.specialInstructions}
                          </div>
                        )}
                      </div>
                    </div>

                    <span className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white shrink-0">
                      €{cartItem.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Totals */}
          <div className="border-t border-dashed border-stone-300 dark:border-neutral-800 pt-2.5 space-y-1 text-xs">
            <div className="flex justify-between text-stone-500 dark:text-stone-400">
              <span>{t.subtotalLabel} ({totalItemCount} dishes):</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xs text-stone-500">
              <span>VAT:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Included in Price</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base font-bold text-stone-900 dark:text-white pt-1 border-t border-stone-200 dark:border-neutral-800">
              <span>{t.totalLabel}:</span>
              <span className="text-red-600 dark:text-red-400 font-extrabold">€{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Bottom Confirmation Action */}
        <div className="p-3.5 sm:p-4 bg-stone-100 dark:bg-neutral-900 border-t border-stone-200 dark:border-neutral-800 space-y-2 pb-safe shrink-0">
          <button
            type="button"
            id="confirm-waiter-received-btn"
            onClick={handleConfirmOrder}
            className="w-full py-3 px-4 min-h-[48px] rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 dark:shadow-red-950/40 border border-red-500/40 transition active:scale-98 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>{t.waiterAcknowledgedBtn}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-1.5 text-center text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white text-xs underline cursor-pointer"
          >
            {t.waiterKeepEditingBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
