import {
  ReactNode,
  useEffect,
  useState,
  useContext,
  ChangeEventHandler,
} from 'react';
import { AppContext } from './AppContext';
import {
  IBoardsData,
  IColumnsData,
  ITasksData,
} from '../interfaces/IBoardsData';
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
  const [column, setColumn] = useState<IColumnsData>();
  const [columns, setColumns] = useState<IColumnsData[]>([]);
  const [task, setTask] = useState<ITasksData>();
  const [tasks, setTasks] = useState<ITasksData[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<IBoardsData | undefined>();
  const [selectedColumn, setSelectedColumn] = useState<
    IColumnsData | undefined
  >();
  // const [selectedTask, setSelectedTask] = useState<ITasksData | undefined>();

  useEffect(() => {
    getBoards();

    // console.log(boards);
  }, []);

  const boardsData = data.boards.map((board: { name: any; columns: any }) => ({
    name: board.name,
    columns: board.columns,
  }));
  const columnsData = board?.columns?.map((column) => ({
    name: column.name,
    tasks: column.tasks,
  }));
  console.log(columnsData);

  const getBoards = () => {
    setBoards(boardsData);
    if (!selectedBoard) {
      setSelectedBoard(boardsData[0]);
    } else {
      setSelectedBoard(boards[0]);

      getColumns();
    }
    console.log(selectedBoard);
    console.log(selectedColumn);
  };

  const getColumns = () => {
    if (selectedBoard?.columns) {
      selectedBoard?.columns?.map((column) => setColumns(columns));
      console.log(selectedBoard);
    }
  };

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
        column,
        columns,
        task,
        tasks,
        selectedColumn,
        setSelectedColumn,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
