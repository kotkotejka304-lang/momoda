import React, { useState, useEffect } from 'react';
import { X, MapPin, Phone, Clock, Truck, ShieldAlert, ExternalLink, Calendar, Smartphone } from 'lucide-react';
import { RESTAURANT_INFO, ALLERGENS_LIST, DELIVERY_DEALS } from '../data/menuData';
import { MomodaLogo } from './MomodaLogo';
import { useLanguage } from '../i18n/LanguageContext';

interface RestaurantInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'hours' | 'contact' | 'deals' | 'allergens';
}

export const RestaurantInfoModal: React.FC<RestaurantInfoModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'hours',
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'hours' | 'contact' | 'deals' | 'allergens'>(initialTab);

  // Synchronise active tab whenever initialTab or modal open state updates
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  const handleTabChange = (tab: 'hours' | 'contact' | 'deals' | 'allergens') => {
    setActiveTab(tab);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="relative bg-white dark:bg-neutral-950 w-full max-w-2xl rounded-t-3xl rounded-b-none sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-neutral-800 max-h-[92vh] sm:max-h-[90vh] flex flex-col text-stone-900 dark:text-white transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Handle */}
        <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden bg-stone-100 dark:bg-neutral-900 shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-stone-300 dark:bg-neutral-700" />
        </div>

        {/* Header */}
        <div className="bg-stone-50 dark:bg-neutral-900 border-b border-stone-200 dark:border-neutral-800 text-stone-900 dark:text-white p-4 sm:p-6 relative shrink-0">
          <button
            type="button"
            id="close-info-modal-btn"
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-neutral-950 dark:hover:bg-neutral-800 text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white border border-stone-200 dark:border-neutral-700 flex items-center justify-center transition cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pr-8">
            <div className="flex items-center gap-3">
              <MomodaLogo size="sm" />
              <div>
                <h2 className="text-base sm:text-xl font-bold tracking-tight text-stone-900 dark:text-white">
                  {t.restaurantInfoTitle}
                </h2>
                <p className="text-2xs sm:text-xs text-stone-500 dark:text-stone-400 truncate">
                  {RESTAURANT_INFO.address}
                </p>
              </div>
            </div>

            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-xl font-semibold text-xs shadow-md shadow-red-900/20 dark:shadow-red-950/40 border border-red-500/40 transition self-start sm:self-auto min-h-[36px]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.callPhoneBtn}: {RESTAURANT_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 mt-3 sm:mt-5 overflow-x-auto pb-1 text-xs no-scrollbar -mx-1 px-1">
            <button
              type="button"
              id="info-tab-hours"
              onClick={() => handleTabChange('hours')}
              className={`px-3.5 py-2 min-h-[40px] rounded-xl font-medium transition active:scale-95 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'hours'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200 dark:bg-neutral-950 dark:hover:bg-neutral-850 dark:text-stone-400 dark:hover:text-white dark:border-neutral-800'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{t.tabOpeningHours}</span>
            </button>

            <button
              type="button"
              id="info-tab-contact"
              onClick={() => handleTabChange('contact')}
              className={`px-3.5 py-2 min-h-[40px] rounded-xl font-medium transition active:scale-95 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200 dark:bg-neutral-950 dark:hover:bg-neutral-850 dark:text-stone-400 dark:hover:text-white dark:border-neutral-800'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.tabLocation}</span>
            </button>

            <button
              type="button"
              id="info-tab-deals"
              onClick={() => handleTabChange('deals')}
              className={`px-3.5 py-2 min-h-[40px] rounded-xl font-medium transition active:scale-95 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'deals'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200 dark:bg-neutral-950 dark:hover:bg-neutral-850 dark:text-stone-400 dark:hover:text-white dark:border-neutral-800'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>{t.tabDeals}</span>
            </button>

            <button
              type="button"
              id="info-tab-allergens"
              onClick={() => handleTabChange('allergens')}
              className={`px-3.5 py-2 min-h-[40px] rounded-xl font-medium transition active:scale-95 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'allergens'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200 dark:bg-neutral-950 dark:hover:bg-neutral-850 dark:text-stone-400 dark:hover:text-white dark:border-neutral-800'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{t.tabAllergens}</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Tab 1: Hours */}
          {activeTab === 'hours' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-stone-50 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-2xl flex items-start gap-3">
                <Truck className="w-5 h-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700 dark:text-stone-300">
                  <p className="font-bold text-stone-900 dark:text-white uppercase tracking-wider">{t.deliveryTitle}</p>
                  <p className="text-stone-500 dark:text-stone-400 mt-0.5">
                    {t.deliverySubtitle}
                  </p>
                </div>
              </div>

              <div className="border border-stone-200 dark:border-neutral-800 rounded-2xl overflow-hidden divide-y divide-stone-100 dark:divide-neutral-900">
                {RESTAURANT_INFO.openingHours.map((schedule, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-3 text-xs ${
                      schedule.hours.toLowerCase().includes('closed') ? 'bg-stone-100/50 dark:bg-neutral-900/40 text-stone-400 dark:text-stone-500' : 'bg-white dark:bg-neutral-950 text-stone-800 dark:text-stone-200 font-medium'
                    }`}
                  >
                    <span className="font-semibold flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
                      {schedule.days}
                    </span>
                    <span className={schedule.hours.toLowerCase().includes('closed') ? 'font-bold text-red-600 dark:text-red-500' : 'font-bold text-stone-900 dark:text-white'}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-stone-50 dark:bg-neutral-900 rounded-2xl border border-stone-200 dark:border-neutral-800 text-xs text-stone-600 dark:text-stone-400">
                <span className="font-bold text-stone-900 dark:text-white block mb-1">🎉 Party Catering Available</span>
                {RESTAURANT_INFO.cateringNote} Call <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-red-600 dark:text-red-400 font-semibold underline">{RESTAURANT_INFO.phoneDisplay}</a> for bookings.
              </div>
            </div>
          )}

          {/* Tab 2: Contact & Socials */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase">
                    <MapPin className="w-4 h-4" />
                    <span>Restaurant Address</span>
                  </div>
                  <p className="text-sm font-bold text-stone-900 dark:text-white">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Pound St, Edgeworthstown, Co. Longford, Ireland
                  </p>
                  <a
                    href="https://maps.google.com/?q=Momoda+Asian+Street+Food+Pound+St+Edgeworthstown"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-semibold pt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase">
                    <Phone className="w-4 h-4" />
                    <span>Telephone & Orders</span>
                  </div>
                  <p className="text-sm font-bold text-stone-900 dark:text-white">
                    {RESTAURANT_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Direct Line: {RESTAURANT_INFO.phone}
                  </p>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-semibold pt-1"
                  >
                    <span>Tap to Call</span>
                    <Phone className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="p-4 rounded-2xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-neutral-900/60 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Follow Momoda on Social Media
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={RESTAURANT_INFO.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-900 dark:bg-blue-950/40 dark:border-blue-800/40 dark:hover:bg-blue-900/40 dark:text-blue-200 transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                        f
                      </span>
                      <div>
                        <div className="font-bold text-xs">Facebook</div>
                        <div className="text-2xs text-blue-600 dark:text-blue-400">@momodaasianstreetfood</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </a>

                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-pink-50 border border-pink-200 hover:bg-pink-100 text-pink-900 dark:bg-pink-950/40 dark:border-pink-800/40 dark:hover:bg-pink-900/40 dark:text-pink-200 transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                        IG
                      </span>
                      <div>
                        <div className="font-bold text-xs">Instagram</div>
                        <div className="text-2xs text-pink-600 dark:text-pink-400">@momodaasianstreetfood</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  </a>
                </div>
              </div>

              {/* Official Google Play Store App */}
              {RESTAURANT_INFO.playStoreUrl && (
                <div className="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50 dark:bg-emerald-950/30 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-emerald-950 dark:text-white">Official Android App</h4>
                        <p className="text-2xs text-emerald-700 dark:text-emerald-400">Available on Google Play Store</p>
                      </div>
                    </div>
                    <span className="text-2xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/40">
                      Free Download
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Order directly from your phone for collection or home delivery in Edgeworthstown and surrounding areas.
                  </p>

                  <a
                    href={RESTAURANT_INFO.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-white hover:bg-stone-50 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-stone-900 dark:text-white text-xs font-semibold transition border border-emerald-300 dark:border-emerald-700/40 shadow-xs"
                  >
                    <span>Get it on Google Play</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Delivery Deals & Rates */}
          {activeTab === 'deals' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-stone-50 dark:bg-neutral-900 text-stone-900 dark:text-white rounded-2xl flex items-center justify-between border border-stone-200 dark:border-neutral-800">
                <div>
                  <span className="text-2xs text-red-600 dark:text-red-400 font-semibold uppercase tracking-wider block">Special Offer</span>
                  <span className="text-xs sm:text-sm font-bold">Delivery Deals Available Daily</span>
                </div>
                <span className="text-2xs px-2.5 py-1 bg-red-600 text-white rounded-lg font-bold">From 5:00 PM</span>
              </div>

              <div className="space-y-3">
                {DELIVERY_DEALS.map((deal) => (
                  <div 
                    key={deal.code}
                    className="p-4 rounded-2xl border border-stone-200 hover:border-stone-300 dark:border-neutral-800 dark:hover:border-neutral-700 bg-stone-50 dark:bg-neutral-900 transition space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-white dark:bg-neutral-950 border border-stone-200 dark:border-neutral-700 text-stone-900 dark:text-white flex items-center justify-center font-bold text-xs shadow-xs">
                          {deal.code}
                        </span>
                        <h4 className="font-bold text-sm text-stone-900 dark:text-white">
                          {deal.title}
                        </h4>
                      </div>
                      <span className="text-base font-bold text-red-600 dark:text-red-400 shrink-0">
                        €{deal.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pl-9">
                      {deal.description}
                    </p>
                    {deal.note && (
                      <p className="text-2xs font-medium text-stone-500 italic pl-9">
                        {deal.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Delivery Rates */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                  Delivery Areas & Rates (Min Order €{RESTAURANT_INFO.deliveryDeals.minOrder.toFixed(2)})
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-2xs">
                  {RESTAURANT_INFO.deliveryDeals.rates.map((r, i) => (
                    <div key={i} className="p-2.5 rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-neutral-900">
                      <div className="font-semibold text-stone-900 dark:text-white truncate">{r.area}</div>
                      <div className="text-red-600 dark:text-red-400 font-bold">{r.fee}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: 14 Allergens */}
          {activeTab === 'allergens' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 rounded-2xl flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                  <p className="font-bold text-amber-800 dark:text-amber-300">Customer Allergy & Dietary Advice</p>
                  <p className="text-amber-900/90 dark:text-amber-200/90 mt-0.5">
                    If you suffer from allergies or dietary intolerances, please speak to your server or call us before placing an order. Items on our menu reference the standard 14 EU food allergen categories below.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ALLERGENS_LIST.map((item) => (
                  <div
                    key={item.number}
                    className="p-3 rounded-xl border border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-neutral-900 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-white dark:bg-neutral-950 border border-stone-200 dark:border-neutral-700 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                      {item.number}
                    </span>
                    <div className="text-xs">
                      <span className="font-bold text-stone-900 dark:text-white block">
                        {item.name}
                      </span>
                      {item.examples && (
                        <span className="text-2xs text-stone-500 dark:text-stone-400 leading-snug">
                          {item.examples}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-stone-200 dark:border-neutral-800 bg-stone-50 dark:bg-neutral-900 flex items-center justify-between pb-safe shrink-0">
          <span className="text-2xs text-stone-500 dark:text-stone-400">
            Momoda Asian Street Food • Edgeworthstown
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 min-h-[38px] rounded-xl bg-stone-200 hover:bg-stone-300 dark:bg-neutral-950 dark:hover:bg-neutral-800 text-stone-900 dark:text-white font-semibold text-xs border border-stone-300 dark:border-neutral-700 transition cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
