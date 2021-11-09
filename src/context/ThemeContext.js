import { createContext, useContext } from 'react';
import themes from '../helpers/theme';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();
const defaultTheme = themes[0];

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('crypto_theme', defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;
