import { useEffect, useState } from 'react';
import type { Lang } from '../types';

const KEY = 'asl-lang';

export function useLang() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {
      /* ignore */
    }
    return 'fr';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  return [lang, setLang] as const;
}
