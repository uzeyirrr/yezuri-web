import trData from './tr.json';
import enData from './en.json';

export const defaultLocale = 'tr' as const;
export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries = {
  tr: trData,
  en: enData,
} as const;

export type Dictionary = typeof trData;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return 'tr';
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === defaultLocale) {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

export function servicePath(locale: Locale, slug: string): string {
  if (locale === 'tr') return `/hizmetler/${slug}`;
  return `/en/services/${slug}`;
}

export function alternateLocale(current: Locale): Locale {
  return current === 'tr' ? 'en' : 'tr';
}

export const hrefLangMap: Record<Locale, string> = {
  tr: 'tr-TR',
  en: 'en-US',
};

export const contactInfo = {
  whatsapp: '+905555555555',
  email: 'info@yezuri.com',
  phone: '+90 555 555 55 55',
  address: 'İstanbul, Türkiye',
  social: {
    linkedin: 'https://www.linkedin.com/company/yezuri',
    instagram: 'https://www.instagram.com/yezuri',
    twitter: 'https://twitter.com/yezuri',
  },
};

export function whatsappLink(message: string): string {
  const cleanNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const servicesSlugMap: Record<Locale, Record<string, string>> = {
  tr: {
    'dijital-strateji': 'digital-strategy',
    'surec-otomasyonu': 'process-automation',
    'web-ve-mobil-gelistirme': 'web-and-mobile-development',
    'veri-analitigi': 'data-analytics',
    'bulut-gocu': 'cloud-migration',
    'e-ticaret': 'e-commerce',
  },
  en: {
    'digital-strategy': 'dijital-strateji',
    'process-automation': 'surec-otomasyonu',
    'web-and-mobile-development': 'web-ve-mobil-gelistirme',
    'data-analytics': 'veri-analitigi',
    'cloud-migration': 'bulut-gocu',
    'e-commerce': 'e-ticaret',
  },
};
