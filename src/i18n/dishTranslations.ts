import { SupportedLanguage } from './translations';
import { MenuItem } from '../types';

export interface LocalizedDish {
  name: string;
  description: string;
}

// Translations for major menu dishes across all 6 languages
export const DISH_LOCALIZATIONS: Record<string, Partial<Record<SupportedLanguage, LocalizedDish>>> = {
  // Starters
  'sweetcorn-cakes': {
    ga: {
      name: 'Cácaí Arbhar Milis',
      description: 'Cácaí arbhar milis friochta go hórga, seirbheáilte le hanlann milis cillí.',
    },
    ru: {
      name: 'Сладкие Кукурузные Оладьи',
      description: 'Золотистые хрустящие кукурузные оладьи со сладким соусом чили.',
    },
    es: {
      name: 'Pastelitos de Maíz Dulce',
      description: 'Pastelitos de maíz dorado frito con salsa de chile dulce.',
    },
    de: {
      name: 'Süßmais-Küchlein',
      description: 'Goldbraun frittierte Maisküchlein mit süßer Chilisauce serviert.',
    },
    uk: {
      name: 'Солодкі Кукурудзяні Оладки',
      description: 'Золотаві хрусткі кукурудзяні оладки зі солодким соусом чилі.',
    },
  },
  'curry-triangles': {
    ga: {
      name: 'Triantáin Cuirí',
      description: 'Triantáin taosráin líonta le glasraí séasúracha agus spíosraí cuirí aramatacha.',
    },
    ru: {
      name: 'Карри-Треугольники (Самоса)',
      description: 'Хрустящие треугольники из слоеного теста с овощами и ароматным карри.',
    },
    es: {
      name: 'Triángulos de Curry (Samosas)',
      description: 'Triángulos de masa crujiente rellenos de verduras y curry aromático.',
    },
    de: {
      name: 'Curry-Dreiecke',
      description: 'Knusprige Teigtaschen mit Gemüse und aromatischen Currygewürzen gefüllt.',
    },
    uk: {
      name: 'Карі-Трикутники (Самоса)',
      description: 'Хрусткі трикутники з листкового тіста з овочами та ароматними спеціями карі.',
    },
  },
  'salted-chilli-shredded-chicken': {
    ga: {
      name: 'Sicín Stróicthe Salainn & Sile',
      description: 'Stiallacha sicín brioscacha caite le salann, piobar, piobair cillí úra agus oinniúin.',
    },
    ru: {
      name: 'Курочка с Солью и Чили (Salt & Chilli)',
      description: 'Хрустящие полоски курицы, обжаренные с морской солью, острым перцем чили и луком.',
    },
    es: {
      name: 'Pollo Crujiente con Sal y Chile',
      description: 'Tiras de pollo muy crujientes salteadas con sal, pimienta, chile fresco y cebolleta.',
    },
    de: {
      name: 'Knuspriges Salz & Chili Hähnchen',
      description: 'Knusprige Hähnchenstreifen, geschwenkt mit Meersalz, frischem Chili und Zwiebeln.',
    },
    uk: {
      name: 'Хрустка Курка з Сіллю та Чилі',
      description: 'Хрусткі смужки курячого філе, обсмажені з сіллю, свіжим гострим перцем чилі та цибулею.',
    },
  },
  'salted-chilli-chicken-wings': {
    ga: {
      name: 'Sciatháin Sicín Salainn & Sile',
      description: 'Sciatháin sicín brioscacha caite le salann mara, gairleog, oinniúin agus cillí dearg.',
    },
    ru: {
      name: 'Крылышки с Солью и Чили',
      description: 'Хрустящие куриные крылышки, обжаренные с чесноком, морской солью и перцем чили.',
    },
    es: {
      name: 'Alitas Crujientes Sal y Chile',
      description: 'Alitas de pollo doradas salteadas con sal marina, ajo crujiente y chile fresco.',
    },
    de: {
      name: 'Salz & Chili Hähnchenflügel',
      description: 'Knusprige Wings geschwenkt mit Meersalz, Knoblauch und frischem roten Chili.',
    },
    uk: {
      name: 'Крильця з Сіллю та Чилі',
      description: 'Хрусткі курячі крильця, обсмажені з морською сіллю, часником та свіжим перцем чилі.',
    },
  },
  'chicken-satay-skewers': {
    ga: {
      name: 'Scéibhíní Sicín Satay (4)',
      description: 'Scéibhíní sicín grilled le hanlann cnó caoch te agus blasta.',
    },
    ru: {
      name: 'Шашлычки Сатай из Курицы (4 шт)',
      description: 'Куриные шашлычки на шпажках с богатым домашним арахисовым соусом.',
    },
    es: {
      name: 'Brochetas de Pollo Satay (4)',
      description: 'Brochetas de pollo a la plancha servidas con rica salsa de cacahuete.',
    },
    de: {
      name: 'Hähnchen-Satay-Spieße (4 Stk)',
      description: 'Gegrillte Hähnchenspieße serviert mit aromatischer Erdnusssauce.',
    },
    uk: {
      name: 'Шашлички Сатай з Курки (4 шт)',
      description: 'Курячі шашлички на шпажках з насиченим фірмовим арахісовим соусом.',
    },
  },
  'barbecue-spare-ribs': {
    ga: {
      name: 'Easnacha Muc BBQ',
      description: 'Easnacha muiceola tairisceana i anlann milis BBQ saibhir Momoda.',
    },
    ru: {
      name: 'Свиные Ребрышки Барбекю',
      description: 'Нежные томленые свиные ребрышки в густом фирменном соусе BBQ.',
    },
    es: {
      name: 'Costillas de Cerdo Barbacoa',
      description: 'Costillas tiernas glaseadas en la rica salsa barbacoa artesanal de Momoda.',
    },
    de: {
      name: 'Zarte BBQ-Schweinerippchen',
      description: 'Butterzarte Schweinerippchen glasiert mit Momodas feiner BBQ-Sauce.',
    },
    uk: {
      name: 'Свинячі Реберця Барбекю',
      description: 'Ніжні томлені свинячі реберця в густому фірмовому соусі BBQ.',
    },
  },
  'crispy-aromatic-duck-quarter': {
    ga: {
      name: 'Lacha Chumhra Bhrioscach (Ceathrú)',
      description: 'Seirbheáilte le pancóga gaile, cúcamar, oinniún earraigh agus anlann hoisin.',
    },
    ru: {
      name: 'Хрустящая Ароматная Утка (1/4)',
      description: 'Подается с теплыми блинчиками, огурцом, зеленым луком и соусом хойсин.',
    },
    es: {
      name: 'Pato Crujiente Aromático (1/4)',
      description: 'Servido con tortitas al vapor, pepino fresco, cebolleta y salsa hoisin.',
    },
    de: {
      name: 'Knusprige Aromatische Ente (1/4)',
      description: 'Serviert mit gedämpften Pfannkuchen, Gurke, Frühlingszwiebeln und Hoisinsauce.',
    },
    uk: {
      name: 'Хрустка Ароматна Качка (1/4)',
      description: 'Подається з теплими млинцями, огірком, зеленою цибулею та соусом хойсін.',
    },
  },

  // Soups
  'chicken-sweetcorn-soup': {
    ga: {
      name: 'Anraith Sicín & Arbhar Milis',
      description: 'Anraith clasaiceach compordach le sicín gearrtha mín agus arbhar milis.',
    },
    ru: {
      name: 'Суп с Курицей и Кукурузой',
      description: 'Классический сытный суп с нежным куриным филе, кукурузой и яичными нитями.',
    },
    es: {
      name: 'Sopa de Pollo y Maíz Dulce',
      description: 'Sopa clásica china reconfortante con pollo desmenuzado y maíz dulce.',
    },
    de: {
      name: 'Hühner-Mais-Suppe',
      description: 'Klassische, wohltuende Suppe mit zartem Hähnchen und süßem Mais.',
    },
    uk: {
      name: 'Суп з Куркою та Кукурудзою',
      description: 'Класичний поживний суп з ніжним курячим філе, солодкою кукурудзою та яєчними нитками.',
    },
  },
  'hot-sour-soup': {
    ga: {
      name: 'Anraith Géar & Te',
      description: 'Broth traidisiúnta spíosrach agus searbh le beacáin agus glasraí.',
    },
    ru: {
      name: 'Кисло-Острый Суп',
      description: 'Традиционный согревающий кисло-острый суп с грибами, бамбуком и перцем.',
    },
    es: {
      name: 'Sopa Agripicante Tradicional',
      description: 'Caldo caliente y ácido con setas, brotes y toque de pimienta blanca.',
    },
    de: {
      name: 'Sauer-Scharf-Suppe',
      description: 'Traditionelle pikant-säuerliche Suppe mit Pilzen, Bambus und Pfeffer.',
    },
    uk: {
      name: 'Кисло-Гострий Суп',
      description: 'Традиційний зігріваючий кисло-гострий суп з грибами, пагонами та перцем.',
    },
  },

  // Chef Specials & Spice Bags
  'mega-spice-box': {
    ga: {
      name: 'Bhosca Spíosraí Mega (Spice Bag)',
      description: 'Sceallóga brioscacha, sicín salainn & sile, sciatháin agus liathróidí caite i spíosraí.',
    },
    ru: {
      name: 'Мега Спайс Бокс (Mega Spice Bag)',
      description: 'Культовое ирландско-азиатское блюдо: картофель фри, хрустящее куриное филе и крылышки в острой пряной смеси.',
    },
    es: {
      name: 'Caja Mega Spice (Bolsa de Especias)',
      description: 'El clásico irlandés: patatas fritas crujientes, tiras de pollo y alitas sazonadas con especias picantes.',
    },
    de: {
      name: 'Mega Spice Box (Kult-Gewürzbox)',
      description: 'Knusprige Pommes, Salt & Chilli Hähnchen, Wings in feuriger Asia-Gewürzmischung.',
    },
    uk: {
      name: 'Мега Спайс Бокс (Spice Box)',
      description: 'Культова ірландсько-азійська страва: картопля фрі, хрустке куряче філе та крильця в пряно-гострій суміші спецій.',
    },
  },
  'crispy-shredded-chilli-beef': {
    ga: {
      name: 'Mairteoil Bhrioscach Shile',
      description: 'Stiallacha mairteola brioscacha caite i anlann milis agus spíosrach le cairéid.',
    },
    ru: {
      name: 'Хрустящая Говядина в Соусе Чили',
      description: 'Тонкие хрустящие полоски говядины в пикантном кисло-сладком соусе чили.',
    },
    es: {
      name: 'Ternera Crujiente con Chile',
      description: 'Tiras de ternera crujiente salteadas en salsa dulce y picante con verduras.',
    },
    de: {
      name: 'Knuspriges Rindfleisch mit Chili',
      description: 'Knusprige Rindfleischstreifen in pikanter süß-scharfer Chilisauce serviert.',
    },
    uk: {
      name: 'Хрустка Яловичина в Соусі Чилі',
      description: 'Тонкі хрусткі смужки яловичини в пікантному кисло-солодкому соусі чилі.',
    },
  },

  // Wok & Noodles
  'singapore-rice-noodles': {
    ga: {
      name: 'Núdail Ríse Shingeapór',
      description: 'Vermicelli tanaí friochta le curaí, uibheacha, muiceoil char siu, ribí róibéis agus piobair.',
    },
    ru: {
      name: 'Сингапурская Рисовая Лапша',
      description: 'Тонкая рисовая вермишель из вока с карри, яйцом, свининой чар сиу, креветками и перцем.',
    },
    es: {
      name: 'Fideos de Arroz Singapur',
      description: 'Fideos vermicelli salteados con polvo de curry, huevo, cerdo asado, gambas y pimientos.',
    },
    de: {
      name: 'Singapur-Reisnudeln',
      description: 'Feine Reisnudeln aus dem Wok mit Currygewürz, Ei, Garnelen und asiatischem Schweinefleisch.',
    },
    uk: {
      name: 'Сінгапурська Рисова Локшина',
      description: 'Тонка рисова вермішель з воку з карі, яйцем, свининою чар сіу, креветками та солодким перцем.',
    },
  },
  'special-chow-mein': {
    ga: {
      name: 'Chow Mein Speisialta Momoda',
      description: 'Núdail uibhe friochta le sicín, mairteoil, ribí róibéis agus glasraí úra.',
    },
    ru: {
      name: 'Фирменный Чоу Мейн Momoda',
      description: 'Яичная лапша из вока с курицей, говядиной, креветками и свежими овощами.',
    },
    es: {
      name: 'Chow Mein Especial Momoda',
      description: 'Fideos al huevo con pollo, ternera tierna, gambas y verduras salteadas.',
    },
    de: {
      name: 'Momoda Spezial Chow Mein',
      description: 'Gebratene Eiernudeln mit Hähnchen, Rind, Garnelen und knackigem Gemüse.',
    },
    uk: {
      name: 'Фірмовий Чоу Мейн Momoda',
      description: 'Яєчна локшина з воку з куркою, яловичиною, креветками та свіжими хрусткими овочами.',
    },
  },
  'special-fried-rice': {
    ga: {
      name: 'Rís Fhrite Speisialta',
      description: 'Rís friochta le sicín, muiceoil, ribí róibéis, uibheacha agus oinniúin earraigh.',
    },
    ru: {
      name: 'Фирменный Жареный Рис',
      description: 'Рис Жасмин из раскаленного вока с курицей, свининой чар сиу, креветками и яйцом.',
    },
    es: {
      name: 'Arroz Frito Especial de la Casa',
      description: 'Arroz jazmín salteado con pollo, cerdo asado, gambas, huevo y cebolleta fresca.',
    },
    de: {
      name: 'Gebratener Spezialreis',
      description: 'Wok-gebratener Jasminreis mit Huhn, Schweinefleisch, Garnelen und Ei.',
    },
    uk: {
      name: 'Фірмовий Смажений Рис',
      description: 'Рис Жасмин з розпеченого воку з куркою, свининою чар сіу, креветками та яйцем.',
    },
  },
  'curry-sauce-chips': {
    ga: {
      name: 'Sceallóga le hAnlann Cuirí',
      description: 'Sceallóga brioscacha órga clúdaithe le hanlann cuirí Síneach aramatach.',
    },
    ru: {
      name: 'Картофель Фри с Соусом Карри',
      description: 'Хрустящий золотистый картофель фри под пряным согревающим китайским карри.',
    },
    es: {
      name: 'Patatas con Salsa de Curry',
      description: 'Patatas fritas crujientes bañadas en nuestra salsa de curry estilo chino.',
    },
    de: {
      name: 'Pommes mit Currysauce',
      description: 'Goldgelbe knusprige Pommes serviert mit feiner chinesischer Currysauce.',
    },
    uk: {
      name: 'Картопля Фрі з Соусом Карі',
      description: 'Хрустка золотава картопля фрі під пряним зігріваючим китайським соусом карі.',
    },
  },
  'banana-fritters': {
    ga: {
      name: 'Friteoirí Banana le Mil',
      description: 'Bananaí friochta go hórga i gcumasc éadrom, seirbheáilte le mil órga.',
    },
    ru: {
      name: 'Банановые Фриттеры с Медом',
      description: 'Сладкие бананы в воздушном хрустящем кляре, политые натуральным медом.',
    },
    es: {
      name: 'Buñuelos de Plátano con Miel',
      description: 'Plátano frito en tempura dulce y dorada, servido con miel.',
    },
    de: {
      name: 'Gebackene Banane mit Honig',
      description: 'Im Teigmantel goldbraun gebackene Banane mit feinem Honig beträufelt.',
    },
    uk: {
      name: 'Бананові Фріттери з Медом',
      description: 'Солодкі банани в повітряному хрусткому клярі, политі натуральним медом.',
    },
  },
};

/**
 * Returns the localized dish name and description, or falls back to original item values.
 */
export function getLocalizedDish(item: MenuItem, lang: SupportedLanguage): { name: string; description: string } {
  if (lang === 'en') {
    return { name: item.name, description: item.description };
  }
  const match = DISH_LOCALIZATIONS[item.id]?.[lang];
  if (match) {
    return {
      name: match.name || item.name,
      description: match.description || item.description,
    };
  }
  return { name: item.name, description: item.description };
}
