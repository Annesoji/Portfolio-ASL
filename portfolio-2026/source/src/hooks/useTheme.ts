import { useEffect, useState } from 'react';
import type { Theme } from '../types';

const KEY = 'asl-theme';

/** Thème Light (défaut) / Dark, appliqué via data-theme sur <html>. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* stockage indisponible : on garde le thème en mémoire */
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
