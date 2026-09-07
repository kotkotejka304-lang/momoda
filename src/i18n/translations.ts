export type SupportedLanguage = 'en' | 'ga' | 'ru' | 'es' | 'de' | 'uk';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  cyberCode: string; // Kept as short code for backward compatibility
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', cyberCode: 'EN' },
  { code: 'ga', name: 'Irish', nativeName: 'Gaeilge', flag: '🇮🇪', cyberCode: 'GA' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', cyberCode: 'RU' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', cyberCode: 'ES' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', cyberCode: 'DE' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦', cyberCode: 'UK' },
];

export interface TranslationDictionary {
  // Navigation & Top Ticker
  locationTicker: string;
  phoneTicker: string;
  allergensTicker: string;
  deliveryTimeTicker: string;
  dealsTicker: string;
  systemStatus: string;
  terminalMode: string;
  audioToggle: string;
  searchPlaceholder: string;
  infoAndHours: string;
  orderSlip: string;
  liveCart: string;

  // Hero Section
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroFeatureWaiter: string;
  heroFeatureDelivery: string;
  heroFeatureDeals: string;
  heroFeatureAllergens: string;
  heroExploreMenu: string;
  heroKitchenStatus: string;

  // Categories
  catAll: string;
  catStarters: string;
  catSoup: string;
  catChefSpecials: string;
  catWok: string;
  catNoodles: string;
  catFriedRice: string;
  catEuropean: string;
  catSides: string;
  catDesserts: string;
  catDrinks: string;

  // Category Subdescriptions
  catDescStarters: string;
  catDescSoup: string;
  catDescChefSpecials: string;
  catDescWok: string;
  catDescNoodles: string;
  catDescFriedRice: string;
  catDescEuropean: string;
  catDescSides: string;
  catDescDesserts: string;
  catDescDrinks: string;

  // Filters & Tags
  filterAll: string;
  filterChefPick: string;
  filterSpicy: string;
  filterVeg: string;
  filterPopular: string;
  filterCrispy: string;
  filterMild: string;
  filterGlutenFree: string;
  filterShowing: string;
  filterDishesCount: string;

  // Actions & Buttons
  btnQuickAdd: string;
  btnAdded: string;
  btnCustomize: string;
  btnOptions: string;
  priceLabel: string;
  prepTimePrefix: string;
  spicyMild: string;
  spicyMedium: string;
  spicyHot: string;
  soldOut: string;
  specialBadge: string;
  chefPickBadge: string;
  popularBadge: string;
  selectOptionRequired: string;
  specialInstructionsLabel: string;
  specialInstructionsPlaceholder: string;
  addToCartBtn: string;
  updateCartBtn: string;
  viewDetails: string;
  allergensContained: string;

  // Drinks Section
  drinksSectionTitle: string;
  drinksSectionSubtitle: string;
  drinksOptionsCount: string;
  btnViewDrinks: string;
  servingChilled: string;

  // Cart / Order Drawer
  drawerTitle: string;
  drawerTerminalId: string;
  diningTypeLabel: string;
  diningDineIn: string;
  diningTakeaway: string;
  tableNumberLabel: string;
  tableNumberPlaceholder: string;
  emptyCartTitle: string;
  emptyCartDesc: string;
  startOrderingBtn: string;
  subtotalLabel: string;
  totalLabel: string;
  clearOrderBtn: string;
  showToWaiterBtn: string;
  browseDrinksPrompt: string;
  browseDrinksBtn: string;

  // Waiter Order Slip Modal
  waiterSlipTitle: string;
  waiterSlipBadge: string;
  waiterVerificationCode: string;
  waiterInstructionHeading: string;
  waiterInstructionText: string;
  waiterTable: string;
  waiterOrderType: string;
  waiterAcknowledgedBtn: string;
  waiterKeepEditingBtn: string;
  waiterStatusTransmitted: string;

  // Modals & Info
  modalTabHours: string;
  modalTabContact: string;
  modalTabDeals: string;
  modalTabAllergens: string;
  modalOpeningHoursTitle: string;
  modalDeliveryRadiusTitle: string;
  modalContactTitle: string;
  modalDealsTitle: string;
  modalAllergensTitle: string;
  closeBtn: string;

  // Empty / Search states
  noSearchMatches: string;
  noSearchMatchesDesc: string;
  resetFiltersBtn: string;
  noDishesFound: string;
  noDishesAdvice: string;

  // Sticky Bar & Order Slip
  stickyBarDishes: string;
  btnOrderSlip: string;

  // Tabs
  tabOpeningHours: string;
  tabLocation: string;
  tabDeals: string;
  tabAllergens: string;

  // Order Success Modal
  orderConfirmedHeading: string;
  orderConfirmedSubtitle: string;
  backToMenuBtn: string;

  // Restaurant Info Modal & Contact
  restaurantInfoTitle: string;
  callPhoneBtn: string;
  deliveryTitle: string;
  deliverySubtitle: string;

  // Footer
  footerDeliveryInfo: string;
  footerRights: string;
  footerTagline: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    locationTicker: 'Pound St, Edgeworthstown',
    phoneTicker: '043 667 2871',
    allergensTicker: '14 Allergens Guide',
    deliveryTimeTicker: 'Delivery 5pm–11pm',
    dealsTicker: 'Delivery Deals from €7',
    systemStatus: 'Open Today • 4:00 PM – 11:00 PM',
    terminalMode: 'Order Slip',
    audioToggle: 'Sound',
    searchPlaceholder: 'Search starters, noodles, spice bag, wok...',
    infoAndHours: 'Info & Hours',
    orderSlip: 'Order Slip',
    liveCart: 'ORDER SLIP',

    heroBadge: 'Authentic Asian Street Food • Edgeworthstown',
    heroTitle1: 'Momoda Asian Street Food',
    heroTitle2: 'Fresh from the Wok & Steamers',
    heroSubtitle: 'Authentic sweetcorn cakes, curry triangles, wok noodles, salted chilli shredded chicken, and curries. Customise your dish, then show your digital order slip directly to your server.',
    heroFeatureWaiter: 'Show Slip to Server',
    heroFeatureDelivery: 'Delivery 5pm–11pm',
    heroFeatureDeals: 'Deals from €7',
    heroFeatureAllergens: '14 Allergens Guide',
    heroExploreMenu: 'Explore Menu',
    heroKitchenStatus: 'Fresh Daily • Table Order Slip',

    catAll: 'Full Menu',
    catStarters: 'Starters',
    catSoup: 'Soup',
    catChefSpecials: 'Chef Specials',
    catWok: 'Wok Dishes',
    catNoodles: 'Noodles & Chow Mein',
    catFriedRice: 'Fried Rice',
    catEuropean: 'European Dishes',
    catSides: 'Sides & Extras',
    catDesserts: 'Desserts',
    catDrinks: 'Chilled Drinks',

    catDescStarters: 'Crisp spring rolls, sweetcorn cakes, BBQ ribs and satay skewers.',
    catDescSoup: 'Aromatic chicken sweetcorn, wonton, and hot & sour broth.',
    catDescChefSpecials: 'Signature Salt & Chilli Chicken, shredded crispy beef, and aromatic duck.',
    catDescWok: 'High-heat wok tossed black bean, sweet & sour, szechuan and ginger spring onion.',
    catDescNoodles: 'Crispy chow mein, wok soft noodles, and Singapore spicy rice vermicelli.',
    catDescFriedRice: 'Jasmine wok-fried rice with egg, scallions and premium proteins.',
    catDescEuropean: 'Crispy chicken breast, sausages, chicken balls, and steak-cut chips.',
    catDescSides: 'Egg fried rice, boiled rice, chips, curry sauce, prawn crackers.',
    catDescDesserts: 'Crispy fried banana fritters with golden syrup & sweet treats.',
    catDescDrinks: 'Cans, 1.5L/2L sharing bottles, Capri Sun pouches & mineral waters.',

    filterAll: 'All Items',
    filterChefPick: "Chef's Pick",
    filterSpicy: 'Spicy',
    filterVeg: 'Veg / Vegan',
    filterPopular: 'Popular',
    filterCrispy: 'Crispy',
    filterMild: 'Mild (1 Chili)',
    filterGlutenFree: 'Gluten-Free',
    filterShowing: 'Showing',
    filterDishesCount: 'dishes',

    btnQuickAdd: 'Add',
    btnAdded: 'Added',
    btnCustomize: 'Customize',
    btnOptions: 'Options',
    priceLabel: 'Price',
    prepTimePrefix: '~',
    spicyMild: 'Mild',
    spicyMedium: 'Spicy',
    spicyHot: 'Very Hot',
    soldOut: 'Sold Out',
    specialBadge: 'Special',
    chefPickBadge: "Chef's Pick",
    popularBadge: 'Popular',
    selectOptionRequired: 'Please choose an option',
    specialInstructionsLabel: 'Special Instructions for Kitchen',
    specialInstructionsPlaceholder: 'e.g. no onions, extra crispy, sauce on the side...',
    addToCartBtn: 'Add to Order Slip',
    updateCartBtn: 'Update Order Item',
    viewDetails: 'Customize Dish',
    allergensContained: 'Allergens',

    drinksSectionTitle: 'Chilled Drinks & Refreshments',
    drinksSectionSubtitle: 'Canned sodas, 1.5L/2L sharing bottles, Capri Sun pouches & mineral waters',
    drinksOptionsCount: 'Cold Drinks',
    btnViewDrinks: 'View Drinks',
    servingChilled: 'Chilled & Fresh',

    drawerTitle: 'Digital Order Slip',
    drawerTerminalId: 'Table Order Slip',
    diningTypeLabel: 'Dining Mode',
    diningDineIn: 'Dine-In (Table)',
    diningTakeaway: 'Takeaway / Collection',
    tableNumberLabel: 'Table Number',
    tableNumberPlaceholder: 'e.g. 4',
    emptyCartTitle: 'Your order slip is empty',
    emptyCartDesc: 'Explore our street food menu, select your dishes, and show your slip to your server.',
    startOrderingBtn: 'Browse Menu',
    subtotalLabel: 'Subtotal',
    totalLabel: 'Total Amount',
    clearOrderBtn: 'Clear Slip',
    showToWaiterBtn: 'Show Slip to Waiter',
    browseDrinksPrompt: 'Fancy a chilled drink with your meal?',
    browseDrinksBtn: 'Add Drinks',

    waiterSlipTitle: 'Order Slip for Waiter',
    waiterSlipBadge: 'GUEST ORDER SLIP',
    waiterVerificationCode: 'Order Reference',
    waiterInstructionHeading: 'Show this screen to your server',
    waiterInstructionText: 'Present this order slip on your phone to your server or counter staff. They will note your selections and send them straight to the kitchen.',
    waiterTable: 'Table',
    waiterOrderType: 'Order Type',
    waiterAcknowledgedBtn: 'Server Confirmed Order',
    waiterKeepEditingBtn: 'Modify Slip Items',
    waiterStatusTransmitted: 'ORDER READY FOR WAITER',

    modalTabHours: 'Hours',
    modalTabContact: 'Contact',
    modalTabDeals: 'Deals',
    modalTabAllergens: '14 Allergens',
    modalOpeningHoursTitle: 'Opening Hours & Delivery Schedule',
    modalDeliveryRadiusTitle: 'Delivery Service (10 Miles Radius)',
    modalContactTitle: 'Call & Location Coordinates',
    modalDealsTitle: 'Delivery & Combo Deals',
    modalAllergensTitle: 'EU 14 Food Allergens Declaration',
    closeBtn: 'Close',

    noSearchMatches: 'No dishes match your search',
    noSearchMatchesDesc: 'Try adjusting your dietary filter, language, or search query.',
    resetFiltersBtn: 'Reset Search & Filters',
    noDishesFound: 'No dishes match your search',
    noDishesAdvice: 'Try adjusting your dietary filter or search terms.',
    stickyBarDishes: 'dishes selected',
    btnOrderSlip: 'Slip',
    tabOpeningHours: 'Opening Hours',
    tabLocation: 'Location & Socials',
    tabDeals: 'Delivery Deals',
    tabAllergens: '14 Allergens',
    orderConfirmedHeading: 'Order Taken by Waiter!',
    orderConfirmedSubtitle: 'Your server has recorded your order slip. Relax and enjoy your meal at Momoda!',
    backToMenuBtn: 'Back to Menu',
    restaurantInfoTitle: 'Restaurant Information',
    callPhoneBtn: 'Call Now',
    deliveryTitle: 'Home Delivery Service',
    deliverySubtitle: 'Delivery service starts from 5:00 PM daily. We deliver within a 10 miles radius. Minimum delivery order is €10.00.',

    footerDeliveryInfo: 'Delivery service within 10 miles radius. Minimum delivery order €10.00.',
    footerRights: 'Momoda Asian Street Food, Edgeworthstown. All rights reserved.',
    footerTagline: 'Authentic Asian Street Food, Fresh Wok & Noodles • Edgeworthstown',
  },

  ga: {
    locationTicker: 'Sráid an Phuint, Baile Uí Mhatháin',
    phoneTicker: '043 667 2871',
    allergensTicker: '14 Ailléirgin',
    deliveryTimeTicker: 'Seachadadh 5in–11in',
    dealsTicker: 'Margaí Seachadta ó €7',
    systemStatus: 'Oscailte Inniu • 4:00 i.n. – 11:00 i.n.',
    terminalMode: 'Duillín Ordaithe',
    audioToggle: 'Fuaim',
    searchPlaceholder: 'Cuardaigh tosaitheoirí, núdail, mála spíosra...',
    infoAndHours: 'Eolas & Uaireanta',
    orderSlip: 'Duillín Ordaithe',
    liveCart: 'DUILLÍN',

    heroBadge: 'Bia Sráide Barántúil • Baile Uí Mhatháin',
    heroTitle1: 'Momoda Bia Sráide na hÁise',
    heroTitle2: 'Úr as an mBoc & na Gaileáin',
    heroSubtitle: 'Cácaí arbhar milis barántúla, triantáin cuirí, núdail bhuic, sicín salainn is cillí, agus cuirí blasta. Cumasaigh do mhias, ansin taispeáin do dhuillín go díreach do do fhreastalaí.',
    heroFeatureWaiter: 'Taispeáin do Fhreastalaí',
    heroFeatureDelivery: 'Seachadadh 5in–11in',
    heroFeatureDeals: 'Margaí ó €7',
    heroFeatureAllergens: 'Treoir 14 Ailléirgin',
    heroExploreMenu: 'Fiosraigh an Roghchlár',
    heroKitchenStatus: 'Bocaite Úra • Duillín don Fhreastalaí',

    catAll: 'Gach Mias',
    catStarters: 'Tosaitheoirí',
    catSoup: 'Anraithí',
    catChefSpecials: 'Sainmiasa an Chócaire',
    catWok: 'Miasa Boc',
    catNoodles: 'Núdail & Chow Mein',
    catFriedRice: 'Rís Fhrite',
    catEuropean: 'Miasa Eorpacha',
    catSides: 'Breiseáin & Dips',
    catDesserts: 'Milseáin',
    catDrinks: 'Deochanna Fuaraithe',

    catDescStarters: 'Rollaí earraigh brioscacha, cácaí arbhar, easnacha BBQ agus scéibhíní satay.',
    catDescSoup: 'Anraith cumhra sicín agus arbhair, wonton, agus anraith géar-the.',
    catDescChefSpecials: 'Sicín Salainn & Sile, mairteoil ghéarchúiseach, agus lacha chumhra.',
    catDescWok: 'Miasa sciobtha pónairí dubha, milis agus searbh, szechuan agus sinséar.',
    catDescNoodles: 'Núdail ghéarchúiseacha, núdail boga, agus vermicelli Shingeapór.',
    catDescFriedRice: 'Rís Jasmine friochta le hubh, oinniúin earraigh agus feoil ardchaighdeáin.',
    catDescEuropean: 'Ucht sicín brioscach, ispíní, liathróidí sicín, agus sliseanna.',
    catDescSides: 'Rís friochta uibhe, rís bhruite, sceallóga, anlann cuirí, brioscóga ribí róibéis.',
    catDescDesserts: 'Friteoirí banana friochta le mil & déileálann milis.',
    catDescDrinks: 'Cannaí, buidéil 1.5L/2L, púitsí Capri Sun & uiscí mianraí.',

    filterAll: 'Gach Mír',
    filterChefPick: 'Rogha an Chócaire',
    filterSpicy: 'Spíosrach',
    filterVeg: 'Glas / Vegánach',
    filterPopular: 'Coitianta',
    filterCrispy: 'Briosc',
    filterMild: 'Éadrom (1 Sile)',
    filterGlutenFree: 'Gan Glútan',
    filterShowing: 'Ag taispeáint',
    filterDishesCount: 'mias',

    btnQuickAdd: 'Cuir Leis',
    btnAdded: 'Curtha Leis',
    btnCustomize: 'Saincheap',
    btnOptions: 'Roghanna',
    priceLabel: 'Praghas',
    prepTimePrefix: '~',
    spicyMild: 'Éadrom',
    spicyMedium: 'Spíosrach',
    spicyHot: 'An-Spíosrach',
    soldOut: 'Díolta Amach',
    specialBadge: 'Speisialta',
    chefPickBadge: 'Rogha an Chócaire',
    popularBadge: 'Coitianta',
    selectOptionRequired: 'Roghnaigh rogha le do thoil',
    specialInstructionsLabel: 'Treoracha Speisialta don Chistin',
    specialInstructionsPlaceholder: 'm.sh. gan oinniún, an-bhríosc, anlann ar an taobh...',
    addToCartBtn: 'Cuir leis an Duillín',
    updateCartBtn: 'Nuashonraigh an Mias',
    viewDetails: 'Féach ar Sonraí',
    allergensContained: 'Ailléirginí',

    drinksSectionTitle: 'Deochanna Fuaraithe & Sólaistí',
    drinksSectionSubtitle: 'Sóidí i gcannaí, buidéil mhóra 1.5L/2L, púitsí Capri Sun & uisce mianra',
    drinksOptionsCount: 'Roghanna Fuar',
    btnViewDrinks: 'Féach Deochanna',
    servingChilled: 'FUAR & ÚR',

    drawerTitle: 'Duillín Ordaithe Digiteach',
    drawerTerminalId: 'Duillín Tábla',
    diningTypeLabel: 'Modh Itheacháin',
    diningDineIn: 'Ithe Isteach (Tábla)',
    diningTakeaway: 'Beir Leat / Bailiúchán',
    tableNumberLabel: 'Uimhir Thábla',
    tableNumberPlaceholder: 'm.sh. 4',
    emptyCartTitle: 'Tá do dhuillín ordaithe folamh',
    emptyCartDesc: 'Roghnaigh miasa blasta as ár mbiachlár agus taispeáin don fhreastalaí iad.',
    startOrderingBtn: 'Fiosraigh an Biachlár',
    subtotalLabel: 'Fothomhas',
    totalLabel: 'Méid Iomlán',
    clearOrderBtn: 'Glan an Duillín',
    showToWaiterBtn: 'Taispeáin do Fhreastalaí',
    browseDrinksPrompt: 'Ar mhaith leat deoch fhuar freisin?',
    browseDrinksBtn: 'Cuir Deochanna Leis',

    waiterSlipTitle: 'Duillín Ordaithe don Fhreastalaí',
    waiterSlipBadge: 'DUILLÍN AN AÍ',
    waiterVerificationCode: 'Cód Tagartha',
    waiterInstructionHeading: 'Taispeáin an scáileán seo do do fhreastalaí',
    waiterInstructionText: 'Taispeáin an duillín seo ar d\'fhón do do fhreastalaí nó ag an gcuntar. Déanfaidh siad do chuid míreanna a thaifeadadh agus a sheoladh chuig an gcistin.',
    waiterTable: 'Tábla',
    waiterOrderType: 'Cineál Ordaithe',
    waiterAcknowledgedBtn: 'Dheimhnigh an Freastalaí an tOrdú',
    waiterKeepEditingBtn: 'Athraigh Míreanna an Duillín',
    waiterStatusTransmitted: 'ORDÚ RÉIDH DON FHREASTALAÍ',

    modalTabHours: 'Uaireanta',
    modalTabContact: 'Teagmháil',
    modalTabDeals: 'Margaí',
    modalTabAllergens: '14 Ailléirgin',
    modalOpeningHoursTitle: 'Uaireanta Oscailte & Sceideal Seachadta',
    modalDeliveryRadiusTitle: 'Seirbhís Seachadta (Ga 10 Míle)',
    modalContactTitle: 'Glaoch & Suíomh',
    modalDealsTitle: 'Margaí Seachadta & Teaglama',
    modalAllergensTitle: 'Dearbhú 14 Ailléirgin Bhia an AE',
    closeBtn: 'Dún',

    noSearchMatches: 'Níor aimsíodh aon mhias',
    noSearchMatchesDesc: 'Bain triail as do théarmaí cuardaigh nó do scagairí a athrú.',
    resetFiltersBtn: 'Athshocraigh Cuardach',
    noDishesFound: 'Níor aimsíodh aon mhias',
    noDishesAdvice: 'Bain triail as do théarmaí cuardaigh nó do scagairí a athrú.',
    stickyBarDishes: 'miasa roghnaithe',
    btnOrderSlip: 'Duillín',
    tabOpeningHours: 'Uaireanta Oscailte',
    tabLocation: 'Suíomh & Teagmháil',
    tabDeals: 'Margaí Seachadta',
    tabAllergens: '14 Ailléirgin',
    orderConfirmedHeading: 'Ordú Glactha ag an bhFreastalaí!',
    orderConfirmedSubtitle: 'Tá do dhuillín ordaithe taifeadta ag do fhreastalaí. Bí ar do shuaimhneas agus bain taitneamh as do bhéile ag Momoda!',
    backToMenuBtn: 'Ar Ais go dtí an Roghchlár',
    restaurantInfoTitle: 'Eolas faoin mBialann',
    callPhoneBtn: 'Glaoigh Anois',
    deliveryTitle: 'Seirbhís Seachadta Baile',
    deliverySubtitle: 'Tosaíonn an tseirbhís seachadta ó 5:00 i.n. gach lá. Seachadaimid laistigh de gha 10 míle. Is é €10.00 an t-ordú íosta seachadta.',

    footerDeliveryInfo: 'Seirbhís seachadta laistigh de 10 míle. Ordú íosta seachadta €10.00.',
    footerRights: 'Momoda Asian Street Food, Baile Uí Mhatháin. Gach ceart ar cosaint.',
    footerTagline: 'Bia Sráide na hÁise, Boc Úr & Núdail • Baile Uí Mhatháin',
  },

  ru: {
    locationTicker: 'Паунд Ст, Эджвортстаун',
    phoneTicker: '043 667 2871',
    allergensTicker: '14 Аллергенов',
    deliveryTimeTicker: 'Доставка 17:00–23:00',
    dealsTicker: 'Комбо с доставкой от €7',
    systemStatus: 'Открыто сегодня • 16:00 – 23:00',
    terminalMode: 'Чек заказа',
    audioToggle: 'Звук',
    searchPlaceholder: 'Поиск: стартеры, лапша, спайс бэг, вок...',
    infoAndHours: 'Инфо и Время',
    orderSlip: 'Чек заказа',
    liveCart: 'ЧЕК ЗАКАЗА',

    heroBadge: 'Аутентичный Азиатский Стритфуд • Эджвортстаун',
    heroTitle1: 'Momoda Азиатский Стритфуд',
    heroTitle2: 'Свежее из Вока и Пароварок',
    heroSubtitle: 'Настоящие кукурузные оладьи, карри-треугольники, вок-лапша, хрустящая курица с солью и чили и ароматные карри. Соберите заказ и покажите цифровой чек официанту.',
    heroFeatureWaiter: 'Покажите чек официанту',
    heroFeatureDelivery: 'Доставка 17:00–23:00',
    heroFeatureDeals: 'Сеты от €7',
    heroFeatureAllergens: 'Гид по 14 аллергенам',
    heroExploreMenu: 'Смотреть меню',
    heroKitchenStatus: 'Свежее каждый день • Чек для официанта',

    catAll: 'Все блюда',
    catStarters: 'Закуски',
    catSoup: 'Супы',
    catChefSpecials: 'Шеф-Спешлы',
    catWok: 'Блюда из Вока',
    catNoodles: 'Лапша и Чоу Мейн',
    catFriedRice: 'Жареный Рис',
    catEuropean: 'Европейские блюда',
    catSides: 'Гарниры и Соусы',
    catDesserts: 'Десерты',
    catDrinks: 'Охлажденные Напитки',

    catDescStarters: 'Хрустящие спринг-роллы, кукурузные оладьи, ребра BBQ и шашлычки сатай.',
    catDescSoup: 'Ароматный куриный с кукурузой, вонтон и кисло-острый суп.',
    catDescChefSpecials: 'Фирменная курочка Salt & Chilli, хрустящая говядина и утка по-пекински.',
    catDescWok: 'Жарка на сильном огне: черный перец, кисло-сладкий, сычуаньский и имбирный.',
    catDescNoodles: 'Хрустящая жареная лапша, мягкая пшеничная и сингапурская вермишель.',
    catDescFriedRice: 'Рис Жасмин из вока с яйцом, зеленым луком и отборным мясом.',
    catDescEuropean: 'Хрустящее куриное филе, сосиски, куриные шарики и стейк-картофель.',
    catDescSides: 'Рис с яйцом, отварной рис, картофель фри, карри соус, креветочные чипсы.',
    catDescDesserts: 'Хрустящие банановые фриттеры с медом и сладкие угощения.',
    catDescDrinks: 'Баночки, бутылки 1.5L/2L, соки Capri Sun и минеральная вода.',

    filterAll: 'Все позиции',
    filterChefPick: 'Выбор Шефа',
    filterSpicy: 'Острое',
    filterVeg: 'Веган / Вегетарианское',
    filterPopular: 'Популярное',
    filterCrispy: 'Хрустящее',
    filterMild: 'Мягкий (1 перец)',
    filterGlutenFree: 'Без глютена',
    filterShowing: 'Показано',
    filterDishesCount: 'позиций',

    btnQuickAdd: 'Добавить',
    btnAdded: 'Добавлено',
    btnCustomize: 'Настроить',
    btnOptions: 'Опции',
    priceLabel: 'Цена',
    prepTimePrefix: '~',
    spicyMild: 'Мягкий',
    spicyMedium: 'Острый',
    spicyHot: 'Очень острый',
    soldOut: 'Распродано',
    specialBadge: 'Спешл',
    chefPickBadge: 'Выбор Шефа',
    popularBadge: 'Хит',
    selectOptionRequired: 'Пожалуйста, выберите опцию',
    specialInstructionsLabel: 'Пожелания для кухни',
    specialInstructionsPlaceholder: 'например: без лука, более хрустящее, соус отдельно...',
    addToCartBtn: 'Добавить в чек заказа',
    updateCartBtn: 'Обновить позицию',
    viewDetails: 'Настроить блюдо',
    allergensContained: 'Аллергены',

    drinksSectionTitle: 'Охлажденные Напитки',
    drinksSectionSubtitle: 'Газировка в банках, большие бутылки 1.5L/2L, соки Capri Sun и вода',
    drinksOptionsCount: 'Холодных позиций',
    btnViewDrinks: 'Смотреть напитки',
    servingChilled: 'ПОДАЕТСЯ ОХЛАЖДЕННЫМ',

    drawerTitle: 'Цифровой Чек Заказа',
    drawerTerminalId: 'Чек столика',
    diningTypeLabel: 'Режим заказа',
    diningDineIn: 'В зале (Столик)',
    diningTakeaway: 'На вынос / С собой',
    tableNumberLabel: 'Номер столика',
    tableNumberPlaceholder: 'напр. 4',
    emptyCartTitle: 'Ваш чек заказа пуст',
    emptyCartDesc: 'Выберите любимые блюда из меню и покажите сформированный чек официанту.',
    startOrderingBtn: 'Перейти в меню',
    subtotalLabel: 'Подытог',
    totalLabel: 'Итого к оплате',
    clearOrderBtn: 'Очистить чек',
    showToWaiterBtn: 'Показать чек официанту',
    browseDrinksPrompt: 'Добавите прохладительный напиток?',
    browseDrinksBtn: 'Выбрать напитки',

    waiterSlipTitle: 'Чек для официанта',
    waiterSlipBadge: 'ГОСТЕВОЙ ЧЕК',
    waiterVerificationCode: 'Номер чека',
    waiterInstructionHeading: 'Покажите этот экран официанту',
    waiterInstructionText: 'Покажите этот чек на телефоне официанту за столиком или на кассе. Они примут заказ и отправят его на кухню.',
    waiterTable: 'Столик',
    waiterOrderType: 'Тип заказа',
    waiterAcknowledgedBtn: 'Официант принял заказ',
    waiterKeepEditingBtn: 'Изменить заказ',
    waiterStatusTransmitted: 'ЗАКАЗ ГОТОВ ДЛЯ ОФИЦИАНТА',

    modalTabHours: 'Часы',
    modalTabContact: 'Контакты',
    modalTabDeals: 'Акции',
    modalTabAllergens: '14 Аллергенов',
    modalOpeningHoursTitle: 'Часы работы и доставка',
    modalDeliveryRadiusTitle: 'Служба доставки (радиус 10 миль)',
    modalContactTitle: 'Телефон и Адрес',
    modalDealsTitle: 'Акции и комбо-наборы',
    modalAllergensTitle: '14 основных пищевых аллергенов ЕС',
    closeBtn: 'Закрыть',

    noSearchMatches: 'Блюда не найдены',
    noSearchMatchesDesc: 'Попробуйте изменить поисковый запрос или сбросить фильтры.',
    resetFiltersBtn: 'Сбросить фильтры',
    noDishesFound: 'Блюда не найдены',
    noDishesAdvice: 'Попробуйте изменить поисковый запрос или фильтры.',
    stickyBarDishes: 'блюд в чеке',
    btnOrderSlip: 'Чек',
    tabOpeningHours: 'Часы работы',
    tabLocation: 'Адрес и контакты',
    tabDeals: 'Акции на доставку',
    tabAllergens: '14 Аллергенов',
    orderConfirmedHeading: 'Заказ принят официантом!',
    orderConfirmedSubtitle: 'Официант зафиксировал ваш цифровой чек. Приятного аппетита в Momoda!',
    backToMenuBtn: 'Вернуться в меню',
    restaurantInfoTitle: 'Информация о ресторане',
    callPhoneBtn: 'Позвонить',
    deliveryTitle: 'Служба доставки на дом',
    deliverySubtitle: 'Доставка работает ежедневно с 17:00 в радиусе 10 миль. Минимальный заказ — €10.00.',

    footerDeliveryInfo: 'Доставка в радиусе 10 миль. Минимальный заказ на доставку €10.00.',
    footerRights: 'Momoda Asian Street Food, Эджвортстаун. Все права защищены.',
    footerTagline: 'Азиатский стритфуд, блюда из вока и лапша • Эджвортстаун',
  },

  es: {
    locationTicker: 'Pound St, Edgeworthstown',
    phoneTicker: '043 667 2871',
    allergensTicker: '14 Alérgenos',
    deliveryTimeTicker: 'Reparto 17:00–23:00',
    dealsTicker: 'Combos a Domicilio desde €7',
    systemStatus: 'Abierto hoy • 16:00 – 23:00',
    terminalMode: 'Comanda',
    audioToggle: 'Sonido',
    searchPlaceholder: 'Buscar entrantes, fideos, spice bag, wok...',
    infoAndHours: 'Info y Horario',
    orderSlip: 'Comanda',
    liveCart: 'COMANDA',

    heroBadge: 'Auténtica Street Food Asiática • Edgeworthstown',
    heroTitle1: 'Momoda Asian Street Food',
    heroTitle2: 'Recién Salido del Wok y Vaporeras',
    heroSubtitle: 'Auténticos pasteles de maíz, triángulos de curry, fideos al wok, pollo crujiente con sal y chile y curris aromáticos. Personaliza tu plato y muestra la comanda digital directamente a tu camarero.',
    heroFeatureWaiter: 'Mostrar al Camarero',
    heroFeatureDelivery: 'Reparto 17:00–23:00',
    heroFeatureDeals: 'Combos desde €7',
    heroFeatureAllergens: 'Guía de 14 Alérgenos',
    heroExploreMenu: 'Explorar Menú',
    heroKitchenStatus: 'Cocina Fresca Diaria • Comanda en Mesa',

    catAll: 'Menú Completo',
    catStarters: 'Entrantes',
    catSoup: 'Sopas',
    catChefSpecials: 'Especiales del Chef',
    catWok: 'Platos al Wok',
    catNoodles: 'Fideos y Chow Mein',
    catFriedRice: 'Arroz Frito',
    catEuropean: 'Platos Europeos',
    catSides: 'Acompañamientos',
    catDesserts: 'Postres',
    catDrinks: 'Bebidas Frías',

    catDescStarters: 'Rollitos de primavera crujientes, pasteles de maíz, costillas barbacoa y brochetas satay.',
    catDescSoup: 'Sopa aromática de pollo y maíz, wantán y sopa agripicante.',
    catDescChefSpecials: 'Pollo crujiente Sal y Chile, ternera crujiente y pato aromático.',
    catDescWok: 'Salteados a fuego vivo: judía negra, agridulce, szechuan y jengibre.',
    catDescNoodles: 'Chow mein crujiente, fideos suaves al wok y fideos de arroz Singapur.',
    catDescFriedRice: 'Arroz jazmín al wok con huevo, cebolletas y carnes seleccionadas.',
    catDescEuropean: 'Pechuga de pollo crujiente, salchichas, bolas de pollo y patatas gruesas.',
    catDescSides: 'Arroz frito con huevo, arroz blanco, patatas fritas, salsa curry, pan de gambas.',
    catDescDesserts: 'Buñuelos de plátano crujientes con sirope y dulces.',
    catDescDrinks: 'Latas, botellas grandes 1.5L/2L, zumos Capri Sun y agua mineral.',

    filterAll: 'Todo',
    filterChefPick: 'Selección del Chef',
    filterSpicy: 'Picante',
    filterVeg: 'Vegetariano / Vegano',
    filterPopular: 'Popular',
    filterCrispy: 'Crujiente',
    filterMild: 'Suave (1 Chile)',
    filterGlutenFree: 'Sin Gluten',
    filterShowing: 'Mostrando',
    filterDishesCount: 'platos',

    btnQuickAdd: 'Añadir',
    btnAdded: 'Añadido',
    btnCustomize: 'Personalizar',
    btnOptions: 'Opciones',
    priceLabel: 'Precio',
    prepTimePrefix: '~',
    spicyMild: 'Suave',
    spicyMedium: 'Picante',
    spicyHot: 'Muy Picante',
    soldOut: 'Agotado',
    specialBadge: 'Especial',
    chefPickBadge: 'Elección del Chef',
    popularBadge: 'Popular',
    selectOptionRequired: 'Por favor seleccione una opción',
    specialInstructionsLabel: 'Instrucciones Especiales para Cocina',
    specialInstructionsPlaceholder: 'ej. sin cebolla, muy crujiente, salsa aparte...',
    addToCartBtn: 'Añadir a la Comanda',
    updateCartBtn: 'Actualizar Plato',
    viewDetails: 'Personalizar Plato',
    allergensContained: 'Alérgenos',

    drinksSectionTitle: 'Bebidas Frías y Refrescos',
    drinksSectionSubtitle: 'Refrescos en lata, botellas de 1.5L/2L, Capri Sun y aguas minerales',
    drinksOptionsCount: 'Bebidas Frías',
    btnViewDrinks: 'Ver Bebidas',
    servingChilled: 'FRESCO Y FRÍO',

    drawerTitle: 'Comanda Digital',
    drawerTerminalId: 'Comanda de Mesa',
    diningTypeLabel: 'Modalidad',
    diningDineIn: 'En Sala (Mesa)',
    diningTakeaway: 'Para Llevar / Recoger',
    tableNumberLabel: 'Número de Mesa',
    tableNumberPlaceholder: 'ej. 4',
    emptyCartTitle: 'Tu comanda está vacía',
    emptyCartDesc: 'Explora nuestro menú de street food, añade tus platos y muéstrasela a tu camarero.',
    startOrderingBtn: 'Ver Menú',
    subtotalLabel: 'Subtotal',
    totalLabel: 'Importe Total',
    clearOrderBtn: 'Vaciar Comanda',
    showToWaiterBtn: 'Mostrar Comanda al Camarero',
    browseDrinksPrompt: '¿Deseas añadir una bebida fría?',
    browseDrinksBtn: 'Añadir Bebidas',

    waiterSlipTitle: 'Comanda para el Camarero',
    waiterSlipBadge: 'COMANDA DE CLIENTE',
    waiterVerificationCode: 'Código de Comanda',
    waiterInstructionHeading: 'Muestra esta pantalla a tu camarero',
    waiterInstructionText: 'Presenta esta comanda en tu móvil a tu camarero o en la barra. Anotarán tu pedido y lo enviarán de inmediato a cocina.',
    waiterTable: 'Mesa',
    waiterOrderType: 'Tipo de Pedido',
    waiterAcknowledgedBtn: 'El Camarero Ha Confirmado',
    waiterKeepEditingBtn: 'Modificar Comanda',
    waiterStatusTransmitted: 'COMANDA LISTA PARA EL CAMARERO',

    modalTabHours: 'Horario',
    modalTabContact: 'Contacto',
    modalTabDeals: 'Ofertas',
    modalTabAllergens: '14 Alérgenos',
    modalOpeningHoursTitle: 'Horario de Apertura y Reparto',
    modalDeliveryRadiusTitle: 'Servicio a Domicilio (10 Millas)',
    modalContactTitle: 'Teléfono y Ubicación',
    modalDealsTitle: 'Combos y Ofertas de Reparto',
    modalAllergensTitle: 'Declaración UE de 14 Alérgenos Alimentarios',
    closeBtn: 'Cerrar',

    noSearchMatches: 'No se encontraron platos',
    noSearchMatchesDesc: 'Prueba a cambiar los términos de búsqueda o quitar filtros.',
    resetFiltersBtn: 'Restablecer Filtros',
    noDishesFound: 'No se encontraron platos',
    noDishesAdvice: 'Prueba ajustando tus filtros dietéticos o términos de búsqueda.',
    stickyBarDishes: 'platos seleccionados',
    btnOrderSlip: 'Ticket',
    tabOpeningHours: 'Horario de apertura',
    tabLocation: 'Ubicación y contacto',
    tabDeals: 'Ofertas de entrega',
    tabAllergens: '14 Alérgenos',
    orderConfirmedHeading: '¡Pedido recibido por el camarero!',
    orderConfirmedSubtitle: 'Tu camarero ha registrado tu ticket de pedido. ¡Relájate y disfruta en Momoda!',
    backToMenuBtn: 'Volver al Menú',
    restaurantInfoTitle: 'Información del Restaurante',
    callPhoneBtn: 'Llamar ahora',
    deliveryTitle: 'Servicio a Domicilio',
    deliverySubtitle: 'Servicio de entrega a partir de las 17:00 diariamente en un radio de 10 millas. Pedido mínimo de €10.00.',

    footerDeliveryInfo: 'Reparto a domicilio en radio de 10 millas. Pedido mínimo de entrega €10.00.',
    footerRights: 'Momoda Asian Street Food, Edgeworthstown. Todos los derechos reservados.',
    footerTagline: 'Street Food Asiática, Wok Fresco y Fideos • Edgeworthstown',
  },

  de: {
    locationTicker: 'Pound St, Edgeworthstown',
    phoneTicker: '043 667 2871',
    allergensTicker: '14 Allergene',
    deliveryTimeTicker: 'Lieferung 17:00–23:00',
    dealsTicker: 'Lieferangebote ab €7',
    systemStatus: 'Heute geöffnet • 16:00 – 23:00',
    terminalMode: 'Bestellschein',
    audioToggle: 'Ton',
    searchPlaceholder: 'Vorspeisen, Nudeln, Spice Bag, Wok suchen...',
    infoAndHours: 'Info & Zeiten',
    orderSlip: 'Bestellschein',
    liveCart: 'BESTELLSCHEIN',

    heroBadge: 'Authentisches Asiatisches Street Food • Edgeworthstown',
    heroTitle1: 'Momoda Asian Street Food',
    heroTitle2: 'Frisch aus dem Wok & Dämpfer',
    heroSubtitle: 'Maisküchlein, Curry-Ecken, Wok-Nudeln, knuspriges Salz-Chili-Hähnchen und aromatische Currys. Stellen Sie Ihr Gericht zusammen und zeigen Sie den digitalen Bestellschein direkt Ihrer Bedienung.',
    heroFeatureWaiter: 'Dem Kellner zeigen',
    heroFeatureDelivery: 'Lieferung 17:00–23:00',
    heroFeatureDeals: 'Angebote ab €7',
    heroFeatureAllergens: '14 Allergene Guide',
    heroExploreMenu: 'Speisekarte ansehen',
    heroKitchenStatus: 'Täglich frisch • Tisch-Bestellschein',

    catAll: 'Alle Gerichte',
    catStarters: 'Vorspeisen',
    catSoup: 'Suppen',
    catChefSpecials: 'Chef-Spezialitäten',
    catWok: 'Wok-Gerichte',
    catNoodles: 'Nudeln & Chow Mein',
    catFriedRice: 'Gebratener Reis',
    catEuropean: 'Europäische Gerichte',
    catSides: 'Beilagen & Extras',
    catDesserts: 'Desserts',
    catDrinks: 'Kühle Getränke',

    catDescStarters: 'Knusprige Frühlingsrollen, Maisküchlein, BBQ-Rippchen und Satay-Spieße.',
    catDescSoup: 'Aromatische Hühnersuppe mit Mais, Wonton und süß-saure scharfe Suppe.',
    catDescChefSpecials: 'Knuspriges Salz & Chili Hähnchen, Rindfleischstreifen und aromatische Ente.',
    catDescWok: 'Heiß gebraten: Schwarze Bohnen, süß-sauer, Szechuan und Ingwer-Frühlingszwiebel.',
    catDescNoodles: 'Knuspriges Chow Mein, weiche Wok-Nudeln und Singapur-Reisnudeln.',
    catDescFriedRice: 'Jasminreis mit Ei, Frühlingszwiebeln und feinstem Fleisch.',
    catDescEuropean: 'Knusprige Hähnchenbrust, Würstchen, Hähnchenbällchen und Pommes.',
    catDescSides: 'Eierreis, gekochter Reis, Pommes frites, Currysauce, Krabbenchips.',
    catDescDesserts: 'Knusprig gebackene Bananen mit Honigsirup & Süßes.',
    catDescDrinks: 'Dosen, 1.5L/2L Vorratsflaschen, Capri Sun & Mineralwasser.',

    filterAll: 'Alle',
    filterChefPick: 'Empfehlung des Chefs',
    filterSpicy: 'Scharf',
    filterVeg: 'Vegetarisch / Vegan',
    filterPopular: 'Beliebt',
    filterCrispy: 'Knusprig',
    filterMild: 'Mild (1 Chili)',
    filterGlutenFree: 'Glutenfrei',
    filterShowing: 'Angezeigt',
    filterDishesCount: 'Gerichte',

    btnQuickAdd: 'Hinzufügen',
    btnAdded: 'Hinzugefügt',
    btnCustomize: 'Anpassen',
    btnOptions: 'Optionen',
    priceLabel: 'Preis',
    prepTimePrefix: '~',
    spicyMild: 'Mild',
    spicyMedium: 'Scharf',
    spicyHot: 'Sehr Scharf',
    soldOut: 'Ausverkauft',
    specialBadge: 'Spezial',
    chefPickBadge: 'Chef-Tipp',
    popularBadge: 'Beliebt',
    selectOptionRequired: 'Bitte wählen Sie eine Option',
    specialInstructionsLabel: 'Besondere Wünsche für die Küche',
    specialInstructionsPlaceholder: 'z.B. ohne Zwiebeln, extra knusprig, Sauce separat...',
    addToCartBtn: 'Zum Bestellschein hinzufügen',
    updateCartBtn: 'Gericht aktualisieren',
    viewDetails: 'Gericht anpassen',
    allergensContained: 'Allergene',

    drinksSectionTitle: 'Gekühlte Getränke & Erfrischungen',
    drinksSectionSubtitle: 'Dosengetränke, 1.5L/2L Flaschen, Capri Sun & Mineralwasser',
    drinksOptionsCount: 'Kühle Getränke',
    btnViewDrinks: 'Getränke ansehen',
    servingChilled: 'EISKÜHL SERVIERT',

    drawerTitle: 'Digitaler Bestellschein',
    drawerTerminalId: 'Tisch-Bestellschein',
    diningTypeLabel: 'Bestellart',
    diningDineIn: 'Im Restaurant (Tisch)',
    diningTakeaway: 'Zum Mitnehmen / Abholung',
    tableNumberLabel: 'Tischnummer',
    tableNumberPlaceholder: 'z.B. 4',
    emptyCartTitle: 'Ihr Bestellschein ist leer',
    emptyCartDesc: 'Wählen Sie leckere Gerichte aus unserer Speisekarte und zeigen Sie sie Ihrer Bedienung.',
    startOrderingBtn: 'Speisekarte öffnen',
    subtotalLabel: 'Zwischensumme',
    totalLabel: 'Gesamtsumme',
    clearOrderBtn: 'Schein leeren',
    showToWaiterBtn: 'Dem Kellner zeigen',
    browseDrinksPrompt: 'Möchten Sie noch ein kühles Getränk dazu?',
    browseDrinksBtn: 'Getränke hinzufügen',

    waiterSlipTitle: 'Bestellschein für die Bedienung',
    waiterSlipBadge: 'GÄSTE-BESTELLSCHEIN',
    waiterVerificationCode: 'Bestellnummer',
    waiterInstructionHeading: 'Diesen Bildschirm der Bedienung zeigen',
    waiterInstructionText: 'Zeigen Sie diesen Schein auf Ihrem Smartphone Ihrer Bedienung am Tisch oder an der Kasse. Ihre Auswahl wird erfasst und direkt in die Küche weitergeleitet.',
    waiterTable: 'Tisch',
    waiterOrderType: 'Bestellart',
    waiterAcknowledgedBtn: 'Bedienung hat Bestellung bestätigt',
    waiterKeepEditingBtn: 'Bestellschein bearbeiten',
    waiterStatusTransmitted: 'BESTELLUNG BEREIT FÜR BEDIENUNG',

    modalTabHours: 'Öffnungszeiten',
    modalTabContact: 'Kontakt',
    modalTabDeals: 'Angebote',
    modalTabAllergens: '14 Allergene',
    modalOpeningHoursTitle: 'Öffnungszeiten & Lieferzeiten',
    modalDeliveryRadiusTitle: 'Lieferservice (10 Meilen Umkreis)',
    modalContactTitle: 'Telefon & Standort',
    modalDealsTitle: 'Liefer- & Sparmenüs',
    modalAllergensTitle: 'EU 14 Nahrungsmittelallergene Erklärung',
    closeBtn: 'Schließen',

    noSearchMatches: 'Keine Gerichte gefunden',
    noSearchMatchesDesc: 'Versuchen Sie einen anderen Suchbegriff oder entfernen Sie Filter.',
    resetFiltersBtn: 'Filter zurücksetzen',
    noDishesFound: 'Keine Gerichte gefunden',
    noDishesAdvice: 'Versuchen Sie, die Suchbegriffe oder Filter anzupassen.',
    stickyBarDishes: 'Gerichte ausgewählt',
    btnOrderSlip: 'Bestellschein',
    tabOpeningHours: 'Öffnungszeiten',
    tabLocation: 'Standort & Kontakt',
    tabDeals: 'Lieferangebote',
    tabAllergens: '14 Allergene',
    orderConfirmedHeading: 'Bestellung vom Kellner aufgenommen!',
    orderConfirmedSubtitle: 'Ihre Bedienung hat Ihren digitalen Bestellschein erfasst. Genießen Sie Ihre Mahlzeit bei Momoda!',
    backToMenuBtn: 'Zurück zur Speisekarte',
    restaurantInfoTitle: 'Restaurant-Informationen',
    callPhoneBtn: 'Jetzt anrufen',
    deliveryTitle: 'Heimlieferservice',
    deliverySubtitle: 'Lieferung täglich ab 17:00 Uhr im Umkreis von 10 Meilen. Mindestbestellwert €10.00.',

    footerDeliveryInfo: 'Lieferservice im Umkreis von 10 Meilen. Mindestbestellwert €10.00.',
    footerRights: 'Momoda Asian Street Food, Edgeworthstown. Alle Rechte vorbehalten.',
    footerTagline: 'Asiatisches Street Food, frischer Wok & Nudeln • Edgeworthstown',
  },

  uk: {
    locationTicker: 'Паунд Ст, Еджвортстаун',
    phoneTicker: '043 667 2871',
    allergensTicker: '14 Алергенів',
    deliveryTimeTicker: 'Доставка 17:00–23:00',
    dealsTicker: 'Комбо з доставкою від €7',
    systemStatus: 'Відкрито сьогодні • 16:00 – 23:00',
    terminalMode: 'Чек замовлення',
    audioToggle: 'Звук',
    searchPlaceholder: 'Пошук: закуски, локшина, спайс бег, вок...',
    infoAndHours: 'Інфо та Час',
    orderSlip: 'Чек замовлення',
    liveCart: 'ЧЕК ЗАМОВЛЕННЯ',

    heroBadge: 'Автентичний Азійський Стрітфуд • Еджвортстаун',
    heroTitle1: 'Momoda Азійський Стрітфуд',
    heroTitle2: 'Свіже з Вока та Пароварок',
    heroSubtitle: 'Кукурудзяні оладки, карі-трикутники, вок-локшина, хрустке курча з сіллю та чилі й запашні карі. Оберіть страви та покажіть цифровий чек вашому офіціанту.',
    heroFeatureWaiter: 'Покажіть чек офіціанту',
    heroFeatureDelivery: 'Доставка 17:00–23:00',
    heroFeatureDeals: 'Сети від €7',
    heroFeatureAllergens: 'Гід по 14 алергенах',
    heroExploreMenu: 'Переглянути меню',
    heroKitchenStatus: 'Свіжі страви щодня • Чек для офіціанта',

    catAll: 'Усі страви',
    catStarters: 'Закуски',
    catSoup: 'Супи',
    catChefSpecials: 'Шеф-Спеціалітети',
    catWok: 'Страви з Вока',
    catNoodles: 'Локшина та Чоу Мейн',
    catFriedRice: 'Смажений Рис',
    catEuropean: 'Європейські страви',
    catSides: 'Гарніри та Соуси',
    catDesserts: 'Десерти',
    catDrinks: 'Охолоджені Напої',

    catDescStarters: 'Хрусткі спрінг-роли, кукурудзяні оладки, BBQ реберця та шашлички сатай.',
    catDescSoup: 'Запашний курячий суп з кукурудзою, вонтон і кисло-гострий суп.',
    catDescChefSpecials: 'Фірмове курча Salt & Chilli, хрустка яловичина та качка по-пекінськи.',
    catDescWok: 'Обсмажування на сильному вогні: чорний перець, кисло-солодкий, сичуанський і імбирний.',
    catDescNoodles: 'Хрустка смажена локшина, м’яка пшенична та сінгапурська вермішель.',
    catDescFriedRice: 'Рис Жасмин з вока з яйцем, зеленою цибулею та добірним м’ясом.',
    catDescEuropean: 'Хрустке куряче філе, сосиски, курячі кульки та картопля фрі.',
    catDescSides: 'Рис з яйцем, варений рис, картопля фрі, карі соус, креветкові чипси.',
    catDescDesserts: 'Хрусткі бананові фріттери з медом та солодкі частування.',
    catDescDrinks: 'Баночки, пляшки 1.5L/2L, соки Capri Sun та мінеральна вода.',

    filterAll: 'Усі позиції',
    filterChefPick: 'Вибір Шефа',
    filterSpicy: 'Гостре',
    filterVeg: 'Веган / Вегетаріанське',
    filterPopular: 'Популярне',
    filterCrispy: 'Хрустке',
    filterMild: 'Лагідний (1 перець)',
    filterGlutenFree: 'Без глютену',
    filterShowing: 'Показано',
    filterDishesCount: 'страв',

    btnQuickAdd: 'Додати',
    btnAdded: 'Додано',
    btnCustomize: 'Налаштувати',
    btnOptions: 'Опції',
    priceLabel: 'Ціна',
    prepTimePrefix: '~',
    spicyMild: 'М’який',
    spicyMedium: 'Гострий',
    spicyHot: 'Дуже гострий',
    soldOut: 'Розпродано',
    specialBadge: 'Спеціальне',
    chefPickBadge: 'Вибір Шефа',
    popularBadge: 'Хіт',
    selectOptionRequired: 'Будь ласка, оберіть опцію',
    specialInstructionsLabel: 'Побажання для кухні',
    specialInstructionsPlaceholder: 'наприклад: без цибулі, більш хрустке, соус окремо...',
    addToCartBtn: 'Додати до чека замовлення',
    updateCartBtn: 'Оновити страву',
    viewDetails: 'Налаштувати страву',
    allergensContained: 'Алергени',

    drinksSectionTitle: 'Охолоджені Напої',
    drinksSectionSubtitle: 'Газовані напої в банках, великі пляшки 1.5L/2L, Capri Sun та вода',
    drinksOptionsCount: 'Холодних напоїв',
    btnViewDrinks: 'Дивитися напої',
    servingChilled: 'ПОДАЄТЬСЯ ХОЛОДНИМ',

    drawerTitle: 'Цифровий Чек Замовлення',
    drawerTerminalId: 'Чек столика',
    diningTypeLabel: 'Режим замовлення',
    diningDineIn: 'У залі (Столик)',
    diningTakeaway: 'Із собою / Самовивіз',
    tableNumberLabel: 'Номер столика',
    tableNumberPlaceholder: 'напр. 4',
    emptyCartTitle: 'Ваш чек замовлення порожній',
    emptyCartDesc: 'Оберіть страви з меню та покажіть сформований чек офіціанту.',
    startOrderingBtn: 'Переглянути меню',
    subtotalLabel: 'Підсумок',
    totalLabel: 'Всього до сплати',
    clearOrderBtn: 'Очистити чек',
    showToWaiterBtn: 'Показати чек офіціанту',
    browseDrinksPrompt: 'Бажаєте прохолодний напій?',
    browseDrinksBtn: 'Обрати напої',

    waiterSlipTitle: 'Чек для офіціанта',
    waiterSlipBadge: 'ГОСТЬОВИЙ ЧЕК',
    waiterVerificationCode: 'Номер чека',
    waiterInstructionHeading: 'Покажіть цей екран офіціанту',
    waiterInstructionText: 'Покажіть цей чек на телефоні вашому офіціанту за столиком або на касі. Вони внесуть замовлення і відправлять його на кухню.',
    waiterTable: 'Столик',
    waiterOrderType: 'Тип замовлення',
    waiterAcknowledgedBtn: 'Офіціант підтвердив замовлення',
    waiterKeepEditingBtn: 'Редагувати чек',
    waiterStatusTransmitted: 'ЗАМОВЛЕННЯ ГОТОВЕ ДЛЯ ОФІЦІАНТА',

    modalTabHours: 'Години',
    modalTabContact: 'Контакти',
    modalTabDeals: 'Акції',
    modalTabAllergens: '14 Алергенів',
    modalOpeningHoursTitle: 'Години роботи та графік доставки',
    modalDeliveryRadiusTitle: 'Служба доставки (радіус 10 миль)',
    modalContactTitle: 'Телефон та Локація',
    modalDealsTitle: 'Акції та комбо-набори',
    modalAllergensTitle: '14 обов’язкових харчових алергенів ЄС',
    closeBtn: 'Закрити',

    noSearchMatches: 'Страви не знайдено',
    noSearchMatchesDesc: 'Спробуйте змінити пошуковий запит або скинути фільтри.',
    resetFiltersBtn: 'Скинути фільтри',
    noDishesFound: 'Страв не знайдено',
    noDishesAdvice: 'Спробуйте змінити пошуковий запит або налаштування фільтрів.',
    stickyBarDishes: 'страв у чеку',
    btnOrderSlip: 'Чек',
    tabOpeningHours: 'Години роботи',
    tabLocation: 'Локація та контакти',
    tabDeals: 'Акції доставки',
    tabAllergens: '14 Алергенів',
    orderConfirmedHeading: 'Замовлення прийнято офіціантом!',
    orderConfirmedSubtitle: 'Офіціант зафіксував ваш цифровий чек. Приємного відпочинку та смачного в Momoda!',
    backToMenuBtn: 'Повернутися до меню',
    restaurantInfoTitle: 'Інформація про ресторан',
    callPhoneBtn: 'Зателефонувати',
    deliveryTitle: 'Служба доставки додому',
    deliverySubtitle: 'Доставка працює щодня з 17:00 у радіусі 10 миль. Мінімальне замовлення — €10.00.',

    footerDeliveryInfo: 'Доставка в радіусі 10 миль. Мінімальне замовлення на доставку €10.00.',
    footerRights: 'Momoda Asian Street Food, Еджвортстаун. Усі права захищені.',
    footerTagline: 'Азійський стрітфуд, страви з вока та локшина • Еджвортстаун',
  },
};
