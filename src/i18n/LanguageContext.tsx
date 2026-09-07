import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, SUPPORTED_LANGUAGES, TRANSLATIONS, TranslationDictionary } from './translations';
import { cyberSound } from '../utils/cyberSound';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationDictionary;
  audioEnabled: boolean;
  toggleAudio: () => boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'momoda_user_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
      // Check browser navigator language
      const browserLang = navigator.language?.slice(0, 2).toLowerCase();
      if (browserLang === 'ga' || browserLang === 'ru' || browserLang === 'es' || browserLang === 'de' || browserLang === 'uk') {
        return browserLang as SupportedLanguage;
      }
    }
    return 'en';
  });

  const [audioEnabled, setAudioEnabled] = useState<boolean>(() => cyberSound.getEnabled());

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggleAudio = () => {
    const next = cyberSound.toggle();
    setAudioEnabled(next);
    return next;
  };

  useEffect(() => {
    // Set html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, audioEnabled, toggleAudio }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
