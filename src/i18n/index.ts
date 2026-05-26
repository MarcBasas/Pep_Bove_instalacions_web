import ca from './ca.json';
import es from './es.json';

export type Lang = 'ca' | 'es';

const dictionaries = { ca, es } as const;

export type Dictionary = typeof ca;

export function t(lang: Lang): Dictionary {
  return dictionaries[lang] as Dictionary;
}

export const routes: Record<Lang, Record<string, string>> = {
  ca: {
    home: '/',
    services: '/serveis',
    projects: '/projectes',
    contact: '/contacte',
  },
  es: {
    home: '/es/',
    services: '/es/servicios',
    projects: '/es/proyectos',
    contact: '/es/contacto',
  },
};

export function altLang(lang: Lang): Lang {
  return lang === 'ca' ? 'es' : 'ca';
}

export function altHomePath(lang: Lang): string {
  return routes[altLang(lang)].home;
}
