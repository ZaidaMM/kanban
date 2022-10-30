import { useAppContext } from '../provider/AppProvider';
import { useThemeContext } from '../provider/ThemeModeProvider';
import Tasks from './Tasks';

const Columns = () => {
  const { darkMode } = useThemeContext();
  const { selectedBoard, boards, selectedColumn } = useAppContext();

  return (
    <>
      <div className='selected-board'>
        {selectedBoard?.columns?.map((column) => (
          <div className='columns-container'>
            <div className='column-name'>
              <span className={column.name?.toLowerCase()}></span>
              <p className='column-title' key={column.name}>
                {column.name} <span>({column.tasks?.length})</span>
              </p>
            </div>
            <div
              className={
                darkMode
                  ? 'tasks-container tasks-container-dark'
                  : 'tasks-container'
              }
            >
              {column?.tasks?.map((task) => (
                <p
                  className={
                    darkMode
                      ? 'task-title task-title-dark'
                      : 'task-title task-title-light'
                  }
                >
                  {task.title}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Columns;
