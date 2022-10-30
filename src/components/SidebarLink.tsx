import { useAppContext } from '../provider/AppProvider';
import { BoardIcon } from './Icons';
// import data from '../data.json';

const SidebarLink = () => {
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
                ? 'nav-link active'
                : 'nav-link'
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
    </div>
  );
};
export default SidebarLink;
