import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO, MENU_CATEGORIES } from './data/menuData';
import { MenuItem, CartItem, CategoryId } from './types';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MenuFilterBar } from './components/MenuFilterBar';
import { MenuItemCard } from './components/MenuItemCard';
import { DrinksSection } from './components/DrinksSection';
import { DishDetailModal } from './components/DishDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WaiterOrderSlipModal } from './components/WaiterOrderSlipModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { RestaurantInfoModal } from './components/RestaurantInfoModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { BackToTopButton } from './components/BackToTopButton';
import { MomodaLogo } from './components/MomodaLogo';
import { ShoppingBag, Smartphone, Phone, MapPin, Check, Clock, Truck, ShieldAlert, ExternalLink, CupSoda, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from './i18n/LanguageContext';
import { getLocalizedDish } from './i18n/dishTranslations';

export default function App() {
  const { language, t } = useLanguage();

  // State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activeTagFilter, setActiveTagFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [tableNumber, setTableNumber] = useState<string>('Table 1');
  const [selectedDishForDetail, setSelectedDishForDetail] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWaiterSlipOpen, setIsWaiterSlipOpen] = useState<boolean>(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);
  const [infoModalTab, setInfoModalTab] = useState<'hours' | 'contact' | 'deals' | 'allergens'>('hours');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [successOrder, setSuccessOrder] = useState<{
    code: string;
    items: CartItem[];
    total: number;
  } | null>(null);

  const handleOpenInfo = (tab: 'hours' | 'contact' | 'deals' | 'allergens' = 'hours') => {
    setInfoModalTab(tab);
    setIsInfoModalOpen(true);
  };

  // Trigger brief toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Helper to translate category names
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

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Tag filter
      if (activeTagFilter === 'spicy' && item.spicyLevel === 0) {
        return false;
      }
      if (activeTagFilter === 'mild' && item.spicyLevel !== 1) {
        return false;
      }
      if (activeTagFilter === 'vegetarian' && !item.tags.includes('vegetarian') && !item.tags.includes('vegan')) {
        return false;
      }
      if (activeTagFilter === 'chef-pick' && !item.tags.includes('chef-pick')) {
        return false;
      }
      if (activeTagFilter === 'popular' && !item.tags.includes('popular')) {
        return false;
      }
      if (activeTagFilter === 'crispy' && !item.tags.includes('crispy')) {
        return false;
      }
      if (activeTagFilter === 'gluten-free' && !item.tags.includes('gluten-free')) {
        return false;
      }
      // Search query (checks english, localized dish name, asian name, and description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const localized = getLocalizedDish(item, language);
        const matchName = item.name.toLowerCase().includes(query) || localized.name.toLowerCase().includes(query);
        const matchAsianName = item.asianName?.toLowerCase().includes(query) || false;
        const matchDesc = item.description.toLowerCase().includes(query) || localized.description.toLowerCase().includes(query);
        const matchTags = item.tags.some(t => t.toLowerCase().includes(query));
        if (!matchName && !matchAsianName && !matchDesc && !matchTags) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, activeTagFilter, searchQuery, language]);

  // Cart total calculations
  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, it) => sum + it.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, it) => sum + it.totalPrice, 0);
  }, [cartItems]);

  // Dedicated drinks collection
  const drinksItems = useMemo(() => {
    return MENU_ITEMS.filter((it) => it.category === 'drinks');
  }, []);

  // Quick Add handler from card
  const handleQuickAdd = (item: MenuItem) => {
    const existingIndex = cartItems.findIndex(
      (c) => c.menuItemId === item.id && Object.keys(c.selectedOptions).length === 0 && !c.specialInstructions
    );

    const localized = getLocalizedDish(item, language);

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].totalPrice = updated[existingIndex].unitPrice * updated[existingIndex].quantity;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        cartItemId: `${item.id}-${Date.now()}`,
        menuItemId: item.id,
        item,
        quantity: 1,
        selectedOptions: {},
        specialInstructions: '',
        unitPrice: item.price,
        totalPrice: item.price,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
    showToast(`+ ${localized.name}`);
  };

  // Add customized dish from modal
  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedOptions: Record<string, string>,
    specialInstructions: string,
    calculatedPrice: number
  ) => {
    const localized = getLocalizedDish(item, language);
    const newItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      menuItemId: item.id,
      item,
      quantity,
      selectedOptions,
      specialInstructions,
      unitPrice: calculatedPrice,
      totalPrice: calculatedPrice * quantity,
    };
    setCartItems((prev) => [...prev, newItem]);
    showToast(`+ ${quantity}x ${localized.name}`);
  };

  // Cart quantity update
  const handleUpdateCartQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((it) =>
        it.cartItemId === cartItemId
          ? {
              ...it,
              quantity: newQty,
              totalPrice: it.unitPrice * newQty,
            }
          : it
      )
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((it) => it.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Waiter Order Slip workflow
  const handleShowToWaiter = () => {
    setIsCartOpen(false);
    setIsWaiterSlipOpen(true);
  };

  const handleWaiterAcknowledged = (orderCode: string) => {
    const finalItems = [...cartItems];
    const finalTotal = cartTotal;
    setIsWaiterSlipOpen(false);
    setCartItems([]);
    setSuccessOrder({
      code: orderCode,
      items: finalItems,
      total: finalTotal,
    });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100 flex flex-col antialiased selection:bg-red-600 selection:text-white relative transition-colors duration-300">
      {/* Subtle warm ambient lighting */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(220, 38, 38, 0.08), transparent 70%)',
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-stone-900/95 dark:bg-neutral-900 text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-2xl border border-stone-700 dark:border-neutral-700 flex items-center gap-2 animate-fade-in pointer-events-none backdrop-blur-md">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenInfo={handleOpenInfo}
      />

      {/* Hero Banner */}
      <HeroBanner onOpenInfo={handleOpenInfo} />

      {/* Category Navigation & Dietary Filters */}
      <MenuFilterBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        activeTagFilter={activeTagFilter}
        onSelectTagFilter={setActiveTagFilter}
        itemsCount={filteredItems.length}
      />

      {/* Main Content Area */}
      <main className={`relative z-10 flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-6 py-3 sm:py-8 transition-all ${cartItems.length > 0 ? 'pb-36 sm:pb-24' : 'pb-20 sm:pb-8'}`}>
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white dark:bg-neutral-900 rounded-2xl border border-stone-200 dark:border-neutral-800 p-6 sm:p-8 max-w-md mx-auto space-y-3 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-neutral-950 border border-stone-200 dark:border-neutral-800 flex items-center justify-center mx-auto text-red-500">
              🥢
            </div>
            <h3 className="font-bold text-base text-stone-900 dark:text-white">{t.noDishesFound}</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {t.noDishesAdvice}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setActiveTagFilter(null);
                setSearchQuery('');
              }}
              className="px-4 py-2 min-h-[40px] rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-semibold shadow-md shadow-red-900/20 dark:shadow-red-950/40 transition cursor-pointer active:scale-95 border border-red-500/40"
            >
              {t.resetFiltersBtn}
            </button>
          </div>
        ) : activeCategory === 'drinks' ? (
          /* Dedicated Drinks View */
          <DrinksSection
            drinks={drinksItems}
            cartItems={cartItems}
            onOpenDetail={setSelectedDishForDetail}
            onQuickAdd={handleQuickAdd}
            isStandalone={true}
          />
        ) : activeCategory === 'all' && !searchQuery.trim() && !activeTagFilter ? (
          /* Full Menu with Segmented Category Sections & Dedicated Drinks Section */
          <div className="space-y-10 sm:space-y-14">
            {/* Quick Drinks Shortcut Banner */}
            <div className="p-3.5 sm:p-4 bg-gradient-to-r from-sky-50 via-white to-cyan-50 dark:from-cyan-950/30 dark:via-neutral-900 dark:to-neutral-950 rounded-2xl border border-cyan-200 dark:border-cyan-800/30 flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0">
                  <CupSoda className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs sm:text-sm text-cyan-950 dark:text-cyan-200">{t.catDrinks}</span>
                    <span className="text-2xs font-semibold px-1.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700/40">
                      7 {t.drinksOptionsCount}
                    </span>
                  </div>
                  <p className="text-2xs text-stone-500 dark:text-stone-400 truncate">
                    {t.drinksSectionSubtitle}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCategory('drinks')}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white text-xs font-semibold transition flex items-center gap-1 shrink-0 active:scale-95 shadow-md shadow-cyan-900/20 dark:shadow-cyan-950/40 border border-cyan-400/40 cursor-pointer"
              >
                <span>{t.catDrinks}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Render Category Sections in order */}
            {MENU_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
              if (cat.id === 'drinks') {
                return (
                  <DrinksSection
                    key="drinks"
                    drinks={drinksItems}
                    cartItems={cartItems}
                    onOpenDetail={setSelectedDishForDetail}
                    onQuickAdd={handleQuickAdd}
                    isStandalone={false}
                  />
                );
              }

              const catItems = MENU_ITEMS.filter((it) => it.category === cat.id);
              if (catItems.length === 0) return null;

              const localizedCatName = getCategoryName(cat.id, cat.name);

              return (
                <section
                  key={cat.id}
                  id={`section-${cat.id}`}
                  className="scroll-mt-32 space-y-3 sm:space-y-4 pt-1"
                >
                  <div className="flex items-center justify-between border-b border-stone-200 dark:border-neutral-800 pb-2.5">
                    <div className="space-y-0.5 text-left">
                      <h2 className="text-base sm:text-xl font-bold text-stone-900 dark:text-white tracking-tight flex items-center gap-2">
                        {cat.id === 'chef-specials' && <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />}
                        <span>{localizedCatName}</span>
                      </h2>
                      <p className="text-2xs text-stone-500 dark:text-stone-400">
                        {cat.description}
                      </p>
                    </div>
                    <span className="text-2xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200 dark:bg-neutral-900 dark:text-stone-300 dark:border-neutral-800 shrink-0 ml-2">
                      {catItems.length} {t.filterDishesCount}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    {catItems.map((item) => {
                      const inCartQty = cartItems
                        .filter((c) => c.menuItemId === item.id)
                        .reduce((acc, c) => acc + c.quantity, 0);

                      return (
                        <MenuItemCard
                          key={item.id}
                          item={item}
                          onOpenDetail={setSelectedDishForDetail}
                          onQuickAdd={handleQuickAdd}
                          cartQuantity={inCartQty}
                        />
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          /* Filtered or Specific Category View */
          <div className="space-y-4">
            {(searchQuery.trim() || activeTagFilter) && (
              <div className="flex items-center justify-between bg-stone-100 dark:bg-neutral-900 px-3.5 py-2 rounded-xl text-xs text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-neutral-800">
                <span>
                  {t.filterShowing} <strong className="text-red-600 dark:text-red-400 font-bold">{filteredItems.length}</strong> {t.filterDishesCount}
                  {searchQuery && <> matching &quot;<strong className="text-stone-900 dark:text-white">{searchQuery}</strong>&quot;</>}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTagFilter(null);
                  }}
                  className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white font-semibold underline cursor-pointer"
                >
                  {t.resetFiltersBtn}
                </button>
              </div>
            )}

            {!searchQuery.trim() && !activeTagFilter && activeCategory !== 'all' && (
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-neutral-800 pb-2.5 mb-4 text-left">
                <div className="space-y-0.5">
                  <h2 className="text-base sm:text-xl font-bold text-stone-900 dark:text-white tracking-tight">
                    {getCategoryName(activeCategory, activeCategory)}
                  </h2>
                  <p className="text-2xs text-stone-500 dark:text-stone-400">
                    {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.description}
                  </p>
                </div>
                <span className="text-2xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200 dark:bg-neutral-900 dark:text-stone-300 dark:border-neutral-800 shrink-0 ml-2">
                  {filteredItems.length} {t.filterDishesCount}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {filteredItems.map((item) => {
                const inCartQty = cartItems
                  .filter((c) => c.menuItemId === item.id)
                  .reduce((acc, c) => acc + c.quantity, 0);

                return (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onOpenDetail={setSelectedDishForDetail}
                    onQuickAdd={handleQuickAdd}
                    cartQuantity={inCartQty}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Floating Bottom Order Bar */}
      {cartItems.length > 0 && (
        <aside 
          aria-label="Order summary bar" 
          className="fixed bottom-[64px] sm:bottom-6 left-2 right-2 sm:left-auto sm:right-6 sm:max-w-md sm:w-full max-w-[calc(100vw-1rem)] z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md text-stone-900 dark:text-white rounded-2xl p-2 sm:p-3.5 shadow-2xl border border-stone-200 dark:border-neutral-800 flex items-center justify-between gap-1.5 sm:gap-2 animate-slide-up transition-colors duration-300"
        >
          <div 
            className="flex items-center gap-1.5 sm:gap-3 cursor-pointer pl-0.5 sm:pl-1 min-w-0 text-left shrink-1"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
              {cartCount}
            </div>
            <div className="min-w-0">
              <div className="text-2xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold truncate">
                {cartCount} {t.stickyBarDishes}
              </div>
              <div className="text-xs sm:text-base font-bold text-stone-900 dark:text-white truncate">
                €{cartTotal.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Edit Selections */}
            <button
              type="button"
              id="sticky-bar-view-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="px-2 sm:px-3 py-2 min-h-[40px] sm:min-h-[38px] rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-stone-700 hover:text-stone-900 dark:text-stone-200 dark:hover:text-white text-xs font-semibold transition flex items-center gap-1 cursor-pointer whitespace-nowrap border border-stone-200 dark:border-neutral-700 active:scale-95 shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
              <span className="hidden sm:inline">{t.btnOrderSlip}</span>
            </button>

            {/* Show to Waiter */}
            <button
              type="button"
              id="sticky-bar-show-waiter-btn"
              onClick={handleShowToWaiter}
              className="px-2.5 sm:px-4 py-2 min-h-[40px] sm:min-h-[38px] rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-900/20 dark:shadow-red-950/40 transition flex items-center gap-1.5 cursor-pointer active:scale-98 border border-red-500/40 shrink-0 max-w-[190px] truncate"
            >
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
              <span className="truncate">{t.showToWaiterBtn}</span>
            </button>
          </div>
        </aside>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-white dark:bg-neutral-950 text-stone-800 dark:text-white border-t border-stone-200 dark:border-neutral-800 py-12 px-4 sm:px-6 pb-28 sm:pb-12 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <MomodaLogo size="md" />
              <div>
                <span className="block font-bold text-base text-stone-900 dark:text-white">Momoda</span>
                <span className="block text-xs font-semibold text-red-600 dark:text-red-500 uppercase tracking-wider">Asian Street Food</span>
              </div>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mt-2">
              Authentic Asian street food prepared fresh daily. Customise dishes to your taste, generate your digital order slip, and show it directly to your server.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-blue-600 hover:text-white dark:bg-neutral-900 text-stone-600 dark:text-stone-300 flex items-center justify-center text-xs font-bold transition border border-stone-200 dark:border-neutral-800"
                title="Facebook: Momoda Asian Street Food"
              >
                f
              </a>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-pink-600 hover:text-white dark:bg-neutral-900 text-stone-600 dark:text-stone-300 flex items-center justify-center text-xs font-bold transition border border-stone-200 dark:border-neutral-800"
                title="Instagram: @momodaasianstreetfood"
              >
                IG
              </a>
              <button
                type="button"
                onClick={() => handleOpenInfo('allergens')}
                className="text-xs text-stone-500 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400 underline cursor-pointer ml-1"
              >
                {t.tabAllergens}
              </button>
            </div>
          </div>

          <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
            <h4 className="font-bold text-stone-900 dark:text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-red-600 dark:text-red-500" />
              <span>{t.tabOpeningHours}</span>
            </h4>
            <p><strong className="text-stone-900 dark:text-white">Mon, Wed – Fri:</strong> 4:00 PM – 11:00 PM</p>
            <p><strong className="text-red-600 dark:text-red-400">Tuesday:</strong> CLOSED</p>
            <p><strong className="text-stone-900 dark:text-white">Sat – Sun & BH:</strong> 2:00 PM – 11:00 PM</p>
            <div className="pt-1 text-2xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
              <Truck className="w-3 h-3 text-amber-500 dark:text-amber-400" />
              <span>Delivery from 5:00 PM Daily</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
            <h4 className="font-bold text-stone-900 dark:text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-600 dark:text-red-500" />
              <span>{t.tabLocation}</span>
            </h4>
            <p className="font-medium text-stone-800 dark:text-stone-200">
              {RESTAURANT_INFO.address}
            </p>
            <p className="text-stone-500 dark:text-stone-400 text-2xs">
              Co. Longford, Ireland
            </p>
            <p className="pt-1">
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`} 
                className="text-stone-900 hover:text-red-600 dark:text-white dark:hover:text-red-400 font-bold flex items-center gap-1.5 transition text-sm"
              >
                <Phone className="w-4 h-4 text-red-600 dark:text-red-500" />
                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </a>
            </p>
            <p className="text-2xs text-stone-500">
              Intl: {RESTAURANT_INFO.phone}
            </p>
          </div>

          <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
            <h4 className="font-bold text-stone-900 dark:text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-red-600 dark:text-red-500" />
              <span>{t.tabDeals}</span>
            </h4>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed">
              Delivery service within 10 miles radius. Minimum delivery order €10.00.
            </p>
            <div className="pt-2 flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => handleOpenInfo('deals')}
                className="inline-flex items-center justify-between px-3 py-2 bg-stone-100 hover:bg-stone-200 dark:bg-neutral-900 dark:hover:bg-neutral-850 rounded-xl text-stone-800 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white transition font-medium cursor-pointer border border-stone-200 dark:border-neutral-800"
              >
                <span>Delivery Deals from €7</span>
                <span className="text-red-600 dark:text-red-500 font-bold">→</span>
              </button>
              <button
                type="button"
                onClick={() => handleOpenInfo('allergens')}
                className="inline-flex items-center justify-between px-3 py-2 bg-stone-100 hover:bg-stone-200 dark:bg-neutral-900 dark:hover:bg-neutral-850 rounded-xl text-stone-800 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white transition font-medium cursor-pointer border border-stone-200 dark:border-neutral-800"
              >
                <span>14 Food Allergens Info</span>
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              </button>
              {RESTAURANT_INFO.playStoreUrl && (
                <a
                  href={RESTAURANT_INFO.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-3 py-2 bg-stone-100 hover:bg-stone-200 dark:bg-neutral-900 dark:hover:bg-neutral-850 rounded-xl text-stone-800 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white transition font-medium border border-stone-200 dark:border-neutral-800"
                >
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Google Play Store App</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-stone-500 dark:text-stone-400" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-stone-200 dark:border-neutral-800/80 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-2xs text-stone-500 gap-3">
          <p>© {new Date().getFullYear()} Momoda Asian Street Food, Edgeworthstown. All rights reserved.</p>
          <p>Digital Dining & Table Order Slip System</p>
        </div>
      </footer>

      {/* Modals */}
      <DishDetailModal
        item={selectedDishForDetail}
        onClose={() => setSelectedDishForDetail(null)}
        onAddToCart={handleAddToCart}
        onOpenAllergens={() => handleOpenInfo('allergens')}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onShowToWaiter={handleShowToWaiter}
        onBrowseDrinks={() => setActiveCategory('drinks')}
      />

      <WaiterOrderSlipModal
        isOpen={isWaiterSlipOpen}
        onClose={() => setIsWaiterSlipOpen(false)}
        cartItems={cartItems}
        tableNumber={tableNumber}
        onChangeTable={setTableNumber}
        onOrderAcknowledged={handleWaiterAcknowledged}
      />

      <RestaurantInfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        initialTab={infoModalTab}
        key={`restaurant-info-${infoModalTab}-${isInfoModalOpen}`}
      />

      {successOrder && (
        <OrderSuccessModal
          isOpen={!!successOrder}
          onClose={() => setSuccessOrder(null)}
          orderCode={successOrder.code}
          orderType="waiter"
          items={successOrder.items}
          total={successOrder.total}
        />
      )}

      {/* Floating Back to Top Button */}
      <BackToTopButton hasActiveCart={cartItems.length > 0} />

      {/* Thumb-friendly Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenInfo={handleOpenInfo}
        onFocusSearch={() => {
          const searchInput = document.getElementById('navbar-search-input');
          if (searchInput) {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
        onScrollToMenu={() => {
          setActiveCategory('all');
          setActiveTagFilter(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeCategory={activeCategory}
      />
    </div>
  );
}
