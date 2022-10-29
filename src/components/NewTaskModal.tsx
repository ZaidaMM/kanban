import { useAppContext } from '../provider/AppProvider';

interface showNewTaskModalProps {
  showNewTaskModal?: boolean;
  setShowNewTaskModal?: (value: boolean) => void;
}

const NewTaskModal = ({ showNewTaskModal }: showNewTaskModalProps) => {
  const { openNewTaskModal } = useAppContext();
  return (
    <div>
      {showNewTaskModal ? (
        <>
          <div onClick={() => openNewTaskModal()} className='modal-wrapper'>
            <form className='form' onClick={(e) => e.stopPropagation()}>
              <h3>Add New Task</h3>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default NewTaskModal;
