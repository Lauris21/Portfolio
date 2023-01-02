import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  toogleTheme: () => null,
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};
