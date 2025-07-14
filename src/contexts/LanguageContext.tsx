import React, { createContext, useContext, useState } from 'react';
import contentData from '@/data/content.json';
import articlesData from '@/data/articles.json';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: typeof contentData.it;
  articles: typeof articlesData.it;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it');

  const content = contentData[language];
  const articles = articlesData[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content, articles }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};