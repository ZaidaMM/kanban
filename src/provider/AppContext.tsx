import { ChangeEventHandler, createContext } from 'react';
import { IBoardsData } from '../interfaces/IBoardsData';

export interface IAppContext {
  openNewTaskModal: () => void;
  showNewTaskModal: boolean;
  setShowNewTaskModal: (value: boolean) => void;
  boards: IBoardsData[] | undefined;
  board: IBoardsData | undefined;
  selectedBoard: IBoardsData | undefined;
  setSelectedBoard: (board: IBoardsData | undefined) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
