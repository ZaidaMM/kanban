import React from 'react';
import { useThemeContext } from '../provider/ThemeModeProvider';
import TopNavigation from './components/TopNavigation';
import Sidebar from './components/Sidebar';
import { Container } from 'reactstrap';
import Homepage from './components/Homepage';

const Layout = () => {
  const { darkMode, dark, light } = useThemeContext();
  return (
    <div className='layout'>
      <div className='row g-0'>
        <div className='col g-0'>
          <Sidebar />
        </div>
        <div className='col g-0'>
          <TopNavigation />

          <main
            className='main'
            style={
              darkMode ? { backgroundColor: dark } : { backgroundColor: light }
            }
          >
            <Container className='p-0'>
              <Homepage />
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Layout;
