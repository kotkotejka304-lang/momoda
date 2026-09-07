import React from 'react';
import { MenuItem } from '../types';
import { Flame, Plus, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getLocalizedDish } from '../i18n/dishTranslations';

interface MenuItemCardProps {
  item: MenuItem;
  onOpenDetail: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  cartQuantity: number;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onOpenDetail,
  onQuickAdd,
  cartQuantity,
}) => {
  const { language, t } = useLanguage();
  const localized = getLocalizedDish(item, language);

  const getSpicyText = (level: number) => {
    if (level === 1) return t.spicyMild;
    if (level === 2) return t.spicyMedium;
    if (level === 3) return t.spicyHot;
    return '';
  };

  return (
    <div
      id={`dish-${item.id}`}
      className="group relative bg-white dark:bg-neutral-900/90 hover:bg-stone-50 dark:hover:bg-neutral-900 rounded-2xl border border-stone-200 dark:border-neutral-800 hover:border-stone-300 dark:hover:border-neutral-700 shadow-xs hover:shadow-md dark:hover:shadow-xl transition-all duration-200 flex flex-row sm:flex-col overflow-hidden text-left p-2.5 sm:p-0 gap-2.5 sm:gap-0 w-full max-w-full min-w-0"
    >
      {/* Dish Image */}
      <div 
        className="order-2 sm:order-1 relative w-20 h-20 xs:w-24 xs:h-24 sm:w-full sm:aspect-4/3 rounded-xl sm:rounded-t-2xl sm:rounded-b-none bg-stone-100 dark:bg-neutral-950 overflow-hidden cursor-pointer shrink-0"
        onClick={() => onOpenDetail(item)}
      >
        <img
          src={item.image}
          alt={localized.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1 pointer-events-none">
          {item.tags.includes('chef-pick') && (
            <span className="px-2 py-0.5 rounded-full bg-neutral-950/85 text-amber-300 text-2xs font-semibold tracking-wide border border-amber-500/40 backdrop-blur-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{t.chefPickBadge}</span>
            </span>
          )}
          {item.tags.includes('popular') && !item.tags.includes('chef-pick') && (
            <span className="px-2 py-0.5 rounded-full bg-red-600/90 text-white text-2xs font-semibold tracking-wide backdrop-blur-xs">
              {t.popularBadge}
            </span>
          )}
        </div>

        {/* Spice Level Indicator */}
        {item.spicyLevel > 0 && (
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-neutral-950/85 backdrop-blur-xs text-white text-2xs font-medium flex items-center gap-1 border border-neutral-800">
            {Array.from({ length: item.spicyLevel }).map((_, i) => (
              <Flame key={i} className="w-3 h-3 text-red-500 fill-red-500" />
            ))}
            <span className="text-stone-300 hidden sm:inline">
              {getSpicyText(item.spicyLevel)}
            </span>
          </div>
        )}
      </div>

      {/* Dish Content Body */}
      <div className="order-1 sm:order-2 flex-1 min-w-0 flex flex-col justify-between sm:p-4 space-y-2 sm:space-y-3">
        <div 
          className="cursor-pointer"
          onClick={() => onOpenDetail(item)}
        >
          {/* Asian character subtitle & Localized Title */}
          <div>
            {item.asianName && (
              <span className="block text-xs font-medium text-red-600 dark:text-red-400 tracking-wider truncate">
                {item.asianName}
              </span>
            )}
            <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition leading-snug line-clamp-1 sm:line-clamp-2">
              {localized.name}
            </h3>
          </div>

          <p className="text-2xs sm:text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-0.5 sm:mt-1 leading-relaxed">
            {localized.description}
          </p>

          {/* Mobile tags row */}
          <div className="flex items-center gap-1.5 mt-1.5 sm:hidden flex-wrap text-2xs">
            {item.tags.includes('vegan') && (
              <span className="px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded font-medium border border-emerald-200 dark:border-emerald-800/40">
                Vegan
              </span>
            )}
            {item.tags.includes('vegetarian') && !item.tags.includes('vegan') && (
              <span className="px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded font-medium border border-emerald-200 dark:border-emerald-800/40">
                Vegetarian
              </span>
            )}
            {item.tags.includes('gluten-free') && (
              <span className="px-1.5 py-0.5 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 rounded font-medium border border-amber-200 dark:border-amber-800/40">
                GF
              </span>
            )}
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 border-t border-stone-100 dark:border-neutral-800 flex items-center justify-between gap-1.5 xs:gap-2 min-w-0">
          <div className="flex flex-col min-w-0 shrink-0">
            <span className="text-2xs text-stone-500 dark:text-stone-400 uppercase font-medium">{t.priceLabel}</span>
            <span className="text-sm sm:text-base font-bold text-stone-900 dark:text-white tracking-tight">
              €{item.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1 xs:gap-1.5 shrink-0">
            {/* Customize button */}
            {item.options && item.options.length > 0 && (
              <button
                type="button"
                id={`customize-btn-${item.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDetail(item);
                }}
                className="px-2 xs:px-2.5 sm:px-3 py-1.5 sm:py-2 min-h-[36px] sm:min-h-[38px] rounded-xl border border-stone-200 hover:border-stone-300 dark:border-neutral-700 dark:hover:border-neutral-600 bg-stone-100 hover:bg-stone-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-stone-700 dark:text-stone-200 text-xs font-semibold transition active:scale-95 cursor-pointer flex items-center gap-1 shrink-0"
                title={t.btnCustomize}
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                <span className="hidden sm:inline">{t.btnCustomize}</span>
                <span className="sm:hidden text-2xs">{t.btnOptions}</span>
              </button>
            )}

            {/* Quick Add Button */}
            <button
              type="button"
              id={`quick-add-${item.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd(item);
              }}
              className={`px-2.5 xs:px-3 sm:px-3.5 py-1.5 sm:py-2 min-h-[36px] sm:min-h-[38px] rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition active:scale-95 cursor-pointer shrink-0 ${
                cartQuantity > 0
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-900/20 dark:shadow-red-950/50 border border-red-500'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-neutral-700 hover:border-stone-300 dark:hover:border-neutral-600'
              }`}
            >
              {cartQuantity > 0 ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white stroke-[2.5] shrink-0" />
                  <span>({cartQuantity})</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                  <span className="text-2xs xs:text-xs">{t.btnQuickAdd}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
