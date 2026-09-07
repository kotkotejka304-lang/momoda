import React, { useState } from 'react';
import { MenuItem } from '../types';
import { X, Flame, Plus, Minus, Check, AlertTriangle, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedDish, getLocalizedOptionGroup, getLocalizedOptionChoice } from '../i18n/dishTranslations';

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedOptions: Record<string, string>,
    specialInstructions: string,
    calculatedPrice: number
  ) => void;
  onOpenAllergens?: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
  onOpenAllergens,
}) => {
  const { language, t } = useLanguage();

  if (!item) return null;

  const localized = getLocalizedDish(item, language);

  // Initialize selected options with first choice of each option group
  const initialOptions: Record<string, string> = {};
  if (item.options) {
    item.options.forEach((opt) => {
      if (opt.choices.length > 0) {
        initialOptions[opt.name] = opt.choices[0].label;
      }
    });
  }

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(initialOptions);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  // Calculate unit price based on options selected
  let unitPrice = item.price;
  if (item.options) {
    item.options.forEach((opt) => {
      const selectedChoiceLabel = selectedOptions[opt.name];
      const match = opt.choices.find((c) => c.label === selectedChoiceLabel);
      if (match && match.extraPrice) {
        unitPrice += match.extraPrice;
      }
    });
  }

  const totalPrice = unitPrice * quantity;

  const handleOptionChange = (optionName: string, choiceLabel: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: choiceLabel,
    }));
  };

  const handleConfirm = () => {
    onAddToCart(item, quantity, selectedOptions, specialInstructions, unitPrice);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-neutral-950 w-full max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-neutral-800 max-h-[92vh] sm:max-h-[90vh] flex flex-col transition-colors duration-300 text-stone-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle */}
        <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden bg-stone-100 dark:bg-neutral-900 shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-stone-300 dark:bg-neutral-700" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dish customization"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/85 hover:bg-stone-100 dark:bg-neutral-950/80 dark:hover:bg-neutral-900 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-neutral-700 flex items-center justify-center transition cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {/* Modal Image Header */}
          <div className="relative aspect-16/9 sm:aspect-16/10 w-full bg-stone-100 dark:bg-neutral-900 shrink-0">
            <img
              src={item.image}
              alt={localized.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-3 left-4 right-4 text-white">
              {item.asianName && (
                <span className="text-xs font-medium text-red-400 block tracking-wider">
                  {item.asianName}
                </span>
              )}
              <h2 className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">
                {localized.name}
              </h2>
            </div>
          </div>

          {/* Dish Information */}
          <div className="p-4 sm:p-6 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-red-100 text-red-700 dark:bg-red-600/20 dark:text-red-400 text-2xs font-semibold uppercase">
                {item.category}
              </span>

              {item.spicyLevel > 0 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-100 text-red-600 dark:bg-neutral-900 dark:text-red-400 text-2xs font-medium border border-stone-200 dark:border-neutral-800">
                  <Flame className="w-3 h-3 fill-red-500 text-red-500" />
                  {item.spicyLevel === 1 ? t.spicyMild : item.spicyLevel === 2 ? t.spicyMedium : t.spicyHot}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {localized.description}
            </p>

            {/* Allergens Notice */}
            {item.allergens && item.allergens.length > 0 && (
              <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 dark:text-amber-200 leading-snug">
                    <strong className="font-semibold text-amber-800 dark:text-amber-300">{t.allergensContained}: </strong>
                    {item.allergens.join(', ')}.
                  </div>
                </div>
                {onOpenAllergens && (
                  <button
                    type="button"
                    onClick={onOpenAllergens}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 underline shrink-0 whitespace-nowrap self-end sm:self-auto cursor-pointer"
                  >
                    {t.heroFeatureAllergens} →
                  </button>
                )}
              </div>
            )}

            {/* Customization Options */}
            {item.options && item.options.length > 0 && (
              <div className="space-y-4 pt-2 border-t border-stone-200 dark:border-neutral-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
                  <span>{t.btnCustomize}</span>
                </h3>

                {item.options.map((optionGroup) => (
                  <div key={optionGroup.name} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-800 dark:text-stone-200">
                        {getLocalizedOptionGroup(optionGroup.name, language)}
                      </span>
                      {optionGroup.required && (
                        <span className="text-2xs px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-400 rounded-full font-semibold border border-red-200 dark:border-red-700/40">
                          REQUIRED
                        </span>
                      )}
                    </div>

                    {/* Choice Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {optionGroup.choices.map((choice) => {
                        const isSelected = selectedOptions[optionGroup.name] === choice.label;
                        return (
                          <button
                            type="button"
                            key={choice.label}
                            onClick={() => handleOptionChange(optionGroup.name, choice.label)}
                            className={`min-h-[44px] px-3.5 py-2.5 rounded-xl border text-xs font-medium flex items-center justify-between transition cursor-pointer text-left active:scale-98 ${
                              isSelected
                                ? 'bg-red-50 dark:bg-gradient-to-r dark:from-red-600/20 dark:to-rose-600/15 text-red-700 dark:text-white border-red-500 shadow-xs'
                                : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700 hover:text-stone-900 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:text-stone-300 border-stone-200 dark:border-neutral-800'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-red-500 bg-red-600 text-white' : 'border-stone-300 dark:border-neutral-600 bg-white dark:bg-neutral-950'
                              }`}>
                                {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                              </span>
                              <span>{getLocalizedOptionChoice(choice.label, language)}</span>
                            </div>
                            {choice.extraPrice ? (
                              <span className={`text-2xs font-semibold ${isSelected ? 'text-red-600 dark:text-red-400' : 'text-stone-500 dark:text-stone-400'}`}>
                                +€{choice.extraPrice.toFixed(2)}
                              </span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Special Instructions */}
            <div className="space-y-1.5 pt-2 border-t border-stone-200 dark:border-neutral-800">
              <label htmlFor="dish-special-instructions" className="block text-xs font-semibold text-stone-700 dark:text-stone-300">
                {t.specialInstructionsLabel}
              </label>
              <input
                id="dish-special-instructions"
                type="text"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder={t.specialInstructionsPlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-neutral-800 text-xs text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-neutral-900 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-red-500 min-h-[42px]"
              />
            </div>
          </div>
        </div>

        {/* Sticky Footer Actions */}
        <div className="p-3 sm:p-4 border-t border-stone-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xs flex items-center gap-3 shrink-0 pb-safe">
          {/* Quantity stepper */}
          <div className="flex items-center bg-stone-100 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-xl p-1 shrink-0">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center hover:bg-stone-200 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 transition active:scale-95 cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center hover:bg-stone-200 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 transition active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Order Button */}
          <button
            type="button"
            id="add-customized-dish-btn"
            onClick={handleConfirm}
            className="flex-1 py-3 px-4 min-h-[44px] rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 active:scale-98 text-white font-semibold text-xs sm:text-sm flex items-center justify-between shadow-lg shadow-red-900/20 dark:shadow-red-950/40 border border-red-500/40 transition cursor-pointer"
          >
            <span>{t.addToCartBtn}</span>
            <span className="font-bold">€{totalPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
