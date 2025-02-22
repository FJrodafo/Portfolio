import React, { createContext, useContext, useState, useEffect } from 'react';
const TranslationContext = createContext();
const useTranslation = () => useContext(TranslationContext);
const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      };
    };
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    };
    const loadTranslations = async () => {
      const translationData = await import(`@/translations/${language}.json`);
      setTranslations(translationData.default);
    };
    loadTranslations();
  }, [language]);
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations;
    for (const k of keys) {
      translation = translation[k];
      if (!translation) return key;
    };
    return translation;
  };
  return (
    <TranslationContext.Provider value={{ t, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
export { useTranslation, TranslationProvider };
