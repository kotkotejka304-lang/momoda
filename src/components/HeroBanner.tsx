import React from 'react';
import { Flame, Smartphone, Truck, Phone, Sparkles, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroBannerProps {
  onOpenInfo?: (tab?: 'hours' | 'contact' | 'deals' | 'allergens') => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenInfo }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-stone-900 text-white rounded-2xl sm:rounded-3xl mx-2 sm:mx-6 mt-2 sm:mt-4 p-3.5 sm:p-8 border border-neutral-800/90 shadow-xl max-w-[calc(100vw-1rem)]">
      {/* Warm Ambient Glow */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-4 text-left w-full min-w-0">
        {/* Badges Header */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-2xs sm:text-xs font-semibold tracking-wide">
            <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500 shrink-0" />
            <span>{t.heroBadge}</span>
          </div>

          <a
            href="tel:+353436672871"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-stone-300 hover:text-white text-2xs sm:text-xs font-medium transition active:scale-95 hover:border-neutral-700 min-h-[28px]"
          >
            <Phone className="w-3 h-3 text-red-500" />
            <span>043 667 2871</span>
          </a>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {t.heroTitle1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
            {t.heroTitle2}
          </span>
        </h1>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-none">
          {t.heroSubtitle}
        </p>

        {/* Feature Highlights with Mobile Touch-Friendly Horizontal Rail */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pt-1 text-xs text-stone-300 -mx-1 px-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 shrink-0 text-stone-200 text-2xs sm:text-xs">
            <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 shrink-0" />
            <span>{t.heroFeatureWaiter}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 shrink-0 text-stone-200 text-2xs sm:text-xs">
            <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span>{t.heroFeatureDelivery}</span>
          </div>

          <button
            type="button"
            onClick={() => onOpenInfo?.('deals')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/40 text-red-300 border border-red-600/30 transition active:scale-95 cursor-pointer shrink-0 text-2xs sm:text-xs min-h-[34px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span>{t.heroFeatureDeals}</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenInfo?.('allergens')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition active:scale-95 cursor-pointer shrink-0 text-2xs sm:text-xs min-h-[34px]"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{t.heroFeatureAllergens}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
