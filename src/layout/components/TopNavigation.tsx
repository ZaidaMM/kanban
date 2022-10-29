import { Ellipsis } from '../../components/Ellipsis';
import { useThemeContext } from '../../provider/ThemeModeProvider';

const TopNavigation = () => {
  const { darkMode, dark, light } = useThemeContext();
  return (
    <nav
      style={
        darkMode
          ? { backgroundColor: '#2B2C37', color: '#ffffff' }
          : { backgroundColor: '#ffffff', color: '#000112' }
      }
    >
      <h4 className='navbar-title'>Platform Launch</h4>
      <div className='nvbar-btns'>
        <button className='btn btn-disabled btn-nav'>+ Add New Task</button>
        <Ellipsis />
      </div>
    </nav>
  );
};
export default TopNavigation;
