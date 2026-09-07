import { SupportedLanguage } from './translations';
import { MenuItem } from '../types';

export interface LocalizedDish {
  name: string;
  description: string;
}

/**
 * Complete localization catalog for all 105 Momoda Asian Street Food dishes
 * translated across all 6 supported languages:
 * - English (en) - original
 * - Gaeilge (ga) - Irish
 * - Español (es) - Spanish
 * - Deutsch (de) - German
 * - Українська (uk) - Ukrainian
 * - Русский (ru) - Russian
 */
export const DISH_LOCALIZATIONS: Record<string, Partial<Record<SupportedLanguage, LocalizedDish>>> = {
  "start-1": {
    "ga": {
      "name": "Cácaí Arbhar Milis Dúchasacha",
      "description": "Cácaí arbhar milis órga friochta le spíosraí Áiseacha agus oinniúin earraigh úra."
    },
    "es": {
      "name": "Pastelitos Caseros de Maíz Dulce",
      "description": "Tortitas doradas de maíz dulce condimentadas con especias asiáticas y cebolletas frescas."
    },
    "de": {
      "name": "Hausgemachte Süßmais-Puffer",
      "description": "Goldbraun frittierte Maispuffer, gewürzt mit asiatischen Gewürzen und frischen Frühlingszwiebeln."
    },
    "uk": {
      "name": "Домашні Солодкі Кукурудзяні Оладки",
      "description": "Золотаві оладки з солодкої кукурудзи з азійськими спеціями та свіжою зеленою цибулею."
    },
    "ru": {
      "name": "Домашние Кукурузные Оладьи",
      "description": "Золотистые оладьи из сладкой кукурузы с азиатскими специями и свежим зеленым луком."
    }
  },
  "start-2": {
    "ga": {
      "name": "Triantáin Cuirí Dúchasacha",
      "description": "Triantáin samosa brioscacha líonta le prátaí cuirí aramatacha agus glasraí."
    },
    "es": {
      "name": "Triángulos Caseros de Curry",
      "description": "Empanadillas triangulares crujientes rellenas de patatas al curry aromático y verduras frescas."
    },
    "de": {
      "name": "Hausgemachte Curry-Ecken",
      "description": "Knusprige Teigtaschen gefüllt mit aromatisch gewürzten Curry-Kartoffeln und Gemüse."
    },
    "uk": {
      "name": "Домашні Карі-Трикутники (Самоса)",
      "description": "Хрусткі трикутники з начинкою з ароматної картоплі карі та свіжих овочів."
    },
    "ru": {
      "name": "Домашние Карри-Треугольники (Самоса)",
      "description": "Хрустящие треугольные самосы с ароматным пряным картофелем карри и овощами."
    }
  },
  "start-3": {
    "ga": {
      "name": "Rolla Earraigh",
      "description": "Rolla earraigh Áiseach friochta órga brioscach líonta le feoil bhlasta agus glasraí géarchuiseacha."
    },
    "es": {
      "name": "Rollito de Primavera",
      "description": "Rollito de primavera crujiente relleno de carne sazonada y verduras frescas crujientes."
    },
    "de": {
      "name": "Frühlingsrolle",
      "description": "Goldbraun und knusprig frittierte Frühlingsrolle gefüllt mit gewürztem Fleisch und knackigem Gemüse."
    },
    "uk": {
      "name": "Весняний Рулет (Спрінг-Рол)",
      "description": "Хрусткий золотавий весняний рулет з ніжним м'ясним фаршем та соковитими овочами."
    },
    "ru": {
      "name": "Спринг-Ролл",
      "description": "Хрустящий золотистый спринг-ролл с сочной мясной начинкой и хрустящими овощами."
    }
  },
  "start-4": {
    "ga": {
      "name": "Rolla Glasraí",
      "description": "Rolla earraigh brioscach líonta le cairéid, cabáiste, piseanna agus núdail ghloine."
    },
    "es": {
      "name": "Rollito Vegetariano",
      "description": "Rollito crujiente relleno de zanahorias desmenuzadas, col, guisantes y fideos de cristal."
    },
    "de": {
      "name": "Vegetarische Rolle",
      "description": "Knusprige Frühlingsrolle gefüllt mit feinen Karottenstreifen, Kohl, Erbsen und Glasnudeln."
    },
    "uk": {
      "name": "Вегетаріанський Рулет",
      "description": "Хрусткий рулет із начинкою з тертої моркви, капусти, зеленого горошку та скляної локшини."
    },
    "ru": {
      "name": "Вегетарианский Рулет",
      "description": "Хрустящий рулет с начинкой из сочной моркови, капусты, горошка и прозрачной стеклянной лапши."
    }
  },
  "start-5": {
    "ga": {
      "name": "Rolla Sicín & Cáis",
      "description": "Rolla taosráin friochta órga líonta le sicín tairisceana agus cáis leáite."
    },
    "es": {
      "name": "Rollito de Pollo y Queso",
      "description": "Rollito frito dorado relleno de pollo tierno desmenuzado y queso fundido delicioso."
    },
    "de": {
      "name": "Hähnchen-Käse-Rolle",
      "description": "Goldbraun frittierte Rolle gefüllt mit zartem Hühnerfleisch und geschmolzenem Käse."
    },
    "uk": {
      "name": "Рулет із Куркою та Сиром",
      "description": "Золотавий рулет із ніжною куркою та гарячим розплавленим сиром."
    },
    "ru": {
      "name": "Рулет с Курицей и Сыром",
      "description": "Золотистый хрустящий рулет с начинкой из нежной курочки и расплавленного сыра."
    }
  },
  "start-6": {
    "ga": {
      "name": "Rolla Lachana",
      "description": "Rolla brioscach líonta le lacha rósta aramatach, oinniún earraigh agus anlann hoisin milis."
    },
    "es": {
      "name": "Rollito de Pato",
      "description": "Rollito crujiente relleno de pato asado aromático, cebolleta y un toque de salsa hoisin."
    },
    "de": {
      "name": "Enten-Rolle",
      "description": "Knusprige Rolle gefüllt mit aromatischer Ente, Frühlingszwiebeln und feiner Hoisin-Sauce."
    },
    "uk": {
      "name": "Рулет із Качкою",
      "description": "Хрусткий рулет з ароматною запеченою качкою, зеленою цибулею та соусом хойсін."
    },
    "ru": {
      "name": "Рулет с Уткой",
      "description": "Хрустящий ролл с ароматной уткой по-пекински, зеленым луком и соусом хойсин."
    }
  },
  "start-7": {
    "ga": {
      "name": "Won Ton Brioscach",
      "description": "Dumplóga won ton friochta go hórga líonta le muiceoil bhlasta, seirbheáilte le hanlann milis géar."
    },
    "es": {
      "name": "Wantán Crujiente",
      "description": "Masa de wantán dorada y crujiente rellena de cerdo sazonado, servida con salsa agridulce."
    },
    "de": {
      "name": "Knusprige Wantan",
      "description": "Goldgelb frittierte Wantan-Teigtaschen mit herzhafter Schweinefleischfüllung und süß-saurer Sauce."
    },
    "uk": {
      "name": "Хрусткі Вонтони",
      "description": "Золотаві обсмажені вонтони зі свининою, подаються з кисло-солодким соусом."
    },
    "ru": {
      "name": "Хрустящие Вонтоны",
      "description": "Обжаренные до золотистой корочки вонтоны со свининой, подаются со сладко-кислым соусом."
    }
  },
  "start-8": {
    "ga": {
      "name": "Bioráin Sicín Satay",
      "description": "Bioráin sicín mheilte i sú satai cumhra, seirbheáilte le hanlann cnó talún saibhir."
    },
    "es": {
      "name": "Brochetas de Pollo Satay",
      "description": "Brochetas de pollo marinadas a la parrilla, servidas con salsa cremosa de cacahuete satay."
    },
    "de": {
      "name": "Hähnchen-Satay-Spieße",
      "description": "Gegrillte marinierte Hähnchenspieße, serviert mit reichhaltiger Erdnuss-Satay-Sauce."
    },
    "uk": {
      "name": "Шашлички Сатай з Куркою",
      "description": "Мариновані курячі шашлички на шпажках з насиченим арахісовим соусом сатай."
    },
    "ru": {
      "name": "Куриные Шашлычки Сатай",
      "description": "Маринованные куриные шпажки на гриле с ароматным арахисовым соусом сатай."
    }
  },
  "start-9": {
    "ga": {
      "name": "Bioráin Sicín Tóiceo",
      "description": "Bioráin sicín Seapánacha tairisceana glónraithe le hanlann teriyaki milis blaistithe."
    },
    "es": {
      "name": "Brochetas de Pollo Tokio",
      "description": "Tiernas brochetas de pollo estilo japonés glaseadas con salsa teriyaki dulce."
    },
    "de": {
      "name": "Tokyo Hähnchenspieße",
      "description": "Zarte japanische Hähnchenspieße glasiert mit süß-würziger Teriyaki-Sauce."
    },
    "uk": {
      "name": "Токійські Курячі Шашлички",
      "description": "Ніжні курячі шашлички в японському соусі теріякі з легким кунжутним ароматом."
    },
    "ru": {
      "name": "Токийские Куриные Шашлычки",
      "description": "Нежные японские шпажки из курицы под сладковатой глазурью терияки."
    }
  },
  "start-10": {
    "ga": {
      "name": "Gyoza Sicín Brioscach",
      "description": "Dumplóga Seapánacha friochta líonta le sicín mionaithe agus glasraí úra."
    },
    "es": {
      "name": "Gyoza Crujiente de Pollo",
      "description": "Empanadillas japonesas crujientes rellenas de pollo picado fino y verduras."
    },
    "de": {
      "name": "Knusprige Hähnchen-Gyoza",
      "description": "Japanische Teigtaschen gefüllt mit fein gewürztem Hähnchenfleisch und Gemüse."
    },
    "uk": {
      "name": "Хрусткі Гьодза з Куркою",
      "description": "Японські обсмажені пельмені гьодза з соковитою курячою начинкою та зеленню."
    },
    "ru": {
      "name": "Хрустящие Гёдза с Курицей",
      "description": "Японские жареные пельмешки гёдза с нежным куриным фаршем и овощами."
    }
  },
  "start-11": {
    "ga": {
      "name": "Sciatháin Sicín Salainn & Sile",
      "description": "Sciatháin sicín brioscacha caite le salann mara, piobair cillí úra agus oinniúin earraigh."
    },
    "es": {
      "name": "Alitas de Pollo Sal y Chile",
      "description": "Alitas crujientes salteadas en wok con sal marina, chiles picantes frescos y cebolleta."
    },
    "de": {
      "name": "Salz & Chili Hähnchenflügel",
      "description": "Knusprige Hähnchenflügel im Wok geschwenkt mit Meersalz, frischem Chili und Frühlingszwiebeln."
    },
    "uk": {
      "name": "Курячі Крильця Сіль та Чилі",
      "description": "Хрусткі курячі крильця у воку з морською сіллю, свіжим гострим перцем чилі та цибулею."
    },
    "ru": {
      "name": "Куриные Крылышки Соль и Чили",
      "description": "Хрустящие крылышки, обжаренные в воке с морской солью, свежим перцем чили и луком."
    }
  },
  "start-12": {
    "ga": {
      "name": "Sciatháin Sicín Chóiréacha",
      "description": "Sciatháin friochta brioscacha cóirithe le hanlann gochujang milis spíosrach Chóiréach."
    },
    "es": {
      "name": "Alitas de Pollo Coreanas",
      "description": "Alitas súper crujientes glaseadas con salsa coreana picante y dulce gochujang."
    },
    "de": {
      "name": "Koreanische Hähnchenflügel",
      "description": "Extra knusprige Hähnchenflügel umhüllt von einer würzig-süßen koreanischen Gochujang-Sauce."
    },
    "uk": {
      "name": "Корейські Курячі Крильця",
      "description": "Надзвичайно хрусткі крильця в солодко-гострій корейській глазурі з перцем кочуджан."
    },
    "ru": {
      "name": "Корейские Куриные Крылышки",
      "description": "Хрустящие крылышки в пикантном сладко-остром корейском соусе кочуджан."
    }
  },
  "start-13": {
    "ga": {
      "name": "Sicín Stróicthe le hIm Gairleoige",
      "description": "Stiallacha sicín brioscacha caite le him gairleoige saibhir aramatach."
    },
    "es": {
      "name": "Pollo Desmenuzado con Mantequilla de Ajo",
      "description": "Tiras de pollo crujientes salteadas en abundante mantequilla aromática de ajo."
    },
    "de": {
      "name": "Knuspriges Hähnchen in Knoblauchbutter",
      "description": "Knusprige Hähnchenstreifen geschwenkt in aromatischer, cremiger Knoblauchbutter."
    },
    "uk": {
      "name": "Рване Хрустке Курча з Часниковим Маслом",
      "description": "Хрусткі смужки курячого філе в апетитному вершково-часниковому соусі."
    },
    "ru": {
      "name": "Рваная Курочка в Чесночном Масле",
      "description": "Хрустящие полоски куриного филе, обжаренные в ароматном чесночном масле."
    }
  },
  "start-14": {
    "ga": {
      "name": "Sicín Stróicthe Salainn & Sile",
      "description": "Stiallacha sicín brioscacha clasaiceacha caite le salann, cillí úra agus piobar."
    },
    "es": {
      "name": "Pollo Crujiente Sal y Chile",
      "description": "Tiras de pollo crujiente al estilo sal y pimienta con chiles frescos cortados."
    },
    "de": {
      "name": "Salz & Chili Hähnchenstreifen",
      "description": "Legendäre knusprige Hähnchenstreifen mit Meersalz, frischen Chiliringen und Zwiebeln."
    },
    "uk": {
      "name": "Хрусткі Курячі Смужки Сіль та Чилі",
      "description": "Фірмові хрусткі курячі смужки з морською сіллю, перцем та гострим свіжим чилі."
    },
    "ru": {
      "name": "Хрустящие Куриные Полоски Соль и Чили",
      "description": "Культовая хрустящая курочка в воке с морской солью, свежим острым перцем чили и луком."
    }
  },
  "start-15": {
    "ga": {
      "name": "Sicín Deataithe",
      "description": "Sicín tairisceana deataithe ar leith cócaráilte le spíosraí Áiseacha."
    },
    "es": {
      "name": "Pollo Ahumado Estilo Asiático",
      "description": "Tiras de pollo tierno con un suave toque ahumado y especias orientales seleccionadas."
    },
    "de": {
      "name": "Geräuchertes Hähnchen",
      "description": "Zarte Hähnchenstreifen mit feinem Raucharoma und orientalischen Gewürzen."
    },
    "uk": {
      "name": "Копчене Куряче Філе",
      "description": "Ніжні шматочки курячого філе з делікатним ароматом диму та східними спеціями."
    },
    "ru": {
      "name": "Копченое Куриное Филе",
      "description": "Нежное куриное филе с тонким копченым ароматом и восточными специями."
    }
  },
  "start-16": {
    "ga": {
      "name": "Easnacha Muiceola",
      "description": "Easnacha muiceola súmhara ar fáil le hanlann BBQ, milis géar, nó salann & sile."
    },
    "es": {
      "name": "Costillas de Cerdo Jugosas",
      "description": "Tiernas costillas de cerdo caramelizadas disponibles en barbacoa, agridulce o sal y chile."
    },
    "de": {
      "name": "Spareribs",
      "description": "Zarte Rippchen wahlweise mit Barbecue-, Süß-Sauer- oder Salz & Chili-Sauce."
    },
    "uk": {
      "name": "Свинячі Реберця",
      "description": "Соковиті м'які реберця на вибір: соус барбекю, кисло-солодкий або сіль та чилі."
    },
    "ru": {
      "name": "Свиные Ребрышки",
      "description": "Сочные нежные ребрышки на выбор: барбекю, кисло-сладкий соус или соль с чили."
    }
  },
  "start-17": {
    "ga": {
      "name": "Cácaí Cloicheán Téalannacha",
      "description": "Cácaí cloicheán blasta le luibheanna Téalannacha, seirbheáilte le hanlann cillí milis."
    },
    "es": {
      "name": "Pasteles Tailandeses de Langostinos",
      "description": "Pastelitos de langostinos con hierbas tailandesas servidos con salsa de chile dulce."
    },
    "de": {
      "name": "Thailändische Garnelen-Küchlein",
      "description": "Würzige Garnelenküchlein mit thailändischen Kräutern und süßem Chili-Dip."
    },
    "uk": {
      "name": "Тайські Креветкові Оладки",
      "description": "Пікантні оладки з королівських креветок із тайськими травами та соусом солодкий чилі."
    },
    "ru": {
      "name": "Тайские Оладьи из Креветок",
      "description": "Нежные котлетки из королевских креветок с тайскими травами и сладким чили."
    }
  },
  "start-18": {
    "ga": {
      "name": "Tófú Salainn & Sile",
      "description": "Ciúbanna tófú friochta brioscacha caite le salann mara agus cillí úr."
    },
    "es": {
      "name": "Tofu Sal y Chile",
      "description": "Dados de tofu crujiente dorado salteados con sal marina, chiles frescos y cebolleta."
    },
    "de": {
      "name": "Salz & Chili Tofu",
      "description": "Knusprige Tofu-Würfel im Wok gewürzt mit Meersalz, frischen Chilis und Kräutern."
    },
    "uk": {
      "name": "Тофу Сіль та Чилі",
      "description": "Хрусткі кубики тофу у воку з морською сіллю, перцем чилі та зеленою цибулею."
    },
    "ru": {
      "name": "Тофу Соль и Чили",
      "description": "Хрустящие кубики тофу, обжаренные в воке с морской солью, перцем чили и лучком."
    }
  },
  "start-19": {
    "ga": {
      "name": "Rí-Chloicheáin Salainn & Sile",
      "description": "Rí-chloicheáin mhóra bhrioscacha caite i salann mara agus cillí dearg úr."
    },
    "es": {
      "name": "Langostinos Reales Sal y Chile",
      "description": "Grandes langostinos crujientes salteados al wok con sal marina y chiles rojos."
    },
    "de": {
      "name": "Salz & Chili Riesengarnelen",
      "description": "Große knusprige Garnelen im Wok mit Meersalz, scharfem Chili und Knoblauch."
    },
    "uk": {
      "name": "Королівські Креветки Сіль та Чилі",
      "description": "Великі хрусткі королівські креветки у воку з сіллю, часником та свіжим чилі."
    },
    "ru": {
      "name": "Королевские Креветки Соль и Чили",
      "description": "Крупные хрустящие королевские креветки, обжаренные с морской солью и чили."
    }
  },
  "start-20": {
    "ga": {
      "name": "1/4 Lacha Aramatach Bhrioscach",
      "description": "Ceathrú lacha rósta bhrioscach le pancóga tanaí, cúcamar, oinniún earraigh agus anlann hoisin."
    },
    "es": {
      "name": "1/4 Pato Aromático Crujiente",
      "description": "Cuarto de pato asado crujiente con tortitas al vapor, pepino, cebolleta y salsa hoisin."
    },
    "de": {
      "name": "1/4 Knusprige aromatische Ente",
      "description": "Viertel knusprige Ente serviert mit warmen Pfannkuchen, Gurke, Lauch und Hoisin-Sauce."
    },
    "uk": {
      "name": "1/4 Хрусткої Ароматної Качки",
      "description": "Чверть ароматної качки з хрусткою скоринкою, паровими млинцями, огірком та соусом хойсін."
    },
    "ru": {
      "name": "1/4 Хрустящей Ароматной Утки",
      "description": "Четверть запеченной хрустящей утки с блинчиками на пару, огурчиком и соусом хойсин."
    }
  },
  "start-21": {
    "ga": {
      "name": "1/2 Lacha Aramatach Bhrioscach",
      "description": "Leath lacha rósta bhrioscach le pancóga te, cúcamar gearrtha agus anlann hoisin saibhir."
    },
    "es": {
      "name": "1/2 Pato Aromático Crujiente",
      "description": "Medio pato aromático con tortitas al vapor, tiras de pepino, cebolletas y abundante salsa hoisin."
    },
    "de": {
      "name": "1/2 Knusprige aromatische Ente",
      "description": "Halbe knusprig gebratene Ente mit gedämpften Pfannkuchen, Gurkenstreifen und Hoisin-Sauce."
    },
    "uk": {
      "name": "1/2 Хрусткої Ароматної Качки",
      "description": "Половина соковитої запеченої качки з тонкими паровими млинцями, огірком та соусом хойсін."
    },
    "ru": {
      "name": "1/2 Хрустящей Ароматной Утки",
      "description": "Половина запеченной ароматной утки с порцией блинчиков на пару, свежим огурцом и соусом."
    }
  },
  "soup-1": {
    "ga": {
      "name": "Anraith Tom Yam Kong",
      "description": "Anraith Téalannach spíosrach agus géar le rí-chloicheáin, lemongrass agus beacáin."
    },
    "es": {
      "name": "Sopa Tom Yam Kong",
      "description": "Famosa sopa tailandesa picante y aromática con langostinos, hierba limón y setas."
    },
    "de": {
      "name": "Tom Yam Kong Suppe",
      "description": "Traditionelle thailändische scharf-saure Suppe mit Garnelen, Zitronengras und Pilzen."
    },
    "uk": {
      "name": "Суп Том Ям Кунг",
      "description": "Гостро-кислий тайський суп із королівськими креветками, лемонграсом та грибами."
    },
    "ru": {
      "name": "Суп Том Ям Кунг",
      "description": "Знаменитый тайский остро-кислый суп с королевскими креветками, лемонграссом и грибами."
    }
  },
  "soup-2": {
    "ga": {
      "name": "Anraith Tom Kha Gai",
      "description": "Anraith uachtarach bainne cnó cócó Téalannach le sicín, galangal agus aol úr."
    },
    "es": {
      "name": "Sopa Tom Kha Gai",
      "description": "Sopa cremosa de leche de coco tailandesa con pollo tierno, galanga y lima fresca."
    },
    "de": {
      "name": "Tom Kha Gai Suppe",
      "description": "Cremige thailändische Kokosmilchsuppe mit Hähnchen, Galgant und frischer Limette."
    },
    "uk": {
      "name": "Суп Том Кха Гай",
      "description": "Ніжний кремовий суп на кокосовому молоці з куркою, галангалом та соком лайма."
    },
    "ru": {
      "name": "Суп Том Кха Гай",
      "description": "Нежный тайский суп на кокосовом молоке с курицей, галангалом и соком лайма."
    }
  },
  "soup-3": {
    "ga": {
      "name": "Anraith Sicín & Arbhar Milis",
      "description": "Anraith clasaiceach síodúil le sicín stróicthe agus arbhar milis tairisceana."
    },
    "es": {
      "name": "Sopa de Pollo y Maíz Dulce",
      "description": "Sopa reconfortante y aterciopelada con pollo desmenuzado y granos de maíz dulce."
    },
    "de": {
      "name": "Hähnchen-Süßmais-Suppe",
      "description": "Klassische samtige Suppe mit zartem Hühnerfleisch und süßem Mais."
    },
    "uk": {
      "name": "Суп із Куркою та Солодкою Кукурудзою",
      "description": "Ніжний оксамитовий бульйон зі шматочками курки та солодкою кукурудзою."
    },
    "ru": {
      "name": "Суп с Курицей и Кукурузой",
      "description": "Классический бархатистый суп с нежной курицей и сладкой кукурузой."
    }
  },
  "soup-4": {
    "ga": {
      "name": "Anraith Núdail Sicín",
      "description": "Broth te compordach le núdail uibheacha, sicín agus glasraí úra."
    },
    "es": {
      "name": "Sopa de Fideos con Pollo",
      "description": "Caldo caliente y reconfortante con fideos al huevo, pollo tierno y verduras."
    },
    "de": {
      "name": "Hähnchen-Nudelsuppe",
      "description": "Wärmende Hühnersuppe mit feinen Eiernudeln, zartem Huhn und Frühlingsgemüse."
    },
    "uk": {
      "name": "Курячий Суп із Локшиною",
      "description": "Зігріваючий бульйон із яєчною локшиною, шматочками курки та зеленню."
    },
    "ru": {
      "name": "Куриный Суп с Лапшой",
      "description": "Согревающий ароматный бульон с яичной лапшой, курочкой и свежими овощами."
    }
  },
  "soup-5": {
    "ga": {
      "name": "Anraith Won Ton",
      "description": "Broth glan cumhra le dumplóga won ton muiceola lámhdhéanta agus glasraí."
    },
    "es": {
      "name": "Sopa de Wantán",
      "description": "Delicado caldo aromático con wantanes artesanales rellenos de cerdo y verduras."
    },
    "de": {
      "name": "Wantan-Suppe",
      "description": "Klare aromatische Brühe mit handgemachten Schweinefleisch-Wantan und Blattgemüse."
    },
    "uk": {
      "name": "Суп із Вонтонами",
      "description": "Прозорий ароматний бульйон із домашніми вонтонами зі свининою та зеленню."
    },
    "ru": {
      "name": "Суп с Вонтонами",
      "description": "Прозрачный легкий бульон с домашними пельменями вонтон со свининой и зеленью."
    }
  },
  "soup-6": {
    "ga": {
      "name": "Anraith Te & Géar",
      "description": "Anraith thraidisiúnta Bhéising le piobar, fínéagar, tófú, beacáin agus uibheacha."
    },
    "es": {
      "name": "Sopa Agripicante",
      "description": "Auténtica sopa pekinesa especiada y ácida con tofu, brotes de bambú, setas y huevo."
    },
    "de": {
      "name": "Peking Gulasch (Sauer-Scharf)",
      "description": "Klassische Peking-Suppe mit pikanter Säure, Tofu, Bambus und Ei."
    },
    "uk": {
      "name": "Кисло-Гострий Суп",
      "description": "Традиційний пекінський кисло-гострий суп із тофу, грибами, пагонами бамбука та яйцем."
    },
    "ru": {
      "name": "Кисло-Острый Суп",
      "description": "Традиционный пекинский кисло-острый суп с тофу, древесными грибами и яйцом."
    }
  },
  "chef-1": {
    "ga": {
      "name": "Rí-Chloicheáin Daban",
      "description": "Rí-chloicheáin shúmhara i mbosca cillí aramatach Daban le luibheanna gairleoige."
    },
    "es": {
      "name": "Langostinos Especiales Daban",
      "description": "Grandes langostinos salteados en una aromática salsa especiada Daban con hierbas."
    },
    "de": {
      "name": "Daban Riesengarnelen",
      "description": "Saftige Riesengarnelen in aromatischer Daban-Chilisauce mit Knoblauchkräutern."
    },
    "uk": {
      "name": "Королівські Креветки Дабан",
      "description": "Соковиті креветки у фірмовому пряному соусі Дабан із часником та ароматними травами."
    },
    "ru": {
      "name": "Королевские Креветки Дабан",
      "description": "Сочные королевские креветки в фирменном пряном соусе Дабан с чесноком и травами."
    }
  },
  "chef-2": {
    "ga": {
      "name": "Sliotán Muiceola Aráin Fuji",
      "description": "Sliotán muiceola friochta go hórga panko le hanlann speisialta an chócaire."
    },
    "es": {
      "name": "Chuleta de Cerdo Empanada Fuji",
      "description": "Chuleta de cerdo crujiente empanada en panko japonés con salsa especial del chef."
    },
    "de": {
      "name": "Fuji Paniertes Kotelett",
      "description": "Goldbraun paniertes Schweinekotelett im japanischen Panko-Stil mit Spezial-Sauce."
    },
    "uk": {
      "name": "Свиняча Відбивна Фудзі в Паніровці",
      "description": "Хрустка свиняча відбивна в японських сухарях панко під авторським соусом шефа."
    },
    "ru": {
      "name": "Свиная Отбивная Фудзи в Панировке",
      "description": "Хрустящая отбивная из свинины в японской панировке панко под фирменным соусом."
    }
  },
  "chef-3": {
    "ga": {
      "name": "Sicín Stróicthe Cillí Milis Téalannach",
      "description": "Stiallacha sicín friochta caite le hanlann milis cillí Téalannach."
    },
    "es": {
      "name": "Pollo Crujiente con Chile Dulce Tailandés",
      "description": "Crujientes tiras de pollo salteadas en salsa tailandesa de chile dulce y aromático."
    },
    "de": {
      "name": "Süß-Chili Hähnchen Thai-Art",
      "description": "Knusprige Hähnchenstreifen in thailändischer süßer Chilisauce glasiert."
    },
    "uk": {
      "name": "Хрустка Курка в Тайському Солодкому Чилі",
      "description": "Хрусткі смужки курочки, глазуровані в тайському кисло-солодкому соусі чилі."
    },
    "ru": {
      "name": "Хрустящая Курица в Тайском Сладком Чили",
      "description": "Хрустящие полоски курицы в тайском сладком соусе чили со свежими овощами."
    }
  },
  "chef-4": {
    "ga": {
      "name": "Sicín Brioscach Nanban Seapánach",
      "description": "Sicín friochta stíl Nanban le fínéagar milis agus anlann uachtarach."
    },
    "es": {
      "name": "Pollo Crujiente Japonés Nanban",
      "description": "Pollo crujiente japonés bañado en vinagre dulce nanban y salsa tártara suave."
    },
    "de": {
      "name": "Japanisches Nanban Hähnchen",
      "description": "Knuspriges Hähnchen nach japanischer Nanban-Art mit süß-säuerlicher Sauce."
    },
    "uk": {
      "name": "Японська Курка Нанбан",
      "description": "Хрустка курка по-японськи під солодкуватим оцтовим соусом нанбан."
    },
    "ru": {
      "name": "Японская Курочка Нанбан",
      "description": "Хрустящая курица по-японски под кисло-сладким соусом нанбан."
    }
  },
  "chef-5": {
    "ga": {
      "name": "Filléad Sicín Brioscach",
      "description": "Filléad sicín iomlán órga brioscach le do rogha anlann speisialta."
    },
    "es": {
      "name": "Filete de Pollo Extra Crujiente",
      "description": "Pechuga de pollo entera rebozada dorada y crujiente, con tu salsa favorita."
    },
    "de": {
      "name": "Knuspriges Hähnchenfilet",
      "description": "Goldbraun paniertes Hähnchenbrustfilet mit Sauce nach Wahl serviert."
    },
    "uk": {
      "name": "Хрустке Куряче Філе",
      "description": "Соковите філе курки в хрусткій золотавій паніровці з улюбленим соусом на вибір."
    },
    "ru": {
      "name": "Хрустящее Куриное Филе",
      "description": "Сочное куриное филе в хрустящей золотистой панировке с соусом на выбор."
    }
  },
  "chef-6": {
    "ga": {
      "name": "Sicín nó Mairteoil le Mangó Téalannach",
      "description": "Feoil bhrioscach caite le píosaí mangó úra agus anlann torthúil."
    },
    "es": {
      "name": "Pollo o Ternera Crujiente con Mango Tailandés",
      "description": "Tiras crujientes combinadas con mango fresco jugoso en salsa agridulce tailandesa."
    },
    "de": {
      "name": "Knuspriges Hähnchen oder Rind mit Mango",
      "description": "Knuspriges Fleisch mit saftigen Mangostücken in fruchtig-würziger Sauce."
    },
    "uk": {
      "name": "Хрустка Курка або Яловичина з Тайським Манго",
      "description": "Хрусткі шматочки м'яса зі шматочками свіжого солодкого манго в пікантному соусі."
    },
    "ru": {
      "name": "Хрустящая Курица или Говядина с Тайским Манго",
      "description": "Хрустящее мясо с кусочками сочного манго в кисло-сладком фруктовом соусе."
    }
  },
  "chef-7": {
    "ga": {
      "name": "Sicín Stróicthe Cóiréach Milis & Spíosrach",
      "description": "Stiallacha sicín caite le hanlann gochujang cóiréach milis agus te."
    },
    "es": {
      "name": "Pollo Coreano Dulce y Picante",
      "description": "Tiras de pollo crujiente bañadas en salsa coreana dulce picante con sésamo."
    },
    "de": {
      "name": "Scharf-Süßes Koreanisches Hähnchen",
      "description": "Hähnchenstreifen glasiert in feurig-süßer koreanischer Sauce mit geröstetem Sesam."
    },
    "uk": {
      "name": "Пікантна Солодка Корейська Курка",
      "description": "Хрусткі курячі смужки в пікантній солодко-гострій корейській глазурі."
    },
    "ru": {
      "name": "Пикантная Сладкая Корейская Курочка",
      "description": "Куриные полоски в пикантной корейской кисло-сладкой глазури с кунжутом."
    }
  },
  "chef-8": {
    "ga": {
      "name": "Sicín Brioscach Te & Spíosrach",
      "description": "Stiallacha sicín friochta caite le piobair cillí dearga agus spíosraí."
    },
    "es": {
      "name": "Pollo Crujiente Extra Picante",
      "description": "Pollo súper crujiente salteado con chiles frescos, ajo y especias ardientes."
    },
    "de": {
      "name": "Feurig Scharfes Hähnchen",
      "description": "Knusprige Hähnchenstücke geschwenkt mit feurigen Chilis und Knoblauch."
    },
    "uk": {
      "name": "Гостра Хрустка Курка",
      "description": "Хрусткі шматочки курячого філе у воку з пекучим чилі, часником та спеціями."
    },
    "ru": {
      "name": "Острая Хрустящая Курочка",
      "description": "Хрустящие кусочки курочки в обжигающем соусе чили со свежим чесноком."
    }
  },
  "chef-9": {
    "ga": {
      "name": "Sicín Tóiceo",
      "description": "Sicín tairisceana ar stíl Tóiceo le hanlann soy milis agus síolta seasamain."
    },
    "es": {
      "name": "Pollo Tokio Teriyaki",
      "description": "Pollo jugoso estilo Tokio glaseado con salsa teriyaki y semillas de sésamo tostadas."
    },
    "de": {
      "name": "Tokyo Hähnchen",
      "description": "Zartes Hähnchenfleisch in aromatischer Tokyo-Sojasauce mit Sesam."
    },
    "uk": {
      "name": "Курка по-Токійськи",
      "description": "Соковита курочка в соусі теріякі з обсмаженим кунжутом та солодким перцем."
    },
    "ru": {
      "name": "Курочка по-Токийски",
      "description": "Сочная курочка под сладковато-соевой глазурью терияки с кунжутом."
    }
  },
  "chef-10": {
    "ga": {
      "name": "Lacha Rósta Bhrioscach",
      "description": "Lacha rósta le craiceann brioscach órga, seirbheáilte le hanlann blasta."
    },
    "es": {
      "name": "Pato Asado Crujiente Especial",
      "description": "Pato asado tradicional con piel súper crujiente y carne tierna y jugosa."
    },
    "de": {
      "name": "Knusprige gebratene Ente",
      "description": "Traditionell gebratene Ente mit besonders krosser Haut und zartem Fleisch."
    },
    "uk": {
      "name": "Хрустка Смажена Качка",
      "description": "Запечена качка з ідеально хрусткою золотавою скоринкою та ніжним соковитим м'ясом."
    },
    "ru": {
      "name": "Хрустящая Запеченная Утка",
      "description": "Запеченная утка с потрясающе хрустящей корочкой и сочным нежным мясом."
    }
  },
  "wok-chicken": {
    "ga": {
      "name": "Sicín Máistir Wok",
      "description": "Sicín tairisceana caite i wok le glasraí úra agus do rogha anlann sínithe."
    },
    "es": {
      "name": "Pollo Wok Master",
      "description": "Tierno pollo salteado al wok con verduras frescas crujientes y tu salsa favorita."
    },
    "de": {
      "name": "Wok Master Hähnchen",
      "description": "Zarte Hähnchenbrust im Wok geschwenkt mit frischem Gemüse und Sauce nach Wahl."
    },
    "uk": {
      "name": "Вок Майстер Курка",
      "description": "Ніжне філе курки у воку зі свіжими овочами та фірмовим соусом на ваш вибір."
    },
    "ru": {
      "name": "Вок Мастер Курица",
      "description": "Нежное филе курицы в раскаленном воке со свежими овощами и соусом на выбор."
    }
  },
  "wok-beef": {
    "ga": {
      "name": "Mairteoil Mháistir Wok",
      "description": "Stiallacha mairteola tairisceana caite i wok le glasraí agus anlann blasta."
    },
    "es": {
      "name": "Ternera Wok Master",
      "description": "Tiras de ternera tierna salteadas a fuego vivo con verduras frescas y salsa al gusto."
    },
    "de": {
      "name": "Wok Master Rindfleisch",
      "description": "Zartes Rindfleisch im Wok gebraten mit frischem Gemüse und würziger Sauce."
    },
    "uk": {
      "name": "Вок Майстер Яловичина",
      "description": "Шматочки соковитої яловичини у воку з овочами та улюбленим азійським соусом."
    },
    "ru": {
      "name": "Вок Мастер Говядина",
      "description": "Сочная говядина в воке со свежими хрустящими овощами и соусом на ваш выбор."
    }
  },
  "wok-shredded-chicken": {
    "ga": {
      "name": "Sicín Stróicthe Wok",
      "description": "Stiallacha sicín brioscacha caite le hanlann agus glasraí géarchuiseacha."
    },
    "es": {
      "name": "Pollo Crujiente Desmenuzado al Wok",
      "description": "Tiras de pollo crujiente salteadas con verduras y salsa aromática a tu gusto."
    },
    "de": {
      "name": "Knuspriges Hähnchen Wok",
      "description": "Knusprige Hähnchenstreifen im Wok mit frischem Gemüse und Sauce serviert."
    },
    "uk": {
      "name": "Хрустка Курка у Воку",
      "description": "Хрусткі смужки курки, обсмажені у воку з овочами та насиченим соусом."
    },
    "ru": {
      "name": "Хрустящая Курочка в Воке",
      "description": "Хрустящие полоски курицы в воке со свежими овощами и выбранным соусом."
    }
  },
  "wok-crispy-beef": {
    "ga": {
      "name": "Mairteoil Bhrioscach Wok",
      "description": "Stiallacha mairteola brioscacha caite le cillí agus anlann speisialta."
    },
    "es": {
      "name": "Ternera Crujiente al Wok",
      "description": "Tiras crujientes de ternera caramelizadas al wok con verduras y tu salsa predilecta."
    },
    "de": {
      "name": "Knuspriges Rindfleisch Wok",
      "description": "Fein karamellisierte, knusprige Rindfleischstreifen im Wok geschwenkt."
    },
    "uk": {
      "name": "Хрустка Яловичина у Воку",
      "description": "Хрусткі смужки яловичини у воку з солодким або пряним соусом на вибір."
    },
    "ru": {
      "name": "Хрустящая Говядина в Воке",
      "description": "Хрустящие карамелизированные полоски говядины с овощами и соусом."
    }
  },
  "wok-duck": {
    "ga": {
      "name": "Lacha Rósta Wok",
      "description": "Slisní lacha rósta caite i wok le glasraí séasúracha agus anlann saibhir."
    },
    "es": {
      "name": "Pato Asado al Wok",
      "description": "Láminas de pato asado salteadas al wok con crujientes verduras de temporada."
    },
    "de": {
      "name": "Gebratene Ente Wok",
      "description": "Zarte Scheiben gebratener Ente mit frischem Wok-Gemüse und feiner Sauce."
    },
    "uk": {
      "name": "Смажена Качка у Воку",
      "description": "Скибочки смаженої качки у воку з сезонними хрусткими овочами та соусом."
    },
    "ru": {
      "name": "Жареная Утка в Воке",
      "description": "Ломтики ароматной запеченной утки в воке со свежими овощами и соусом."
    }
  },
  "wok-king-prawns": {
    "ga": {
      "name": "Rí-Chloicheáin Wok",
      "description": "Rí-chloicheáin mhóra shúmhara caite i wok le glasraí agus anlann cumhra."
    },
    "es": {
      "name": "Langostinos Reales al Wok",
      "description": "Grandes y tiernos langostinos salteados a fuego vivo con verduras y tu salsa."
    },
    "de": {
      "name": "Riesengarnelen Wok",
      "description": "Knackige Riesengarnelen im Wok gebraten mit frischem Gemüse."
    },
    "uk": {
      "name": "Королівські Креветки у Воку",
      "description": "Великі королівські креветки у воку з хрусткими овочами та ароматним соусом."
    },
    "ru": {
      "name": "Королевские Креветки в Воке",
      "description": "Крупные королевские креветки, обжаренные в воке с овощами и соусом."
    }
  },
  "wok-crispy-prawns": {
    "ga": {
      "name": "Rí-Chloicheáin Bhrioscacha Wok",
      "description": "Rí-chloicheáin i mbuidéil bhrioscacha caite le hanlann agus glasraí."
    },
    "es": {
      "name": "Langostinos Reales Crujientes al Wok",
      "description": "Langostinos empanados súper crujientes con verduras salteadas al wok."
    },
    "de": {
      "name": "Knusprige Riesengarnelen Wok",
      "description": "Goldbraun panierte, krosse Riesengarnelen im Wok mit frischem Gemüse."
    },
    "uk": {
      "name": "Хрусткі Королівські Креветки у Воку",
      "description": "Королівські креветки у хрусткій паніровці з овочами вок та соусом."
    },
    "ru": {
      "name": "Хрустящие Креветки в Воке",
      "description": "Хрустящие королевские креветки в кляре с овощами вок и соусом на выбор."
    }
  },
  "wok-house-special": {
    "ga": {
      "name": "Wok Speisialta an Tí",
      "description": "Meascán deas de sicín, mairteoil agus rí-chloicheáin le glasraí úra."
    },
    "es": {
      "name": "Especial de la Casa al Wok",
      "description": "Combinación estrella de pollo, ternera tierna y langostinos reales salteados al wok."
    },
    "de": {
      "name": "Haus-Spezial Wok",
      "description": "Reichhaltige Kombination aus Hähnchen, Rind und Riesengarnelen mit Wok-Gemüse."
    },
    "uk": {
      "name": "Фірмовий Вок Шефа",
      "description": "Асорті з ніжної курки, яловичини та королівських креветок з овочами у воку."
    },
    "ru": {
      "name": "Фирменный Вок Шефа",
      "description": "Ассорти из сочной курочки, говядины и королевских креветок с овощами в воке."
    }
  },
  "wok-sirloin": {
    "ga": {
      "name": "Stéig Fíor-Iomaire Wok",
      "description": "Stéig fíor-iomaire gearrtha go tairisceana caite i wok le glasraí agus anlann."
    },
    "es": {
      "name": "Solomillo de Ternera al Wok",
      "description": "Tiernos bocados de solomillo salteados al wok con verduras seleccionadas."
    },
    "de": {
      "name": "Rumpsteak Wok",
      "description": "Zarte Rumpsteak-Streifen gebraten im Wok mit knackigem Gemüse."
    },
    "uk": {
      "name": "Стейк Стріплойн у Воку",
      "description": "Шматочки добірного яловичого стейка стріплойн у воку з хрусткими овочами."
    },
    "ru": {
      "name": "Стейк Стриплойн в Воке",
      "description": "Кусочки отборного говяжьего стейка в раскаленном воке со свежими овощами."
    }
  },
  "wok-veg": {
    "ga": {
      "name": "Glasraí Úra Wok",
      "description": "Meascán daite de ghlasraí séasúracha úra caite i wok le do rogha anlann."
    },
    "es": {
      "name": "Verduras Frescas al Wok",
      "description": "Selección colorida de verduras frescas de temporada salteadas crujientes al wok."
    },
    "de": {
      "name": "Frisches Wok-Gemüse",
      "description": "Bunte Auswahl an knackigem Saisongemüse im Wok zubereitet."
    },
    "uk": {
      "name": "Свіжі Овочі у Воку",
      "description": "Яскраве асорті зі свіжих хрустких сезонних овочів у воку з улюбленим соусом."
    },
    "ru": {
      "name": "Свежие Овощи в Воке",
      "description": "Яркое ассорти из хрустящих сезонных овощей в воке с соусом на выбор."
    }
  },
  "wok-tofu": {
    "ga": {
      "name": "Tófú & Glasraí Wok",
      "description": "Ciúbanna tófú órga caite le glasraí úra agus anlann blasta."
    },
    "es": {
      "name": "Tofu y Verduras Frescas al Wok",
      "description": "Dados dorados de tofu frito salteados con verduras crujientes al wok."
    },
    "de": {
      "name": "Tofu & Gemüse Wok",
      "description": "Goldgelb gebackener Tofu mit frischem Wok-Gemüse und aromatischer Sauce."
    },
    "uk": {
      "name": "Тофу та Овочі у Воку",
      "description": "Золотаві кубики смаженого тофу зі свіжими овочами вок та ароматним соусом."
    },
    "ru": {
      "name": "Тофу и Овощи в Воке",
      "description": "Золотистые кубики тофу со свежими овощами в воке и соусом на выбор."
    }
  },
  "noodle-pad-thai": {
    "ga": {
      "name": "Pad Thai Clasaiceach",
      "description": "Núdail ríse Téalannacha caite le huibheacha, pónairí soighe, cillí agus cnónna talún brúite."
    },
    "es": {
      "name": "Pad Thai Tradicional",
      "description": "Fideos de arroz tailandeses salteados con huevo, brotes de soja, lima y cacahuetes picados."
    },
    "de": {
      "name": "Klassisches Pad Thai",
      "description": "Traditionelle thailändische Reisbandnudeln mit Ei, Sojasprossen und gehackten Erdnüssen."
    },
    "uk": {
      "name": "Традиційний Пад Тай",
      "description": "Тайська рисова локшина з яйцем, паростками бобів, арахісом та шматочком лайма."
    },
    "ru": {
      "name": "Классический Пад Тай",
      "description": "Традиционная тайская рисовая лапша с яйцом, ростками сои, арахисом и лаймом."
    }
  },
  "noodle-char-kway": {
    "ga": {
      "name": "Char Kway Teow",
      "description": "Núdail ríse leathana Mhalaeisiacha caite i teas ard le soy dorcha agus oinniún."
    },
    "es": {
      "name": "Char Kway Teow Malasio",
      "description": "Fideos anchos de arroz salteados a fuego intenso con salsa de soja oscura y cebollino."
    },
    "de": {
      "name": "Char Kway Teow",
      "description": "Malaysische breite Reisnudeln bei starker Hitze mit dunkler Sojasauce gebraten."
    },
    "uk": {
      "name": "Чар Квай Тео",
      "description": "Малайзійська широка рисова локшина на сильному вогні з темним соєвим соусом."
    },
    "ru": {
      "name": "Чар Квай Тео",
      "description": "Малайзийская широкая рисовая лапша на сильном огне с темным соевым соусом."
    }
  },
  "noodle-chicken-chow-mein": {
    "ga": {
      "name": "Chow Mein Sicín",
      "description": "Núdail uibheacha friochta le sicín tairisceana, pónairí soighe agus oinniún earraigh."
    },
    "es": {
      "name": "Chow Mein de Pollo",
      "description": "Fideos al huevo salteados con pollo jugoso, brotes crujientes y cebolletas."
    },
    "de": {
      "name": "Hähnchen Chow Mein",
      "description": "Gebratene Eiernudeln mit zartem Hähnchenfleisch, Sojasprossen und Frühlingszwiebeln."
    },
    "uk": {
      "name": "Чоу Мейн із Куркою",
      "description": "Смажена яєчна локшина з ніжною куркою, паростками бобів та зеленою цибулею."
    },
    "ru": {
      "name": "Чоу Мейн с Курицей",
      "description": "Жареная яичная лапша с нежной курицей, ростками сои и зеленым луком."
    }
  },
  "noodle-beef-chow-mein": {
    "ga": {
      "name": "Chow Mein Mairteola",
      "description": "Núdail uibheacha caite i wok le mairteoil thairisceana agus glasraí géarchuiseacha."
    },
    "es": {
      "name": "Chow Mein de Ternera",
      "description": "Fideos al huevo salteados con tiernas tiras de ternera y verduras al wok."
    },
    "de": {
      "name": "Rindfleisch Chow Mein",
      "description": "Gebratene Eiernudeln mit saftigem Rindfleisch und knackigem Wok-Gemüse."
    },
    "uk": {
      "name": "Чоу Мейн із Яловичиною",
      "description": "Смажена локшина у воку з соковитими смужками яловичини та овочами."
    },
    "ru": {
      "name": "Чоу Мейн с Говядиной",
      "description": "Жареная яичная лапша с сочными полосками говядины и свежими овощами."
    }
  },
  "noodle-prawns-chow-mein": {
    "ga": {
      "name": "Chow Mein Rí-Chloicheáin",
      "description": "Núdail uibheacha friochta le rí-chloicheáin mhóra shúmhara agus soy éadrom."
    },
    "es": {
      "name": "Chow Mein de Langostinos Reales",
      "description": "Fideos al huevo salteados con grandes langostinos jugosos y verduras frescas."
    },
    "de": {
      "name": "Riesengarnelen Chow Mein",
      "description": "Gebratene Eiernudeln mit saftigen Riesengarnelen und knackigem Gemüse."
    },
    "uk": {
      "name": "Чоу Мейн із Королівськими Креветками",
      "description": "Яєчна локшина з великими соковитими креветками та паростками бобів."
    },
    "ru": {
      "name": "Чоу Мейн с Королевскими Креветками",
      "description": "Жареная лапша с крупными королевскими креветками и свежими овощами."
    }
  },
  "noodle-special-chow-mein": {
    "ga": {
      "name": "Chow Mein Speisialta an Tí",
      "description": "Núdail uibheacha caite le meascán de sicín, mairteoil agus rí-chloicheáin."
    },
    "es": {
      "name": "Chow Mein Especial de la Casa",
      "description": "Fideos salteados completos con pollo, ternera y langostinos en salsa sabrosa."
    },
    "de": {
      "name": "Haus-Spezial Chow Mein",
      "description": "Gebratene Nudeln mit einer Kombination aus Hähnchen, Rind und Riesengarnelen."
    },
    "uk": {
      "name": "Фірмовий Чоу Мейн Шефа",
      "description": "Святкове асорті зі смаженої локшини з куркою, яловичиною та креветками."
    },
    "ru": {
      "name": "Фирменный Чоу Мейн Шефа",
      "description": "Жареная лапша с щедрой порцией курицы, говядины и королевских креветок."
    }
  },
  "noodle-singapore": {
    "ga": {
      "name": "Núdail Ríse Singeapór",
      "description": "Núdail ríse tanaí caite le cuirí cumhra, muiceoil char siu, cloicheáin agus cillí."
    },
    "es": {
      "name": "Fideos de Arroz Singapur",
      "description": "Fideos finos de arroz al curry aromático con cerdo char siu, gambas, verduras y chile."
    },
    "de": {
      "name": "Singapur-Reisnudeln",
      "description": "Feine Reisnudeln gewürzt mit aromatischem Curry, Char-Siu-Schweinefleisch, Garnelen und Chili."
    },
    "uk": {
      "name": "Сінгапурська Рисова Локшина",
      "description": "Тонка рисова локшина з ароматним карі, свининою чар сью, креветками та чилі."
    },
    "ru": {
      "name": "Сингапурская Рисовая Лапша",
      "description": "Тонкая рисовая лапша с пряным карри, свининой чар сиу, креветками и перчиком чили."
    }
  },
  "noodle-teriyaki-ramen": {
    "ga": {
      "name": "Ramen Teriyaki Seapánach",
      "description": "Broth ramen saibhir le núdail, sicín teriyaki glónraithe agus uibheacha."
    },
    "es": {
      "name": "Ramen Teriyaki Japonés",
      "description": "Bol caliente de sopa ramen con pollo teriyaki jugoso, huevo y fideos frescos."
    },
    "de": {
      "name": "Japanischer Teriyaki Ramen",
      "description": "Kräftige Ramensuppe mit Teriyaki-Hähnchen, frischen Nudeln und Frühlingszwiebeln."
    },
    "uk": {
      "name": "Японський Рамен Теріякі",
      "description": "Насичений рамен із японською локшиною, куркою теріякі та зеленою цибулею."
    },
    "ru": {
      "name": "Японский Рамен Терияки",
      "description": "Насыщенный бульон с японской лапшой рамен, курочкой терияки и яйцом."
    }
  },
  "noodle-fuji-ramen": {
    "ga": {
      "name": "Ramen Fuji Seapánach",
      "description": "Anraith ramen clasaiceach le sliotán panko friochta órga agus núdail."
    },
    "es": {
      "name": "Ramen Fuji Japonés",
      "description": "Sopa reconfortante de ramen con chuleta crujiente empanada y caldo aromático."
    },
    "de": {
      "name": "Japanischer Fuji Ramen",
      "description": "Traditionelle japanische Ramensuppe mit kross paniertem Fleisch und Nudeln."
    },
    "uk": {
      "name": "Японський Рамен Фудзі",
      "description": "Ароматний японський суп рамен із хрусткою відбивною в паніровці та локшиною."
    },
    "ru": {
      "name": "Японский Рамен Фудзи",
      "description": "Традиционный японский рамен с хрустящей панированной отбивной и лапшой."
    }
  },
  "noodle-spicy-beef-mince": {
    "ga": {
      "name": "Núdail Mhionfheoil Mhairteola Spíosrach",
      "description": "Núdail chaite le mairteoil mhionaithe spíosrach, piobar Sichuan agus scalláin."
    },
    "es": {
      "name": "Fideos con Picadillo de Ternera Especiado",
      "description": "Fideos salteados con carne picada de ternera, chile aromático estilo Sichuan y cebollino."
    },
    "de": {
      "name": "Scharfe Rinderhack-Nudeln",
      "description": "Asiatische Nudeln mit feurig gewürztem Rinderhackfleisch und Sichuan-Pfeffer."
    },
    "uk": {
      "name": "Гостра Локшина з Яловичим Фаршем",
      "description": "Азійська локшина з пікантним яловичим фаршем, перцем сичуань та зеленню."
    },
    "ru": {
      "name": "Острая Лапша с Говяжьим Фаршем",
      "description": "Азиатская лапша с пряным рубленым говяжьим фаршем по-сычуаньски."
    }
  },
  "rice-chicken": {
    "ga": {
      "name": "Rís Fhriochta le Sicín",
      "description": "Rís friochta órga le huibheacha, sicín tairisceana, piseanna agus oinniúin earraigh."
    },
    "es": {
      "name": "Arroz Frito con Pollo",
      "description": "Arroz frito al wok con pollo tierno, huevo batido, guisantes y cebolleta."
    },
    "de": {
      "name": "Gebratener Eierreis mit Hähnchen",
      "description": "Im Wok gebratener Reis mit zartem Hähnchen, Ei, feinen Erbsen und Frühlingszwiebeln."
    },
    "uk": {
      "name": "Смажений Рис із Куркою",
      "description": "Золотавий рис у воку зі шматочками курки, яйцем, горошком та зеленою цибулею."
    },
    "ru": {
      "name": "Жареный Рис с Курицей",
      "description": "Золотистый рис из вока с нежной курочкой, яйцом, зеленым горошком и лучком."
    }
  },
  "rice-beef": {
    "ga": {
      "name": "Rís Fhriochta le Mairteoil",
      "description": "Rís friochta blasta le stiallacha mairteola tairisceana agus oinniún."
    },
    "es": {
      "name": "Arroz Frito con Ternera",
      "description": "Arroz al wok aromatizado con finas tiras de ternera tierna, huevo y verduras."
    },
    "de": {
      "name": "Gebratener Eierreis mit Rindfleisch",
      "description": "Köstlich gebratener Reis mit saftigem Rindfleisch, Ei und frischem Gemüse."
    },
    "uk": {
      "name": "Смажений Рис із Яловичиною",
      "description": "Ароматний смажений рис із соковитою яловичиною, яйцем та овочами."
    },
    "ru": {
      "name": "Жареный Рис с Говядиной",
      "description": "Ароматный жареный рис с сочными ломтиками говядины, яйцом и овощами."
    }
  },
  "rice-veg": {
    "ga": {
      "name": "Rís Fhriochta Glasraí",
      "description": "Rís friochta le glasraí úra daite, piseanna, arbhar milis agus uibheacha."
    },
    "es": {
      "name": "Arroz Frito con Verduras",
      "description": "Arroz frito al wok con verduras variadas, maíz dulce, guisantes y huevo."
    },
    "de": {
      "name": "Gebratener Eierreis mit Gemüse",
      "description": "Bunt gebratener Reis mit knackigem Saisongemüse, Erbsen und Ei."
    },
    "uk": {
      "name": "Смажений Рис із Овочами",
      "description": "Вегетаріанський рис у воку зі свіжими овочами, кукурудзою, горошком та яйцем."
    },
    "ru": {
      "name": "Жареный Рис с Овощами",
      "description": "Ароматный рис из вока со свежими овощами, сладкой кукурузой, горошком и яйцом."
    }
  },
  "rice-singapore": {
    "ga": {
      "name": "Rís Fhriochta Singeapór",
      "description": "Rís friochta spíosrach le cuirí, muiceoil char siu, cloicheáin agus cillí úr."
    },
    "es": {
      "name": "Arroz Frito Singapur",
      "description": "Arroz frito al curry aromático con gambas, cerdo asado char siu, huevo y chile."
    },
    "de": {
      "name": "Singapur Gebratener Reis",
      "description": "Pikanter Wok-Reis mit aromatischem Curry, Garnelen, Char-Siu-Schweinefleisch und Chili."
    },
    "uk": {
      "name": "Сінгапурський Смажений Рис",
      "description": "Пікантний рис із соусом карі, креветками, свининою чар сью та свіжим чилі."
    },
    "ru": {
      "name": "Сингапурский Жареный Рис",
      "description": "Пряный жареный рис с ароматным карри, креветками, свининой чар сиу и чили."
    }
  },
  "rice-special": {
    "ga": {
      "name": "Rís Fhriochta Speisialta an Tí",
      "description": "Rís friochta lán le sicín, mairteoil, cloicheáin agus muiceoil bhlasta."
    },
    "es": {
      "name": "Arroz Frito Especial de la Casa",
      "description": "Arroz frito completo con pollo, ternera, langostinos y cerdo char siu."
    },
    "de": {
      "name": "Haus-Spezial Gebratener Reis",
      "description": "Vollmundiger Reis mit Hähnchen, Rind, Garnelen und Barbecue-Schweinefleisch."
    },
    "uk": {
      "name": "Фірмовий Смажений Рис Шефа",
      "description": "Розкішний смажений рис із куркою, яловичиною, королівськими креветками та яйцем."
    },
    "ru": {
      "name": "Фирменный Жареный Рис Шефа",
      "description": "Сытный жареный рис с курицей, говядиной, королевскими креветками и овощами."
    }
  },
  "rice-king-prawns": {
    "ga": {
      "name": "Rís Fhriochta le Rí-Chloicheáin",
      "description": "Rís friochta le rí-chloicheáin mhóra shúmhara, uibheacha agus scalláin."
    },
    "es": {
      "name": "Arroz Frito con Langostinos Reales",
      "description": "Generoso arroz frito con grandes langostinos reales salteados, huevo y cebolleta."
    },
    "de": {
      "name": "Gebratener Reis mit Riesengarnelen",
      "description": "Aromatischer Wok-Reis mit knackigen Riesengarnelen, Ei und Frühlingszwiebeln."
    },
    "uk": {
      "name": "Смажений Рис із Королівськими Креветками",
      "description": "Золотавий рис із великими королівськими креветками, яйцем та зеленою цибулею."
    },
    "ru": {
      "name": "Жареный Рис с Королевскими Креветками",
      "description": "Золотистый рис из вока с крупными сочными креветками, яйцом и зеленым луком."
    }
  },
  "rice-nasi-goreng": {
    "ga": {
      "name": "Nasi Goreng Indinéiseach",
      "description": "Rís friochta traidisiúnta Indinéiseach spíosrach le sicín, cloicheáin agus uibheacha."
    },
    "es": {
      "name": "Nasi Goreng Indonesio",
      "description": "Auténtico arroz frito indonesio especiado con pollo, gambas y salsa dulce de soja."
    },
    "de": {
      "name": "Indonesisches Nasi Goreng",
      "description": "Klassisch indonesisch gewürzter Bratreis mit Huhn, Shrimps und süßer Sojasauce."
    },
    "uk": {
      "name": "Індонезійський Насі Горенг",
      "description": "Традиційний пряний індонезійський смажений рис із куркою, креветками та соєвим соусом."
    },
    "ru": {
      "name": "Индонезийский Наси Горенг",
      "description": "Аутентичный пряный индонезийский жареный рис с курочкой, креветками и яйцом."
    }
  },
  "rice-satay-chicken": {
    "ga": {
      "name": "Rís Fhriochta Sicín Satay",
      "description": "Rís friochta le stiallacha sicín bhrioscacha agus anlann saibhir satay cnó talún."
    },
    "es": {
      "name": "Arroz Frito con Pollo Satay",
      "description": "Arroz frito aromático con tiras de pollo crujientes y cremosa salsa satay de cacahuete."
    },
    "de": {
      "name": "Hähnchen-Satay Gebratener Reis",
      "description": "Gebratener Reis mit knusprigen Hähnchenstreifen und cremiger Erdnuss-Satay-Sauce."
    },
    "uk": {
      "name": "Смажений Рис із Куркою Сатай",
      "description": "Смажений рис із хрусткими шматочками курки та насиченим арахісовим соусом сатай."
    },
    "ru": {
      "name": "Жареный Рис с Курицей Сатай",
      "description": "Жареный рис с хрустящими кусочками курицы и кремовым арахисовым соусом сатай."
    }
  },
  "euro-popcorn": {
    "ga": {
      "name": "Sicín Gránrósta & Sceallóga",
      "description": "Píosaí sicín gránrósta brioscacha le sceallóga órga."
    },
    "es": {
      "name": "Pollo Popcorn con Patatas Fritas",
      "description": "Bocaditos crujientes de pollo estilo palomitas con patatas fritas doradas."
    },
    "de": {
      "name": "Popcorn-Hähnchen mit Pommes",
      "description": "Knusprige mundgerechte Hähnchenbällchen serviert mit goldgelben Pommes frites."
    },
    "uk": {
      "name": "Попкорн-Курка з Картоплею Фрі",
      "description": "Хрусткі шматочки курячого попкорну із золотавою гарячою картоплею фрі."
    },
    "ru": {
      "name": "Попкорн-Курица с Картофелем Фри",
      "description": "Хрустящие шарики попкорн-курицы с порцией золотистого картофеля фри."
    }
  },
  "euro-nuggets": {
    "ga": {
      "name": "Cnaipíní Sicín & Sceallóga",
      "description": "Cnaipíní sicín órga friochta le sceallóga móra úra."
    },
    "es": {
      "name": "Nuggets de Pollo con Patatas Fritas",
      "description": "Nuggets dorados y crujientes de pollo servidos con ración de patatas fritas."
    },
    "de": {
      "name": "Hähnchen-Nuggets mit Pommes",
      "description": "Klassische panierte Hähnchen-Nuggets mit einer großen Portion knuspriger Pommes."
    },
    "uk": {
      "name": "Курячі Нагетси з Картоплею Фрі",
      "description": "Золотаві курячі нагетси зі свіжою хрусткою картоплею фрі."
    },
    "ru": {
      "name": "Куриные Наггетсы с Картофелем Фри",
      "description": "Золотистые наггетсы из белого мяса курицы с порцией хрустящего картофеля фри."
    }
  },
  "euro-roast-breast": {
    "ga": {
      "name": "Ucht Sicín Rósta & Sceallóga",
      "description": "Ucht sicín rósta tairisceana le sceallóga órga agus anlann ghréabhaí."
    },
    "es": {
      "name": "Pechuga de Pollo Asada con Patatas",
      "description": "Pechuga de pollo entera asada y jugosa con patatas fritas crujientes y salsa."
    },
    "de": {
      "name": "Gebratene Hähnchenbrust mit Pommes",
      "description": "Saftig gebratene ganze Hähnchenbrust serviert mit krossen Pommes frites."
    },
    "uk": {
      "name": "Запечена Куряча Грудка з Картоплею Фрі",
      "description": "Соковита запечена куряча грудка з золотавою картоплею фрі та соусом."
    },
    "ru": {
      "name": "Запеченная Куриная Грудка с Картофелем Фри",
      "description": "Сочное запеченное куриное филе с порцией картофеля фри и соусом."
    }
  },
  "euro-goujons": {
    "ga": {
      "name": "Gúiseoin Sicín & Sceallóga",
      "description": "Stiallacha filléad sicín brioscacha le sceallóga órga friochta."
    },
    "es": {
      "name": "Goujons de Pollo con Patatas Fritas",
      "description": "Tiras de pechuga de pollo rebozadas y crujientes servidas con patatas fritas."
    },
    "de": {
      "name": "Hähnchen-Goujons mit Pommes",
      "description": "Knusprig panierte Hähnchenbruststreifen mit heißen Pommes frites serviert."
    },
    "uk": {
      "name": "Курячі Гужони з Картоплею Фрі",
      "description": "Хрусткі смужки філе в паніровці з ароматною гарячою картоплею фрі."
    },
    "ru": {
      "name": "Куриные Стрипсы с Картофелем Фри",
      "description": "Хрустящие куриные стрипсы в аппетитной панировке с картофелем фри."
    }
  },
  "euro-sausages": {
    "ga": {
      "name": "Ispíní Móra & Sceallóga",
      "description": "Ispíní móra friochta le sceallóga tiubha órga."
    },
    "es": {
      "name": "Salchichas Jumbo con Patatas Fritas",
      "description": "Dos grandes salchichas carnosas fritas servidas con patatas fritas calientes."
    },
    "de": {
      "name": "Jumbo-Würstchen mit Pommes",
      "description": "Herzhafte Jumbo-Bratwürste knusprig gebraten mit frischen Pommes frites."
    },
    "uk": {
      "name": "Великі Сардельки з Картоплею Фрі",
      "description": "Апетитні великі смажені сосиски з порцією золотої картоплі фрі."
    },
    "ru": {
      "name": "Большие Сосиски с Картофелем Фри",
      "description": "Аппетитные жареные сосиски джамбо с порцией горячего картофеля фри."
    }
  },
  "euro-cod-fillet": {
    "ga": {
      "name": "Filléad Troisc Brioscach & Sceallóga",
      "description": "Filléad troisc tiubh friochta i gcumasc aráin le sceallóga."
    },
    "es": {
      "name": "Filete Grueso de Bacalao Empanado con Patatas",
      "description": "Filete jugoso de bacalao en rebozado crujiente dorado con patatas fritas."
    },
    "de": {
      "name": "Paniertes Kabeljaufilet mit Pommes",
      "description": "Kross paniertes zartes Kabeljaufilet mit einer Beilage Pommes frites."
    },
    "uk": {
      "name": "Філе Тріски в Паніровці з Картоплею Фрі",
      "description": "Соковите філе тріски в золотистій хрусткій паніровці з картоплею фрі."
    },
    "ru": {
      "name": "Филе Трески в Панировке с Картофелем Фри",
      "description": "Нежное филе трески в хрустящей аппетитной панировке с картофелем фри."
    }
  },
  "side-spicy-bag": {
    "ga": {
      "name": "Mála Spíosrach (Spicy Bag)",
      "description": "Mála cáiliúil Éireannach le sicín brioscach, sceallóga, oinniúin agus spíosraí dearga."
    },
    "es": {
      "name": "Bolsa Picante (Spicy Bag)",
      "description": "El legendario Spicy Bag irlandés con pollo crujiente, patatas, chiles y cebollas especiadas."
    },
    "de": {
      "name": "Spicy Bag (Scharfe Tüte)",
      "description": "Kultige irische Spezialität: knuspriges Hähnchen, Pommes, Chilischoten und Röstzwiebeln."
    },
    "uk": {
      "name": "Спайсі Бег (Гострий Пакет)",
      "description": "Легендарний ірландський хіт: хрустка курочка, картопля фрі, чилі та цибуля зі спеціями."
    },
    "ru": {
      "name": "Спайси Бэг (Острый Пакет)",
      "description": "Культовое ирландское блюдо: хрустящая курица, картофель фри, чили и специи в кульке."
    }
  },
  "side-salt-chilli-chips": {
    "ga": {
      "name": "Sceallóga Salainn & Sile",
      "description": "Sceallóga caite i wok le salann mara, piobair cillí úra agus oinniún."
    },
    "es": {
      "name": "Patatas Fritas Sal y Chile",
      "description": "Patatas fritas salteadas al wok con sal marina, chiles frescos cortados y cebolleta."
    },
    "de": {
      "name": "Salz & Chili Pommes",
      "description": "Krosse Pommes frites im Wok mit Meersalz, Chili und Frühlingszwiebeln verfeinert."
    },
    "uk": {
      "name": "Картопля Фрі Сіль та Чилі",
      "description": "Картопля фрі, обсмажена у воку з морською сіллю, свіжим перцем чилі та цибулею."
    },
    "ru": {
      "name": "Картофель Фри Соль и Чили",
      "description": "Картофель фри, обжаренный в воке с морской солью, колечками чили и лучком."
    }
  },
  "side-sweet-potato-chips": {
    "ga": {
      "name": "Sceallóga Prátaí Milse",
      "description": "Sceallóga prátaí milse friochta go brioscach le salann mara."
    },
    "es": {
      "name": "Patatas Fritas de Boniato Dulce",
      "description": "Crujientes bastones de boniato frito dulce con un toque de sal marina."
    },
    "de": {
      "name": "Süßkartoffel-Pommes",
      "description": "Knusprig frittierte Süßkartoffelpommes mit einer Prise Meersalz."
    },
    "uk": {
      "name": "Батат Фрі (Солодка Картопля)",
      "description": "Хрусткі скибочки солодкого батату, обсмажені до золотавої скоринки."
    },
    "ru": {
      "name": "Батат Фри (Сладкий Картофель)",
      "description": "Хрустящие палочки сладкого картофеля батат с легкой щепоткой морской соли."
    }
  },
  "side-soft-fried-noodles": {
    "ga": {
      "name": "Núdail Bhoga Fhriochta",
      "description": "Núdail uibheacha caite i wok le soy éadrom agus pónairí soighe."
    },
    "es": {
      "name": "Fideos Suaves Fritos al Wok",
      "description": "Fideos al huevo salteados suavemente con salsa de soja y brotes crujientes."
    },
    "de": {
      "name": "Gebratene weiche Eiernudeln",
      "description": "Im Wok geschwenkte zarte Eiernudeln mit Sojasauce und Sprossen."
    },
    "uk": {
      "name": "М'яка Смажена Локшина",
      "description": "Яєчна локшина, обсмажена у воку зі соєвим соусом та паростками бобів."
    },
    "ru": {
      "name": "Мягкая Жареная Лапша",
      "description": "Нежная яичная лапша, обжаренная в воке со светлым соевым соусом и ростками."
    }
  },
  "side-soft-fried-rice-noodles": {
    "ga": {
      "name": "Núdail Ríse Bhoga Fhriochta",
      "description": "Núdail ríse tanaí caite le soy agus oinniún earraigh."
    },
    "es": {
      "name": "Fideos de Arroz Finos Salteados",
      "description": "Fideos delgados de arroz salteados al wok con salsa de soja aromática."
    },
    "de": {
      "name": "Gebratene Reisnudeln",
      "description": "Feine Reisnudeln zart gebraten mit Sojasauce und Lauch."
    },
    "uk": {
      "name": "Смажена Рисова Локшина",
      "description": "Тонка рисова локшина у воку зі соєвим соусом та зеленню."
    },
    "ru": {
      "name": "Жареная Рисовая Лапша",
      "description": "Тонкая рисовая лапша в воке со светлым соевым соусом и зеленью."
    }
  },
  "side-chicken-balls": {
    "ga": {
      "name": "Liathróidí Sicín (5 cinn)",
      "description": "Liathróidí sicín órga brioscacha i dtaos éadrom."
    },
    "es": {
      "name": "Bolas de Pollo Rebozadas (5 uds)",
      "description": "Bolas crujientes y doradas de pollo en masa tempura ligera."
    },
    "de": {
      "name": "Gebackene Hähnchenbällchen (5 Stk)",
      "description": "Fünf goldbraun gebackene Hähnchenbällchen im knusprigen Teigmantel."
    },
    "uk": {
      "name": "Курячі Кульки (5 шт)",
      "description": "Золотаві хрусткі кульки з ніжного курячого м'яса у фритюрі."
    },
    "ru": {
      "name": "Куриные Шарики (5 шт)",
      "description": "Пять золотистых хрустящих шариков из нежного куриного филе в кляре."
    }
  },
  "side-smoked-chicken-special": {
    "ga": {
      "name": "Sicín Deataithe Speisialta",
      "description": "Stiallacha sicín deataithe brioscacha le spíosraí."
    },
    "es": {
      "name": "Pollo Ahumado Especial de la Casa",
      "description": "Porción especial de tiras de pollo ahumado crujiente con especias orientales."
    },
    "de": {
      "name": "Spezial Geräuchertes Hähnchen",
      "description": "Besondere Portion feiner rauchiger Hähnchenstreifen."
    },
    "uk": {
      "name": "Фірмова Копчена Курка",
      "description": "Апетитна порція копченого курячого філе зі східними прянощами."
    },
    "ru": {
      "name": "Фирменная Копченая Курочка",
      "description": "Специальная порция нежного копченого куриного филе со специями."
    }
  },
  "side-curry-fried-rice": {
    "ga": {
      "name": "Anlann Cuirí le Rís Fhriochta",
      "description": "Rís friochta uibhe clúdaithe le hanlann cuirí Síneach te."
    },
    "es": {
      "name": "Arroz Frito con Salsa de Curry",
      "description": "Arroz frito al huevo bañado en rica y aromática salsa de curry oriental."
    },
    "de": {
      "name": "Gebratener Reis mit Currysauce",
      "description": "Gebratener Eierreis übergossen mit aromatischer, heißer Currysauce."
    },
    "uk": {
      "name": "Смажений Рис під Соусом Карі",
      "description": "Смажений яєчний рис під гарячим ароматним китайським соусом карі."
    },
    "ru": {
      "name": "Жареный Рис с Соусом Карри",
      "description": "Жареный рис, щедро политый горячим пряным китайским соусом карри."
    }
  },
  "side-3in1": {
    "ga": {
      "name": "3 in 1 (Rís, Sceallóga & Cuirí)",
      "description": "Tráidire clasaiceach Éireannach le rís friochta, sceallóga agus anlann cuirí."
    },
    "es": {
      "name": "3 en 1 (Arroz, Patatas y Curry)",
      "description": "Bandeja clásica con arroz frito, patatas fritas y abundante salsa de curry."
    },
    "de": {
      "name": "3 in 1 (Reis, Pommes & Curry)",
      "description": "Beliebte Kombination aus gebratenem Reis, Pommes frites und Currysauce."
    },
    "uk": {
      "name": "3 в 1 (Рис, Картопля та Карі)",
      "description": "Культова ірландська страва: смажений рис, картопля фрі та гарячий соус карі."
    },
    "ru": {
      "name": "3 в 1 (Рис, Картофель и Карри)",
      "description": "Культовое блюдо: жареный рис, хрустящий картофель фри и пряный соус карри."
    }
  },
  "side-4in1": {
    "ga": {
      "name": "4 in 1 (Rís, Sceallóga, Sicín & Cuirí)",
      "description": "Rís friochta, sceallóga, liathróidí sicín agus anlann cuirí te."
    },
    "es": {
      "name": "4 en 1 (Arroz, Patatas, Pollo y Curry)",
      "description": "Bandeja completa con arroz frito, patatas fritas, pollo y salsa de curry."
    },
    "de": {
      "name": "4 in 1 (Reis, Pommes, Hähnchen & Curry)",
      "description": "Gebratener Reis, Pommes frites, knuspriges Hähnchen und Currysauce."
    },
    "uk": {
      "name": "4 в 1 (Рис, Картопля, Курка та Карі)",
      "description": "Повноцінний бокс: смажений рис, картопля фрі, курка та гарячий соус карі."
    },
    "ru": {
      "name": "4 в 1 (Рис, Картофель, Курица и Карри)",
      "description": "Сытный бокс: жареный рис, картофель фри, хрустящая курочка и соус карри."
    }
  },
  "side-4in1-shredded": {
    "ga": {
      "name": "4 in 1 le Sicín Stróicthe",
      "description": "Rís friochta, sceallóga, sicín brioscach stróicthe agus anlann cuirí."
    },
    "es": {
      "name": "4 en 1 con Pollo Crujiente Desmenuzado",
      "description": "Arroz frito, patatas fritas, tiras de pollo crujiente y salsa de curry."
    },
    "de": {
      "name": "4 in 1 mit krossem Hähnchen",
      "description": "Gebratener Reis, Pommes, knusprige Hähnchenstreifen und feine Currysauce."
    },
    "uk": {
      "name": "4 в 1 із Рваною Хрусткою Куркою",
      "description": "Смажений рис, картопля фрі, хрусткі курячі смужки та соус карі."
    },
    "ru": {
      "name": "4 в 1 с Хрустящей Рваной Курицей",
      "description": "Жареный рис, картофель фри, хрустящие куриные полоски и соус карри."
    }
  },
  "side-curry-chips": {
    "ga": {
      "name": "Sceallóga Cuirí",
      "description": "Sceallóga te órga clúdaithe le hanlann cuirí saibhir Síneach."
    },
    "es": {
      "name": "Patatas Fritas al Curry",
      "description": "Ración de patatas fritas doradas bañadas en nuestra salsa de curry china."
    },
    "de": {
      "name": "Curry-Pommes",
      "description": "Goldgelbe Pommes frites reichlich mit aromatischer Currysauce bedeckt."
    },
    "uk": {
      "name": "Картопля Фрі під Соусом Карі",
      "description": "Гаряча золотиста картопля фрі під густим ароматним соусом карі."
    },
    "ru": {
      "name": "Картофель Фри под Соусом Карри",
      "description": "Хрустящий картофель фри, щедро политый ароматным соусом карри."
    }
  },
  "side-garlic-cheese-chips": {
    "ga": {
      "name": "Sceallóga Cáis & Gairleoige",
      "description": "Sceallóga le maonáis gairleoige uachtarach agus cáis ghrátáilte leáite."
    },
    "es": {
      "name": "Patatas con Ajo y Queso Fundido",
      "description": "Patatas fritas crujientes con mayonesa cremosa de ajo y abundante queso derretido."
    },
    "de": {
      "name": "Knoblauch-Käse-Pommes",
      "description": "Heiße Pommes frites mit cremiger Knoblauchmayo und geschmolzenem Käse."
    },
    "uk": {
      "name": "Картопля з Сиром та Часником",
      "description": "Картопля фрі під часниковим соусом та щедрим шаром розплавленого сиру."
    },
    "ru": {
      "name": "Картофель с Сыром и Чесноком",
      "description": "Картофель фри под нежным чесночным майонезом и расплавленным сыром."
    }
  },
  "side-curry-cheese-chips": {
    "ga": {
      "name": "Sceallóga Cuirí & Cáis",
      "description": "Sceallóga órga le hanlann cuirí agus cáis leáite bhlasta."
    },
    "es": {
      "name": "Patatas con Curry y Queso",
      "description": "Patatas fritas crujientes con salsa de curry oriental y queso fundido."
    },
    "de": {
      "name": "Curry-Käse-Pommes",
      "description": "Krosse Pommes überbacken mit heißer Currysauce und geschmolzenem Käse."
    },
    "uk": {
      "name": "Картопля з Карі та Сиром",
      "description": "Картопля фрі під соусом карі та шаром розплавленого тягучого сиру."
    },
    "ru": {
      "name": "Картофель с Карри и Сыром",
      "description": "Картофель фри с пряным соусом карри и расплавленным сыром."
    }
  },
  "side-spicy-beef-chips": {
    "ga": {
      "name": "Sceallóga Mairteola Spíosrach",
      "description": "Sceallóga le mionfheoil mhairteola spíosrach agus oinniún."
    },
    "es": {
      "name": "Patatas con Ternera Picada Picante",
      "description": "Patatas fritas cubiertas de carne picada de ternera salteada con especias picantes."
    },
    "de": {
      "name": "Pommes mit würzigem Rinderhack",
      "description": "Heiße Pommes getoppt mit pikant gewürztem Rinderhackfleisch."
    },
    "uk": {
      "name": "Картопля з Гострим Яловичим Фаршем",
      "description": "Картопля фрі з пікантним смаженим яловичим фаршем та перцем чилі."
    },
    "ru": {
      "name": "Картофель с Острым Говяжьим Фаршем",
      "description": "Картофель фри с аппетитным острым говяжьим фаршем и зеленью."
    }
  },
  "side-chips": {
    "ga": {
      "name": "Sceallóga",
      "description": "Sceallóga úra friochta go hórga agus go brioscach."
    },
    "es": {
      "name": "Patatas Fritas Doradas",
      "description": "Ración de patatas fritas cortadas gruesas, doradas y crujientes."
    },
    "de": {
      "name": "Pommes frites",
      "description": "Klassische goldgelbe, knusprige Pommes frites."
    },
    "uk": {
      "name": "Картопля Фрі",
      "description": "Порція свіжої хрусткої золотої картоплі фрі."
    },
    "ru": {
      "name": "Картофель Фри",
      "description": "Порция хрустящего золотистого картофеля фри."
    }
  },
  "side-fried-rice": {
    "ga": {
      "name": "Rís Fhriochta (Breis)",
      "description": "Rís friochta uibhe caite le soy agus scalláin."
    },
    "es": {
      "name": "Arroz Frito al Huevo (Guarnición)",
      "description": "Ración de arroz salteado al wok con huevo y un toque de cebolleta."
    },
    "de": {
      "name": "Gebratener Eierreis (Beilage)",
      "description": "Klassisch im Wok geschwenkter Eierreis als ideale Beilage."
    },
    "uk": {
      "name": "Смажений Рис (Гарнір)",
      "description": "Порція золотистого яєчного рису у воку зі шматочками зеленої цибулі."
    },
    "ru": {
      "name": "Жареный Рис (Гарнир)",
      "description": "Порция жареного яичного риса из вока со свежим зеленым луком."
    }
  },
  "side-jasmine-rice": {
    "ga": {
      "name": "Rís Iasmhine Gaile",
      "description": "Rís iasmhine bán aramatach cócaráilte ar ghaile."
    },
    "es": {
      "name": "Arroz Jazmín al Vapor",
      "description": "Arroz jazmín blanco aromático cocido al vapor, ligero y esponjoso."
    },
    "de": {
      "name": "Gedämpfter Jasminreis",
      "description": "Duftender weißer Jasminreis frisch und locker gedämpft."
    },
    "uk": {
      "name": "Паровий Жасминовий Рис",
      "description": "Ароматний білий жасминовий рис, приготований на пару."
    },
    "ru": {
      "name": "Жасминовый Рис на Пару",
      "description": "Ароматный рассыпчатый белый жасминовый рис, приготовленный на пару."
    }
  },
  "side-onion-rings": {
    "ga": {
      "name": "Fáinní Oinniúin Brioscacha",
      "description": "Fáinní oinniúin úra friochta i gcumasc órga brioscach."
    },
    "es": {
      "name": "Aros de Cebolla Crujientes",
      "description": "Aros gruesos de cebolla dulce rebozados y fritos dorados."
    },
    "de": {
      "name": "Knusprige Zwiebelringe",
      "description": "Goldbraun panierte, krosse Zwiebelringe."
    },
    "uk": {
      "name": "Цибулеві Кільця",
      "description": "Хрусткі золотисті цибулеві кільця в апетитній паніровці."
    },
    "ru": {
      "name": "Луковые Кольца",
      "description": "Хрустящие аппетитные луковые кольца в золотистой панировке."
    }
  },
  "side-portion-sauce": {
    "ga": {
      "name": "Póirse Anlainn",
      "description": "Póirse anlainn te: Cuirí, Milis & Géar, Pónaire Dhubh, nó Satai."
    },
    "es": {
      "name": "Porción de Salsa",
      "description": "Tina de salsa casera caliente: Curry, Agridulce, Judía Negra o Satay."
    },
    "de": {
      "name": "Portion Sauce",
      "description": "Heiße Portion Sauce nach Wahl: Curry, Süß-Sauer, Schwarze Bohne oder Satay."
    },
    "uk": {
      "name": "Порція Соусу",
      "description": "Порція теплого соусу на вибір: карі, кисло-солодкий, чорні боби чи сатай."
    },
    "ru": {
      "name": "Порция Соуса",
      "description": "Баночка теплого соуса на выбор: карри, кисло-сладкий, черные бобы или сатай."
    }
  },
  "side-garlic-mayo": {
    "ga": {
      "name": "Anlann Maonáis Gairleoige",
      "description": "Maonáis uachtarach shaibhir le gairleog úr."
    },
    "es": {
      "name": "Salsa Mayonesa de Ajo",
      "description": "Cremosa salsa casera de mayonesa emulsionada con ajo fresco."
    },
    "de": {
      "name": "Knoblauch-Mayonnaise",
      "description": "Cremige Mayonnaise verfeinert mit frischem Knoblauch."
    },
    "uk": {
      "name": "Часниковий Майонезний Соус",
      "description": "Густий кремовий соус зі свіжим часником та зеленню."
    },
    "ru": {
      "name": "Чесночный Майонезный Соус",
      "description": "Густой кремовый майонез со свежим ароматным чесноком."
    }
  },
  "side-prawn-crackers": {
    "ga": {
      "name": "Brioscáin Chloicheán Téalannacha",
      "description": "Mála mór de bhrioscáin chloicheán bhrioscacha éadroma."
    },
    "es": {
      "name": "Pan de Gambas Tailandés",
      "description": "Bolsa grande de crujiente y ligero pan de gambas frito al momento."
    },
    "de": {
      "name": "Krabbenchips (Krupuk)",
      "description": "Große Tüte krosse, luftige thailändische Krabbenchips."
    },
    "uk": {
      "name": "Тайські Креветкові Чіпси",
      "description": "Великий пакет легких та хрустких креветкових чіпсів."
    },
    "ru": {
      "name": "Тайские Креветочные Чипсы",
      "description": "Большой пакет хрустящих и воздушных креветочных чипсов крэкер."
    }
  },
  "des-almond-pastries": {
    "ga": {
      "name": "Taosráin Almóinní",
      "description": "Taosráin brioscacha milse líonta le taos almóinní aramatach."
    },
    "es": {
      "name": "Pasteles Tradicionales de Almendra",
      "description": "Hojaldres dulces y crujientes rellenos de delicada crema de almendras."
    },
    "de": {
      "name": "Mandel-Gebäck",
      "description": "Feines, blättriges Gebäck gefüllt mit süßer Mandelpaste."
    },
    "uk": {
      "name": "Мигдальне Печиво",
      "description": "Хрустке листкове печиво з ніжною та ароматною мигдальною начинкою."
    },
    "ru": {
      "name": "Миндальная Выпечка",
      "description": "Хрустящее слоеное печенье с ароматной нежной миндальной начинкой."
    }
  },
  "des-sachima": {
    "ga": {
      "name": "Cáca Sachima Seasamain",
      "description": "Cáca traidisiúnta Síneach milis le caramal mil agus síolta seasamain."
    },
    "es": {
      "name": "Pastel Sachima Crujiente de Sésamo",
      "description": "Dulce tradicional esponjoso caramelizado con miel y semillas de sésamo."
    },
    "de": {
      "name": "Sachima Sesam-Honigkuchen",
      "description": "Traditioneller chinesischer Honig-Kuchen mit geröstetem Sesam."
    },
    "uk": {
      "name": "Тістечко Сачіма з Кунжутом",
      "description": "Традиційний східний десерт із повітряного тіста з медовою карамеллю та кунжутом."
    },
    "ru": {
      "name": "Пирожное Сачима с Кунжутом",
      "description": "Традиционный восточный десерт из воздушного теста в карамели с кунжутом."
    }
  },
  "des-tiramisu": {
    "ga": {
      "name": "Tiramisu Clasaiceach",
      "description": "Milseog Iodálach shaibhir le mascarpone, caife agus cócó mín."
    },
    "es": {
      "name": "Tiramisú Clásico",
      "description": "Delicioso postre italiano en capas de bizcocho al café, crema mascarpone y cacao."
    },
    "de": {
      "name": "Klassisches Tiramisu",
      "description": "Italienisches Schichtdessert mit Mascarponecreme, Espresso und feinem Kakao."
    },
    "uk": {
      "name": "Класичний Тірамісу",
      "description": "Ніжний десерт із кремом маскарпоне, кавовим бісквітом та какао."
    },
    "ru": {
      "name": "Классический Тирамису",
      "description": "Итальянский нежный десерт с кремом маскарпоне, кофе и какао."
    }
  },
  "des-pineapple-fritters": {
    "ga": {
      "name": "Friteoirí Anainn le Mil",
      "description": "Píosaí anainn friochta go hórga i dtaos brioscach le mil órga."
    },
    "es": {
      "name": "Buñuelos de Piña con Miel",
      "description": "Rodajas jugosas de piña rebozadas y fritas doradas, bañadas en miel natural."
    },
    "de": {
      "name": "Gebackene Ananas mit Honig",
      "description": "Goldbraun frittierte Ananasringe im Backteig mit feinem Bienenhonig."
    },
    "uk": {
      "name": "Ананасові Фріттери з Медом",
      "description": "Кільця соковитого ананаса в хрусткому клярі, политі натуральним медом."
    },
    "ru": {
      "name": "Ананасовые Фриттеры с Медом",
      "description": "Золотистые кольца сочного ананаса в воздушном кляре с натуральным медом."
    }
  },
  "drk-caprisun": {
    "ga": {
      "name": "Capri Sun Oráiste",
      "description": "Sú oráiste athnuachana do pháistí agus do dhaoine fásta."
    },
    "es": {
      "name": "Capri Sun Naranja",
      "description": "Bebida refrescante de zumo de naranja natural en bolsita con pajita."
    },
    "de": {
      "name": "Capri-Sun Orange",
      "description": "Erfrischendes Fruchtsaftgetränk mit sonnigem Orangengeschmack."
    },
    "uk": {
      "name": "Капрі-Зан Апельсин",
      "description": "Освіжаючий апельсиновий сік у зручній упаковці з трубочкою."
    },
    "ru": {
      "name": "Капри-Зон Апельсин",
      "description": "Освежающий натуральный апельсиновый напиток с трубочкой."
    }
  },
  "drk-can": {
    "ga": {
      "name": "Canna Deoch Bhog (330ml)",
      "description": "Canna fuar: Coca-Cola, Diet Coke, Sprite, Fanta, 7Up nó Club Orange."
    },
    "es": {
      "name": "Lata de Refresco (330ml)",
      "description": "Lata fría: Coca-Cola, Coca-Cola Zero, Sprite, Fanta Naranja o 7Up."
    },
    "de": {
      "name": "Softdrink-Dose (330ml)",
      "description": "Eiskalte Dose: Coca-Cola, Coke Zero, Sprite, Fanta oder 7Up."
    },
    "uk": {
      "name": "Баночка Газованого Напою (330мл)",
      "description": "Холодна баночка: Coca-Cola, Coca-Cola Zero, Fanta, Sprite або 7Up."
    },
    "ru": {
      "name": "Баночка Газировки (330мл)",
      "description": "Охлажденная баночка: Coca-Cola, Cola Zero, Fanta, Sprite или 7Up."
    }
  },
  "drk-bottle": {
    "ga": {
      "name": "Buidéal Mór Deoch Bhog (1.5L / 2L)",
      "description": "Buidéal mór teaghlaigh: Coca-Cola, Diet Coke, Fanta nó 7Up."
    },
    "es": {
      "name": "Botella Grande de Refresco (1.5L / 2L)",
      "description": "Botella familiar fría: Coca-Cola, Diet Coke, Fanta o 7Up."
    },
    "de": {
      "name": "Große Softdrink-Flasche (1.5L / 2L)",
      "description": "Große Flasche für die Familie: Coca-Cola, Diet Coke, Fanta oder 7Up."
    },
    "uk": {
      "name": "Велика Пляшка Газованого Напою (1.5л / 2л)",
      "description": "Велика сімейна пляшка: Coca-Cola, Fanta, Sprite або 7Up."
    },
    "ru": {
      "name": "Большая Бутылка Напитка (1.5л / 2л)",
      "description": "Большая семейная бутылка: Coca-Cola, Fanta, Sprite или 7Up."
    }
  },
  "drk-still-water": {
    "ga": {
      "name": "Uisce Faoi Bhláth (500ml)",
      "description": "Uisce mianraí íon neamh-súilíneach fuar."
    },
    "es": {
      "name": "Agua Mineral sin Gas (500ml)",
      "description": "Botella de agua mineral pura y fresca sin gas."
    },
    "de": {
      "name": "Stilles Mineralwasser (500ml)",
      "description": "Erfrischendes, kühles Mineralwasser ohne Kohlensäure."
    },
    "uk": {
      "name": "Негазована Вода (500мл)",
      "description": "Пляшка чистої негазованої мінеральної води."
    },
    "ru": {
      "name": "Негазированная Вода (500мл)",
      "description": "Бутылка чистой природной негазированной воды."
    }
  },
  "drk-sparkling-water": {
    "ga": {
      "name": "Uisce Súilíneach (500ml)",
      "description": "Uisce mianraí súilíneach fuar athnuachana."
    },
    "es": {
      "name": "Agua con Gas (500ml)",
      "description": "Botella de agua mineral fría y chispeante con gas."
    },
    "de": {
      "name": "Sprudelwasser (500ml)",
      "description": "Erfrischendes Mineralwasser mit prickelnder Kohlensäure."
    },
    "uk": {
      "name": "Газована Вода (500мл)",
      "description": "Пляшка свіжої газованої мінеральної води."
    },
    "ru": {
      "name": "Газированная Вода (500мл)",
      "description": "Бутылка освежающей газированной минеральной воды."
    }
  },
  "drk-lucozade": {
    "ga": {
      "name": "Lucozade Bunaidh",
      "description": "Deoch fuinnimh ghliocóis bhunaidh athnuachana."
    },
    "es": {
      "name": "Lucozade Original Energy",
      "description": "Bebida energética británica tradicional con sabor cítrico refrescante."
    },
    "de": {
      "name": "Lucozade Original",
      "description": "Kultiges britisches Energiegetränk für den schnellen Energieschub."
    },
    "uk": {
      "name": "Лукозейд Оригінал",
      "description": "Освіжаючий енергетичний напій Lucozade Original з цитрусовим смаком."
    },
    "ru": {
      "name": "Лукозейд Оригинал",
      "description": "Освежающий британский энергетический напиток Lucozade Original."
    }
  },
  "drk-redbull": {
    "ga": {
      "name": "Deoch Fuinnimh Red Bull (250ml)",
      "description": "Canna fuar Red Bull le caiféin agus taurine."
    },
    "es": {
      "name": "Bebida Energética Red Bull (250ml)",
      "description": "Lata fría de Red Bull revitalizante con taurina y cafeína."
    },
    "de": {
      "name": "Red Bull Energy Drink (250ml)",
      "description": "Eiskalte Dose Red Bull belebt Geist und Körper."
    },
    "uk": {
      "name": "Енергетик Red Bull (250мл)",
      "description": "Баночка енергетичного напою Red Bull з таурином та кофеїном."
    },
    "ru": {
      "name": "Энергетик Red Bull (250мл)",
      "description": "Охлажденная баночка бодрящего энергетика Red Bull с таурином и кофеином."
    }
  }
};

/**
 * Returns the localized dish name and description, or falls back to original item values.
 */
export function getLocalizedDish(item: MenuItem, lang: SupportedLanguage): { name: string; description: string } {
  if (lang === 'en' || !item) {
    return { name: item.name, description: item.description };
  }

  const match = DISH_LOCALIZATIONS[item.id]?.[lang];
  if (match && match.name) {
    return {
      name: match.name,
      description: match.description || item.description,
    };
  }

  return { name: item.name, description: item.description };
}

export const OPTION_GROUP_TRANSLATIONS: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  'Complimentary Side Included': {
    ga: 'Rogha Taobhmhiasa San Áireamh',
    es: 'Guarnición Incluida',
    de: 'Inklusive Beilage nach Wahl',
    uk: 'Безкоштовний гарнір на вибір',
    ru: 'Бесплатный гарнир на выбор',
  },
  'Choice of Sauce': {
    ga: 'Rogha Anlainn',
    es: 'Elección de Salsa',
    de: 'Auswahl an Sauce',
    uk: 'Вибір соусу',
    ru: 'Выбор соуса',
  },
  'Choose Your Sauce': {
    ga: 'Roghnaigh Do Rogha Anlainn',
    es: 'Elige tu Salsa',
    de: 'Wähle deine Sauce',
    uk: 'Оберіть ваш соус',
    ru: 'Выберите ваш соус',
  },
  'Step 2 — Choose Your Sauce': {
    ga: 'Céim 2 — Roghnaigh Do Rogha Anlainn',
    es: 'Paso 2 — Elige tu Salsa',
    de: 'Schritt 2 — Wähle deine Sauce',
    uk: 'Крок 2 — Оберіть ваш соус',
    ru: 'Шаг 2 — Выберите ваш соус',
  },
  'Choice of Duck Sauce': {
    ga: 'Rogha Anlainn Lachana',
    es: 'Salsa para el Pato',
    de: 'Sauce für die Ente',
    uk: 'Соус для качки на вибір',
    ru: 'Соус для утки на выбор',
  },
  'Choose Sauce Type': {
    ga: 'Rogha Cineál Anlainn',
    es: 'Tipo de Salsa',
    de: 'Saucenart',
    uk: 'Тип соусу',
    ru: 'Тип соуса',
  },
  'Choose Meat': {
    ga: 'Roghnaigh Feoil',
    es: 'Elige la Carne',
    de: 'Fleisch wählen',
    uk: "Оберіть м'ясо",
    ru: 'Выберите мясо',
  },
  'Choose Your Meat': {
    ga: 'Roghnaigh Do Rogha Feola',
    es: 'Elige tu Carne',
    de: 'Wähle dein Fleisch',
    uk: "Оберіть ваше м'ясо",
    ru: 'Выберите ваше мясо',
  },
  'Choose Your Protein': {
    ga: 'Roghnaigh Próitéin',
    es: 'Elige tu Proteína',
    de: 'Wähle deine Proteinquelle',
    uk: 'Оберіть білкову основу',
    ru: 'Выберите мясную основу',
  },
  'Select Flavour': {
    ga: 'Roghnaigh Blas',
    es: 'Seleccionar Sabor',
    de: 'Geschmacksrichtung wählen',
    uk: 'Оберіть смак',
    ru: 'Выберите вкус',
  },
};

export const OPTION_CHOICE_TRANSLATIONS: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  'Steamed Jasmine Rice': {
    ga: 'Rís Iasmhine Gaile',
    es: 'Arroz Jazmín al Vapor',
    de: 'Gedämpfter Jasminreis',
    uk: 'Паровий жасминовий рис',
    ru: 'Жасминовый рис на пару',
  },
  'Fried Rice': {
    ga: 'Rís Fhriochta',
    es: 'Arroz Frito',
    de: 'Gebratener Reis',
    uk: 'Смажений рис',
    ru: 'Жареный рис',
  },
  'Chips': {
    ga: 'Sceallóga',
    es: 'Patatas Fritas',
    de: 'Pommes frites',
    uk: 'Картопля фрі',
    ru: 'Картофель фри',
  },
  'Fried Noodles (+€1.50)': {
    ga: 'Núdail Fhriochta (+€1.50)',
    es: 'Fideos Salteados (+€1.50)',
    de: 'Gebratene Nudeln (+€1.50)',
    uk: 'Смажена локшина (+€1.50)',
    ru: 'Жареная лапша (+€1.50)',
  },
  'Sweet & Sour Sauce': {
    ga: 'Anlann Milis & Géar',
    es: 'Salsa Agridulce',
    de: 'Süß-Sauer-Sauce',
    uk: 'Кисло-солодкий соус',
    ru: 'Кисло-сладкий соус',
  },
  'Traditional Curry': {
    ga: 'Cuirí Traidisiúnta',
    es: 'Curry Tradicional',
    de: 'Traditionelles Curry',
    uk: 'Традиційне карі',
    ru: 'Традиционное карри',
  },
  'Traditional Curry Sauce': {
    ga: 'Anlann Cuirí Traidisiúnta',
    es: 'Salsa de Curry Tradicional',
    de: 'Traditionelle Currysauce',
    uk: 'Традиційний соус карі',
    ru: 'Традиционный соус карри',
  },
  'Black Bean Sauce': {
    ga: 'Anlann Pónaire Dhubh',
    es: 'Salsa de Judía Negra',
    de: 'Schwarze-Bohnen-Sauce',
    uk: 'Соус із чорних бобів',
    ru: 'Соус из черных бобов',
  },
  'Satay Sauce (Contains Peanuts)': {
    ga: 'Anlann Satai (Cnónna Talún)',
    es: 'Salsa Satay (Contiene Cacahuetes)',
    de: 'Satay-Sauce (Enthält Erdnüsse)',
    uk: 'Соус сатай (Містить арахіс)',
    ru: 'Соус сатай (Содержит арахис)',
  },
  'Ayam Satay Sauce': {
    ga: 'Anlann Satai Ayam',
    es: 'Salsa Ayam Satay',
    de: 'Ayam Satay Sauce',
    uk: 'Соус Аям Сатай',
    ru: 'Соус Аям Сатай',
  },
  'Szechuan Sauce': {
    ga: 'Anlann Sichuan',
    es: 'Salsa Sichuan',
    de: 'Szechuan-Sauce',
    uk: 'Сичуанський соус',
    ru: 'Сычуаньский соус',
  },
  'Kung Po Sauce': {
    ga: 'Anlann Kung Po',
    es: 'Salsa Kung Po',
    de: 'Kung-Po-Sauce',
    uk: 'Соус Кунг Пао',
    ru: 'Соус Кунг Пао',
  },
  'BBQ Sauce': {
    ga: 'Anlann BBQ',
    es: 'Salsa Barbacoa (BBQ)',
    de: 'Barbecue-Sauce (BBQ)',
    uk: 'Соус Барбекю (BBQ)',
    ru: 'Соус Барбекю (BBQ)',
  },
  'Salt & Chilli': {
    ga: 'Salann & Sile',
    es: 'Sal y Chile',
    de: 'Salz & Chili',
    uk: 'Сіль та чилі',
    ru: 'Соль и чили',
  },
  'Japanese Teriyaki Sauce': {
    ga: 'Anlann Teriyaki Seapánach',
    es: 'Salsa Teriyaki Japonesa',
    de: 'Japanische Teriyaki-Sauce',
    uk: 'Японський соус теріякі',
    ru: 'Японский соус терияки',
  },
  'Black Pepper Sauce': {
    ga: 'Anlann Piobar Dubh',
    es: 'Salsa de Pimienta Negra',
    de: 'Schwarze-Pfeffer-Sauce',
    uk: 'Соус із чорного перцю',
    ru: 'Соус из черного перца',
  },
  'Cantonese Sauce': {
    ga: 'Anlann Cantónach',
    es: 'Salsa Cantonesa',
    de: 'Kantonesische Sauce',
    uk: 'Кантонський соус',
    ru: 'Кантонский соус',
  },
  'Peking Sauce': {
    ga: 'Anlann Bhéising',
    es: 'Salsa Pekinesa',
    de: 'Peking-Sauce',
    uk: 'Пекінський соус',
    ru: 'Пекинский соус',
  },
  'Honey Sauce': {
    ga: 'Anlann Meala',
    es: 'Salsa de Miel',
    de: 'Honigsauce',
    uk: 'Медовий соус',
    ru: 'Медовый соус',
  },
  'Orange Sauce': {
    ga: 'Anlann Oráiste',
    es: 'Salsa de Naranja',
    de: 'Orangensauce',
    uk: 'Апельсиновий соус',
    ru: 'Апельсиновый соус',
  },
  'Lemon Sauce': {
    ga: 'Anlann Liomóide',
    es: 'Salsa de Limón',
    de: 'Zitronensauce',
    uk: 'Лимонний соус',
    ru: 'Лимонный соус',
  },
  'Plum Sauce': {
    ga: 'Anlann Pluma',
    es: 'Salsa de Ciruela',
    de: 'Pflaumensauce',
    uk: 'Сливовий соус',
    ru: 'Сливовый соус',
  },
  'Ginger & Spring Onion Sauce': {
    ga: 'Anlann Sinséir & Oinniún Earraigh',
    es: 'Salsa de Jengibre y Cebolleta',
    de: 'Ingwer- & Frühlingszwiebel-Sauce',
    uk: 'Соус з імбиром та зеленою цибулею',
    ru: 'Соус с имбирем и зеленым луком',
  },
  'Cashew Nut Sauce': {
    ga: 'Anlann Cnónna Caisiú',
    es: 'Salsa con Anacardos',
    de: 'Cashewkern-Sauce',
    uk: "Соус із горіхами кеш'ю",
    ru: 'Соус с орехами кешью',
  },
  'Thai Green Curry': {
    ga: 'Cuirí Glas Téalannach',
    es: 'Curry Verde Tailandés',
    de: 'Thailändisches Grünes Curry',
    uk: 'Тайське зелене карі',
    ru: 'Тайское зеленое карри',
  },
  'Thai Red Curry': {
    ga: 'Cuirí Dearg Téalannach',
    es: 'Curry Rojo Tailandés',
    de: 'Thailändisches Rotes Curry',
    uk: 'Тайське червоне карі',
    ru: 'Тайское красное карри',
  },
  'Thai Red Curry Sauce': {
    ga: 'Anlann Cuirí Dearg Téalannach',
    es: 'Salsa de Curry Rojo Tailandés',
    de: 'Thailändische Rote Currysauce',
    uk: 'Тайський червоний соус карі',
    ru: 'Тайский красный соус карри',
  },
  'Thai Rendang Curry': {
    ga: 'Cuirí Rendang Téalannach',
    es: 'Curry Rendang Tailandés',
    de: 'Rendang Curry',
    uk: 'Тайське карі Ренданг',
    ru: 'Тайское карри Ренданг',
  },
  'Chicken': {
    ga: 'Sicín',
    es: 'Pollo',
    de: 'Hähnchen',
    uk: 'Курка',
    ru: 'Курица',
  },
  'Chicken / Beef': {
    ga: 'Sicín / Mairteoil',
    es: 'Pollo / Ternera',
    de: 'Hähnchen / Rind',
    uk: 'Курка / Яловичина',
    ru: 'Курица / Говядина',
  },
  'Crispy Beef': {
    ga: 'Mairteoil Bhrioscach',
    es: 'Ternera Crujiente',
    de: 'Knuspriges Rindfleisch',
    uk: 'Хрустка яловичина',
    ru: 'Хрустящая говядина',
  },
  'Crispy Chicken': {
    ga: 'Sicín Brioscach',
    es: 'Pollo Crujiente',
    de: 'Knuspriges Hähnchen',
    uk: 'Хрустка курка',
    ru: 'Хрустящая курочка',
  },
  'King Prawns (+€1.00)': {
    ga: 'Rí-Chloicheáin (+€1.00)',
    es: 'Langostinos Reales (+€1.00)',
    de: 'Riesengarnelen (+€1.00)',
    uk: 'Королівські креветки (+€1.00)',
    ru: 'Королевские креветки (+€1.00)',
  },
  'Prawns (+€1.00)': {
    ga: 'Cloicheáin (+€1.00)',
    es: 'Langostinos (+€1.00)',
    de: 'Garnelen (+€1.00)',
    uk: 'Креветки (+€1.00)',
    ru: 'Креветки (+€1.00)',
  },
  'Sirloin Steak (+€2.00)': {
    ga: 'Stéig Fíor-Iomaire (+€2.00)',
    es: 'Solomillo de Ternera (+€2.00)',
    de: 'Rumpsteak (+€2.00)',
    uk: 'Стейк Стріплойн (+€2.00)',
    ru: 'Стейк Стриплойн (+€2.00)',
  },
};

export function getLocalizedOptionGroup(name: string, lang: SupportedLanguage): string {
  if (lang === 'en') return name;
  return OPTION_GROUP_TRANSLATIONS[name]?.[lang] || name;
}

export function getLocalizedOptionChoice(label: string, lang: SupportedLanguage): string {
  if (lang === 'en') return label;
  return OPTION_CHOICE_TRANSLATIONS[label]?.[lang] || label;
}

