import { createContext } from 'react';

export interface IAppContext {
  openNewTaskModal: () => void;
  showNewTaskModal: boolean;
  setShowNewTaskModal: (value: boolean) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
