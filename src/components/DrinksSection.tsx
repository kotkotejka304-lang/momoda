import React from 'react';
import { CupSoda, Snowflake } from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { MenuItemCard } from './MenuItemCard';
import { useLanguage } from '../i18n/LanguageContext';

interface DrinksSectionProps {
  drinks: MenuItem[];
  cartItems: CartItem[];
  onOpenDetail: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  isStandalone?: boolean;
}

export const DrinksSection: React.FC<DrinksSectionProps> = ({
  drinks,
  cartItems,
  onOpenDetail,
  onQuickAdd,
  isStandalone = false,
}) => {
  const { t } = useLanguage();

  if (drinks.length === 0) return null;

  return (
    <section 
      id="section-drinks" 
      aria-label="Chilled Drinks Section"
      className="scroll-mt-32 space-y-4 sm:space-y-6 pt-2"
    >
      {/* Drinks Section Header Banner */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-950 via-neutral-900 to-neutral-950 text-white p-5 sm:p-6 border border-cyan-800/30 shadow-lg">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none flex items-center justify-end pr-4">
          <CupSoda className="w-32 h-32 text-cyan-400 -rotate-12" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-2 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-2xs font-semibold uppercase tracking-wider">
              <Snowflake className="w-3.5 h-3.5 text-cyan-300" />
              {t.servingChilled}
            </span>

            <span className="text-2xs text-stone-300 bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-800 font-medium">
              {drinks.length} {t.drinksOptionsCount}
            </span>

            <span className="text-2xs text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
              From €1.00
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <CupSoda className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
            <span>{t.drinksSectionTitle}</span>
          </h2>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
            {t.drinksSectionSubtitle}
          </p>
        </div>
      </div>

      {/* Drinks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {drinks.map((item) => {
          const inCartQty = cartItems
            .filter((c) => c.menuItemId === item.id)
            .reduce((acc, c) => acc + c.quantity, 0);

          return (
            <MenuItemCard
              key={item.id}
              item={item}
              onOpenDetail={onOpenDetail}
              onQuickAdd={onQuickAdd}
              cartQuantity={inCartQty}
            />
          );
        })}
      </div>
    </section>
  );
};
