import { LogoDark, LogoLight } from '../../components/Logo';
import { useThemeContext } from '../../provider/ThemeModeProvider';

const Sidebar = () => {
  const { darkMode } = useThemeContext();
  return (
    <aside
      style={
        darkMode
          ? { backgroundColor: '#2B2C37', color: '#ffffff' }
          : { backgroundColor: '#ffffff', color: '#000112' }
      }
    >
      <div className='navbar-brand'>
        {darkMode ? <LogoLight /> : <LogoDark />}
      </div>
    </aside>
  );
};
export default Sidebar;
