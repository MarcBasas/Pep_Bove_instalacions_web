import ca from './ca.json';
import es from './es.json';

export type Lang = 'ca' | 'es';

const dictionaries = { ca, es } as const;

export type Dictionary = typeof ca;

export function t(lang: Lang): Dictionary {
  return dictionaries[lang] as Dictionary;
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${normalized}`;
}

export const routes: Record<Lang, Record<string, string>> = {
  ca: {
    home: withBase('/'),
    services: withBase('/serveis'),
    projects: withBase('/projectes'),
    contact: withBase('/contacte'),
  },
  es: {
    home: withBase('/es/'),
    services: withBase('/es/servicios'),
    projects: withBase('/es/proyectos'),
    contact: withBase('/es/contacto'),
  },
};

export function altLang(lang: Lang): Lang {
  return lang === 'ca' ? 'es' : 'ca';
}

export function altHomePath(lang: Lang): string {
  return routes[altLang(lang)].home;
}
