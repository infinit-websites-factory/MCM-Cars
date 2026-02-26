import { createContext, useContext, useState, ReactNode } from "react";
import { translations, TranslationKey } from "@/translations";

export type Language = "es";

interface AddressInfo {
  street: string;
  city: string;
  full: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getPhoneNumber: () => string;
  getPhoneNumberWithPrefix: () => string;
  getWhatsAppNumber: () => string;
  getAddress: () => AddressInfo;
  getCityName: () => string;
  getCurrency: () => string;
  getCurrencySymbol: () => string;
  formatPrice: (price: number) => string;
  t: (key: TranslationKey, options?: { returnObjects?: boolean }) => any;
  translateVehicleAttribute: (category: 'fuel' | 'transmission' | 'body_type' | 'color', value: string) => string;
}

const PHONE_NUMBERS = {
  es: "+34676517680",
};

const ADDRESSES: Record<Language, AddressInfo> = {
  es: {
    street: "Calle Marie Curie 36",
    city: "28703 San Sebastián de los Reyes, Madrid",
    full: "Calle Marie Curie 36, 28703 San Sebastián de los Reyes, Madrid",
    mapsUrl: "https://maps.app.goo.gl/n2m5yTXATVAM69YY9",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6064.094250141441!2d-3.6238160000000006!3d40.540548!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDMyJzI2LjAiTiAzwrAzNycyNS43Ilc!5e0!3m2!1sen!2sus!4v1771905044703!5m2!1sen!2sus"
  },
};

const CURRENCIES: Record<Language, { code: string; symbol: string }> = {
  es: { code: "EUR", symbol: "€" },
};

const formatPhoneNumber = (phone: string, _language: Language): string => {
  // Remove the + sign for formatting
  const digits = phone.substring(1);

  // Spanish format: +34 676 51 76 80
  return `+34 ${digits.substring(2, 5)} ${digits.substring(5, 7)} ${digits.substring(7, 9)} ${digits.substring(9)}`;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to Spanish
    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      return savedLanguage || "es";
    } catch (error) {
      console.warn("localStorage not available:", error);
      return "es";
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("language", lang);
      // Reload the page to ensure all translations are updated
      window.location.reload();
    } catch (error) {
      console.warn("Failed to save language preference:", error);
    }
  };

  const getPhoneNumber = () => {
    return formatPhoneNumber(PHONE_NUMBERS[language], language);
  };

  const getPhoneNumberWithPrefix = () => {
    return PHONE_NUMBERS[language];
  };

  const getWhatsAppNumber = () => {
    // WhatsApp format without '+' prefix
    return PHONE_NUMBERS[language].substring(1);
  };

  const getAddress = () => {
    return ADDRESSES[language];
  };

  const getCityName = () => {
    return "Madrid";
  };

  const getCurrency = () => {
    return CURRENCIES[language].code;
  };

  const getCurrencySymbol = () => {
    return CURRENCIES[language].symbol;
  };

  const formatPrice = (price: number): string => {
    const currency = CURRENCIES[language];
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const t = (key: TranslationKey, options?: { returnObjects?: boolean }): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    // If returnObjects is true, return the value as-is (could be array or object)
    if (options?.returnObjects) {
      return value;
    }

    return typeof value === 'string' ? value : key;
  };

  const translateVehicleAttribute = (category: 'fuel' | 'transmission' | 'body_type' | 'color', value: string): string => {
    if (!value) return value;

    try {
      const translationKey = `vehicle_attributes.${category}.${value}` as TranslationKey;
      const translated = t(translationKey);

      // If translation key not found, return the original value
      if (translated === translationKey) {
        return value;
      }

      return translated;
    } catch {
      return value;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getPhoneNumber, getPhoneNumberWithPrefix, getWhatsAppNumber, getAddress, getCityName, getCurrency, getCurrencySymbol, formatPrice, t, translateVehicleAttribute }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
