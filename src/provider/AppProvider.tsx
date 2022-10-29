import { ReactNode, useEffect, useState, useContext } from 'react';
import { AppContext } from './AppContext';

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('AppContext used within AppProvider');
  }
  return context;
}

const AppProvider = (props: { children: ReactNode }) => {
  const [showNewTaskModal, setShowNewTaskModal] = useState(true);

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
