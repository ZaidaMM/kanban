import { Ellipsis } from '../../components/Ellipsis';
import NewTaskModal from '../../components/NewTaskModal';
import { useAppContext } from '../../provider/AppProvider';
import { useThemeContext } from '../../provider/ThemeModeProvider';

const TopNavigation = () => {
  const { darkMode, dark, light } = useThemeContext();
  const {
    openNewTaskModal,
    showNewTaskModal,
    setShowNewTaskModal,
    selectedBoard,
  } = useAppContext();
  return (
    <nav
      style={
        darkMode
          ? {
              backgroundColor: '#2B2C37',
              color: '#ffffff',
            }
          : {
              backgroundColor: '#ffffff',
              color: '#000112',
            }
      }
    >
      <h4 className='navbar-title'>{selectedBoard?.name}</h4>
      <div className='navbar-btns'>
        <button className='btn  btn-nav' onClick={() => openNewTaskModal()}>
          + Add New Task
        </button>
        <NewTaskModal
          showNewTaskModal={showNewTaskModal}
          setShowNewTaskModal={setShowNewTaskModal}
        />
        <Ellipsis />
      </div>
    </nav>
  );
};
export default TopNavigation;
function openNewTaskModal(): void {
  throw new Error('Function not implemented.');
}
