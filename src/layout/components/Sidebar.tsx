import { BoardIcon } from '../../components/Icons';
import { LogoDark, LogoLight } from '../../components/Logo';
import SidebarLink from '../../components/SidebarLink';
import { useAppContext } from '../../provider/AppProvider';
import { useThemeContext } from '../../provider/ThemeModeProvider';

const Sidebar = () => {
  const { darkMode } = useThemeContext();
  const { boards } = useAppContext();
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
      <p className='sidebar-title'>
        All Boards <span>({boards?.length})</span>{' '}
      </p>
      <SidebarLink />
      <div className='nav-link create-board'>
        <span className='icon'>
          <BoardIcon />
        </span>
        + Create New Board
      </div>
    </aside>
  );
};
export default Sidebar;
