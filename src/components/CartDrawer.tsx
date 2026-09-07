import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Smartphone, ShoppingBag, UtensilsCrossed, CupSoda } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedDish } from '../i18n/dishTranslations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onShowToWaiter: () => void;
  onBrowseDrinks?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShowToWaiter,
  onBrowseDrinks,
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const hasDrinks = cartItems.some((item) => item.item.category === 'drinks');

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-full max-w-md bg-white dark:bg-neutral-950 text-stone-900 dark:text-white shadow-2xl flex flex-col border-l border-stone-200 dark:border-neutral-800 transition-colors duration-300">
          {/* Header */}
          <div className="p-4 border-b border-stone-200 dark:border-neutral-800 flex items-center justify-between bg-stone-50 dark:bg-neutral-900 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 dark:bg-red-600/20 dark:text-red-400 border border-red-200 dark:border-red-500/30 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900 dark:text-white tracking-wide">{t.drawerTitle}</h2>
                <span className="text-xs text-stone-500 dark:text-stone-400">{t.drawerTerminalId}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-stone-200 dark:border-neutral-800 flex items-center justify-center text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-stone-100 dark:divide-neutral-900 overscroll-contain">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 flex items-center justify-center text-stone-400 dark:text-stone-500">
                  <UtensilsCrossed className="w-8 h-8 text-red-600 dark:text-red-500" />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-white text-base">{t.emptyCartTitle}</h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 max-w-xs leading-relaxed">
                  {t.emptyCartDesc}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-semibold shadow-md transition active:scale-95 cursor-pointer min-h-[40px]"
                >
                  {t.startOrderingBtn}
                </button>
              </div>
            ) : (
              cartItems.map((cartItem) => {
                const localized = getLocalizedDish(cartItem.item, language);

                return (
                  <div key={cartItem.cartItemId} className="pt-3 first:pt-0 flex gap-3 text-left">
                    {/* Thumbnail */}
                    <img
                      src={cartItem.item.image}
                      alt={localized.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover bg-stone-100 dark:bg-neutral-900 shrink-0 border border-stone-200 dark:border-neutral-800"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 truncate">
                          {localized.name}
                        </h4>
                        <span className="font-bold text-xs sm:text-sm text-stone-900 dark:text-white shrink-0">
                          €{cartItem.totalPrice.toFixed(2)}
                        </span>
                      </div>

                      {/* Customizations summary */}
                      {Object.entries(cartItem.selectedOptions).length > 0 && (
                        <div className="text-2xs text-stone-500 dark:text-stone-400 line-clamp-2">
                          {Object.entries(cartItem.selectedOptions)
                            .map(([_, val]) => val)
                            .join(' • ')}
                        </div>
                      )}

                      {/* Special instruction */}
                      {cartItem.specialInstructions && (
                        <div className="text-2xs font-medium text-red-700 bg-red-50 border border-red-200 dark:text-red-400 dark:bg-red-950/60 dark:border-red-800/40 px-2 py-0.5 rounded-md inline-block">
                          Note: "{cartItem.specialInstructions}"
                        </div>
                      )}

                      {/* Quantity controls */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-stone-200 dark:border-neutral-800 rounded-xl bg-stone-100 dark:bg-neutral-900 overflow-hidden">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 transition active:scale-95 cursor-pointer"
                          >
                            <Minus className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                            {cartItem.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 transition active:scale-95 cursor-pointer"
                          >
                            <Plus className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(cartItem.cartItemId)}
                          aria-label={`Remove ${cartItem.item.name}`}
                          className="text-stone-400 hover:text-red-600 dark:text-stone-500 dark:hover:text-red-400 p-2 min-h-[40px] min-w-[40px] flex items-center justify-center transition active:scale-90 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-neutral-900 space-y-3 pb-safe shrink-0">
              {/* Optional Prompt to add chilled drinks */}
              {!hasDrinks && onBrowseDrinks && (
                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 flex items-center justify-between text-xs text-cyan-900 dark:text-cyan-200">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <CupSoda className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">{t.browseDrinksPrompt}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onBrowseDrinks();
                    }}
                    className="font-semibold text-cyan-700 hover:text-cyan-900 dark:text-cyan-400 dark:hover:text-cyan-300 transition whitespace-nowrap cursor-pointer ml-2 underline"
                  >
                    {t.browseDrinksBtn} →
                  </button>
                </div>
              )}

              {/* Cost summary */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-500 dark:text-stone-400">
                  <span>{t.subtotalLabel} ({totalCount} items)</span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xs text-stone-500">
                  <span>VAT (13.5% / standard)</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Included</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-900 dark:text-white pt-1.5 border-t border-stone-200 dark:border-neutral-800">
                  <span>{t.totalLabel}</span>
                  <span className="text-red-600 dark:text-red-400 font-extrabold text-base">€{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Show to Waiter Button */}
              <div className="pt-1">
                <button
                  type="button"
                  id="cart-show-waiter-btn"
                  onClick={onShowToWaiter}
                  className="w-full py-3.5 px-4 min-h-[48px] rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-lg shadow-red-900/20 dark:shadow-red-950/40 border border-red-500/40 transition active:scale-98 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="w-4 h-4 text-white shrink-0" />
                    <span>{t.showToWaiterBtn}</span>
                  </div>
                  <span className="bg-white/20 dark:bg-neutral-950/60 text-white dark:text-stone-100 px-2.5 py-1 rounded-lg text-xs font-semibold">
                    Show Slip →
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between text-2xs text-stone-500 pt-0.5">
                <span>{cartItems.length} items on slip</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-stone-500 hover:text-red-600 dark:hover:text-red-400 underline cursor-pointer"
                >
                  {t.clearOrderBtn}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
