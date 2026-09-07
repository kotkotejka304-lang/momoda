import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { CategoryId } from '../types';
import { 
  Flame, 
  Leaf, 
  Award, 
  CupSoda, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Utensils, 
  Soup, 
  Sparkles, 
  Star, 
  Layers, 
  Cookie, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface MenuFilterBarProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  activeTagFilter: string | null;
  onSelectTagFilter: (tag: string | null) => void;
  itemsCount: number;
}

export const MenuFilterBar: React.FC<MenuFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
  activeTagFilter,
  onSelectTagFilter,
  itemsCount,
}) => {
  const { t } = useLanguage();

  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const tagScrollRef = useRef<HTMLDivElement>(null);

  // Track button elements for auto-centering
  const categoryBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const tagBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Scroll states for Category Slider
  const [canScrollCatLeft, setCanScrollCatLeft] = useState<boolean>(false);
  const [canScrollCatRight, setCanScrollCatRight] = useState<boolean>(false);
  const [catScrollProgress, setCatScrollProgress] = useState<number>(0);

  // Scroll states for Tag Slider
  const [canScrollTagLeft, setCanScrollTagLeft] = useState<boolean>(false);
  const [canScrollTagRight, setCanScrollTagRight] = useState<boolean>(false);
  const [tagScrollProgress, setTagScrollProgress] = useState<number>(0);

  // Check scroll positions
  const updateCatScroll = useCallback(() => {
    const el = categoryScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollCatLeft(scrollLeft > 6);
    setCanScrollCatRight(scrollLeft < scrollWidth - clientWidth - 6);
    const maxScroll = scrollWidth - clientWidth;
    setCatScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  }, []);

  const updateTagScroll = useCallback(() => {
    const el = tagScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollTagLeft(scrollLeft > 6);
    setCanScrollTagRight(scrollLeft < scrollWidth - clientWidth - 6);
    const maxScroll = scrollWidth - clientWidth;
    setTagScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  }, []);

  useEffect(() => {
    updateCatScroll();
    updateTagScroll();

    const catEl = categoryScrollRef.current;
    const tagEl = tagScrollRef.current;

    if (catEl) {
      catEl.addEventListener('scroll', updateCatScroll, { passive: true });
    }
    if (tagEl) {
      tagEl.addEventListener('scroll', updateTagScroll, { passive: true });
    }

    window.addEventListener('resize', updateCatScroll);
    window.addEventListener('resize', updateTagScroll);

    return () => {
      if (catEl) catEl.removeEventListener('scroll', updateCatScroll);
      if (tagEl) tagEl.removeEventListener('scroll', updateTagScroll);
      window.removeEventListener('resize', updateCatScroll);
      window.removeEventListener('resize', updateTagScroll);
    };
  }, [updateCatScroll, updateTagScroll]);

  // Center active category chip smoothly
  useEffect(() => {
    const activeEl = categoryBtnRefs.current[activeCategory];
    if (activeEl && categoryScrollRef.current) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeCategory]);

  // Center active tag chip smoothly
  useEffect(() => {
    const key = activeTagFilter || 'all';
    const activeEl = tagBtnRefs.current[key];
    if (activeEl && tagScrollRef.current) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeTagFilter]);

  // Slider buttons trigger
  const slideCategories = (direction: 'left' | 'right') => {
    if (!categoryScrollRef.current) return;
    const amount = direction === 'left' ? -220 : 220;
    categoryScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const slideTags = (direction: 'left' | 'right') => {
    if (!tagScrollRef.current) return;
    const amount = direction === 'left' ? -200 : 200;
    tagScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Map category ID to translated name
  const getCategoryName = (id: string, defaultName: string): string => {
    switch (id) {
      case 'all': return t.catAll;
      case 'starters': return t.catStarters;
      case 'soup': return t.catSoup;
      case 'chef-specials': return t.catChefSpecials;
      case 'wok': return t.catWok;
      case 'noodles': return t.catNoodles;
      case 'fried-rice': return t.catFriedRice;
      case 'european': return t.catEuropean;
      case 'sides': return t.catSides;
      case 'desserts': return t.catDesserts;
      case 'drinks': return t.catDrinks;
      default: return defaultName;
    }
  };

  // Get icon for category
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'all': return <Utensils className="w-3.5 h-3.5 shrink-0" />;
      case 'starters': return <Sparkles className="w-3.5 h-3.5 shrink-0" />;
      case 'soup': return <Soup className="w-3.5 h-3.5 shrink-0" />;
      case 'chef-specials': return <Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />;
      case 'wok': return <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />;
      case 'noodles': return <Utensils className="w-3.5 h-3.5 shrink-0" />;
      case 'fried-rice': return <Layers className="w-3.5 h-3.5 shrink-0" />;
      case 'european': return <Award className="w-3.5 h-3.5 shrink-0" />;
      case 'sides': return <Cookie className="w-3.5 h-3.5 shrink-0" />;
      case 'desserts': return <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0" />;
      case 'drinks': return <CupSoda className="w-3.5 h-3.5 shrink-0" />;
      default: return <Utensils className="w-3.5 h-3.5 shrink-0" />;
    }
  };

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: MENU_ITEMS.length,
    };
    for (const item of MENU_ITEMS) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Compute dynamic tag counts (based on current category filter if not 'all', or overall)
  const tagCounts = useMemo(() => {
    const baseItems = activeCategory === 'all' 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

    return {
      all: baseItems.length,
      'chef-pick': baseItems.filter((i) => i.tags.includes('chef-pick')).length,
      spicy: baseItems.filter((i) => i.spicyLevel > 0).length,
      popular: baseItems.filter((i) => i.tags.includes('popular')).length,
      vegetarian: baseItems.filter((i) => i.tags.includes('vegetarian') || i.tags.includes('vegan')).length,
      crispy: baseItems.filter((i) => i.tags.includes('crispy')).length,
      mild: baseItems.filter((i) => i.spicyLevel === 1).length,
      'gluten-free': baseItems.filter((i) => i.tags.includes('gluten-free')).length,
    };
  }, [activeCategory]);

  // Tag filter definitions
  const tagFilters = [
    {
      id: null,
      key: 'all',
      label: t.filterAll,
      icon: <Utensils className="w-3 h-3 text-stone-500 dark:text-stone-400" />,
      activeClass: 'bg-stone-900 text-white dark:bg-stone-100 dark:text-neutral-950 font-bold shadow-xs',
      count: tagCounts.all,
    },
    {
      id: 'chef-pick',
      key: 'chef-pick',
      label: t.filterChefPick,
      icon: <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />,
      activeClass: 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold shadow-xs shadow-amber-950/20',
      count: tagCounts['chef-pick'],
    },
    {
      id: 'spicy',
      key: 'spicy',
      label: t.filterSpicy,
      icon: <Flame className="w-3.5 h-3.5 text-red-500" />,
      activeClass: 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-xs shadow-red-950/30',
      count: tagCounts.spicy,
    },
    {
      id: 'popular',
      key: 'popular',
      label: t.filterPopular,
      icon: <Star className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />,
      activeClass: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-xs shadow-purple-950/30',
      count: tagCounts.popular,
    },
    {
      id: 'vegetarian',
      key: 'vegetarian',
      label: t.filterVeg,
      icon: <Leaf className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />,
      activeClass: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-xs shadow-emerald-950/30',
      count: tagCounts.vegetarian,
    },
    {
      id: 'crispy',
      key: 'crispy',
      label: t.filterCrispy,
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" />,
      activeClass: 'bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-xs shadow-orange-950/30',
      count: tagCounts.crispy,
    },
    {
      id: 'mild',
      key: 'mild',
      label: t.filterMild,
      icon: <Flame className="w-3.5 h-3.5 text-amber-500" />,
      activeClass: 'bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 font-bold shadow-xs',
      count: tagCounts.mild,
    },
    {
      id: 'gluten-free',
      key: 'gluten-free',
      label: t.filterGlutenFree,
      icon: <ShieldCheck className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />,
      activeClass: 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold shadow-xs shadow-cyan-950/30',
      count: tagCounts['gluten-free'],
    },
  ];

  return (
    <div className="sticky top-14 sm:top-16 z-20 w-full max-w-full overflow-x-clip bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md pt-2 pb-2 sm:pt-3.5 sm:pb-3 border-b border-stone-200 dark:border-neutral-800 shadow-xs dark:shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 space-y-2 w-full max-w-full">
        
        {/* ======================================================== */}
        {/* 1. Category Slider Rail ("Full menu, starters, soup etc") */}
        {/* ======================================================== */}
        <div className="relative group w-full max-w-full">
          {/* Left Slide Arrow (Touch & Desktop) */}
          <button
            type="button"
            onClick={() => slideCategories('left')}
            aria-label="Slide categories left"
            className={`absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 dark:bg-neutral-900/95 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-neutral-700 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 hover:bg-stone-50 dark:hover:bg-neutral-800 ${
              canScrollCatLeft ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-90'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Left fade gradient mask */}
          <div 
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-7 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-5 transition-opacity duration-200 ${
              canScrollCatLeft ? 'opacity-100' : 'opacity-0'
            }`} 
          />

          {/* Category Slider Container */}
          <div
            ref={categoryScrollRef}
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-proximity overscroll-x-contain py-1 -mx-2.5 px-2.5 sm:mx-0 sm:px-0 max-w-full"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const isDrinks = cat.id === 'drinks';
              const catName = getCategoryName(cat.id, cat.name);
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  id={`cat-${cat.id}`}
                  ref={(el) => { categoryBtnRefs.current[cat.id] = el; }}
                  onClick={() => onSelectCategory(cat.id as CategoryId)}
                  type="button"
                  className={`min-h-[44px] sm:min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 active:scale-95 cursor-pointer select-none flex items-center gap-1.5 shrink-0 snap-center ${
                    isActive
                      ? isDrinks 
                        ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-md shadow-cyan-900/30 ring-2 ring-cyan-500/20' 
                        : 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-900/30 ring-2 ring-red-500/20'
                      : isDrinks
                        ? 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 border border-cyan-200 dark:border-cyan-800/40'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 border border-stone-200 dark:bg-neutral-900 dark:text-stone-300 dark:hover:bg-neutral-850 dark:hover:text-white dark:border-neutral-800'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{catName}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold tabular-nums ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : isDrinks
                          ? 'bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-300'
                          : 'bg-stone-200/80 dark:bg-neutral-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right fade gradient mask */}
          <div 
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-7 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-5 transition-opacity duration-200 ${
              canScrollCatRight ? 'opacity-100' : 'opacity-0'
            }`} 
          />

          {/* Right Slide Arrow (Touch & Desktop) */}
          <button
            type="button"
            onClick={() => slideCategories('right')}
            aria-label="Slide categories right"
            className={`absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 dark:bg-neutral-900/95 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-neutral-700 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 hover:bg-stone-50 dark:hover:bg-neutral-800 ${
              canScrollCatRight ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-90'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile Category Slider Progress Track */}
          <div className="sm:hidden w-24 h-1 bg-stone-200 dark:bg-neutral-800 rounded-full mx-auto mt-1 overflow-hidden">
            <div 
              className="h-full bg-red-600 dark:bg-red-500 rounded-full transition-all duration-150 ease-out"
              style={{
                width: '35%',
                transform: `translateX(${catScrollProgress * 1.85}%)`,
              }}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. Tag & Dietary Filter Slider ("all items, chef's pick, spicy and other") */}
        {/* ========================================================================= */}
        <div className="relative group pt-0.5 w-full max-w-full">
          {/* Left Slide Arrow */}
          <button
            type="button"
            onClick={() => slideTags('left')}
            aria-label="Slide filters left"
            className={`absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/95 dark:bg-neutral-900/95 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-neutral-700 shadow-xs flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 hover:bg-stone-50 dark:hover:bg-neutral-800 ${
              canScrollTagLeft ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-90'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Left fade gradient mask */}
          <div 
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-5 transition-opacity duration-200 ${
              canScrollTagLeft ? 'opacity-100' : 'opacity-0'
            }`} 
          />

          {/* Tag Slider Container */}
          <div
            ref={tagScrollRef}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-proximity overscroll-x-contain py-1 -mx-2.5 px-2.5 sm:mx-0 sm:px-0 max-w-full"
          >
            {tagFilters.map((filter) => {
              const isSelected = filter.id === null 
                ? activeTagFilter === null 
                : activeTagFilter === filter.id;

              return (
                <button
                  key={filter.key}
                  id={`filter-${filter.key}`}
                  ref={(el) => { tagBtnRefs.current[filter.key] = el; }}
                  onClick={() => {
                    if (filter.id === null) {
                      onSelectTagFilter(null);
                    } else {
                      onSelectTagFilter(activeTagFilter === filter.id ? null : filter.id);
                    }
                  }}
                  type="button"
                  className={`min-h-[38px] sm:min-h-[32px] px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer active:scale-95 whitespace-nowrap shrink-0 snap-center flex items-center gap-1.5 ${
                    isSelected
                      ? filter.activeClass
                      : 'bg-stone-100 text-stone-700 hover:text-stone-900 hover:bg-stone-200 border border-stone-200 dark:bg-neutral-900 dark:text-stone-300 dark:hover:text-white dark:hover:bg-neutral-850 dark:border-neutral-800'
                  }`}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                  <span 
                    className={`text-[10px] px-1.5 py-0.2 rounded-md font-semibold tabular-nums ${
                      isSelected 
                        ? 'bg-black/20 text-white dark:text-neutral-950' 
                        : 'bg-stone-200/80 dark:bg-neutral-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right fade gradient mask */}
          <div 
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-5 transition-opacity duration-200 ${
              canScrollTagRight ? 'opacity-100' : 'opacity-0'
            }`} 
          />

          {/* Right Slide Arrow */}
          <button
            type="button"
            onClick={() => slideTags('right')}
            aria-label="Slide filters right"
            className={`absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/95 dark:bg-neutral-900/95 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-neutral-700 shadow-xs flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-90 hover:bg-stone-50 dark:hover:bg-neutral-800 ${
              canScrollTagRight ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-90'
            }`}
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Tag Slider Progress Track */}
          <div className="sm:hidden w-20 h-1 bg-stone-200 dark:bg-neutral-800 rounded-full mx-auto mt-1 overflow-hidden">
            <div 
              className="h-full bg-amber-500 dark:bg-amber-400 rounded-full transition-all duration-150 ease-out"
              style={{
                width: '35%',
                transform: `translateX(${tagScrollProgress * 1.85}%)`,
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
