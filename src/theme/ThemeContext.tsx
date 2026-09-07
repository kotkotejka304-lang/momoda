import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { flushSync } from 'react-dom';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: (event?: React.MouseEvent<HTMLElement> | MouseEvent) => void;
  setTheme: (theme: Theme, event?: React.MouseEvent<HTMLElement> | MouseEvent) => void;
}

const THEME_STORAGE_KEY = 'momoda_theme';

const applyDomThemeClasses = (themeMode: Theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (themeMode === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
    root.setAttribute('data-theme', 'dark');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', '#0a0a0a');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    root.setAttribute('data-theme', 'light');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', '#fbfbfa');
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  // Initial sync on mount without flash or transition
  useEffect(() => {
    applyDomThemeClasses(theme);
  }, [theme]);

  // Smooth animated theme transition with View Transitions API or CSS fallback
  const applyThemeWithTransition = useCallback(
    (newTheme: Theme, event?: React.MouseEvent<HTMLElement> | MouseEvent) => {
      if (typeof document === 'undefined') {
        setThemeState(newTheme);
        return;
      }

      const root = document.documentElement;

      // 1. Check if browser supports View Transition API and user hasn't requested reduced motion
      const hasViewTransition =
        'startViewTransition' in document &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (hasViewTransition) {
        // Calculate coordinates from click event or fallback to switch bounding box or screen center
        let x = window.innerWidth / 2;
        let y = 30;

        if (event && typeof event.clientX === 'number' && event.clientX > 0) {
          x = event.clientX;
          y = event.clientY;
        } else {
          const toggleEl = document.getElementById('theme-toggle-switch');
          if (toggleEl) {
            const rect = toggleEl.getBoundingClientRect();
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
          }
        }

        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        root.classList.add('view-transition-circular');

        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const transition = (document as any).startViewTransition(() => {
            flushSync(() => {
              setThemeState(newTheme);
            });
            applyDomThemeClasses(newTheme);
          });

          transition.ready
            .then(() => {
              const anim = root.animate(
                {
                  clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                  ],
                },
                {
                  duration: 520,
                  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  pseudoElement: '::view-transition-new(root)',
                }
              );

              anim.onfinish = () => {
                root.classList.remove('view-transition-circular');
              };
            })
            .catch(() => {
              root.classList.remove('view-transition-circular');
            });

          transition.finished
            .finally(() => {
              root.classList.remove('view-transition-circular');
            })
            .catch(() => {});

          localStorage.setItem(THEME_STORAGE_KEY, newTheme);
          return;
        } catch {
          root.classList.remove('view-transition-circular');
        }
      }

      // 2. Fallback: Smooth CSS Transition
      root.classList.add('theme-transitioning');
      // Force style reflow so transition starts from current computed properties
      void root.offsetHeight;

      setThemeState(newTheme);
      applyDomThemeClasses(newTheme);
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);

      setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, 500);
    },
    []
  );

  const toggleTheme = useCallback(
    (event?: React.MouseEvent<HTMLElement> | MouseEvent) => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      applyThemeWithTransition(nextTheme, event);
    },
    [theme, applyThemeWithTransition]
  );

  const setTheme = useCallback(
    (newTheme: Theme, event?: React.MouseEvent<HTMLElement> | MouseEvent) => {
      applyThemeWithTransition(newTheme, event);
    },
    [applyThemeWithTransition]
  );

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

