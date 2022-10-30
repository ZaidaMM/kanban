import { useAppContext } from '../provider/AppProvider';
import { useThemeContext } from '../provider/ThemeModeProvider';
import { BoardIcon } from './Icons';
// import data from '../data.json';

const SidebarLink = () => {
  const { darkMode, dark, light } = useThemeContext();
  const { boards, board, selectedBoard, setSelectedBoard } = useAppContext();
  console.log(boards);
  console.log(selectedBoard);

  return (
    <div>
      {boards?.map((board) => {
        // console.log(boards);
        return (
          <div
            onClick={() => setSelectedBoard(board)}
            className={
              selectedBoard?.name === board.name
                ? 'nav-link nav-link-light active'
                : darkMode
                ? 'nav-link nav-link-dark'
                : 'nav-link nav-link-light'
            }
            key={board?.name}
          >
            <span className='icon'>
              <BoardIcon />
            </span>
            {board?.name}
          </div>
        );
      })}
      )
    </div>
  );
};
export default SidebarLink;
