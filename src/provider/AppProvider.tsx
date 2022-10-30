import {
  ReactNode,
  useEffect,
  useState,
  useContext,
  ChangeEventHandler,
} from 'react';
import { AppContext } from './AppContext';
import { IBoardsData } from '../interfaces/IBoardsData';
import data from '../data.json';

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('AppContext used within AppProvider');
  }
  return context;
}

const AppProvider = (props: { children: ReactNode }) => {
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [board, setBoard] = useState<IBoardsData>();
  const [boards, setBoards] = useState<IBoardsData[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<IBoardsData | undefined>();

  useEffect(() => {
    getBoards();
    // console.log(boards);
  }, []);

  const boardsData = data.boards.map((board: { name: any; columns: any }) => ({
    name: board.name,
    columns: board.columns,
  }));

  const getBoards = () => {
    setBoards(boardsData);
    setSelectedBoard(boards[0]);
    console.log(selectedBoard);
  };

  const getBoard = () => {};

  const openNewTaskModal = () => {
    setShowNewTaskModal((prevShowNewTaskModal) => !prevShowNewTaskModal);
    console.log('open modal');
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (!event.target) setShowNewTaskModal(!showNewTaskModal);
    });
  });

  return (
    <AppContext.Provider
      value={{
        openNewTaskModal,
        showNewTaskModal,
        setShowNewTaskModal,
        board,
        boards,
        selectedBoard,
        setSelectedBoard,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
