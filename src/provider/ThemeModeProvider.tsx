import { ReactNode, useState, useContext, useEffect } from 'react';
import { ThemeModeContext } from './ThemeModeContext';

function useThemeContext() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw console.error('Theme must be withtin a Provider');
  }
  return context;
}

const ThemeModeProvider = (props: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const dark = '#20212C';
  const light = '#F4F7FD';

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode') || '');
    if (darkMode) {
      setDarkMode(darkMode);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeModeContext.Provider
      value={{
        dark,
        light,
        darkMode,
        setDarkMode,
        handleToggleTheme,
      }}
    >
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeProvider, useThemeContext };
