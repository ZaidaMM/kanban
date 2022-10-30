import { ChangeEventHandler, createContext } from 'react';
import {
  IBoardsData,
  IColumnsData,
  ITasksData,
} from '../interfaces/IBoardsData';

export interface IAppContext {
  openNewTaskModal: () => void;
  showNewTaskModal: boolean;
  setShowNewTaskModal: (value: boolean) => void;
  boards: IBoardsData[] | undefined;
  board: IBoardsData | undefined;
  selectedBoard: IBoardsData | undefined;
  setSelectedBoard: (board: IBoardsData | undefined) => void;
  column: IColumnsData | undefined;
  columns: IColumnsData[] | undefined;
  selectedColumn: IColumnsData | undefined;
  setSelectedColumn: (column: IColumnsData | undefined) => void;
  tasks: ITasksData[] | undefined;
  task: ITasksData | undefined;
  // selectedTask: ITasksData | undefined;
  // setSelectedTask: (task: ITasksData | undefined) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
