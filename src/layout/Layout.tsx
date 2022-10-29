import React from 'react';
import { useThemeContext } from '../provider/ThemeModeProvider';

const Layout = () => {
  const { darkMode, setDarkMode, dark, light } = useThemeContext();
  return (
    <>
      <main
        className='main'
        style={
          darkMode
            ? { color: light, backgroundColor: dark }
            : { color: dark, backgroundColor: light }
        }
      >
        <h1>KANBAN</h1>
      </main>
    </>
  );
};
export default Layout;
